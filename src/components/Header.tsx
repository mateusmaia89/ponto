"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/images/logo.svg" alt="Logo" width={28} height={28} />
          <span>Marca</span>
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        <nav className={clsx("md:flex items-center gap-6", open ? "block mt-4" : "hidden md:flex")}>
          <Link href="/sobre" className="hover:underline">Sobre</Link>
          <Link href="/contato" className="hover:underline">Contato</Link>
          <a href="#cta" className="btn-primary">Falar com vendas</a>
        </nav>
      </div>
    </header>
  );
}
