"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, User, Building } from 'lucide-react';

const EmployeeDetailModal = ({ isOpen, onClose, employee }) => {
  if (!employee) return null;

  // Get attendance records for this employee
  const getEmployeeAttendance = () => {
    const storedAttendance = localStorage.getItem('attendance');
    const allAttendance = storedAttendance ? JSON.parse(storedAttendance) : [];
    return allAttendance
      .filter(record => record.employeeId === employee.id)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };

  const attendance = getEmployeeAttendance();

  // Calculate stats
  const totalDays = attendance.length;
  const presentDays = attendance.filter(record => record.checkIn).length;
  const absentDays = totalDays - presentDays;
  const thisMonthAttendance = attendance.filter(record =>
    new Date(record.date).getMonth() === new Date().getMonth()
  );
  const thisMonthPresent = thisMonthAttendance.filter(record => record.checkIn).length;

  const formatTime = (timestamp) => new Date(timestamp).toLocaleTimeString();
  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString();

  const getDepartmentColor = (dept) => {
    const colors = {
      'Engineering': 'hsl(217 91% 60%)',
      'Marketing': 'hsl(142 71% 45%)',
      'Administration': 'hsl(262 83% 58%)',
      'Sales': 'hsl(25 95% 53%)',
      'HR': 'hsl(346 87% 43%)'
    };
    return colors[dept] || 'hsl(215 16% 47%)';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User size={20} />
            Employee Details - {employee.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User size={16} />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Employee ID</Label>
                  <p className="font-semibold">{employee.empId}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Full Name</Label>
                  <p className="font-semibold">{employee.name}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                  <p className="font-semibold">{employee.email}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Role</Label>
                  <Badge variant={employee.role === 'admin' ? 'default' : 'secondary'}>
                    {employee.role}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building size={16} />
                Professional Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Department</Label>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: getDepartmentColor(employee.dept) }}
                    />
                    <p className="font-semibold">{employee.dept}</p>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Joining Date</Label>
                  <p className="font-semibold">{formatDate(employee.createdAt)}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Status</Label>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Active
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Attendance Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar size={16} />
                Attendance Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-muted rounded-lg">
                  <Label className="text-sm font-medium text-muted-foreground">Total Days</Label>
                  <p className="text-2xl font-bold text-primary">{totalDays}</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <Label className="text-sm font-medium text-muted-foreground">Present Days</Label>
                  <p className="text-2xl font-bold" style={{ color: 'hsl(142 71% 45%)' }}>{presentDays}</p>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <Label className="text-sm font-medium text-muted-foreground">Absent Days</Label>
                  <p className="text-2xl font-bold" style={{ color: 'hsl(346 87% 43%)' }}>{absentDays}</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <Label className="text-sm font-medium text-muted-foreground">This Month</Label>
                  <p className="text-2xl font-bold" style={{ color: 'hsl(217 91% 60%)' }}>{thisMonthPresent}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Attendance History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock size={16} />
                Attendance History
              </CardTitle>
              <CardDescription>
                Recent attendance records (last 20 entries)
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
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendance.slice(0, 20).map((record) => {
                    const checkInTime = record.checkIn ? new Date(record.checkIn) : null;
                    const checkOutTime = record.checkOut ? new Date(record.checkOut) : null;
                    const totalHours = checkInTime && checkOutTime
                      ? ((checkOutTime.getTime() - checkInTime.getTime()) / (1000 * 60 * 60)).toFixed(1)
                      : '-';

                    return (
                      <TableRow key={record.id}>
                        <TableCell className="font-medium">{formatDate(record.date)}</TableCell>
                        <TableCell>{record.checkIn ? formatTime(record.checkIn) : '-'}</TableCell>
                        <TableCell>{record.checkOut ? formatTime(record.checkOut) : '-'}</TableCell>
                        <TableCell>{totalHours !== '-' ? `${totalHours}h` : '-'}</TableCell>
                        <TableCell>
                          {record.checkIn ? (
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              Present
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="bg-red-100 text-red-800">
                              Absent
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {attendance.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-muted-foreground">
                        No attendance records found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeDetailModal;
