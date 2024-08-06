"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TableCell, TableRow } from "@/components/ui/table";

import {
  EnvelopeIcon,
  EyeIcon,
  PhoneIcon,
  Square2StackIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export function ContactRow({
  row,
}: {
  row: { contact: string; name?: string; phone: string; email: string };
}) {
  const [copied, setCopied] = useState({
    email: false,
    phone: false,
  });
  return (
    <TableRow>
      <TableCell className="font-medium">
        <div className="flex flex-col justify-center h-10">
          <p className="font-bold text-primary">{row.contact}</p>
          {row.name && <p className="text-sm">{row.name}</p>}
        </div>
      </TableCell>
      <TableCell>
        <div className="flex justify-center items-center w-40 lg:w-fit border px-1.5 py-0.5 rounded-lg gap-1.5">
          <PhoneIcon className="size-4" />
          <p className="text-xs lg:text-sm font-medium">{row.phone}</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Square2StackIcon
                  className={`size-4 ${copied.phone && "text-amber-500"}`}
                  onClick={() =>
                    setCopied((prev) => ({ ...prev, phone: true }))
                  }
                />
              </TooltipTrigger>
              <TooltipContent className="bg-primary rounded-2xl text-white">
                {copied.phone ? "Copied!" : "Copy"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center w-fit border px-1.5 py-0.5 rounded-lg gap-1.5">
          <EnvelopeIcon className="size-4" />
          <p className="font-medium text-xs lg:text-sm">{row.email}</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Square2StackIcon
                  className={`size-4 ${copied.email && "text-amber-500"}`}
                  onClick={() =>
                    setCopied((prev) => ({ ...prev, email: true }))
                  }
                />
              </TooltipTrigger>
              <TooltipContent className="bg-primary rounded-2xl text-white">
                {copied.email ? "Copied!" : "Copy"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center justify-center border rounded-lg rounded-r-none p-2">
                  <StarIcon className="size-4" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-primary rounded-2xl text-white">
                Star
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center justify-center border border-l-0 rounded-lg rounded-l-none p-2">
                  <EyeIcon className="size-4" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-primary rounded-2xl text-white">
                Show details
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </TableCell>
    </TableRow>
  );
}
