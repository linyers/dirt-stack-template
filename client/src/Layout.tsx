import { Link } from "@inertiajs/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </header>
      <main>{children}</main>
    </>
  );
}
