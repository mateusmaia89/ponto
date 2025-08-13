export default function Hero() {
  return (
    <section className="bg-brand-primary text-white">
      <div className="container-section grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Controle de ponto moderno para equipes de qualquer tamanho
          </h1>
          <p className="mt-4 text-white/85 max-w-xl">
            Layout inspirado na landing enviada. Texto substituto para evitar conteúdo proprietário.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#cta" className="btn-secondary">Solicitar demonstração</a>
            <a href="#benefits" className="btn bg-white/10">Ver benefícios</a>
          </div>
        </div>
        <form className="card p-6 bg-white text-gray-900">
          <h2 className="text-xl font-semibold">Comece agora</h2>
          <p className="text-gray-600 text-sm">Preencha para falar com um especialista.</p>
          <div className="mt-4 grid gap-4">
            <input className="w-full rounded-xl border px-4 py-3" placeholder="Nome completo" />
            <input className="w-full rounded-xl border px-4 py-3" placeholder="E-mail" type="email" />
            <input className="w-full rounded-xl border px-4 py-3" placeholder="Telefone" />
            <input className="w-full rounded-xl border px-4 py-3" placeholder="Empresa" />
            <button className="btn-primary w-full" type="button">Quero conversar</button>
            <p className="text-xs text-gray-500">Ao enviar, você concorda em ser contatado.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
