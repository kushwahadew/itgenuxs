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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { Clock, LogIn, LogOut, Edit, User, Calendar } from "lucide-react";
import Navbar from "@/components/Navigation"; // Use your Navbar component

const EmployeeDashboard = () => {
  const [attendance, setAttendance] = useState([]);
  const [todayAttendance, setTodayAttendance] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { currentUser, isAuthenticated } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!isAuthenticated || !currentUser) {
      window.location.href = "/";
      return;
    }
    loadAttendance();
    loadTodayAttendance();

    setEditForm({
      name: currentUser.name,
      email: currentUser.email,
      password: "",
    });
  }, [isAuthenticated, currentUser]);

  const loadAttendance = () => {
    if (!currentUser) return;

    const storedAttendance = localStorage.getItem("attendance");
    const allAttendance = storedAttendance ? JSON.parse(storedAttendance) : [];
    const userAttendance = allAttendance.filter(
      (record) => record.employeeId === currentUser.id
    );

    userAttendance.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setAttendance(userAttendance.slice(0, 14));
  };

  const loadTodayAttendance = () => {
    if (!currentUser) return;

    const today = new Date().toISOString().split("T")[0];
    const storedAttendance = localStorage.getItem("attendance");
    const allAttendance = storedAttendance ? JSON.parse(storedAttendance) : [];
    const todayRecord = allAttendance.find(
      (record) => record.employeeId === currentUser.id && record.date === today
    );
    setTodayAttendance(todayRecord || null);
  };

  const handleCheckIn = () => {
    if (!currentUser) return;

    const today = new Date().toISOString().split("T")[0];
    const now = new Date().toISOString();

    const storedAttendance = localStorage.getItem("attendance");
    const allAttendance = storedAttendance ? JSON.parse(storedAttendance) : [];

    const existingRecord = allAttendance.find(
      (record) => record.employeeId === currentUser.id && record.date === today
    );

    if (existingRecord && existingRecord.checkIn) {
      toast({
        title: "Already checked in",
        description: "You have already checked in today",
        variant: "destructive",
      });
      return;
    }

    const newRecord = {
      id: Date.now().toString(),
      employeeId: currentUser.id,
      date: today,
      checkIn: now,
    };

    if (existingRecord) {
      existingRecord.checkIn = now;
    } else {
      allAttendance.push(newRecord);
    }

    localStorage.setItem("attendance", JSON.stringify(allAttendance));
    loadAttendance();
    loadTodayAttendance();

    toast({
      title: "Checked in successfully",
      description: `Check-in time: ${new Date(now).toLocaleTimeString()}`,
    });
  };

  const handleCheckOut = () => {
    if (!currentUser) return;

    const today = new Date().toISOString().split("T")[0];
    const now = new Date().toISOString();

    const storedAttendance = localStorage.getItem("attendance");
    const allAttendance = storedAttendance ? JSON.parse(storedAttendance) : [];

    const existingRecord = allAttendance.find(
      (record) => record.employeeId === currentUser.id && record.date === today
    );

    if (!existingRecord || !existingRecord.checkIn) {
      toast({
        title: "Cannot check out",
        description: "You must check in first",
        variant: "destructive",
      });
      return;
    }

    if (existingRecord.checkOut) {
      toast({
        title: "Already checked out",
        description: "You have already checked out today",
        variant: "destructive",
      });
      return;
    }

    existingRecord.checkOut = now;
    localStorage.setItem("attendance", JSON.stringify(allAttendance));
    loadAttendance();
    loadTodayAttendance();

    toast({
      title: "Checked out successfully",
      description: `Check-out time: ${new Date(now).toLocaleTimeString()}`,
    });
  };

  const handleUpdateProfile = () => {
    if (!currentUser || !editForm.name || !editForm.email) {
      toast({
        title: "Error",
        description: "Name and email are required",
        variant: "destructive",
      });
      return;
    }

    const employees = JSON.parse(localStorage.getItem("employees") || "[]");
    const updatedEmployees = employees.map((emp) => {
      if (emp.id === currentUser.id) {
        return {
          ...emp,
          name: editForm.name,
          email: editForm.email,
        };
      }
      return emp;
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    if (editForm.password) {
      const passwords = JSON.parse(localStorage.getItem("passwords") || "{}");
      passwords[currentUser.empId] = editForm.password;
      localStorage.setItem("passwords", JSON.stringify(passwords));
    }

    const updatedUser = {
      ...currentUser,
      name: editForm.name,
      email: editForm.email,
    };
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    setIsEditDialogOpen(false);
    setEditForm({ ...editForm, password: "" });

    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully",
    });

    window.location.reload();
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString();
  };

  if (!isAuthenticated || !currentUser) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Employee Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {currentUser.name}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Profile Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User size={20} />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Employee ID</Label>
                  <p className="text-sm text-muted-foreground">{currentUser.empId}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Role</Label>
                  <Badge
                    variant={currentUser.role === "admin" ? "default" : "secondary"}
                  >
                    {currentUser.role}
                  </Badge>
                </div>
                <div>
                  <Label className="text-sm font-medium">Name</Label>
                  <p className="text-sm text-muted-foreground">{currentUser.name}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Joining Date</Label>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(currentUser.createdAt)}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Email</Label>
                  <p className="text-sm text-muted-foreground">{currentUser.email}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Department</Label>
                  <p className="text-sm text-muted-foreground">{currentUser.dept}</p>
                </div>
              </div>

              <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <Edit size={16} />
                    Edit Profile
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                      Update your profile information. Leave password blank to keep
                      current password.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="editName">Name</Label>
                      <Input
                        id="editName"
                        value={editForm.name}
                        onChange={(e) =>
                          setEditForm({ ...editForm, name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="editEmail">Email</Label>
                      <Input
                        id="editEmail"
                        type="email"
                        value={editForm.email}
                        onChange={(e) =>
                          setEditForm({ ...editForm, email: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="editPassword">New Password (optional)</Label>
                      <Input
                        id="editPassword"
                        type="password"
                        value={editForm.password}
                        onChange={(e) =>
                          setEditForm({ ...editForm, password: e.target.value })
                        }
                        placeholder="Enter new password"
                      />
                    </div>
                  </div>

                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleUpdateProfile}>Save Changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Today's Attendance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock size={20} />
                Today's Attendance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  {new Date().toLocaleDateString()}
                </p>

                {todayAttendance?.checkIn && (
                  <div className="mb-2">
                    <p className="text-sm font-medium">Check-in</p>
                    <p className="text-lg font-bold text-green-600">
                      {formatTime(todayAttendance.checkIn)}
                    </p>
                  </div>
                )}

                {todayAttendance?.checkOut && (
                  <div className="mb-2">
                    <p className="text-sm font-medium">Check-out</p>
                    <p className="text-lg font-bold text-red-600">
                      {formatTime(todayAttendance.checkOut)}
                    </p>
                  </div>
                )}

                {!todayAttendance?.checkIn && (
                  <p className="text-muted-foreground">No check-in today</p>
                )}
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={handleCheckIn}
                  disabled={!!todayAttendance?.checkIn}
                  className="flex-1 flex items-center gap-2"
                >
                  <LogIn size={16} />
                  Check In
                </Button>
                <Button
                  onClick={handleCheckOut}
                  variant="outline"
                  disabled={!todayAttendance?.checkIn || !!todayAttendance?.checkOut}
                  className="flex-1 flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Check Out
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Attendance Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar size={20} />
                Attendance Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-muted rounded-lg">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Total Records
                  </Label>
                  <p className="text-2xl font-bold text-primary">{attendance.length}</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <Label className="text-sm font-medium text-muted-foreground">
                    This Month
                  </Label>
                  <p className="text-2xl font-bold text-blue-600">
                    {
                      attendance.filter(
                        (record) =>
                          new Date(record.date).getMonth() === new Date().getMonth()
                      ).length
                    }
                  </p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Present Days
                  </Label>
                  <p className="text-2xl font-bold text-green-600">
                    {attendance.filter((record) => record.checkIn).length}
                  </p>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <Label className="text-sm font-medium text-muted-foreground">
                    Avg Hours/Day
                  </Label>
                  <p className="text-2xl font-bold text-orange-600">
                    {attendance.filter((record) => record.checkIn && record.checkOut)
                      .length > 0
                      ? (
                          attendance
                            .filter((record) => record.checkIn && record.checkOut)
                            .reduce((sum, record) => {
                              const checkIn = new Date(record.checkIn);
                              const checkOut = new Date(record.checkOut);
                              return (
                                sum + (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60)
                              );
                            }, 0) /
                          attendance.filter((record) => record.checkIn && record.checkOut).length
                        ).toFixed(1)
                      : "0"}
                    h
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Attendance History */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance History</CardTitle>
            <CardDescription>
              Your recent attendance records (last 14 entries)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Check In</TableHead>
                  <TableHead>Check Out</TableHead>
                  <TableHead>Total Hours</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendance.map((record) => {
                  const checkInTime = record.checkIn ? new Date(record.checkIn) : null;
                  const checkOutTime = record.checkOut ? new Date(record.checkOut) : null;
                  const totalHours =
                    checkInTime && checkOutTime
                      ? (
                          (checkOutTime.getTime() - checkInTime.getTime()) /
                          (1000 * 60 * 60)
                        ).toFixed(1)
                      : "-";

                  return (
                    <TableRow key={record.id}>
                      <TableCell>{formatDate(record.date)}</TableCell>
                      <TableCell>
                        {record.checkIn ? formatTime(record.checkIn) : "-"}
                      </TableCell>
                      <TableCell>
                        {record.checkOut ? formatTime(record.checkOut) : "-"}
                      </TableCell>
                      <TableCell>
                        {totalHours !== "-" ? `${totalHours}h` : "-"}
                      </TableCell>
                    </TableRow>
                  );
                })}
                {attendance.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center text-muted-foreground"
                    >
                      No attendance records found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
