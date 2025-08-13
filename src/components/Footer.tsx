export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-10 text-sm text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p>© {new Date().getFullYear()} SuaMarca. Todos os direitos reservados.</p>
        <nav className="flex gap-6">
          <a href="#" className="hover:underline">Política de Privacidade</a>
          <a href="#" className="hover:underline">Termos de Uso</a>
        </nav>
      </div>
    </footer>
  );
}
