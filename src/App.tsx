import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Torrefação', href: '#torrefacao' },
  { label: 'O que oferecemos', href: '#oferecemos' },
  { label: 'Rótulo próprio', href: '#rotulo' },
  { label: 'Contato', href: '#contato' },
  { label: 'Orçamento', href: '#contato', cta: true },
];

const TICKER_ITEMS = [
  'CEREJA DESCASCADA',
  'MOCA',
  'SECAGEM NATURAL',
  'BOURBON',
  'ALTA MOGIANA',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#1a1612] text-white min-h-screen overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="bg-[#f5f0e8] text-[#1a1612] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-8 pb-0">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#888] font-medium mb-1">Café Kurubi · Campinas/SP</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-[#1a1612]">KRB</span>
                <span className="text-xs text-[#888] font-medium">TORREFAÇÃO</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#torrefacao" className="text-[11px] tracking-widest uppercase text-[#555] hover:text-[#1a1612] transition-colors font-medium">A fábrica</a>
              <a href="#oferecemos" className="text-[11px] tracking-widest uppercase text-[#555] hover:text-[#1a1612] transition-colors font-medium">O que oferecemos</a>
              <a href="#rotulo" className="text-[11px] tracking-widest uppercase text-[#555] hover:text-[#1a1612] transition-colors font-medium">Rótulo próprio</a>
              <a href="#contato" className="text-[11px] tracking-widest uppercase text-[#555] hover:text-[#1a1612] transition-colors font-medium">Contato</a>
              <a href="#contato" className="bg-[#1a1612] text-white text-[11px] tracking-widest uppercase px-5 py-2.5 font-medium hover:bg-[#333] transition-colors">Orçamento</a>
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-[#f5f0e8] z-50 px-6 py-4 border-t border-[#e0d8cc] flex flex-col gap-4">
              {NAV_LINKS.map(l => (
                <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                  className={`text-[11px] tracking-widest uppercase font-medium ${l.cta ? 'bg-[#1a1612] text-white px-4 py-2.5 text-center' : 'text-[#555]'}`}>
                  {l.label}
                </a>
              ))}
            </div>
          )}

          {/* Hero content */}
          <div className="grid md:grid-cols-2 gap-10 items-end">
            <div className="pb-16">
              <h1 className="text-5xl md:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
                Torrefação<br />
                <span className="text-[#C8772A]">personalizada</span><br />
                para a sua<br />
                marca.
              </h1>
              <p className="text-[15px] text-[#444] leading-relaxed mb-8 max-w-sm">
                O Kurubi conta com uma fábrica especializada em torrefação, encapsulamento e envase de café para sua marca, garantindo uma experiência excepcional aos seus clientes.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#oferecemos" className="border-2 border-[#1a1612] text-[#1a1612] text-[11px] tracking-widest uppercase px-6 py-3 font-semibold hover:bg-[#1a1612] hover:text-white transition-all duration-200">
                  O que oferecemos
                </a>
                <a href="#contato" className="bg-[#1a1612] text-white text-[11px] tracking-widest uppercase px-6 py-3 font-semibold hover:bg-[#333] transition-all duration-200">
                  Fale com a fábrica
                </a>
              </div>
            </div>
            <div className="relative flex justify-end items-end">
              <img
                src="/images/image copy.png"
                alt="Produtos Café Kurubi"
                className="w-full max-w-md object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Stats bar */}
          <div className="border-t border-[#ddd4c5] mt-0 py-6 flex flex-wrap gap-8 items-center">
            <div>
              <p className="text-3xl font-black text-[#1a1612]">60+</p>
              <p className="text-[10px] tracking-widest uppercase text-[#888] font-medium">Anos de tradição</p>
            </div>
            <div className="w-px h-10 bg-[#ddd4c5] hidden sm:block" />
            <div>
              <p className="text-3xl font-black text-[#1a1612]">4</p>
              <p className="text-[10px] tracking-widest uppercase text-[#888] font-medium">Perfis de café</p>
            </div>
            <div className="w-px h-10 bg-[#ddd4c5] hidden sm:block" />
            <div>
              <p className="text-3xl font-black text-[#1a1612]">100%</p>
              <p className="text-[10px] tracking-widest uppercase text-[#888] font-medium">White Label</p>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-3">
              <span className="bg-[#C8772A] text-white text-[10px] tracking-[0.2em] uppercase font-bold px-4 py-2">Torrefação Kurubi</span>
              <span className="text-[11px] text-[#888] font-medium tracking-wide">Campinas / SP</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="bg-[#1a1612] border-y border-[#2d2820] py-4 overflow-hidden">
        <div className="flex whitespace-nowrap ticker-item">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-6">
              <span className="text-[11px] tracking-[0.3em] uppercase font-semibold text-white/60">{item}</span>
              <span className="text-[#C8772A] text-lg">+</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── A FÁBRICA ── */}
      <section id="torrefacao" className="bg-[#f5f0e8] text-[#1a1612] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8772A] font-semibold mb-5">A fábrica</p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight">
                Uma fábrica<br />
                especializada em<br />
                cada etapa do café.
              </h2>
            </div>
            <div className="pt-2">
              <p className="text-[15px] text-[#444] leading-relaxed mb-6">
                Da torra ao envase, controlamos processos próprios de torrefação, encapsulamento e embalagem — para a linha Kurubi e para marcas terceirizadas, sempre de forma personalizada.
              </p>
              <p className="text-[15px] text-[#444] leading-relaxed">
                Trabalhamos com grãos especiais da nossa Fazenda Santo Antônio, em Pedregulho/SP (Alta Mogiana), ou com os grãos que o seu projeto exigir. Você define o perfil, nós entregamos a experiência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CINCO FRENTES ── */}
      <section id="oferecemos" className="bg-[#1a1612] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8772A] font-semibold mb-5">O que oferecemos</p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight text-white">
                Cinco frentes de produção<br />
                sob o mesmo teto.
              </h2>
            </div>
            <div className="md:pt-10">
              <p className="text-[15px] text-white/60 leading-relaxed">
                Escolhe o formato, o perfil sensorial e a apresentação. Fazemos do blend ao produto pronto para prateleira.
              </p>
            </div>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#2d2820]">
            {[
              {
                num: '01', type: 'FORMATO', title: 'Moído e Grãos',
                items: ['Pacotes de 250g e 500g', 'Cereja Descascada / Moca / Secagem natural / Bourbon']
              },
              {
                num: '02', type: 'FORMATO', title: 'Cápsulas padrão Nespresso®',
                items: ['Latas com 10 unidades', 'Cereja Descascada / Moca / Secagem natural / Bourbon']
              },
              {
                num: '03', type: 'FORMATO', title: 'Drip Coffee',
                items: ['Caixas com 10 sachês ou avulsas', 'Cereja Descascada / Moca / Secagem natural']
              },
              {
                num: '04', type: 'SERVIÇO', title: 'White Label personalizado',
                items: ['Todos os itens podem ser personalizados', 'Cereja Descascada / Moca / Secagem natural / Bourbon']
              },
              {
                num: '05', type: 'SERVIÇO', title: 'Torrefação',
                items: ['Use os nossos grãos', 'Traga os seus grãos']
              },
              {
                num: '06', type: 'SERVIÇO', title: 'Envase & Encapsulamento',
                items: ['Processos próprios de nossa fábrica', 'Personalização completa para a sua marca']
              },
            ].map((s, i) => (
              <div key={i} className="border border-[#2d2820] p-8 hover:bg-[#221e18] transition-colors duration-200">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl font-black text-[#C8772A]">{s.num}</span>
                  <span className="text-[9px] tracking-[0.25em] uppercase text-white/30 font-medium mt-2">{s.type}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-4 leading-tight">{s.title}</h3>
                <ul className="space-y-1.5">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <ChevronRight size={12} className="text-[#C8772A] mt-0.5 flex-shrink-0" />
                      <span className="text-[12px] text-white/50 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÁPSULAS ── */}
      <section className="bg-[#1a1612]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 gap-0 border border-[#2d2820]">
            <div className="relative overflow-hidden min-h-[340px] bg-[#221e18] flex items-center justify-center p-8">
              <img
                src="/images/Ativo-17.png"
                alt="Cápsulas Kurubi"
                className="w-full max-w-xs object-contain"
              />
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8772A] font-semibold mb-4">Cápsulas padrão Nespresso®</p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight text-white mb-6">
                Extração precisa, aroma<br />preservado.
              </h2>
              <p className="text-[14px] text-white/60 leading-relaxed mb-8">
                As cápsulas Kurubi são projetadas para garantir uma extração uniforme dos sabores e aromas do café. Com tecnologia avançada de envase, as cápsulas mantêm o café fresco e preservam suas características distintas até o momento de preparar a bebida.
              </p>
              <a href="#contato"
                className="self-start border border-white/20 text-white text-[11px] tracking-widest uppercase px-6 py-3 font-semibold hover:bg-white hover:text-[#1a1612] transition-all duration-200">
                Latas com 10 cápsulas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DRIP COFFEE ── */}
      <section className="bg-[#1a1612]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 gap-0 border border-[#2d2820]">
            <div className="p-10 md:p-14 bg-[#8B1A1A] flex flex-col justify-center order-2 md:order-1">
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-semibold mb-4">Drip Coffee</p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight text-white mb-6">
                O café que dá para levar no<br />bolso.
              </h2>
              <p className="text-[14px] text-white/70 leading-relaxed mb-8">
                O Drip Coffee Kurubi é fácil de preparar, é uma ótima escolha para fazer café em casa, no escritório ou qualquer lugar. Sachês individuais desenvolvidos para uma extração limpa e rápida.
              </p>
              <a href="#contato"
                className="self-start border border-white/40 text-white text-[11px] tracking-widest uppercase px-6 py-3 font-semibold hover:bg-white hover:text-[#8B1A1A] transition-all duration-200">
                Caixas com 10 sachês ou unidades soltas
              </a>
            </div>
            <div className="relative overflow-hidden min-h-[340px] bg-[#221e18] order-1 md:order-2 flex items-center justify-center p-8">
              <img
                src="/images/Ativo-18.png"
                alt="Drip Coffee Kurubi"
                className="w-full max-w-xs object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── RÓTULO PRÓPRIO ── */}
      <section id="rotulo" className="bg-[#f5f0e8] text-[#1a1612] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/images/image copy.png"
                alt="White Label Kurubi"
                className="w-full object-contain"
              />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8772A] font-semibold mb-4">Rótulo próprio · White Label</p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight mb-6">
                Tenha o seu próprio<br />rótulo.
              </h2>
              <p className="text-[15px] text-[#444] leading-relaxed mb-8">
                Este modelo oferece vantagens como menor investimento inicial e personalização total do produto. Todos os itens da nossa linha podem receber a identidade da sua marca — do café à embalagem.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Drip Coffee', 'Torrado e Moído', 'Cápsulas padrão Nespresso®'].map(t => (
                  <span key={t} className="bg-[#1a1612] text-white text-[10px] tracking-widest uppercase px-3 py-1.5 font-medium">{t}</span>
                ))}
                <span className="border border-[#ddd4c5] text-[#888] text-[10px] tracking-widest uppercase px-3 py-1.5 font-medium">Grão</span>
              </div>

              <ul className="space-y-2 mb-8">
                {[
                  'Menor investimento inicial',
                  'Personalização total do produto',
                  'Perfis: Cereja Descascada, Moca, Secagem Natural, Bourbon',
                  'Use os nossos grãos ou traga os seus',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronRight size={13} className="text-[#C8772A] mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] text-[#444] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#contato"
                className="inline-block bg-[#1a1612] text-white text-[11px] tracking-widest uppercase px-7 py-3.5 font-semibold hover:bg-[#333] transition-colors duration-200">
                Crie o seu rótulo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM NAV ── */}
      <nav className="bg-[#1a1612] border-t border-[#2d2820] py-4 px-6 sticky bottom-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white font-black text-sm tracking-tight">KRB</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-white/40 text-[10px] tracking-widest uppercase font-medium">Torrefação</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#torrefacao" className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors font-medium">Torrefação</a>
            <a href="#oferecemos" className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors font-medium">O que oferecemos</a>
            <a href="#rotulo" className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors font-medium">Rótulo próprio</a>
            <a href="#contato" className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors font-medium">Contato</a>
          </div>
          <a href="#contato"
            className="bg-[#C8772A] text-white text-[10px] tracking-widest uppercase px-5 py-2.5 font-semibold hover:bg-[#b5661e] transition-colors duration-200">
            Orçamento
          </a>
        </div>
      </nav>

      {/* ── FOOTER / CONTATO ── */}
      <section id="contato" className="bg-[#0f0d0a] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8772A] font-semibold mb-5">Fale com a fábrica</p>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight">
                Descubra os sabores<br />
                <span className="text-[#C8772A]">do Café Kurubi.</span>
              </h2>
              <p className="text-[14px] text-white/50 leading-relaxed mt-6 max-w-sm">
                Envie o seu briefing: volume, formato e o perfil de café que combina com a sua marca. Retornaremos com um orçamento personalizado.
              </p>
              <a
                href="https://wa.me/5519965006721"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-[#25D366] text-white text-[11px] tracking-widest uppercase px-7 py-3.5 font-semibold hover:bg-[#1eba57] transition-colors duration-200"
              >
                Falar no WhatsApp
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8772A] font-semibold mb-4">Torrefação</p>
                <p className="text-[13px] text-white/70 leading-relaxed">
                  Rua Sebastião Pedro Franceschini, 65<br />
                  Parque Via Norte · Campinas/SP
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8772A] font-semibold mb-4">Cafeteria</p>
                <p className="text-[13px] text-white/70 leading-relaxed">
                  Rua Barão Geraldo de Rezende, 100<br />
                  Botafogo · Campinas/SP
                </p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8772A] font-semibold mb-4">Contato</p>
                <p className="text-[13px] text-white/70 leading-relaxed">
                  19 9669 6731 · 19 3203.0323<br />
                  <span className="text-white/40">cafekurubi.com.br</span>
                </p>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-[#2d2820] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-white font-black text-base tracking-tight">KRB</span>
              <span className="text-white/20 text-sm">·</span>
              <span className="text-white/30 text-[11px] tracking-widest uppercase font-medium">Café Kurubi</span>
            </div>
            <p className="text-[11px] text-white/20">© 2024 Café Kurubi. Todos os direitos reservados.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
