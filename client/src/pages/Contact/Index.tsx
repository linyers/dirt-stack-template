import Form from "@/components/Form";
import Layout from "./Layout";

const Index = ({ user, name }: { user: any; name: string }) => {
  return (
    <>
      <h1>Welcome</h1>
      {user ? (
        <>
          <p>Hello {user.username}, welcome to your firt Inertia app!</p>
        </>
      ) : (
        <p>Welcome to your first Inertia app!</p>
      )}

      <Form />
      {name && <p>Hi {name}</p>}
    </>
  );
};

Index.layout = (page: React.ReactNode) => <Layout children={page} />;

export default Index;
