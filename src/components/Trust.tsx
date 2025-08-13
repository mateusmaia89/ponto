export default function Trust() {
  return (
    <section className="container-section">
      <p className="text-center text-sm uppercase tracking-wide text-gray-500">
        Empresas que confiam
      </p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-6 opacity-80">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-12 bg-gray-100 rounded-xl" />
        ))}
      </div>
    </section>
  );
}
