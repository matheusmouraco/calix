'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FloatCTA from '@/components/FloatCTA'

const SERVICOS = [
  { name: 'Planejamento Financeiro', quote: 'Um plano que <em>alinha seus valores ao seu legado</em>', body: 'Desenvolvemos um plano patrimonial completo e personalizado, abrangendo gestão de riscos, planejamento tributário e sucessório — construindo o mapa do seu legado, não apenas uma planilha.', wa: 'Planejamento%20Financeiro', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format' },
  { name: 'Investimentos', quote: 'Metodologia <em>fiduciária, isenta e personalizada</em>', body: 'Selecionamos ativos com o Método Calix — o único filtro ético de investimentos no Brasil. Sem conflito de interesse, sem comissão de produto. Apenas performance com propósito.', wa: 'Investimentos', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&auto=format' },
  { name: 'Governança Familiar', quote: 'Família, empresa e propriedade em <em>harmonia</em>', body: 'Atuamos nos núcleos de família, empresa e propriedade. Estruturamos acordos, reduzimos conflitos e apoiamos processos sucessórios com sensibilidade e visão de longo prazo.', wa: 'Governan%C3%A7a%20Familiar', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format' },
  { name: 'Trusts & Offshore', quote: 'Proteção patrimonial nas <em>melhores jurisdições do mundo</em>', body: 'Estruturamos Trusts, Joint Tenancy e offshores nas melhores jurisdições internacionais — com segurança jurídica, otimização fiscal e diversificação real.', wa: 'Trusts%20e%20Offshore', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format' },
  { name: 'Serviços Financeiros', quote: 'Um único ponto de contato para <em>todas as demandas financeiras</em>', body: 'Câmbio, seguros, crédito estruturado e daily banking integrados ao seu planejamento. Atendimento ágil e personalizado para as necessidades do dia a dia da sua família.', wa: 'Servi%C3%A7os%20Financeiros', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80&auto=format' },
  { name: 'Filantropia Estratégica', quote: 'Generosidade transformada em <em>impacto real e mensurável</em>', body: 'Ajudamos sua família a estruturar uma agenda filantrópica alinhada aos seus valores, com governança rigorosa, transparência total e resultados concretos no mundo.', wa: 'Filantropia%20Estrat%C3%A9gica', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80&auto=format' },
]

const R = 182, CX = 300, CY = 260
const NODES = SERVICOS.map((_, i) => {
  const a = (i * 60 - 90) * Math.PI / 180
  return { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) }
})

function split2(name: string): [string, string] {
  const w = name.toUpperCase().split(' ')
  const m = Math.ceil(w.length / 2)
  return [w.slice(0, m).join(' '), w.slice(m).join(' ')]
}

const MEDIA = ['valor','exame','infomoney','estadao','bloomberg','cnn','globo','invest']
const WA_BASE = 'https://wa.me/5511958649091'

export default function HomePage() {
  const [activeSvc, setActiveSvc] = useState(0)

  useEffect(() => {
    const els = document.querySelectorAll('.rv')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('show'); obs.unobserve(e.target) } })
    }, { threshold: 0.08 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const s = SERVICOS[activeSvc]

  return (
    <>
      <style>{`
        .rv{opacity:0;transform:translateY(24px);transition:opacity .65s ease,transform .65s ease}
        .rv.d1{transition-delay:.1s}.rv.d2{transition-delay:.2s}.rv.d3{transition-delay:.3s}
        .rv.show{opacity:1;transform:none}
        @keyframes fUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        .hero{position:relative;height:100vh;min-height:660px;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden;background:var(--dark)}
        .hero-vid{position:absolute;inset:0;z-index:0}
        .hero-vid video{width:100%;height:100%;object-fit:cover;opacity:.38;mix-blend-mode:luminosity}
        .hero-vid::after{content:'';position:absolute;inset:0;background:linear-gradient(160deg,rgba(25,38,39,.72) 0%,rgba(17,26,27,.5) 50%,rgba(17,26,27,.88) 100%)}
        .hero-inner{position:relative;z-index:2;padding:0 2rem;max-width:860px}
        .hero-tag{font-family:var(--mono);font-size:11px;letter-spacing:.32em;text-transform:uppercase;color:var(--sage);margin-bottom:2rem;display:block;animation:fUp .6s 1.8s both}
        .hero-h1{font-family:var(--serif);font-size:clamp(46px,7vw,90px);font-weight:400;line-height:1.08;color:var(--cream);animation:fUp .7s 2s both}
        .hero-h1 em{font-style:italic;color:#fff}
        .hero-sub{font-size:18px;font-weight:300;line-height:1.8;color:rgba(236,236,236,.65);max-width:540px;margin:2rem auto 3rem;animation:fUp .7s 2.2s both}
        .hero-btns{display:flex;align-items:center;justify-content:center;gap:1.5rem;flex-wrap:wrap;animation:fUp .7s 2.4s both}
        .about{background:var(--white);padding:120px 5vw;display:grid;grid-template-columns:1fr 1fr;gap:7vw;align-items:center}
        .about-title{font-family:var(--serif);font-size:clamp(28px,3.4vw,44px);font-weight:400;line-height:1.2;color:var(--darker)}
        .about-title em{font-style:italic;color:var(--dark)}
        .about-nums{display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-top:3rem}
        .astat{border-left:2px solid var(--cream);padding-left:16px}
        .astat-n{font-family:var(--serif);font-size:40px;font-weight:400;color:var(--darker);line-height:1}
        .astat-n sup{font-size:18px}
        .astat-l{font-family:var(--mono);font-size:10px;letter-spacing:.1em;color:#777;margin-top:6px;text-transform:uppercase}
        .about-right p{font-size:17px;font-weight:300;line-height:1.9;color:#444;margin-bottom:1.5rem}
        .about-right strong{color:var(--darker);font-weight:500}
        .about-sep{width:48px;height:1px;background:var(--cream);margin:2rem 0}
        .btn-ghost{font-family:var(--mono);font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--dark);text-decoration:none;display:inline-flex;align-items:center;gap:10px;transition:color .3s;margin-top:2rem}
        .btn-ghost:hover{color:var(--darker)}.btn-ghost::after{content:'→';transition:transform .3s}.btn-ghost:hover::after{transform:translateX(5px)}
        .testi{background:var(--light);padding:120px 5vw}
        .testi-header{text-align:center;max-width:620px;margin:0 auto 4rem}
        .testi-header h2{font-family:var(--serif);font-size:clamp(28px,3.4vw,44px);font-weight:400;color:var(--darker);line-height:1.2;margin-bottom:1rem}
        .testi-header h2 em{font-style:italic;color:var(--dark)}
        .testi-header p{font-size:17px;font-weight:300;line-height:1.8;color:#555}
        .testi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.2rem}
        .tc{border:1px solid var(--cream);display:flex;flex-direction:column;justify-content:space-between;gap:2rem;padding:2.6rem;transition:border-color .3s;background:var(--white)}
        .tc:hover{border-color:rgba(181,202,170,.8)}.tc-big{grid-column:span 2;grid-row:span 2;padding:3rem}.tc-wide{grid-column:span 2}.tc-sm{grid-column:span 1}
        .tc-dark{background:var(--dark)!important;border-color:transparent!important}
        .tq-big{font-family:var(--serif);font-size:clamp(18px,1.7vw,22px);font-weight:400;font-style:italic;line-height:1.65;color:var(--darker)}
        .tq{font-size:16px;font-weight:300;line-height:1.8;color:#444}.tq-dk{font-size:16px;font-weight:300;line-height:1.8;color:rgba(219,214,193,.82)}
        .ta{display:flex;align-items:center;gap:14px;padding-top:1.5rem;border-top:1px solid var(--cream)}.ta-dk{border-top-color:rgba(219,214,193,.15)}
        .ta-av{width:44px;height:44px;border-radius:50%;background:var(--cream);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:12px;font-weight:500;color:var(--dark);flex-shrink:0}
        .ta-av-dk{background:rgba(181,202,170,.15);color:var(--sage)}.ta-name{font-family:var(--mono);font-size:11px;font-weight:500;color:var(--darker);letter-spacing:.06em}
        .ta-name-dk{color:var(--cream)}.ta-role{font-size:12px;color:#888;margin-top:2px}.ta-role-dk{color:rgba(219,214,193,.4)}

        /* ── SERVIÇOS RADIAL PREMIUM ─────────────────────── */
        .svc-section{background:#fff;padding:0}
        .svc-radial{display:grid;grid-template-columns:38% 62%;min-height:92vh}
        .svc-detail{background:#fff;padding:72px 48px 60px;display:flex;flex-direction:column;justify-content:center;border-right:1px solid rgba(17,26,27,.07);position:relative;overflow:hidden}
        .svc-detail::before{content:'';position:absolute;top:0;left:0;bottom:0;width:3px;background:linear-gradient(to bottom,transparent 0%,#b5caaa 30%,#b5caaa 70%,transparent 100%)}
        .svc-tag{font-family:var(--mono);font-size:10px;letter-spacing:.26em;text-transform:uppercase;color:var(--sage);margin-bottom:1.8rem;display:flex;align-items:center;gap:12px;flex-wrap:nowrap}
        .svc-tag-num{display:inline-block;width:28px;height:28px;line-height:28px;text-align:center;border-radius:50%;background:rgba(181,202,170,.12);border:1px solid rgba(181,202,170,.3);font-size:9px;color:var(--sage);flex-shrink:0;vertical-align:middle}
        .svc-img-wrap{position:relative;margin-bottom:1.8rem;overflow:hidden;height:190px}
        .svc-img-wrap img{width:100%;height:100%;object-fit:cover;filter:brightness(.78) saturate(.52);display:block;transition:transform .6s ease}
        .svc-img-wrap:hover img{transform:scale(1.03)}
        .svc-img-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,transparent 50%,rgba(17,26,27,.5) 100%)}
        .svc-quote{font-family:var(--serif);font-size:clamp(18px,1.8vw,26px);font-weight:400;line-height:1.35;color:var(--darker);margin-bottom:1.2rem}
        .svc-quote em{font-style:italic;color:var(--dark)}
        .svc-body-text{font-size:15px;font-weight:300;line-height:1.85;color:#606060;margin-bottom:2rem}
        .svc-wa-btn{display:inline-flex;align-items:center;gap:10px;font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--dark);border:1px solid rgba(25,38,39,.2);padding:13px 22px;text-decoration:none;transition:all .3s;align-self:flex-start}
        .svc-wa-btn:hover{background:var(--dark);color:var(--cream)}
        .svc-diagram{background:#0c1617;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 4vw;position:relative;overflow:hidden}
        .svc-diagram-label{font-family:var(--mono);font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:rgba(219,214,193,.22);margin-bottom:2rem;align-self:flex-start;display:flex;align-items:center;gap:10px}
        .svc-diagram-label::before{content:'';width:16px;height:1px;background:rgba(219,214,193,.2)}
        .svc-svg{width:100%;max-width:600px;cursor:default;overflow:visible}
        .svc-node{cursor:pointer}
        .svc-node rect{transition:fill .3s,stroke .3s,stroke-width .3s}
        .svc-node text{transition:fill .3s;pointer-events:none;user-select:none}
        .svc-node:hover>rect:nth-child(2){stroke:rgba(181,202,170,.45)!important}
        @keyframes cPulse{0%,100%{opacity:.15;transform:scale(1)}50%{opacity:.08;transform:scale(1.08)}}
        @keyframes cPulse2{0%,100%{opacity:.08;transform:scale(1)}50%{opacity:.04;transform:scale(1.14)}}
        .center-p1{transform-origin:300px 260px;animation:cPulse 3s ease-in-out infinite}
        .center-p2{transform-origin:300px 260px;animation:cPulse2 3s ease-in-out infinite .5s}
        @keyframes detailIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        .svc-detail-inner{animation:detailIn .35s ease both}
        .features{background:var(--darker);padding:120px 5vw}
        .feat-header{max-width:640px;margin:0 auto 4.5rem;text-align:center}
        .feat-header h2{font-family:var(--serif);font-size:clamp(28px,3.4vw,44px);font-weight:400;color:var(--cream);line-height:1.2;margin-bottom:1rem}
        .feat-header h2 em{font-style:italic;color:var(--sage)}.feat-header p{font-size:17px;font-weight:300;line-height:1.8;color:rgba(219,214,193,.55)}
        .feat-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:1px;background:rgba(219,214,193,.08)}
        .fc{background:var(--darker);padding:2.8rem 2.4rem;transition:background .3s}.fc:hover{background:#1a2d2e}
        .fc-2{grid-column:span 2}.fc-3{grid-column:span 3}.fc-4{grid-column:span 4}.fc-6{grid-column:span 6}
        .fc-metric{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:1rem}
        .fc-metric-num{font-family:var(--serif);font-size:64px;font-weight:400;color:var(--cream);line-height:1}.fc-metric-num sup{font-size:28px}
        .fc-metric-label{font-family:var(--mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--sage);margin-top:.8rem}
        .fc-icon{width:44px;height:44px;border-radius:50%;border:1px solid rgba(219,214,193,.2);display:flex;align-items:center;justify-content:center;margin-bottom:1.8rem}
        .fc-icon svg{width:20px;height:20px;stroke:var(--sage);fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
        .fc-name{font-family:var(--serif);font-size:22px;font-weight:400;color:var(--cream);margin-bottom:.8rem;line-height:1.25}.fc-name em{font-style:italic;color:var(--sage)}
        .fc-desc{font-size:15px;font-weight:300;line-height:1.85;color:rgba(219,214,193,.55)}
        .funnel{margin-top:1.5rem;display:flex;flex-direction:column;gap:4px}
        .fi{font-family:var(--serif);font-style:italic;font-size:14px;font-weight:400;color:var(--cream);background:var(--dark);border:1px solid rgba(181,202,170,.2);padding:9px 16px;text-align:center}
        .fi-1{width:100%}.fi-2{width:90%;align-self:center}.fi-3{width:80%;align-self:center}.fi-4{width:68%;align-self:center}
        .fi-5{width:56%;align-self:center;background:rgba(181,202,170,.12);border-color:rgba(181,202,170,.4)}
        .cbar-lbl{font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:rgba(219,214,193,.4);margin-bottom:6px}
        .cbar-track{height:3px;background:rgba(219,214,193,.1);margin-bottom:12px}.cbar-fill{height:100%;background:var(--sage)}
        .fc-split{display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center}
        .fc-quad{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.fc-quad-item{border:1px solid rgba(181,202,170,.15);padding:1.2rem}
        .fqi-label{font-family:var(--mono);font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--sage);margin-bottom:.5rem}
        .fqi-desc{font-size:13px;font-weight:300;color:rgba(219,214,193,.55)}
        .media-section{background:var(--white);padding:90px 5vw}
        .media-top{display:flex;align-items:flex-end;justify-content:space-between;gap:4rem;flex-wrap:wrap;margin-bottom:3.5rem}
        .media-h2{font-size:clamp(24px,2.8vw,38px);font-weight:300;color:var(--darker);line-height:1.25}
        .media-h2 em{font-family:var(--serif);font-style:italic;color:var(--dark)}.media-intro{font-size:16px;font-weight:300;line-height:1.85;color:#666;max-width:360px}
        .slider-wrap{overflow:hidden;-webkit-mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent);mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent)}
        .slider-track{display:flex;width:max-content;animation:slide 36s linear infinite}.slider-track:hover{animation-play-state:paused}
        @keyframes slide{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .slider-item{display:flex;align-items:center;padding:18px 52px;flex-shrink:0;opacity:.28;transition:opacity .3s;cursor:default}.slider-item:hover{opacity:.75}
        .slider-item img{height:24px;width:auto;object-fit:contain;filter:grayscale(1)}
        .blog-section{background:var(--dark);padding:120px 5vw}
        .blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:4rem}
        .bcard{border:1px solid rgba(219,214,193,.1);display:flex;flex-direction:column;transition:border-color .3s;overflow:hidden;text-decoration:none}
        .bcard:hover{border-color:rgba(219,214,193,.32)}.bcard-img{height:220px;overflow:hidden}
        .bcard-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s;filter:brightness(.8) saturate(.6)}.bcard:hover .bcard-img img{transform:scale(1.05)}
        .bcard-body{padding:2rem;flex:1;display:flex;flex-direction:column}
        .bcard-tag{font-family:var(--mono);font-size:9px;letter-spacing:.28em;text-transform:uppercase;color:var(--sage);margin-bottom:.8rem}
        .bcard-title{font-size:18px;font-weight:400;line-height:1.4;color:var(--cream);flex:1;margin-bottom:.8rem}
        .bcard-excerpt{font-size:14px;font-weight:300;line-height:1.75;color:rgba(219,214,193,.45);margin-bottom:1.5rem}
        .bcard-link{font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--sage)}
        .cta-final{background:var(--light);padding:150px 5vw;text-align:center}
        .cta-final h2{font-size:clamp(34px,5vw,68px);font-weight:300;line-height:1.1;color:var(--darker);margin-bottom:1.5rem}
        .cta-final h2 em{font-family:var(--serif);font-style:italic;color:var(--dark)}
        .cta-final p{font-size:18px;font-weight:300;line-height:1.85;color:#555;max-width:500px;margin:0 auto 3rem}
        .cta-actions{display:flex;justify-content:center;gap:1.5rem;flex-wrap:wrap}
        @media(max-width:1100px){.svc-radial{grid-template-columns:42% 58%}}
        @media(max-width:900px){
          .about{grid-template-columns:1fr;gap:3rem;padding:70px 1.4rem}
          .testi-grid{grid-template-columns:1fr}.tc-big,.tc-wide,.tc-sm{grid-column:span 1;grid-row:auto}
          .svc-radial{grid-template-columns:1fr;min-height:unset}
          .svc-diagram{order:-1;min-height:400px;padding:40px 1.4rem 28px}
          .svc-detail{order:0;padding:36px 1.4rem 52px;border-right:none;border-top:1px solid rgba(17,26,27,.06)}
          .svc-detail::before{display:none}
          .svc-svg{max-width:440px}
          .svc-img-wrap{height:160px}
          .svc-quote{font-size:clamp(17px,4.5vw,24px)}
          .svc-diagram-label{display:none}
          .feat-grid{grid-template-columns:1fr}.fc,.fc-2,.fc-3,.fc-4,.fc-6{grid-column:span 1}
          .fc-split{grid-template-columns:1fr;gap:2rem}.blog-grid{grid-template-columns:1fr}
          .cta-final{padding:80px 1.4rem}.testi{padding:70px 1.4rem}.features{padding:70px 1.4rem}
          .blog-section{padding:70px 1.4rem}.media-section{padding:60px 1.4rem}.media-top{flex-direction:column;gap:1.5rem}

        @media(max-width:600px){
          .svc-diagram{min-height:340px;padding:28px 1rem 20px}
          .svc-detail{padding:28px 1rem 44px}
          .svc-svg{max-width:320px}
          .svc-img-wrap{height:140px}
        }        }
      `}</style>
      <Nav isHome />

      {/* HERO */}
      <section className="hero">
        <div className="hero-vid">
          <video autoPlay muted loop playsInline>
            <source src="https://skyblue-woodcock-820853.hostingersite.com/wp-content/uploads/2026/02/file-1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-inner">
          <span className="hero-tag">Family Office · Consultoria de Investimentos</span>
          <h1 className="hero-h1">Legado não é o que deixamos.<br />É o que <em>vivemos.</em></h1>
          <p className="hero-sub">Representamos os interesses da sua família com independência total — do planejamento patrimonial ao legado que atravessa gerações.</p>
          <div className="hero-btns">
            <Link href="#contato" className="btn-primary">Agendar Conversa</Link>
            <Link href="#sobre" className="btn-ghost" style={{color:'var(--cream)'}}>Conheça a Calix</Link>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="about" id="sobre">
        <div>
          <div className="eyebrow dk rv">Quem somos</div>
          <h2 className="about-title rv d1">Mais do que um family office.<br /><em>Somos parceiros da sua família.</em></h2>
          <div className="about-nums rv d2">
            {[['100','%','Independência fiduciária'],['6','','Áreas de atuação'],['Único','','Filtro ético no Brasil'],['∞','','Compromisso com o legado']].map(([n,sup,l])=>(
              <div className="astat" key={l}>
                <div className="astat-n">{n}<sup>{sup}</sup></div>
                <div className="astat-l">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-right rv d1">
          <p>Sentamos com a família, entendemos sua estrutura patrimonial, financeira e familiar, e <strong>representamos seus interesses</strong> em cada decisão — da sucessão ao mercado global.</p>
          <p>Não somos gestores de produto. Somos conselheiros de confiança, presentes nas questões que realmente importam para o futuro da sua família.</p>
          <div className="about-sep" />
          <p>Combinamos inovação tecnológica — incluindo o <strong>Cockpit Patrimonial exclusivo</strong> — com rigor fiduciário e o <strong>Método Calix</strong>, filtro ético único no Brasil.</p>
          <Link href="#servicos" className="btn-ghost">Ver nossos serviços</Link>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="testi" id="depoimentos">
        <div className="testi-header rv">
          <h2>O que dizem as famílias que <em>confiam na Calix</em></h2>
          <p>Relacionamentos de longo prazo baseados em confiança, transparência e resultados reais.</p>
        </div>
        <div className="testi-grid">
          <div className="tc tc-big rv"><blockquote><p className="tq-big">&quot;A Calix mudou completamente nossa visão sobre gestão patrimonial. Eles não nos oferecem produtos — representam nossos interesses com profundidade e dedicação que nunca encontramos em banco ou gestora.&quot;</p></blockquote><div className="ta"><div className="ta-av">FR</div><div><div className="ta-name">Família Rodrigues</div><div className="ta-role">São Paulo · Cliente desde 2019</div></div></div></div>
          <div className="tc tc-wide rv d1"><blockquote><p className="tq">&quot;O processo de sucessão que adiávamos há anos foi resolvido em meses — com segurança, harmonia e clareza jurídica. Profissionalismo incomparável.&quot;</p></blockquote><div className="ta"><div className="ta-av">GA</div><div><div className="ta-name">Grupo Empresarial Alves</div><div className="ta-role">Rio de Janeiro · Cliente desde 2021</div></div></div></div>
          <div className="tc tc-sm tc-dark rv d2"><blockquote><p className="tq-dk">&quot;Independência total. Cada recomendação é feita genuinamente no meu interesse — sem conflitos, sem agenda oculta.&quot;</p></blockquote><div className="ta ta-dk"><div className="ta-av ta-av-dk">FM</div><div><div className="ta-name ta-name-dk">Família Mendes</div><div className="ta-role ta-role-dk">Brasília · 2020</div></div></div></div>
          <div className="tc tc-sm rv d3"><blockquote><p className="tq">&quot;O Cockpit da Calix é algo que não existe em lugar nenhum. Visibilidade total do meu patrimônio, em tempo real.&quot;</p></blockquote><div className="ta"><div className="ta-av">CS</div><div><div className="ta-name">C. Santana</div><div className="ta-role">Curitiba · 2022</div></div></div></div>
        </div>
      </section>

      {/* ── SERVIÇOS RADIAL PREMIUM ── */}
      <section className="svc-section" id="servicos">
        <div className="svc-radial">

          {/* LEFT: Detalhe do serviço */}
          <div className="svc-detail">
            <div className="svc-detail-inner" key={activeSvc}>
              <div className="svc-tag">
                <span className="svc-tag-num">{String(activeSvc+1).padStart(2,'0')}</span>
                <span>{s.name}</span>
              </div>
              <div className="svc-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.name} loading="lazy"/>
                <div className="svc-img-overlay"/>
              </div>
              <h2 className="svc-quote" dangerouslySetInnerHTML={{ __html: s.quote }}/>
              <p className="svc-body-text">{s.body}</p>
              <a href={`${WA_BASE}?text=Olá!%20Gostaria%20de%20falar%20sobre%20${s.wa}%20com%20a%20Calix%20Family%20Office.`}
                target="_blank" rel="noopener noreferrer" className="svc-wa-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L0 24l6.293-1.508A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.93 0-3.733-.53-5.272-1.45l-.378-.225-3.736.895.944-3.633-.247-.39A9.794 9.794 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/></svg>
                Falar sobre {s.name}
              </a>
            </div>
          </div>

          {/* RIGHT: Diagrama radial premium */}
          <div className="svc-diagram">
            <div className="svc-diagram-label">Seis Serviços Integrados</div>
            <svg viewBox="0 0 600 520" className="svc-svg" aria-label="Diagrama de serviços">
              <defs>
                <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1f3435" stopOpacity="0.9"/>
                  <stop offset="100%" stopColor="#0c1617" stopOpacity="0"/>
                </radialGradient>
                <filter id="nodeGlw" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="6" result="blur"/>
                  <feColorMatrix in="blur" type="matrix"
                    values="0 0 0 0 0.71  0 0 0 0 0.79  0 0 0 0 0.67  0 0 0 0.65 0"
                    result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="lineGlw" x="-10%" y="-300%" width="120%" height="700%">
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background glow */}
              <circle cx="300" cy="260" r="300" fill="url(#bgGlow)"/>

              {/* Orbit rings */}
              <circle cx="300" cy="260" r="238" fill="none" stroke="rgba(219,214,193,.03)" strokeWidth="1" strokeDasharray="3 10"/>
              <circle cx="300" cy="260" r="176" fill="none" stroke="rgba(219,214,193,.04)" strokeWidth="1"/>
              <circle cx="300" cy="260" r="112" fill="none" stroke="rgba(219,214,193,.05)" strokeWidth="1"/>

              {/* Connection lines + dots */}
              {NODES.map((p, i) => {
                const angle = (i * 60 - 90) * Math.PI / 180
                const sx = 300 + 65 * Math.cos(angle)
                const sy = 260 + 65 * Math.sin(angle)
                const ex = 300 + (R - 88) * Math.cos(angle)
                const ey = 260 + (R - 88) * Math.sin(angle)
                const on = activeSvc === i
                return (
                  <g key={i}>
                    {on && <line x1={sx} y1={sy} x2={ex} y2={ey}
                      stroke="rgba(181,202,170,.3)" strokeWidth="7"
                      strokeLinecap="round" filter="url(#lineGlw)"/>}
                    <line x1={sx} y1={sy} x2={ex} y2={ey}
                      stroke={on ? '#b5caaa' : 'rgba(219,214,193,.1)'}
                      strokeWidth={on ? 2 : 1}
                      strokeLinecap="round"
                      strokeDasharray={on ? 'none' : '3 6'}
                      style={{transition:'stroke .4s,stroke-width .4s'}}/>
                    <circle cx={sx} cy={sy} r="3"
                      fill={on ? '#b5caaa' : 'rgba(219,214,193,.2)'}
                      style={{transition:'fill .4s'}}/>
                  </g>
                )
              })}

              {/* Center — pulse rings */}
              <circle cx="300" cy="260" r="72" fill="none" stroke="rgba(181,202,170,.12)" strokeWidth="1" className="center-p2"/>
              <circle cx="300" cy="260" r="64" fill="none" stroke="rgba(181,202,170,.18)" strokeWidth="1" className="center-p1"/>
              <circle cx="300" cy="260" r="58" fill="rgba(219,214,193,.05)" stroke="rgba(219,214,193,.2)" strokeWidth="1"/>
              <circle cx="300" cy="260" r="48" fill="rgba(219,214,193,.05)"/>

              {/* Family icon */}
              <g transform="translate(268,228)" stroke="rgba(219,214,193,.72)" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="32" cy="13" r="8.5"/>
                <path d="M14 50c0-10 7.5-16 18-16s18 6 18 16"/>
                <circle cx="11" cy="16" r="6"/>
                <path d="M0 48c0-8 5-13 11-13 2.5 0 5 1 7 2.5"/>
                <circle cx="53" cy="16" r="6"/>
                <path d="M64 48c0-8-5-13-11-13-2.5 0-5 1-7 2.5"/>
              </g>

              {/* Service nodes — bigger pill buttons */}
              {SERVICOS.map((svc, i) => {
                const p = NODES[i]
                const on = activeSvc === i
                const [l1, l2] = split2(svc.name)
                // Bigger nodes
                const nw = 174, nh = 56, rx2 = 28
                const nx = p.x - nw / 2, ny = p.y - nh / 2
                return (
                  <g key={i} className="svc-node"
                    onClick={() => setActiveSvc(i)}
                    tabIndex={0} role="button" aria-label={svc.name}
                    onKeyDown={e => e.key === 'Enter' && setActiveSvc(i)}>

                    {/* Outer glow halo (active) */}
                    {on && <rect x={nx-12} y={ny-12} width={nw+24} height={nh+24} rx={rx2+12}
                      fill="none" stroke="#b5caaa" strokeWidth="16" opacity=".1"/>}

                    {/* Node body */}
                    <rect x={nx} y={ny} width={nw} height={nh} rx={rx2}
                      fill={on ? 'rgba(181,202,170,.16)' : 'rgba(11,22,23,.6)'}
                      stroke={on ? '#b5caaa' : 'rgba(219,214,193,.16)'}
                      strokeWidth={on ? 1.5 : 1}
                      filter={on ? 'url(#nodeGlw)' : ''}/>

                    {/* Number badge */}
                    <rect x={nx+11} y={ny+(nh-26)/2} width={26} height={26} rx={13}
                      fill={on ? 'rgba(181,202,170,.28)' : 'rgba(219,214,193,.07)'}
                      stroke={on ? 'rgba(181,202,170,.6)' : 'rgba(219,214,193,.13)'}
                      strokeWidth="1"/>
                    <text x={nx+24} y={p.y+0.5}
                      textAnchor="middle" dominantBaseline="middle"
                      fill={on ? '#b5caaa' : 'rgba(219,214,193,.45)'}
                      fontSize="9" fontFamily="DM Mono,monospace" fontWeight="500">
                      {String(i+1).padStart(2,'0')}
                    </text>

                    {/* Service name */}
                    {l2 ? (
                      <>
                        <text x={nx+46} y={p.y-6} dominantBaseline="middle"
                          fill={on ? '#dbd6c1' : 'rgba(219,214,193,.52)'}
                          fontSize="10" fontFamily="DM Mono,monospace" letterSpacing=".05em">{l1}</text>
                        <text x={nx+46} y={p.y+7} dominantBaseline="middle"
                          fill={on ? '#dbd6c1' : 'rgba(219,214,193,.52)'}
                          fontSize="10" fontFamily="DM Mono,monospace" letterSpacing=".05em">{l2}</text>
                      </>
                    ) : (
                      <text x={nx+46} y={p.y} dominantBaseline="middle"
                        fill={on ? '#dbd6c1' : 'rgba(219,214,193,.52)'}
                        fontSize="10" fontFamily="DM Mono,monospace" letterSpacing=".05em">{l1}</text>
                    )}
                  </g>
                )
              })}
            </svg>
          </div>

        </div>
      </section>
      {/* DIFERENCIAIS */}
      <section className="features" id="diferenciais">
        <div className="feat-header rv">
          <div className="eyebrow" style={{justifyContent:'center'}}>Nossos Diferenciais</div>
          <h2>O que torna a Calix <em>única no Brasil</em></h2>
          <p>Tecnologia proprietária, metodologia ética e independência absoluta — reunidos em um único parceiro patrimonial.</p>
        </div>
        <div className="feat-grid rv d1">
          <div className="fc fc-4">
            <div className="fc-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
            <div className="fc-name">Cockpit <em>Patrimonial</em></div>
            <p className="fc-desc">Ferramenta proprietária exclusiva. Consolida investimentos, imóveis, participações e fluxo financeiro — nenhum outro family office no Brasil oferece esta visibilidade.</p>
            <div style={{background:'rgba(255,255,255,.03)',border:'1px solid rgba(219,214,193,.1)',borderRadius:'8px',padding:'1.6rem',marginTop:'1.5rem'}}>
              <div style={{display:'flex',justifyContent:'space-between',paddingBottom:'1rem',borderBottom:'1px solid rgba(219,214,193,.08)',marginBottom:'1.2rem'}}>
                <span style={{fontFamily:'var(--mono)',fontSize:'9px',letterSpacing:'.22em',textTransform:'uppercase',color:'var(--sage)'}}>Cockpit · Jun 2026</span>
                <span style={{fontFamily:'var(--mono)',fontSize:'9px',color:'rgba(219,214,193,.35)'}}>Uso interno</span>
              </div>
              <div style={{display:'flex',alignItems:'flex-end',gap:'5px',height:'80px'}}>
                {[42,58,51,74,68,82,71,89,85,96,100,94].map((h,i)=>(
                  <div key={i} style={{flex:1,height:`${h}%`,borderRadius:'2px 2px 0 0',background:'linear-gradient(to top,rgba(181,202,170,.3),rgba(181,202,170,.7))'}} />
                ))}
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem',marginTop:'1rem'}}>
                {[['18,4%','Rentabilidade'],['7 classes','Alocação'],['R$4,2bi','AuM total']].map(([v,l])=>(
                  <div key={l} style={{borderLeft:'1px solid rgba(181,202,170,.3)',paddingLeft:'10px'}}>
                    <div style={{fontFamily:'var(--serif)',fontSize:'18px',color:'var(--cream)'}}>{v}</div>
                    <div style={{fontFamily:'var(--mono)',fontSize:'9px',color:'rgba(219,214,193,.4)',letterSpacing:'.1em',textTransform:'uppercase',marginTop:'2px'}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="fc fc-2 fc-metric rv d1" style={{background:'rgba(181,202,170,.05)'}}>
            <div><div className="fc-metric-num">100<sup>%</sup></div><div className="fc-metric-label">Independência fiduciária</div></div>
            <p className="fc-desc" style={{textAlign:'center'}}>Sem comissões de produto. Remunerados exclusivamente pelo cliente.</p>
          </div>
          <div className="fc fc-3 rv d1">
            <div className="fc-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <div className="fc-name">Método <em>Calix®</em></div>
            <p className="fc-desc">O único filtro de valores éticos aplicado à seleção de ativos no Brasil.</p>
            <div className="funnel">{['Macroeconomia Global','Ciclos Econômicos','Setores Promissores','Seleção de Empresas','Filtro de Valores'].map((t,i)=>(<div key={t} className={`fi fi-${i+1}`}>{t}</div>))}</div>
          </div>
          <div className="fc fc-3 rv d2">
            <div className="fc-icon"><svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
            <div className="fc-name">Compliance &amp; <em>Transparência</em></div>
            <p className="fc-desc">Governança rigorosa em cada etapa. Relatórios periódicos e auditorias independentes.</p>
            <div style={{marginTop:'1.5rem'}}>{['Transparência','Rastreabilidade','Conformidade regulatória'].map(t=>(<div key={t}><div className="cbar-lbl">{t}</div><div className="cbar-track"><div className="cbar-fill" style={{width:'100%'}}/></div></div>))}</div>
          </div>
          <div className="fc fc-6 rv d2">
            <div className="fc-split">
              <div>
                <div className="fc-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
                <div className="fc-name">Visão <em>Holística</em> do Patrimônio</div>
                <p className="fc-desc">Família, empresa, imóveis, offshore, sucessão e legado — geridos como um sistema único.</p>
              </div>
              <div className="fc-quad">{[['Família','Sucessão, governança e acordos'],['Empresa','Holdings, M&A e estrutura societária'],['Investimentos','Portfólio global com filtro ético'],['Offshore','Trusts, proteção e diversificação']].map(([l,d])=>(<div key={l} className="fc-quad-item"><div className="fqi-label">{l}</div><div className="fqi-desc">{d}</div></div>))}</div>
            </div>
          </div>
        </div>
      </section>

      {/* NA MÍDIA */}
      <section className="media-section" id="midia">
        <div className="media-top rv">
          <div><div className="eyebrow dk">Na Mídia</div><h2 className="media-h2">A Calix nas principais publicações <em>do Brasil</em></h2></div>
          <p className="media-intro">Nossa presença na mídia reflete o compromisso com transparência e o reconhecimento da Calix como referência em family office no Brasil.</p>
        </div>
        <div className="slider-wrap rv d2">
          <div className="slider-track">
            {[...MEDIA,...MEDIA].map((k,i)=>(<div key={i} className="slider-item"><Image src={`/images/media_${k}.png`} alt={k} width={120} height={30} style={{height:'24px',width:'auto',objectFit:'contain',filter:'grayscale(1)'}}/></div>))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="blog-section" id="blog">
        <div className="eyebrow rv">Atualizações</div>
        <h2 className="rv d1" style={{fontFamily:'var(--serif)',fontSize:'clamp(28px,3.4vw,44px)',fontWeight:400,color:'var(--cream)'}}>Artigos &amp; <em style={{fontStyle:'italic',color:'var(--sage)'}}>Conteúdo</em></h2>
        <div className="blog-grid">
          {[{slug:'metodo-calix-etica-performance',cat:'Investimentos',date:'Jan 2026',title:'Método Calix: por que ética e performance não são opostos',excerpt:'Como nossa metodologia com filtro de valores gera resultados superiores no longo prazo.',img:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=75&auto=format'},{slug:'governanca-familiar-sucessao',cat:'Sucessão',date:'Fev 2026',title:'Governança familiar: como estruturar a sucessão sem conflitos',excerpt:'Os principais erros das famílias empresárias no processo sucessório e como evitá-los.',img:'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=75&auto=format'},{slug:'trusts-offshores-quando-faz-sentido',cat:'Offshore',date:'Mar 2026',title:'Trusts e offshores: quando faz sentido para sua família',excerpt:'Um guia objetivo sobre as principais estruturas de proteção patrimonial no exterior.',img:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=75&auto=format'}].map(a=>(
            <Link key={a.slug} href={`/artigos/${a.slug}`} className="bcard">
              <div className="bcard-img"><img src={a.img} alt={a.title} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',filter:'brightness(.8) saturate(.6)'}}/></div>
              <div className="bcard-body"><div className="bcard-tag">{a.cat} · {a.date}</div><h3 className="bcard-title">{a.title}</h3><p className="bcard-excerpt">{a.excerpt}</p><span className="bcard-link">Ler artigo →</span></div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-final" id="contato">
        <div className="eyebrow rv" style={{color:'var(--dark)',justifyContent:'center'}}>Próximo passo</div>
        <h2 className="rv d1">Sua família merece um <em>parceiro à altura.</em></h2>
        <p className="rv d2">Uma conversa inicial, sem compromisso, para entender sua estrutura e explorar como a Calix pode representar os interesses da sua família.</p>
        <div className="cta-actions rv d3">
          <a href="mailto:contato@calixfamilyoffice.com" className="btn-primary">Agendar Conversa</a>
          <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp</a>
        </div>
      </section>

      <Footer />
      <FloatCTA />
    </>
  )
}
