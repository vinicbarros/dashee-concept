"use client";

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

const pages = [
  {
    name: "Dashboard",
    href: "/",
    icon: ({ className }: { className: string }) => (
      <HomeIcon className={className} />
    ),
    notification: 0,
  },
  {
    name: "List of institutions",
    href: "/institutions",
    icon: ({ className }: { className: string }) => (
      <BuildingOfficeIcon className={className} />
    ),
    notification: 0,
  },
  {
    name: "News",
    href: "/news",
    icon: ({ className }: { className: string }) => (
      <MegaphoneIcon className={className} />
    ),
    notification: 12,
  },
  {
    name: "Documents",
    href: "/documents",
    icon: ({ className }: { className: string }) => (
      <FolderOpenIcon className={className} />
    ),
    notification: 0,
  },
  {
    name: "Contacts",
    href: "/contacts",
    icon: ({ className }: { className: string }) => (
      <PhoneIcon className={className} />
    ),
    notification: 0,
  },
  {
    name: "Acquisition numbers",
    href: "/acquisition-numbers",
    icon: ({ className }: { className: string }) => (
      <LockClosedIcon className={className} />
    ),
    notification: 3,
  },
  {
    name: "Products",
    href: "/products",
    icon: ({ className }: { className: string }) => (
      <ArchiveBoxIcon className={className} />
    ),
    notification: 0,
  },
  {
    name: "Inspections",
    href: "/inspections",
    icon: ({ className }: { className: string }) => (
      <CameraIcon className={className} />
    ),
    notification: 7,
  },
];

export function Sidebar() {
  const pathName = usePathname();

  const linkVariants = {
    "a-tag": {
      active: "bg-background shadow-sm border",
      initial: "hover:bg-tertiary hover:bg-opacity-10",
    },
    "p-tag": {
      active: "font-bold",
      initial: "font-semibold text-secondary",
    },
    icon: {
      active: "text-amber-600",
      initial: "text-secondary",
    },
  };

  return (
    <div className="bg-foreground md:w-64 lg:border py-3 px-3 text-primary lg:min-h-screen">
      <div className="flex gap-2 items-center mb-6">
        <div className="flex items-center justify-center rounded-md bg-background size-10 border shadow-md">
          <BeakerIcon className="size-8 text-amber-600" />
        </div>
        <div>
          <p className="text-sm font-semibold">Dashee</p>
          <p className="text-xs font-medium text-secondary">Dashier</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {pages.map((page) => {
          const isActive = pathName === page.href ? "active" : "initial";

          return (
            <a
              key={page.href}
              href={page.href}
              className={`group flex items-center justify-between gap-2 py-1 pl-3 pr-1 rounded-md ${linkVariants["a-tag"][isActive]}`}
            >
              <div className="flex items-center gap-2">
                {page.icon({
                  className: `size-5 ${linkVariants["icon"][isActive]}`,
                })}
                <p
                  className={`group-hover:translate-x-2 text-sm whitespace-nowrap transition ease-in-out ${linkVariants["p-tag"][isActive]}`}
                >
                  {page.name}
                </p>
              </div>
              {page.notification > 0 && (
                <div className="bg-tertiary group-hover:bg-background text-secondary font-bold text-xs rounded-lg flex items-center justify-center px-2 py-1 transition ease-in-out">
                  {page.notification > 9 ? "9+" : page.notification}
                </div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
