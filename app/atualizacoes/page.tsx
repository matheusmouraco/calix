import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FloatCTA from '@/components/FloatCTA'
const ARTIGOS = [
  {slug:'metodo-calix-etica-performance',cat:'Investimentos',date:'Janeiro de 2026',title:'Método Calix: por que ética e performance não são opostos',excerpt:'Como nossa metodologia de seleção de ativos com filtro de valores gera resultados superiores no longo prazo.',img:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=75&auto=format'},
  {slug:'governanca-familiar-sucessao',cat:'Sucessão',date:'Fevereiro de 2026',title:'Governança familiar: como estruturar a sucessão sem conflitos',excerpt:'Os principais erros das famílias empresárias no processo sucessório.',img:'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=75&auto=format'},
  {slug:'trusts-offshores-quando-faz-sentido',cat:'Offshore',date:'Março de 2026',title:'Trusts e offshores: quando faz sentido para sua família',excerpt:'Um guia objetivo sobre as principais estruturas de proteção patrimonial no exterior.',img:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=75&auto=format'},
]
export default function Atualizacoes() {
  return (<>
    <style>{`.arts-page{padding-top:72px}.arts-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;padding:70px 5vw 80px}.art-card{border:1px solid #ececec;overflow:hidden;display:flex;flex-direction:column;transition:border-color .3s,transform .3s;text-decoration:none}.art-card:hover{border-color:#b5caaa;transform:translateY(-3px)}.art-card-img{height:210px;overflow:hidden}.art-card-img img{width:100%;height:100%;object-fit:cover;filter:saturate(.65)}.art-card-body{padding:1.8rem;flex:1;display:flex;flex-direction:column;gap:.8rem}.art-cat{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.25em;text-transform:uppercase;color:#b5caaa}.art-title{font-family:'Lora',serif;font-size:20px;font-weight:400;line-height:1.4;color:#111a1b;flex:1}.art-excerpt{font-size:14px;font-weight:300;line-height:1.75;color:#666}.art-link{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#192627}@media(max-width:900px){.arts-grid{grid-template-columns:1fr 1fr}}@media(max-width:600px){.arts-grid{grid-template-columns:1fr;padding:50px 1.2rem 60px}}`}</style>
    <Nav /><div className="arts-page">
      <section className="page-hero"><div className="page-eyebrow">Atualizações</div><h1 className="page-title">Artigos &amp; <em>Conteúdo</em></h1><p className="page-sub">Análises, perspectivas e orientações sobre planejamento patrimonial, investimentos e governança familiar.</p></section>
      <div className="arts-grid">{ARTIGOS.map(a=>(<Link key={a.slug} href={`/artigos/${a.slug}`} className="art-card"><div className="art-card-img"><img src={a.img} alt={a.title} loading="lazy"/></div><div className="art-card-body"><span className="art-cat">{a.cat} · {a.date}</span><h2 className="art-title">{a.title}</h2><p className="art-excerpt">{a.excerpt}</p><span className="art-link">Ler artigo →</span></div></Link>))}</div>
    </div><Footer /><FloatCTA />
  </>)
}
