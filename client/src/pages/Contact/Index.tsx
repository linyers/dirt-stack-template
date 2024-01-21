import Layout from "./Layout";

const Index = ({ user }: { user: any }) => {
  return (
    <>
      <h1>Welcome</h1>
      <p>Hello {user.username}, welcome to your firt Inertia app!</p>
    </>
  );
};

Index.layout = (page: React.ReactNode) => <Layout children={page} />;

export default Index;
