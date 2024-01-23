import { Link } from "@inertiajs/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const user = children.props.user;
  return (
    <>
      <header className="text-lg font-bold text-white p-4 flex justify-around">
        <Link className="hover:text-blue-500" href="/">
          Home
        </Link>
        <Link className="hover:text-blue-500" href="/about">
          About
        </Link>
        <div className="flex gap-4">
          <Link className="text-blue-500" href="/contact">
            Contact
          </Link>
          {user && (
            <Link className="hover:text-blue-500" href="/logout">
              Logout
            </Link>
          )}
        </div>
      </header>
      <span>Hi this is a contact layout</span>
      <main className="p-4">{children}</main>
    </>
  );
}
