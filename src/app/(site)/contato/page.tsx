export default function Contato() {
  return (
    <div className="container-section">
      <h1 className="text-3xl font-bold">Contato</h1>
      <form className="mt-6 grid gap-4 max-w-xl">
        <input className="w-full rounded-xl border px-4 py-3" placeholder="Nome" />
        <input className="w-full rounded-xl border px-4 py-3" placeholder="E-mail" type="email" />
        <textarea className="w-full rounded-xl border px-4 py-3" placeholder="Mensagem" rows={5} />
        <button className="btn-primary w-full md:w-auto" type="button">Enviar</button>
      </form>
    </div>
  );
}
