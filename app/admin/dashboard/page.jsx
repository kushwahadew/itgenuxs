"use client";

import { useState, useEffect } from "react";
import api from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit, Trash2, Eye, Users, Filter, UserCheck, UserX } from "lucide-react";
import Navbar from "@/components/Navigation";
import EmployeeDetailModal from "@/components/EmployeeDetailModal";

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [attendanceFilter, setAttendanceFilter] = useState("all");
  const [todayAttendance, setTodayAttendance] = useState([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({ name: "", email: "", dept: "", password: "" });
  
  const { currentUser, logout } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!currentUser || currentUser.role !== "admin") {
      window.location.href = "/login";
      return;
    }
    loadEmployees();
    loadTodayAttendance();
  }, [currentUser]);

  useEffect(() => {
    filterEmployees();
  }, [employees, attendanceFilter, todayAttendance]);

  const loadEmployees = async () => {
    try {
      const { data } = await api.get("/api/v1/users");
      setEmployees(data.data || []);
    } catch (error) {
      toast({ title: "Error", description: "Failed to load employees", variant: "destructive" });
    }
  };

  const loadTodayAttendance = async () => {
    try {
      const today = new Date().toISOString().split("T")[0];
      const { data } = await api.get(`/api/v1/attendances?date=${today}`);
      setTodayAttendance(data.data || []);
    } catch (error) {
      toast({ title: "Error", description: "Failed to load attendance", variant: "destructive" });
    }
  };

  const filterEmployees = () => {
    let filtered = employees;

    if (attendanceFilter !== "all") {
      const employeesWithAttendance = employees.map(emp => ({
        ...emp,
        hasAttendanceToday: todayAttendance.some(record => record.employeeId === emp._id && record.checkIn)
      }));

      if (attendanceFilter === "present") filtered = employeesWithAttendance.filter(emp => emp.hasAttendanceToday);
      else if (attendanceFilter === "absent") filtered = employeesWithAttendance.filter(emp => !emp.hasAttendanceToday);
    }

    setFilteredEmployees(filtered);
  };

  const getTodayStats = () => {
    const totalEmployees = employees.length;
    const presentToday = todayAttendance.filter(record => record.checkIn).length;
    const absentToday = totalEmployees - presentToday;
    return { totalEmployees, presentToday, absentToday };
  };

  const handleAddEmployee = async () => {
    if (!newEmployee.name || !newEmployee.email || !newEmployee.dept || !newEmployee.password) {
      toast({ title: "Error", description: "All fields are required", variant: "destructive" });
      return;
    }

    try {
      const { data } = await api.post("/api/v1/users", {
        name: newEmployee.name,
        email: newEmployee.email,
        department: newEmployee.dept,
        password: newEmployee.password,
      });

      setEmployees(prev => [...prev, data.data]);
      setNewEmployee({ name: "", email: "", dept: "", password: "" });
      setIsAddDialogOpen(false);
      toast({ title: "Success", description: `Employee ${data.data.employeeid} created successfully` });
    } catch (error) {
      toast({ title: "Error", description: error.response?.data?.message || "Failed to add employee", variant: "destructive" });
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await api.delete(`/api/v1/users/${id}`);
      setEmployees(prev => prev.filter(emp => emp._id !== id));
      toast({ title: "Success", description: "Employee deleted successfully" });
    } catch (error) {
      toast({ title: "Error", description: "Failed to delete employee", variant: "destructive" });
    }
  };

  const getDepartmentColor = (dept) => {
    const colors = {
      Engineering: "bg-blue-100 text-blue-800",
      Marketing: "bg-green-100 text-green-800",
      Administration: "bg-purple-100 text-purple-800",
      Sales: "bg-orange-100 text-orange-800",
      HR: "bg-pink-100 text-pink-800"
    };
    return colors[dept] || "bg-gray-100 text-gray-800";
  };

  const handleViewEmployee = (employee) => {
    setSelectedEmployee(employee);
    setIsDetailModalOpen(true);
  };

  const { totalEmployees, presentToday, absentToday } = getTodayStats();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto p-6">
        {/* Header + Add Employee Dialog */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage employees and view system overview</p>
          </div>

          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2"><Plus size={16} /> Add Employee</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Employee</DialogTitle>
                <DialogDescription>Create a new employee account. Employee ID is auto-generated.</DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })} placeholder="John Doe" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={newEmployee.email} onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })} placeholder="john@company.com" />
                </div>
                <div>
                  <Label htmlFor="dept">Department</Label>
                  <Select value={newEmployee.dept} onValueChange={(value) => setNewEmployee({ ...newEmployee, dept: value })}>
                    <SelectTrigger><SelectValue placeholder="Select department" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Engineering">Engineering</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                      <SelectItem value="Sales">Sales</SelectItem>
                      <SelectItem value="HR">HR</SelectItem>
                      <SelectItem value="Administration">Administration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" value={newEmployee.password} onChange={(e) => setNewEmployee({ ...newEmployee, password: e.target.value })} placeholder="Enter password" />
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleAddEmployee}>Create Employee</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent><div className="text-2xl font-bold text-primary">{totalEmployees}</div></CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Present Today</CardTitle>
              <UserCheck className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent><div className="text-2xl font-bold text-green-600">{presentToday}</div></CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Absent Today</CardTitle>
              <UserX className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent><div className="text-2xl font-bold text-red-600">{absentToday}</div></CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Departments</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent><div className="text-2xl font-bold text-primary">{new Set(employees.map(emp => emp.department)).size}</div></CardContent>
          </Card>
        </div>

        {/* Employee Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Employee Management</CardTitle>
                <CardDescription>View and manage all employees in the system</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-muted-foreground" />
                <Select value={attendanceFilter} onValueChange={setAttendanceFilter}>
                  <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Employees</SelectItem>
                    <SelectItem value="present">Present Today</SelectItem>
                    <SelectItem value="absent">Absent Today</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Today's Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee) => {
                  const hasAttendanceToday = todayAttendance.some(record => record.employeeId === employee._id && record.checkIn);
                  return (
                    <TableRow key={employee._id}>
                      <TableCell className="font-medium">{employee.employeeid}</TableCell>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>{employee.email}</TableCell>
                      <TableCell><Badge variant="outline" className={getDepartmentColor(employee.department)}>{employee.department}</Badge></TableCell>
                      <TableCell><Badge variant={employee.role === "admin" ? "default" : "secondary"}>{employee.role}</Badge></TableCell>
                      <TableCell>
                        {hasAttendanceToday ? (
                          <Badge variant="secondary" className="bg-green-100 text-green-800"><UserCheck size={12} className="mr-1" />Present</Badge>
                        ) : (
                          <Badge variant="secondary" className="bg-red-100 text-red-800"><UserX size={12} className="mr-1" />Absent</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleViewEmployee(employee)}><Eye size={14} /></Button>
                          <Button variant="outline" size="sm"><Edit size={14} /></Button>
                          {employee.role !== "admin" && (
                            <Button variant="outline" size="sm" onClick={() => handleDeleteEmployee(employee._id)} className="text-destructive hover:text-destructive">
                              <Trash2 size={14} />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <EmployeeDetailModal isOpen={isDetailModalOpen} onClose={() => setIsDetailModalOpen(false)} employee={selectedEmployee} />
    </div>
  );
};

export default AdminDashboard;
