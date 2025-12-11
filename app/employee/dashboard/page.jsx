"use client";

import { useState, useEffect, useCallback } from "react";
import api from "@/lib/api";
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
import Navbar from "@/components/Navigation";


const EmployeeDashboard = () => {
  const [attendance, setAttendance] = useState([]);
  const [todayAttendance, setTodayAttendance] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", email: "", oldPassword: "", newPassword: "" });

  const { currentUser, isAuthenticated } = useAuth();
  const { toast } = useToast();

  const loadAttendance = useCallback(async () => {
    try {
      const res = await api.get(`/api/v1/attendances`);
      const records = res.data.data || [];
      records.sort((a, b) => new Date(b.date) - new Date(a.date));
      setAttendance(records.slice(0, 14));
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to load attendance",
        variant: "destructive",
      });
    }
  }, [toast]);

  const loadTodayAttendance = useCallback(async () => {
    try {
      const today = new Date().toISOString().split("T")[0];
      const res = await api.get(`/api/v1/attendances?date=${today}`);
      setTodayAttendance(res.data.data?.[0] || null);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to load today's attendance",
        variant: "destructive",
      });
    }
  }, [toast]);

  useEffect(() => {
    if (!isAuthenticated || !currentUser) {
      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
      return;
    }
    const fetchData = async () => {
      await loadAttendance();
      await loadTodayAttendance();
      setEditForm({
        name: currentUser.name,
        email: currentUser.email,
        oldPassword: "",
        newPassword: ""
      });
    };

    fetchData();
  }, [isAuthenticated, currentUser, loadAttendance, loadTodayAttendance]);

  const handleCheckIn = async () => {
    try {
      const res = await api.post(`/api/v1/attendances/checkin`);
      toast({
        title: "Checked in successfully",
        description: `Check-in time: ${new Date(res.data.data.checkIn).toLocaleTimeString()}`,
      });
      await loadAttendance();
      await loadTodayAttendance();

    } catch (err) {
      toast({
        title: "Error",
        description: err.response?.data?.message || "Failed to check in",
        variant: "destructive",
      });
    }
  };

  const handleCheckOut = async () => {
    try {
      const res = await api.post(`/api/v1/attendances/checkout`);
      toast({
        title: "Checked out successfully",
        description: `Check-out time: ${new Date(res.data.data.checkOut).toLocaleTimeString()}`,
      });
      await loadAttendance();
      await loadTodayAttendance();
    } catch (err) {
      toast({
        title: "Error",
        description: err.response?.data?.message || "Failed to check out",
        variant: "destructive",
      });
    }
  };

  const handleUpdateProfile = async () => {
    if (!editForm.name && !editForm.email && !editForm.oldPassword && !editForm.newPassword) {
      toast({
        title: "Error",
        description: "At least one field must be filled to update",
        variant: "destructive",
      });
      return;
    }

    const isOldPasswordFilled = editForm.oldPassword.trim() !== "";
    const isNewPasswordFilled = editForm.newPassword.trim() !== "";

    if ((isOldPasswordFilled && !isNewPasswordFilled) || (!isOldPasswordFilled && isNewPasswordFilled)) {
      toast({
        title: "Error",
        description: "Both old and new passwords must be filled to update your password",
        variant: "destructive",
      });
      return;
    }

    try {
      await api.patch(`/api/v1/users/update`, {
        name: editForm.name,
        email: editForm.email,
        oldPassword: isOldPasswordFilled ? editForm.oldPassword : undefined,
        newPassword: isNewPasswordFilled ? editForm.newPassword : undefined,
      });

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully",
      });
      setIsEditDialogOpen(false);
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    } catch (err) {
      toast({
        title: "Error",
        description: err.response?.data?.message || "Failed to update profile",
        variant: "destructive",
      });
    }
  };

  // --- Formatting helpers ---
  const formatTime = (timestamp) =>
    timestamp ? new Date(timestamp).toLocaleTimeString() : "-";
  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString();

  if (!isAuthenticated || !currentUser) return null;
  return (
    <div className="min-h-screen bg-background pt-20">
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
                <User size={20} /> Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Employee ID</Label>
                  <p className="text-sm text-muted-foreground">{currentUser.employeeid}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Role</Label>
                  <Badge variant={currentUser.role === "admin" ? "default" : "secondary"}>{currentUser.role}</Badge>
                </div>
                <div>
                  <Label className="text-sm font-medium">Name</Label>
                  <p className="text-sm text-muted-foreground">{currentUser.name}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Joining Date</Label>
                  <p className="text-sm text-muted-foreground">{formatDate(currentUser.createdAt)}</p>
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
                    <Edit size={16} /> Edit Profile
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>Update your profile information. Leave password blank to keep current password.</DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4">
                    <div suppressHydrationWarning>
                      <Label htmlFor="editName">Name</Label>
                      <Input id="editName" value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} />
                    </div>
                    <div suppressHydrationWarning>
                      <Label htmlFor="editEmail">Email</Label>
                      <Input id="editEmail" type="email" value={editForm.email} onChange={(e) => setEditForm({ ...editForm, email: e.target.value })} />
                    </div>
                    <div suppressHydrationWarning>
                      <Label htmlFor="editPassword">Old Password (optional)</Label>
                      <Input id="editOldPassword" type="password" value={editForm.oldPassword} onChange={(e) => setEditForm({ ...editForm, oldPassword: e.target.value })} placeholder="Enter old password" />
                    </div>
                    <div suppressHydrationWarning>
                      <Label htmlFor="editPassword">New Password (optional)</Label>
                      <Input id="editNewPassword" type="password" value={editForm.newPassword} onChange={(e) => setEditForm({ ...editForm, newPassword: e.target.value })} placeholder="Enter new password" />
                    </div>
                  </div>

                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
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
                <Clock size={20} /> Today's Attendance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">{new Date().toLocaleDateString()}</p>

                {todayAttendance?.checkIn && (
                  <div className="mb-2">
                    <p className="text-sm font-medium">Check-in</p>
                    <p className="text-lg font-bold text-green-600">{formatTime(todayAttendance.checkIn)}</p>
                  </div>
                )}

                {todayAttendance?.checkOut && (
                  <div className="mb-2">
                    <p className="text-sm font-medium">Check-out</p>
                    <p className="text-lg font-bold text-red-600">{formatTime(todayAttendance.checkOut)}</p>
                  </div>
                )}

                {!todayAttendance?.checkIn && <p className="text-muted-foreground">No check-in today</p>}
              </div>

              <div className="flex gap-2">
                <Button onClick={handleCheckIn} disabled={!!todayAttendance?.checkIn} className="flex-1 flex items-center gap-2">
                  <LogIn size={16} /> Check In
                </Button>
                <Button onClick={handleCheckOut} variant="outline" disabled={!todayAttendance?.checkIn || !!todayAttendance?.checkOut} className="flex-1 flex items-center gap-2">
                  <LogOut size={16} /> Check Out
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Attendance Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Calendar size={20} /> Attendance Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-muted rounded-lg">
                  <Label className="text-sm font-medium text-muted-foreground">Total Records</Label>
                  <p className="text-2xl font-bold text-primary">{attendance.length}</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <Label className="text-sm font-medium text-muted-foreground">This Month</Label>
                  <p className="text-2xl font-bold text-blue-600">{attendance.filter(r => new Date(r.date).getMonth() === new Date().getMonth()).length}</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <Label className="text-sm font-medium text-muted-foreground">Present Days</Label>
                  <p className="text-2xl font-bold text-green-600">{attendance.filter(r => r.checkIn).length}</p>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <Label className="text-sm font-medium text-muted-foreground">Avg Hours/Day</Label>
                  <p className="text-2xl font-bold text-orange-600">
                    {attendance.filter(r => r.checkIn && r.checkOut).length
                      ? (
                        attendance.filter(r => r.checkIn && r.checkOut).reduce((sum, r) => sum + (new Date(r.checkOut) - new Date(r.checkIn)) / (1000 * 60 * 60), 0) /
                        attendance.filter(r => r.checkIn && r.checkOut).length
                      ).toFixed(1)
                      : "0"}h
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Attendance History Table */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance History</CardTitle>
            <CardDescription>Your recent attendance records (last 14 entries)</CardDescription>
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
                  const totalHours = checkInTime && checkOutTime ? ((checkOutTime - checkInTime) / (1000 * 60 * 60)).toFixed(1) : "-";

                  return (
                    <TableRow key={record._id}>
                      <TableCell>{formatDate(record.date)}</TableCell>
                      <TableCell>{record.checkIn ? formatTime(record.checkIn) : "-"}</TableCell>
                      <TableCell>{record.checkOut ? formatTime(record.checkOut) : "-"}</TableCell>
                      <TableCell>{totalHours !== "-" ? `${totalHours}h` : "-"}</TableCell>
                    </TableRow>
                  );
                })}
                {attendance.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">No attendance records found</TableCell>
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