import { logoutAccount } from "@/lib/actions/user.actions";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProfileSettings from "@/components/profile-settings"
import { ModeToggle } from "./mode-toggle";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();
  const handleLogout = async () => {
    const loggedOut = await logoutAccount();

    if(loggedOut) {
      router.push("/sign-in")
    }
  }

  return (
    <footer className="footer">
      <div className={type === "mobile"
        ? "footer_name-mobile" : "footer_name"
      }>
        <p className="text-xl font-bold text-gray-700 dark:text-white">
          {user.firstName[0]}
        </p>
      </div>
      <div className={type === "mobile"
        ? "footer_email-mobile" : "footer_email"
      }>
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user.firstName} {user.lastName}
        </h1>
        <p className="text-12 truncate font-normal text-gray-600">
          {user.email}
        </p>
      </div>
      <div
        className={type === "mobile"
          ? "footer_image-mobile" : "footer_image"
        }
        >
        <ProfileSettings />
        
      </div>
    </footer>
  );
};

export default Footer;
