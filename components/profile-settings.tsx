import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { LogOut, Moon, Settings, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { logoutAccount } from "@/lib/actions/user.actions";
import { SettingsToggle } from "./settings-toggle";
import { useTheme } from "next-themes";

const ProfileSettings = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const loggedOut = await logoutAccount();

    if (loggedOut) {
      router.push("/sign-in");
    }
  };
  const { setTheme } = useTheme();
  return (
    <div className="text-12">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings className="text-gray-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            className="items-center dark:hidden flex"
            onClick={() => setTheme("dark")}
          >
            <Button>
              <Sun className="text-gray-500 dark:hidden mr-2" />
              Toggle Theme
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="items-center hidden dark:flex"
            onClick={() => setTheme("light")}
          >
            <Button>
              <Moon className="text-gray-500 mr-2 hidden dark:block" />
              Toggle Theme
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>
            <Button>
              <LogOut className="text-gray-500 mr-2" />
              Logout
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileSettings;
