const data = [
  { n: 1, t: "Cadastre sua empresa", d: "Configure unidades, turnos e políticas." },
  { n: 2, t: "Convide colaboradores", d: "Envie link por e-mail ou WhatsApp." },
  { n: 3, t: "Acompanhe em tempo real", d: "Painel com faltas, atrasos e horas extras." }
];

export default function Steps() {
  return (
    <section className="bg-gray-50">
      <div className="container-section">
        <h2 className="text-2xl font-bold">Como funciona</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {data.map(s => (
            <div key={s.n} className="card p-6">
              <div className="h-10 w-10 grid place-items-center rounded-full bg-brand.secondary text-white font-bold">{s.n}</div>
              <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-gray-600">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
