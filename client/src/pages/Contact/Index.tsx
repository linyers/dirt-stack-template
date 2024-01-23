import Layout from "./Layout";

const Index = ({ user }: { user: any }) => {
  return (
    <>
      <h2 className="mt-10 text-blue-500 font-bold text-center text-6xl">
        Welcome
      </h2>
      <p className="mt-10 text-white font-bold text-center text-3xl">
        Hello <b className="text-blue-400">{user.username}</b>, welcome to your
        first D.I.R.T. app!
      </p>
    </>
  );
};

Index.layout = (page: React.ReactNode) => <Layout children={page} />;

export default Index;
