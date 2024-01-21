import { Link } from "@inertiajs/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </header>
      <span>Hi this is a contact layout</span>
      <main>{children}</main>
    </>
  );
}
