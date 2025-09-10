"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) setCurrentUser(JSON.parse(storedUser));
    initializeMockData();
  }, []);

  const initializeMockData = () => {
    if (!localStorage.getItem("employees")) {
      const mockEmployees = [
        {
          id: "1",
          empId: "EMP001",
          name: "Admin User",
          email: "admin@company.com",
          dept: "Administration",
          role: "admin",
          createdAt: new Date().toISOString(),
        },
        {
          id: "2",
          empId: "EMP002",
          name: "John Doe",
          email: "john@company.com",
          dept: "Engineering",
          role: "employee",
          createdAt: new Date().toISOString(),
        },
        {
          id: "3",
          empId: "EMP003",
          name: "Jane Smith",
          email: "jane@company.com",
          dept: "Marketing",
          role: "employee",
          createdAt: new Date().toISOString(),
        },
      ];
      localStorage.setItem("employees", JSON.stringify(mockEmployees));
    }

    if (!localStorage.getItem("passwords")) {
      const mockPasswords = {
        EMP001: "admin123",
        EMP002: "employee123",
        EMP003: "employee123",
      };
      localStorage.setItem("passwords", JSON.stringify(mockPasswords));
    }
  };

  const login = async (empId, password, asAdmin = false) => {
    const employees = JSON.parse(localStorage.getItem("employees") || "[]");
    const passwords = JSON.parse(localStorage.getItem("passwords") || "{}");
    const employee = employees.find((e) => e.empId === empId);

    if (!employee || passwords[empId] !== password) return false;
    if (asAdmin && employee.role !== "admin") return false;

    setCurrentUser(employee);
    localStorage.setItem("currentUser", JSON.stringify(employee));
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        isAuthenticated: !!currentUser,
        isAdmin: currentUser?.role === "admin",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
