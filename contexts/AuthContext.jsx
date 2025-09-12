"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import api from "@/lib/api";

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
  }, []);

  // ----------------- LOGIN FUNCTION -----------------
  const login = async (empId, password, asAdmin = false) => {
    try {
      const response = await api.post(
        "/api/v1/users/login", // change to your backend URL
        {
          employeeid: empId,
          password,
          asAdmin,
        },
        { withCredentials: true } // if backend sets httpOnly cookies
      );

      const user = response.data.data.user; // backend sends { user, accessToken, refreshToken }

      if (asAdmin && user.role !== "admin") return false;

      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));

      return true;
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      return false;
    }
  };

  // ----------------- LOGOUT FUNCTION -----------------
  const logout = async () => {
    try {
      await api.post(
        "/api/v1/users/logout",
        {},
        { withCredentials: true }
      );
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
    } finally {
      setCurrentUser(null);
      localStorage.removeItem("currentUser");
    }
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
