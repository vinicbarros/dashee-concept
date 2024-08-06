import { ContactRow } from "@/components/contact-row";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { PhoneIcon, StarIcon } from "@heroicons/react/24/outline";

const tableData = [
  {
    contact: "Marketing",
    phone: "(424) 123-9876",
    email: "marketing@mentorgroup.com",
  },
  {
    contact: "Mortgages and Loans",
    name: "John Smith",
    phone: "(312) 234-8765",
    email: "jhon.smith@mentorgroup.com",
  },
  {
    contact: "Customer Service",
    name: "Michael Scott",
    phone: "(212) 345-7654",
    email: "michael.scott@mentorgroup.com",
  },
  {
    contact: "Non-life Insurance",
    phone: "(646) 567-3278",
    email: "nonlifeinsurance@mentorgroup.com",
  },
  {
    contact: "Sales",
    name: "Dwight Schrute",
    phone: "(202) 456-6543",
    email: "dwight.schrute@mentorgroup.com",
  },
];

export function TableWrapper() {
  return (
    <Accordion type="multiple" className="flex flex-col gap-6">
      <AccordionItem className="border-none" value="item-1">
        <AccordionTrigger className="border rounded-lg px-4 bg-foreground">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-background rounded-lg border p-2 text-secondary shadow-sm">
              <StarIcon className="size-6" />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-primary font-semibold">My favorite data</p>
              <p className="text-sm">You have 7 favorite data points</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>

      <AccordionItem className="border-none" value="item-2">
        <AccordionTrigger className="border rounded-lg px-4 bg-foreground [&[data-state=open]]:rounded-b-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-background rounded-lg border p-2 text-secondary shadow-sm">
              <PhoneIcon className="size-6" />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-primary font-semibold">Quick contacts</p>
              <p className="text-sm text-start">
                Keep necessary contacts at your fingertips
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="border border-t-transparent rounded-b-lg pb-0">
          <Table>
            <TableHeader className="bg-foreground">
              <TableRow>
                <TableHead className="h-8">Contact</TableHead>
                <TableHead className="h-8">Phone</TableHead>
                <TableHead className="h-8">E-mail</TableHead>
                <TableHead className="text-right h-8"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row) => (
                <ContactRow key={row.contact} row={row} />
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
