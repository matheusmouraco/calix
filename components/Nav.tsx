'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Nav({ isHome = false }: { isHome?: boolean }) {
  const [open, setOpen] = useState(false)
  const p = isHome ? '' : '/'
  return (
    <>
      <nav className="site-nav">
        <Link href="/" className="nav-logo">
          <Image src="/images/logo_calix.png" alt="Calix Family Office" width={180} height={60} priority />
        </Link>
        <ul className="nav-links">
          <li><Link href={`${p}#`} onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href={`${p}#servicos`} onClick={() => setOpen(false)}>Serviços</Link></li>
          <li><Link href={`${p}#diferenciais`} onClick={() => setOpen(false)}>Diferenciais</Link></li>
          <li><Link href="/atualizacoes">Atualizações</Link></li>
          <li><Link href="/sobre">Sobre Nós</Link></li>
          <li><Link href={`${p}#midia`} onClick={() => setOpen(false)}>Na Mídia</Link></li>
          <li><Link href={`${p}#contato`} className="nav-cta" onClick={() => setOpen(false)}>Contato</Link></li>
        </ul>
        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`nav-mobile-menu${open ? ' open' : ''}`}>
        <ul>
          <li><Link href={`${p}#`} onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href={`${p}#servicos`} onClick={() => setOpen(false)}>Serviços</Link></li>
          <li><Link href={`${p}#diferenciais`} onClick={() => setOpen(false)}>Diferenciais</Link></li>
          <li><Link href="/atualizacoes" onClick={() => setOpen(false)}>Atualizações</Link></li>
          <li><Link href="/sobre" onClick={() => setOpen(false)}>Sobre Nós</Link></li>
          <li><Link href={`${p}#midia`} onClick={() => setOpen(false)}>Na Mídia</Link></li>
          <li><Link href={`${p}#contato`} onClick={() => setOpen(false)}>Contato</Link></li>
        </ul>
      </div>
    </>
  )
}
