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
    <form onSubmit={submit}>
      <input
        type="text"
        value={data.username}
        placeholder="Username"
        onChange={(e) => setData("username", e.target.value)}
      />
      {errors.username && <div>{errors.username}</div>}
      <input
        type="text"
        value={data.password}
        placeholder="********"
        onChange={(e) => setData("password", e.target.value)}
      />
      {errors.password && <div>{errors.password}</div>}
      {errors.__all__ && <div>{errors.__all__}</div>}
      <button type="submit" disabled={processing}>
        Login
      </button>
    </form>
  );
}
