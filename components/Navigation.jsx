"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun, Menu, X, User, Users, LogOut } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useAuth } from "@/contexts/AuthContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { currentUser, logout, isAuthenticated, isAdmin } = useAuth();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
    { name: "Blog", href: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-background/10 backdrop-blur-sm border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="relative w-24 h-16">
            <Image src="/favicon.ico" alt="Logo" fill className="object-contain" priority />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${
                  isScrolled
                    ? "text-foreground-secondary hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {isAuthenticated ? (
              <>
                {isAdmin ? (
                  <Link href="/admin/dashboard">
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <Users size={16} /> Admin Dashboard
                    </Button>
                  </Link>
                ) : (
                  <Link href="/employee/dashboard">
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <User size={16} /> Dashboard
                    </Button>
                  </Link>
                )}

                {/* Logout button for desktop */}
                <Button variant="outline" size="sm" onClick={logout} className="flex items-center gap-2">
                  <LogOut size={16} /> Logout
                </Button>
              </>
            ) : (
              <Link href="/login">
                <Button size="sm">Login</Button>
              </Link>
            )}
          </div>

          {/* Theme & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`rounded-full transition-colors ${
                isScrolled
                  ? "hover:bg-primary/10 text-foreground"
                  : "hover:bg-white/10 text-white/90 hover:text-white"
              }`}
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden rounded-full transition-colors ${
                isScrolled
                  ? "hover:bg-primary/10 text-foreground"
                  : "hover:bg-white/10 text-white/90 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in bg-background/95 backdrop-blur-lg rounded-b-xl mx-4 border border-border/50 pointer-events-auto">
            <div className="flex flex-col space-y-3 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-left px-4 py-2 text-foreground-secondary hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {isAuthenticated ? (
                <>
                  <span className="text-sm text-muted-foreground px-4">
                    Welcome, {currentUser?.name}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-2 px-4"
                  >
                    <LogOut size={16} /> Logout
                  </Button>
                </>
              ) : (
                <Link href="/login">
                  <Button size="sm" className="px-4">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
