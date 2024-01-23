import { Link } from "@inertiajs/react";
import "../../static/css/main.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = window.location.pathname;
  return (
    <>
      <header className="text-lg font-bold text-white p-4 flex justify-around">
        <Link
          className={`${pathname === "/" ? "text-blue-500" : "hover:text-blue-500"}`}
          href="/"
        >
          Home
        </Link>
        <Link className="hover:text-blue-500" href="/contact">
          Contact
        </Link>
      </header>
      <main className="flex flex-col gap-y-4 p-4">{children}</main>
    </>
  );
}
