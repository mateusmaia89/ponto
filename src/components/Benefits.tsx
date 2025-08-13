const items = [
  { title: "Registro sem fraudes", desc: "Geolocalização e selfie para bater ponto com segurança." },
  { title: "Relatórios automáticos", desc: "Jornadas, horas extras e banco de horas em um clique." },
  { title: "Integrações", desc: "Conecta com ERP e folha de pagamento." }
];

export default function Benefits() {
  return (
    <section id="benefits" className="container-section">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="card p-6">
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-gray-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
