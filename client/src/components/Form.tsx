import { useForm } from "@inertiajs/react";

export default function Form() {
  const { data, setData, post, processing, errors } = useForm({
    name: "",
  });

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    post("/contact/", { forceFormData: true });
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={data.name}
        placeholder="Name"
        onChange={(e) => setData("name", e.target.value)}
      />
      {errors.name && <div>{errors.name}</div>}
      <button type="submit" disabled={processing}>
        Login
      </button>
    </form>
  );
}
