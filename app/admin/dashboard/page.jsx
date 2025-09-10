"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit, Trash2, Eye, Users } from "lucide-react";
import Navbar from "@/components/Navigation"; // Use your Navigation component

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    dept: "",
    password: "",
  });

  const { isAdmin } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!isAdmin) {
      window.location.href = "/";
      return;
    }
    loadEmployees();
  }, [isAdmin]);

  const loadEmployees = () => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) setEmployees(JSON.parse(storedEmployees));
  };

  const generateEmpId = () => {
    const employees = JSON.parse(localStorage.getItem("employees") || "[]");
    const maxId = employees.reduce((max, emp) => {
      const num = parseInt(emp.empId.replace("EMP", ""));
      return num > max ? num : max;
    }, 0);
    return `EMP${String(maxId + 1).padStart(3, "0")}`;
  };

  const handleAddEmployee = () => {
    if (!newEmployee.name || !newEmployee.email || !newEmployee.dept || !newEmployee.password) {
      toast({
        title: "Error",
        description: "All fields are required",
        variant: "destructive",
      });
      return;
    }

    const empId = generateEmpId();
    const employee = {
      id: Date.now().toString(),
      empId,
      name: newEmployee.name,
      email: newEmployee.email,
      dept: newEmployee.dept,
      role: "employee",
      createdAt: new Date().toISOString(),
    };

    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    const passwords = JSON.parse(localStorage.getItem("passwords") || "{}");
    passwords[empId] = newEmployee.password;
    localStorage.setItem("passwords", JSON.stringify(passwords));

    setNewEmployee({ name: "", email: "", dept: "", password: "" });
    setIsAddDialogOpen(false);

    toast({
      title: "Success",
      description: `Employee ${empId} created successfully`,
    });
  };

  const handleDeleteEmployee = (id) => {
    const employee = employees.find((emp) => emp.id === id);
    if (!employee) return;

    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    const passwords = JSON.parse(localStorage.getItem("passwords") || "{}");
    delete passwords[employee.empId];
    localStorage.setItem("passwords", JSON.stringify(passwords));

    toast({
      title: "Success",
      description: "Employee deleted successfully",
    });
  };

  const getDepartmentColor = (dept) => {
    const colors = {
      Engineering: "bg-blue-100 text-blue-800",
      Marketing: "bg-green-100 text-green-800",
      Administration: "bg-purple-100 text-purple-800",
      Sales: "bg-orange-100 text-orange-800",
      HR: "bg-pink-100 text-pink-800",
    };
    return colors[dept] || "bg-gray-100 text-gray-800";
  };

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />

      <div className="container mx-auto p-6">
        {/* Header and Add Employee */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage employees and view system overview</p>
          </div>

          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus size={16} /> Add Employee
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Employee</DialogTitle>
                <DialogDescription>
                  Create a new employee account. Employee ID will be generated automatically.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={newEmployee.name}
                    onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newEmployee.email}
                    onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <Label htmlFor="dept">Department</Label>
                  <Select
                    value={newEmployee.dept}
                    onValueChange={(value) => setNewEmployee({ ...newEmployee, dept: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
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
                  <Input
                    id="password"
                    type="password"
                    value={newEmployee.password}
                    onChange={(e) => setNewEmployee({ ...newEmployee, password: e.target.value })}
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddEmployee}>Create Employee</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex justify-between items-center pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{employees.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex justify-between items-center pb-2">
              <CardTitle className="text-sm font-medium">Departments</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{new Set(employees.map((emp) => emp.dept)).size}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex justify-between items-center pb-2">
              <CardTitle className="text-sm font-medium">Admins</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{employees.filter((emp) => emp.role === "admin").length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Employee Table */}
        <Card>
          <CardHeader>
            <CardTitle>Employee Management</CardTitle>
            <CardDescription>View and manage all employees in the system</CardDescription>
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
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((emp) => (
                  <TableRow key={emp.id}>
                    <TableCell className="font-medium">{emp.empId}</TableCell>
                    <TableCell>{emp.name}</TableCell>
                    <TableCell>{emp.email}</TableCell>
                    <TableCell>
                      <Badge className={getDepartmentColor(emp.dept)}>{emp.dept}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={emp.role === "admin" ? "default" : "secondary"}>{emp.role}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye size={14} />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit size={14} />
                        </Button>
                        {emp.role !== "admin" && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteEmployee(emp.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 size={14} />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
