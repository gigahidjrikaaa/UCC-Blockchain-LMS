"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LuLayoutDashboard, LuBook, LuBookOpen, LuAward } from "react-icons/lu";
import { GoBeaker, GoGraph, GoOrganization } from "react-icons/go";
import { FiUser, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import { cn } from "@/lib/utlis";

const navigationItems = [
  {
    section: "Main",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LuLayoutDashboard },
      { name: "Courses", href: "/courses", icon: LuBook },
      { name: "Learning Paths", href: "/learning-paths", icon: LuBookOpen },
      { name: "My Certificates", href: "/certificates", icon: LuAward },
    ],
  },
  {
    section: "Explore",
    items: [
      { name: "Research Projects", href: "/research", icon: GoBeaker },
      { name: "Industry Network", href: "/network", icon: GoOrganization },
      { name: "Analytics", href: "/analytics", icon: GoGraph },
    ],
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-full transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4">
        {!collapsed && (
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="UCC Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="font-semibold text-lg">UCC LMS</span>
          </Link>
        )}
        {collapsed && (
          <Link href="/" className="mx-auto">
            <Image
              src="/logo.svg"
              alt="UCC Logo"
              width={24}
              height={24}
              className="h-6 w-auto"
            />
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800"
        >
          {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-6 px-2">
          {navigationItems.map((section) => (
            <div key={section.section}>
              {!collapsed && (
                <h3 className="px-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {section.section}
                </h3>
              )}
              <ul className="mt-2 space-y-1">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                        pathname === item.href
                          ? "bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",
                        collapsed ? "justify-center" : "space-x-3"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.name}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 p-4">
        <Link
          href="/profile"
          className={cn(
            "flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md",
            collapsed ? "justify-center p-2" : "space-x-3 p-2"
          )}
        >
          <div className="h-8 w-8 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
            <FiUser className="h-4 w-4" />
          </div>
          {!collapsed && (
            <div>
              <p className="font-medium">Student Name</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                View profile
              </p>
            </div>
          )}
        </Link>
      </div>
    </aside>
  );
}