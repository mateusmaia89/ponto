const features = [
  { title: "App de ponto", text: "Bata ponto por app com regras e restrições." },
  { title: "Kiosk/Tablet", text: "Totem compartilhado com reconhecimento." },
  { title: "Geofence", text: "Delimite áreas para permitir batidas." },
  { title: "Aprovação de jornada", text: "Fluxo de aprovação por gestor." },
  { title: "Exportações", text: "CSV/PDF para contabilidade." },
  { title: "Suporte dedicado", text: "Atendimento em horário comercial." }
];

export default function FeatureGrid() {
  return (
    <section className="container-section">
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="card p-6">
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
