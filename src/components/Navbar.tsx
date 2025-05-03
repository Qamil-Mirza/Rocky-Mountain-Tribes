"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/public/images/temp-rocky-logo.png";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "TEK", href: "/tek" },
  { label: "Climate Adaptation", href: "/climate-adaptation" },
  { label: "Policy", href: "/policy" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export function NavBar({ transparent = false }: { transparent?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Add scroll effect for transparent navbar
  useEffect(() => {
    if (!transparent) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparent]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 py-2",
        mobileMenuOpen
          ? "bg-background dark:bg-backgroundDark shadow-sm"
          : transparent && !scrolled
          ? "bg-transparent"
          : "bg-background dark:bg-backgroundDark shadow-sm",
        transparent &&
          scrolled &&
          !mobileMenuOpen &&
          "bg-background/90 backdrop-blur-sm dark:bg-backgroundDark/90"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <div className="flex items-center space-x-3">
            <Image
              src={logo || "/placeholder.svg"}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full text-black"
            />
            <span
              className={cn(
                "text-lg font-bold",
                transparent && !scrolled
                  ? "text-white"
                  : "text-primaryText dark:text-white"
              )}
            >
              Rocky Mountains
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors",
                transparent && !scrolled
                  ? "text-white/90 hover:text-white"
                  : "text-primaryText/80 hover:text-primaryText dark:text-white/80 dark:hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button - positioned to the right on mobile */}
        <button
          className="md:hidden hover:cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X
              className={cn(
                "h-6 w-6",
                transparent && !scrolled
                  ? "text-black"
                  : "text-black"
              )}
            />
          ) : (
            <Menu
              className={cn(
                "h-6 w-6",
                transparent && !scrolled
                  ? "text-white"
                  : "text-black"
              )}
            />
          )}
        </button>
      </div>

      {/* Mobile navigation with transition */}
      <div
        className={cn(
          "fixed inset-0 top-[4rem] z-40 bg-background md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full text-center py-3 text-lg font-medium text-primaryText dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
