import { Link } from "@inertiajs/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const user = children.props.user;
  return (
    <>
      <header>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        {user && <Link href="/logout">Logout</Link>}
      </header>
      <span>Hi this is a contact layout</span>
      <main>{children}</main>
    </>
  );
}
