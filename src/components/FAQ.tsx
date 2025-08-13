const qas = [
  { q: "É gratuito?", a: "Este é um template. Substitua por informações reais do seu produto." },
  { q: "Funciona offline?", a: "Sim, com sincronização quando voltar a conexão (exemplo de copy)." },
  { q: "Integra com meu sistema?", a: "Sim, via exportações e APIs (exemplo de copy)." }
];

export default function FAQ() {
  return (
    <section className="container-section">
      <h2 className="text-2xl font-bold">Perguntas frequentes</h2>
      <div className="mt-6 divide-y">
        {qas.map((x) => (
          <details key={x.q} className="py-4">
            <summary className="cursor-pointer font-medium">{x.q}</summary>
            <p className="mt-2 text-gray-600">{x.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
