import { ReactNode } from "react";
import {
  ArchiveBoxIcon,
  BuildingOfficeIcon,
  CameraIcon,
  FolderOpenIcon,
  HomeIcon,
  LockClosedIcon,
  MegaphoneIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { BeakerIcon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";

export function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      {children}
    </div>
  );
}
