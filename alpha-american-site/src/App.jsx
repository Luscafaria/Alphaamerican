import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Wrench, Fan, Bolt, PaintRoller, Hammer, Sun, ShowerHead, House, Grid3X3, Quote, Phone, Mail, MapPin, Globe } from 'lucide-react'

const BRAND = {
  name: 'Alpha American Company Corporation',
  phone: '+1 (321) 512-8965',
  email: 'contact@alphaamericancorp.com',
  address: 'Orlando, Florida',
  tagline: 'Excellence in Home Maintenance & Remodeling',
  logoUrl: '/alpha-american-logo.webp',
}

const NAVY = '#0B2239'
const RED = '#C61F2C'

const SERVICES = [
  { icon: Wrench, title: 'Residential Maintenance', subtitle: 'Monthly Contracts', bullets: ['Preventive & corrective care', 'Scheduled inspections', 'Detailed performance reports'] },
  { icon: Fan, title: 'HVAC', subtitle: 'Install • Replace • Maintain', bullets: ['Professional installs', 'Duct cleaning', 'Efficiency checks'] },
  { icon: Bolt, title: 'Electrical', subtitle: 'Repairs & Upgrades', bullets: ['Breakers & panels', 'Lighting & outlets', 'Emergency systems'] },
  { icon: PaintRoller, title: 'Painting & Finishes', subtitle: 'Interior & Exterior', bullets: ['Premium materials', 'Decorative finishes', 'Drywall & trim'] },
  { icon: Hammer, title: 'Small Remodeling', subtitle: 'Bathrooms • Interiors', bullets: ['Cost‑effective updates', 'Quick turnaround', 'Modern design'] },
  { icon: Sun, title: 'Pool Heating', subtitle: 'Heat • Automate • Maintain', bullets: ['Efficient heaters', 'Leak detection', 'Auto temp control'] },
  { icon: ShowerHead, title: 'Plumbing', subtitle: 'Repairs & Installs', bullets: ['Leaks & fixtures', 'Water heaters', 'Valves & lines'] },
  { icon: House, title: 'Home Automation', subtitle: 'Smart Integrations', bullets: ['Lighting & climate', 'Audio & security', 'App / Alexa / Google'] },
  { icon: Grid3X3, title: 'Pavers, Gutters & Pergolas', subtitle: 'Outdoor Enhancements', bullets: ['Durable pavers', 'Custom gutters', 'Wood/aluminum pergolas'] },
]

const TESTIMONIALS = [
  { quote: 'Alpha keeps our vacation homes immaculate and guest‑ready. Fast response, zero headaches.', name: 'Michael R.', role: 'Property Manager – Kissimmee' },
  { quote: 'Professional HVAC replacement, spotless finish, and clear reporting. Worth every dollar.', name: 'Sofia L.', role: 'Homeowner – Winter Garden' },
  { quote: 'One partner for electrical, painting, and pool heating. On‑time and on‑budget.', name: 'Daniel K.', role: 'Investor – Davenport' },
]

const AREAS = ['Orlando', 'Kissimmee', 'Lake Buena Vista', 'Celebration', 'Davenport', 'Clermont', 'Winter Garden']

const i18n = {
  en: {
    nav: ['Services','Quality','Testimonials','Contact'],
    heroHeadline: 'Premium Property Care for Florida Homes',
    heroSub: 'Maintenance, repairs, and remodeling with speed, precision, and transparency. Specialists in vacation homes and monthly maintenance contracts across Orlando and all Florida.',
    badges: ['12+ Years in Florida','Vacation Home Specialists','Licensed & Insured'],
    servicesIntro: 'From preventive maintenance to upgrades and outdoor enhancements — one partner for everything your property needs.',
    qualityTitle: 'Built‑in Quality, End‑to‑End',
    qualitySub: 'Quality is engineered into our process — not inspected at the end. We combine certified talent, premium materials, and accountable communication to deliver results that last.',
    ctaBandTitle: 'Ready for premium property care?',
    ctaBandSub: 'Request a free quote — we’ll reply within one business day.',
    contactTitle: 'Contact',
    contactSub: 'Tell us about your property and the services you need. Our team will get back to you with a clear scope and pricing options.',
    contactBtn: 'Send Request',
    getQuote: 'Get a Free Quote',
    explore: 'Explore Services',
    getQuoteShort: 'Get Quote',
    testimonials: 'What Clients Say',
    certifications: 'Licenses & Certifications',
    serviceAreas: 'Service Areas',
  },
  pt: {
    nav: ['Serviços','Qualidade','Depoimentos','Contato'],
    heroHeadline: 'Cuidado Premium para Casas na Flórida',
    heroSub: 'Manutenção, reparos e remodelações com rapidez, precisão e transparência. Especialistas em casas de temporada e contratos mensais em Orlando e toda a Flórida.',
    badges: ['12+ anos na Flórida','Especialistas em Vacation Homes','Licenciados & Segurados'],
    servicesIntro: 'Da manutenção preventiva aos upgrades e áreas externas — um parceiro para tudo que sua propriedade precisa.',
    qualityTitle: 'Qualidade Integrada, de Ponta a Ponta',
    qualitySub: 'Qualidade faz parte do processo — não apenas da inspeção final. Aliamos especialistas certificados, materiais premium e comunicação responsável para entregar resultados duradouros.',
    ctaBandTitle: 'Pronto para um cuidado premium?',
    ctaBandSub: 'Solicite um orçamento — respondemos em até um dia útil.',
    contactTitle: 'Contato',
    contactSub: 'Conte sobre sua propriedade e os serviços desejados. Enviaremos um escopo claro com opções de preço.',
    contactBtn: 'Enviar Solicitação',
    getQuote: 'Solicitar Orçamento',
    explore: 'Ver Serviços',
    getQuoteShort: 'Orçamento',
    testimonials: 'O que os clientes dizem',
    certifications: 'Licenças & Certificações',
    serviceAreas: 'Áreas de Atendimento',
  }
}

export default function App() {
  const [lang, setLang] = useState('en')
  const t = i18n[lang]

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={BRAND.logoUrl} alt="Alpha American Company" className="h-9 w-auto" />
            <div className="leading-tight hidden sm:block">
              <p className="font-semibold">{BRAND.name}</p>
              <p className="text-xs text-neutral-500">{BRAND.tagline}</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-5">
            <a href="#services" className="text-sm hover:text-neutral-700">{t.nav[0]}</a>
            <a href="#quality" className="text-sm hover:text-neutral-700">{t.nav[1]}</a>
            <a href="#testimonials" className="text-sm hover:text-neutral-700">{t.nav[2]}</a>
            <a href="#contact" className="text-sm hover:text-neutral-700">{t.nav[3]}</a>
            <button className="btn btn-primary rounded-2xl">{t.getQuote}</button>
            <button onClick={() => setLang(lang === 'en' ? 'pt' : 'en')} className="ml-2 inline-flex items-center gap-2 text-sm border px-3 py-1 rounded-xl">
              <Globe className="w-4 h-4" /> {lang === 'en' ? 'PT' : 'EN'}
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center" style={{ backgroundColor: NAVY }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,34,57,0.94) 0%, rgba(11,34,57,0.96) 50%, rgba(11,34,57,0.98) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-10 items-center text-white">
            <div>
              <img src={BRAND.logoUrl} alt="Alpha American Company" className="h-14 w-auto drop-shadow" />
              <h1 className="mt-5 text-4xl/tight sm:text-6xl font-extrabold tracking-tight">{t.heroHeadline}</h1>
              <p className="mt-4 text-lg text-neutral-200 max-w-2xl">{t.heroSub}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary rounded-2xl">{t.getQuote}</a>
                <a href="#services" className="btn btn-outline-white rounded-2xl hover:bg-white/10">{t.explore}</a>
              </div>
              <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                {t.badges.map((txt) => (<li key={txt} className="badge"><CheckCircle2 className="w-5 h-5" /> {txt}</li>))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-2xl">
                <p className="text-xl font-semibold">On‑time. On‑budget. Above expectations.</p>
                <p className="mt-2 text-neutral-300">Transparent scopes, clean workmanship, documented reporting — engineered for vacation homes.</p>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  {[['<24h','Avg. response'],['500+','Projects delivered'],['4.9/5','Client rating']].map(([v,k]) => (
                    <div key={k} className="rounded-xl bg-white/5 border border-white/10 p-5">
                      <div className="text-3xl font-bold">{v}</div>
                      <div className="text-xs text-neutral-300">{k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: NAVY }}>Services</h2>
            <p className="mt-2 text-neutral-600">{t.servicesIntro}</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, subtitle, bullets }) => (
              <div key={title} className="card hover:shadow-2xl hover:-translate-y-0.5 transition-all">
                <div className="card-body">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl grid place-items-center text-white" style={{ backgroundColor: NAVY }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold leading-tight">{title}</h3>
                      <p className="text-sm text-neutral-500">{subtitle}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" style={{ color: NAVY }} /> {b}</li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <a href="#contact" className="btn rounded-2xl" style={{ borderColor: NAVY, color: NAVY, borderWidth: 1 }}>{t.getQuoteShort}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section id="quality" className="py-20" style={{ backgroundColor: '#F6F8FB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: NAVY }}>{t.qualityTitle}</h2>
            <p className="mt-3 text-neutral-600">{t.qualitySub}</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {[
              ['12+ Years Proven','Experience across Florida, strong track record in vacation homes.'],
              ['Certified Specialists','Skilled teams for HVAC, electrical, plumbing, painting, and more.'],
              ['Premium Materials','We specify high‑grade products for durability and finish.'],
              ['On‑Time Delivery','Clear scope, tight scheduling, and clean hand‑offs.'],
              ['Transparent Reports','Monthly inspections and documented work for peace of mind.'],
              ['Single Partner','One contract, many solutions — faster decisions, better outcomes.'],
            ].map(([title,desc]) => (
              <div key={title} className="card bg-white">
                <div className="card-body">
                  <h4 className="text-base font-semibold">{title}</h4>
                  <p className="text-sm text-neutral-600 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-12" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-2xl font-semibold">{t.certifications}</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {['Licensed & Insured','EPA Certified (HVAC)','Background‑Checked Technicians'].map((s) => (
              <div key={s} className="rounded-2xl border border-white/15 bg-white/5 p-4">{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold" style={{ color: NAVY }}>{t.serviceAreas}</h2>
          <p className="text-neutral-600 mt-2">Central Florida coverage with quick response times.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {AREAS.map((a) => (
              <span key={a} className="rounded-full border border-neutral-200 px-4 py-2 text-sm">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: NAVY }}>{t.testimonials}</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((tst, i) => (
              <div key={i} className="card">
                <div className="card-body pt-6">
                  <Quote className="w-6 h-6" style={{ color: RED }} />
                  <p className="mt-4 text-neutral-700">“{tst.quote}”</p>
                  <p className="mt-4 font-semibold">{tst.name}</p>
                  <p className="text-sm text-neutral-500">{tst.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-12 text-white" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-2xl font-semibold">{t.ctaBandTitle}</p>
            <p className="text-neutral-300">{t.ctaBandSub}</p>
          </div>
          <a href="#contact" className="btn btn-primary rounded-2xl">{t.getQuote}</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: NAVY }}>{t.contactTitle}</h2>
            <p className="mt-2 text-neutral-600">{t.contactSub}</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> {BRAND.phone}</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> {BRAND.email}</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {BRAND.address}</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-body">
              <form className="grid grid-cols-1 gap-4" action={`mailto:${BRAND.email}`} method="POST" encType="text/plain">
                <input name="name" className="input" placeholder={lang==='en' ? 'Full name' : 'Nome completo'} required />
                <input name="email" type="email" className="input" placeholder="Email" required />
                <input name="phone" className="input" placeholder={lang==='en' ? 'Phone' : 'Telefone'} />
                <input name="city" className="input" placeholder={lang==='en' ? 'Property city' : 'Cidade do imóvel'} />
                <textarea name="message" className="textarea" rows={5} placeholder={lang==='en' ? 'Tell us about your needs (e.g., monthly maintenance, HVAC install, painting)…' : 'Conte suas necessidades (ex.: manutenção mensal, instalação de HVAC, pintura)…'} />
                <input type="hidden" name="subject" value="Quote Request – Alpha American" />
                <button type="submit" className="btn btn-primary rounded-2xl">{t.contactBtn}</button>
                <p className="text-xs text-neutral-500">By submitting, you agree to be contacted about your request.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING CTA */}
      <a href="#contact" className="fixed bottom-6 right-6 z-50 btn btn-primary rounded-full shadow-2xl"> {t.getQuote} </a>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <img src={BRAND.logoUrl} alt="Alpha American Company" className="h-10 w-auto" />
            <p className="text-sm text-neutral-300">{BRAND.tagline}</p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-semibold">Navigation</p>
            <a href="#services" className="block text-neutral-300 hover:text-white">{t.nav[0]}</a>
            <a href="#quality" className="block text-neutral-300 hover:text-white">{t.nav[1]}</a>
            <a href="#testimonials" className="block text-neutral-300 hover:text-white">{t.nav[2]}</a>
            <a href="#contact" className="block text-neutral-300 hover:text-white">{t.nav[3]}</a>
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-semibold">{t.contactTitle}</p>
            <p className="text-neutral-300">{BRAND.email}</p>
            <p className="text-neutral-300">{BRAND.phone}</p>
            <p className="text-neutral-300">{BRAND.address}</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-neutral-400 flex items-center justify-between">
            <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
            <span>Orlando • Florida • Vacation Home Specialists</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
