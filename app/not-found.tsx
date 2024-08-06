import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" w-full flex items-center justify-center text-secondary">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-primary font-bold text-2xl">
          Page not created yet
        </h2>
        <div className="border rounded-lg px-2 py-1 bg-foreground hover:shadow-lg transition ease-linear font-bold">
          <Link href="/">Return Home</Link>
        </div>
      </div>
    </div>
  );
}
