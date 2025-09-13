"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import api from "@/lib/api";
import { toast } from "@/hooks/use-toast";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Silent fetch current user
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await api.get("/api/v1/users/current-user", { withCredentials: true });
        if (res?.data?.data) {
          setCurrentUser(res.data.data);
        } else {
          setCurrentUser(null);
        }
      } catch {
        setCurrentUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);


  // LOGIN function
  const login = async (empId, password, asAdmin = false) => {
    try {
      const res = await api.post(
        "/api/v1/users/login",
        { employeeid: empId, password, asAdmin },
        { withCredentials: true }
      );

      const { user, accessToken, refreshToken } = res.data.data;

      if (asAdmin && user.role !== "admin") return false;

      // localStorage fallback (in case cookies don’t attach)
      if (accessToken) localStorage.setItem("accessToken", accessToken);
      if (refreshToken) localStorage.setItem("refreshToken", refreshToken);

      setCurrentUser(user);
      return true;
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      toast({
        title: "Invalid ID/Password , please try again",
        description: "Check your credentials",
        variant: "destructive",
      });
      return false;
    }
  };

  // LOGOUT function
  const logout = async () => {
    try {
      await api.post("/api/v1/users/logout", {}, { withCredentials: true });
    } catch (err) {
      console.error("Logout error:", err.response?.data || err.message);
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setCurrentUser(null);
      window.location.href = "/login";
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
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
