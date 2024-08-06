import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Sidebar } from "./sidebar";

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="w-28 md:w-auto relative">
        <input
          type="email"
          className="peer py-3 pl-4 pr-1 lg:px-4 ps-6 block w-full bg-background border transition ease-in-out border-background focus:outline-none rounded-lg text-sm text-secondary disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none peer-disabled:opacity-50 peer-disabled:pointer-events-none">
          <MagnifyingGlassIcon className="text-secondary size-4" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger>
              <div className="border shadow-md p-1.5 rounded-lg hover:bg-foreground transition ease cursor-pointer">
                <Squares2X2Icon className="size-5 text-secondary" />
              </div>
            </SheetTrigger>
            <SheetContent className="p-0 bg-foreground">
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-secondary border rounded-lg shadow-md px-1 lg:px-2 py-1 focus:outline-none hover:bg-foreground transition ease">
            <div className="flex items-center gap-0.5 lg:gap-2">
              <div className="flex items-center justify-center h-6 text-xs bg-gradient-to-b from-amber-500 to-amber-600 text-white px-1 py-0.5 rounded-lg">
                VB
              </div>
              <p className="text-xs lg:text-sm font-semibold min-w-22">
                Vinícius Barros
              </p>
              <ChevronDownIcon className="size-3" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
