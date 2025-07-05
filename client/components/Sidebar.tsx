import {
  LayoutDashboard,
  Plus,
  FileText,
  CheckSquare,
  Database,
  Settings,
  BarChart3,
  History,
  User,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "New Ticket",
    href: "/new-ticket",
    icon: Plus,
  },
  {
    name: "My Ticket",
    href: "/my-ticket",
    icon: FileText,
  },
  {
    name: "Ticket Approval",
    href: "/ticket-approval",
    icon: CheckSquare,
  },
  {
    name: "Database",
    href: "/database",
    icon: Database,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    name: "Performance",
    href: "/performance",
    icon: BarChart3,
  },
  {
    name: "User Log History",
    href: "/user-log-history",
    icon: History,
  },
];

export function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-[90px] bottom-0 w-[250px] bg-sidebar text-sidebar-foreground transition-transform duration-300 ease-in-out z-50",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
