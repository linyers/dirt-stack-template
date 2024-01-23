import { useForm } from "@inertiajs/react";

export default function Form() {
  const { data, setData, post, processing, errors } = useForm({
    username: "",
    password: "",
    __all__: "",
  });

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    post("/login/", { forceFormData: true });
  }

  return (
    <form
      className="my-6 flex flex-col w-1/2 m-auto gap-2 text-xl"
      onSubmit={submit}
    >
      <input
        className={`p-2 rounded-lg outline-blue-400 ${errors.username && "border-2 border-red-500"}`}
        type="text"
        value={data.username}
        placeholder="Username"
        onChange={(e) => setData("username", e.target.value)}
      />
      {errors.username && (
        <span className="text-red-500 font-semibold">{errors.username}</span>
      )}
      <input
        className={`p-2 rounded-lg outline-blue-400 ${errors.password && "border-2 border-red-500"}`}
        type="password"
        value={data.password}
        placeholder="********"
        onChange={(e) => setData("password", e.target.value)}
      />
      {errors.password && (
        <span className="text-red-500 font-semibold">{errors.password}</span>
      )}
      {errors.__all__ && (
        <span className="text-red-500 font-semibold">{errors.__all__}</span>
      )}
      <button
        className="mt-2 bg-blue-500 text-white p-3 rounded-xl font-bold shadow-lg hover:bg-blue-400"
        type="submit"
        disabled={processing}
      >
        Enter
      </button>
    </form>
  );
}
