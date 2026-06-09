import Link from 'next/link'
import Image from 'next/image'
const LI = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
const IG = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Image src="/images/logo_calix.png" alt="Calix Family Office" width={160} height={54} className="footer-logo-img" />
          <p className="footer-about">Gestão inteligente do patrimônio familiar com independência total, ética rigorosa e o compromisso genuíno de proteger o legado da sua família.</p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/calix-family-office/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn"><LI /></a>
            <a href="https://www.instagram.com/calixfamilyoffice/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram"><IG /></a>
          </div>
        </div>
        <div className="fcol"><div className="fcol-title">Serviços</div><ul>
          <li><Link href="/#servicos">Planejamento Financeiro</Link></li>
          <li><Link href="/#servicos">Investimentos</Link></li>
          <li><Link href="/#servicos">Governança Familiar</Link></li>
          <li><Link href="/#servicos">Trusts &amp; Offshore</Link></li>
          <li><Link href="/#servicos">Filantropia</Link></li>
        </ul></div>
        <div className="fcol"><div className="fcol-title">Páginas</div><ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/atualizacoes">Atualizações</Link></li>
          <li><Link href="/#midia">Na Mídia</Link></li>
          <li><Link href="/#contato">Contato</Link></li>
        </ul></div>
        <div className="fcol"><div className="fcol-title">Contato</div><ul>
          <li><a href="mailto:contato@calixfamilyoffice.com">contato@calixfamilyoffice.com</a></li>
          <li><a href="tel:+5511958649091">+55 11 95864-9091</a></li>
          <li><a href="https://maps.google.com/?q=Av.+Magalhães+de+Castro,+4800,+São+Paulo" target="_blank" rel="noopener noreferrer" style={{lineHeight:'1.65'}}>Av. Magalhães de Castro, 4800<br/>Cidade Jardim Corporate Center<br/>São Paulo, SP</a></li>
        </ul></div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Calix Family Office. Todos os direitos reservados.</span>
        <div className="footer-cvm"><Image src="/images/cvm.png" alt="CVM" width={160} height={32} /></div>
        <div className="footer-legal">
          <Link href="/compliance">Compliance</Link>
          <Link href="/privacidade">Privacidade</Link>
          <Link href="/termos">Termos</Link>
        </div>
      </div>
    </footer>
  )
}
