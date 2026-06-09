import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FloatCTA from '@/components/FloatCTA'
export default function Sobre() {
  return (<><Nav /><div style={{paddingTop:72}}>
    <section className="page-hero"><div className="page-eyebrow">Quem Somos</div><h1 className="page-title">A <em>equipe</em> Calix</h1><p className="page-sub">Profissionais dedicados a representar os interesses das famílias com independência total.</p></section>
    <div style={{padding:'80px 5vw',textAlign:'center'}}><p style={{fontSize:18,fontWeight:300,color:'#555',maxWidth:600,margin:'0 auto'}}>Conheça mais sobre nossa equipe em breve.</p><a href="/#sobre" style={{display:'inline-block',marginTop:'2rem',fontFamily:'DM Mono,monospace',fontSize:11,letterSpacing:'.15em',textTransform:'uppercase',color:'var(--dark)',border:'1px solid rgba(25,38,39,.25)',padding:'14px 28px',textDecoration:'none'}}>← Voltar ao início</a></div>
  </div><Footer /><FloatCTA /></>)
}
