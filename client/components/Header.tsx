import { useState } from "react";
import { Bell, Settings, User, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

interface HeaderProps {
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const [selectedLabel, setSelectedLabel] = useState<"BM" | "BI">("BM");

  return (
    <header className="h-[90px] bg-header text-header-foreground flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuToggle}
          className="lg:hidden text-header-foreground hover:bg-white/10"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-semibold italic">Helpdesk</h1>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => setSelectedLabel("BM")}
          className={`text-sm px-2 py-1 rounded transition ${
            selectedLabel === "BM"
              ? "bg-black text-white"
              : "bg-gray-400 text-black"
          }`}
        >
          BM
        </button>
        <button
          onClick={() => setSelectedLabel("BI")}
          className={`text-sm px-2 py-1 rounded transition ${
            selectedLabel === "BI"
              ? "bg-black text-white"
              : "bg-gray-400 text-black"
          }`}
        >
          BI
        </button>

        <Button
          variant="ghost"
          size="sm"
          className="text-header-foreground hover:bg-white/10"
        >
          <Bell className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="text-header-foreground hover:bg-white/10"
            >
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link to="/user-profile">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/login">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="ghost"
          size="sm"
          className="text-header-foreground hover:bg-white/10"
          asChild
        >
          <Link to="/settings">
            <Settings className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
