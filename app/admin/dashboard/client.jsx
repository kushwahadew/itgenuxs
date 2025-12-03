"use client";

import { io } from "socket.io-client";
import { useState, useEffect, useCallback } from "react";
import api from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
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
  const [socket, setSocket] = useState(null);
  const { currentUser, logout } = useAuth();
  const { toast } = useToast();
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Loading state

  useEffect(() => {
    const socketConnection = io(api.defaults.baseURL, {
      withCredentials: true,
    });

    setSocket(socketConnection);

    // Listen for attendance updates
    socketConnection.on("attendanceUpdated", (data) => {
      loadTodayAttendance();
      loadEmployees();
    });

    return () => socketConnection.disconnect();
  }, [loadEmployees, loadTodayAttendance]);

  // -------------------- Fetch Employees & Attendance --------------------
  useEffect(() => {
    console.log("Current user:", currentUser);

    if (currentUser === null) {
      // Still fetching user, wait
      return;
    }

    if (!currentUser || currentUser.role !== "admin") {
      console.log("Redirecting to login...");
      window.location.href = "/login";
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        await loadEmployees();
        await loadTodayAttendance();
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        toast({ title: "Error", description: "Failed to load dashboard", variant: "destructive" });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser, loadEmployees, loadTodayAttendance]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading) {
        toast({
          title: "Timeout",
          description: "Please try again later.",
          variant: "destructive",
        });
        window.location.href = "/"; // redirect to landing page
      }
    }, 5000); // 5 sec

    return () => clearTimeout(timeout);
  }, [loading]);

  // -------------------- Filter Employees --------------------
  useEffect(() => {
    let filtered = employees;

    if (attendanceFilter !== "all") {
      const employeesWithAttendance = employees.map((emp) => {
        const record = todayAttendance.find((r) => r.employeeId === emp._id);

        let status = "Absent";
        if (record) {
          if (record.checkIn && !record.checkOut) {
            status = "Present"; // ✅ Only checked in → Present
          } else if (record.status) {
            status = record.status; // ✅ Use backend status if available
          }
        }

        return {
          ...emp,
          attendanceStatus: status,
        };
      });

      if (attendanceFilter === "present") {
        filtered = employeesWithAttendance.filter(
          (emp) => emp.attendanceStatus === "Present"
        );
      } else if (attendanceFilter === "Half Day") {
        filtered = employeesWithAttendance.filter(
          (emp) => emp.attendanceStatus === "Half Day"
        );
      } else if (attendanceFilter === "absent") {
        filtered = employeesWithAttendance.filter(
          (emp) => emp.attendanceStatus === "Absent"
        );
      }
    }

    setFilteredEmployees(filtered);
  }, [employees, attendanceFilter, todayAttendance]);


  // -------------------- Load Employees --------------------
  const loadEmployees = useCallback(async () => {
    try {
      const { data } = await api.get("/api/v1/users");
      setEmployees(data.data || []);
    } catch (error) {
      console.error("Failed to load employees:", error);
      toast({ title: "Error", description: "Failed to load employees", variant: "destructive" });
    }
  }, [toast]);

  // -------------------- Load Today's Attendance --------------------
  const loadTodayAttendance = useCallback(async () => {
    try {
      const today = new Date().toISOString().split("T")[0];
      const { data } = await api.get(`/api/v1/attendances?date=${today}`);
      console.log("Today's attendance:", data.data);
      setTodayAttendance(data.data || []);
    } catch (error) {
      console.error("Failed to load attendance:", error);
      toast({
        title: "Error",
        description: "Failed to load attendance",
        variant: "destructive",
      });
    }
  }, [toast]);



  // -------------------- Stats --------------------
  const getTodayStats = () => {
    const totalEmployees = employees.length;
    const presentToday = todayAttendance.filter(record => record.checkIn).length;
    const absentToday = totalEmployees - presentToday;
    return { totalEmployees, presentToday, absentToday };
  };

  // -------------------- Employee Actions --------------------
  const handleAddEmployee = async () => {
    if (!newEmployee.name || !newEmployee.email || !newEmployee.dept || !newEmployee.password) {
      toast({ title: "Error", description: "All fields are required", variant: "destructive" });
      return;
    }

    try {
      const { data } = await api.post("/api/v1/users/add", {
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
      console.error("Failed to add employee:", error);
      toast({ title: "Error", description: error.response?.data?.message || "Failed to add employee", variant: "destructive" });
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await api.delete(`/api/v1/users/${id}`);
      setEmployees(prev => prev.filter(emp => emp._id !== id));
      toast({ title: "Success", description: "Employee deleted successfully" });
    } catch (error) {
      console.error("Failed to delete employee:", error);
      toast({ title: "Error", description: "Failed to delete employee", variant: "destructive" });
    }
  };

  const handleViewEmployee = async (employee) => {
    try {
      const today = new Date().toISOString().split("T")[0];
      // ✅ get specific employee's today attendance
      const { data } = await api.get(`/api/v1/attendances?date=${today}`);
      setSelectedEmployee({
        ...employee,
        todayAttendance: data.data || null,
      });
      setIsDetailModalOpen(true);
    } catch (error) {
      console.error("Failed to load employee detail:", error);
      toast({
        title: "Error",
        description: "Failed to load employee detail",
        variant: "destructive",
      });
    }
  };


  const handleUpdateAttendance = async (attendanceId, newStatus) => {
    try {
      await api.patch(`/api/v1/attendances/admin/update-status`, {
        attendanceId,
        status: newStatus,
      });

      toast({
        title: "Updated",
        description: `Attendance marked as ${newStatus}`,
      });

      loadTodayAttendance(); // ✅ Refresh attendance
      setEditingEmployeeId(null); // Close popover
    } catch (error) {
      console.error("Failed to update attendance:", error);
      toast({
        title: "Error",
        description: "Failed to update attendance",
        variant: "destructive",
      });
    }
  }

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

  const { totalEmployees, presentToday, absentToday } = getTodayStats();

  // -------------------- Loading Screen --------------------
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium text-muted-foreground">Loading dashboard...</p>
      </div>
    );
  }

  // -------------------- Render Dashboard --------------------
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      <div className="container mx-auto p-6">
        {/* Header + Add Employee */}
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
                    <SelectItem value="Half Day">Half Day</SelectItem>
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
                  return (
                    <TableRow key={employee._id}>
                      <TableCell className="font-medium">{employee.employeeid}</TableCell>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>{employee.email}</TableCell>
                      <TableCell><Badge variant="outline" className={getDepartmentColor(employee.department)}>{employee.department}</Badge></TableCell>
                      <TableCell><Badge variant={employee.role === "admin" ? "default" : "secondary"}>{employee.role}</Badge></TableCell>
                      <TableCell>
                        <Popover
                          open={editingEmployeeId === employee._id}
                          onOpenChange={(open) => setEditingEmployeeId(open ? employee._id : null)}
                        >
                          <PopoverTrigger asChild>
                            <div className="cursor-pointer">
                              {(() => {
                                const record = todayAttendance.find(r => r.employeeId === employee._id);

                                let status = "Absent";
                                if (record) {
                                  if (record.checkIn && !record.checkOut) {
                                    status = "Present";
                                  } else if (record.status) {
                                    status = record.status;
                                  }
                                }

                                if (status === "Present") {
                                  return (
                                    <Badge className="bg-green-100 text-green-800 flex items-center">
                                      <UserCheck size={12} className="mr-1" /> Present
                                    </Badge>
                                  );
                                } else if (status === "Half Day") {
                                  return (
                                    <Badge className="bg-yellow-100 text-yellow-800 flex items-center">
                                      <UserCheck size={12} className="mr-1" /> Half Day
                                    </Badge>
                                  );
                                } else {
                                  return (
                                    <Badge className="bg-red-100 text-red-800 flex items-center">
                                      <UserX size={12} className="mr-1" /> Absent
                                    </Badge>
                                  );
                                }
                              })()}
                            </div>
                          </PopoverTrigger>

                          <PopoverContent className="w-40 p-2 animate-scale-in" align="start">
                            {(() => {
                              const record = todayAttendance.find(r => r.employeeId === employee._id);
                              return (
                                <div className="space-y-2">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    disabled={!record}
                                    className="w-full justify-start text-green-700 hover:bg-green-50"
                                    onClick={() => record && handleUpdateAttendance(record._id, "Present")}
                                  >
                                    <UserCheck size={14} className="mr-2" /> Present
                                  </Button>

                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    disabled={!record}
                                    className="w-full justify-start text-yellow-700 hover:bg-yellow-50"
                                    onClick={() => record && handleUpdateAttendance(record._id, "Half Day")}
                                  >
                                    <UserCheck size={14} className="mr-2" /> Half Day
                                  </Button>

                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    disabled={!record}
                                    className="w-full justify-start text-red-700 hover:bg-red-50"
                                    onClick={() => record && handleUpdateAttendance(record._id, "Absent")}
                                  >
                                    <UserX size={14} className="mr-2" /> Absent
                                  </Button>
                                </div>
                              );
                            })()}
                          </PopoverContent>
                        </Popover>
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
