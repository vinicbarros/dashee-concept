import { Header } from "@/components/header";
import { Summary } from "@/components/summary";
import { TableWrapper } from "@/components/table-wrapper";

export default function Home() {
  return (
    <main className="flex flex-col w-full px-6 py-2 text-secondary">
      <Header />
      <Summary />
      <p className="text-primary font-bold text-lg my-8">Quick actions</p>
      <TableWrapper />
    </main>
  );
}
