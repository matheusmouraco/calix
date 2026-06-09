import Image from 'next/image'
export default function FloatCTA({ whatsapp = '5511958649091' }: { whatsapp?: string }) {
  return (
    <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="float-cta">
      <div className="float-cta-logo"><Image src="/images/logo_1.png" alt="Calix" width={30} height={30} /></div>
      <span>Fale Conosco</span>
    </a>
  )
}
