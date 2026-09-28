import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, BrainCircuit, Check, Database, Download, ExternalLink, Github, Layers3, Mail, Menu, MessageSquareText, Search, Workflow, X } from 'lucide-react'

const email = 'aryapohekar4312@gmail.com'
const linkedin = 'https://www.linkedin.com/in/arya-pohekar-2b63011b6'

const skillGroups = [
  { icon: Search, title: 'Discover & define', tags: ['Stakeholder interviews', 'Requirements elicitation', 'Process walkthroughs', 'Gap analysis', 'Business rules'] },
  { icon: Layers3, title: 'Design & deliver', tags: ['BRD / functional requirements', 'User stories & acceptance criteria', 'SDLC', 'Agile / Scrum', 'Jira & Confluence'] },
  { icon: Database, title: 'Analyze & validate', tags: ['Advanced SQL', 'CTEs & window functions', 'Data quality', 'UAT & test cases', 'Defect investigation'] },
  { icon: BarChart3, title: 'Measure & improve', tags: ['Power BI', 'Tableau', 'Excel', 'Python & R', 'KPI reporting'] },
]

const work = [
  {
    number: '01', company: 'Pagaya', role: 'Senior Business / Data Analyst', period: 'NOV 2025 — SEP 2026',
    label: 'BUSINESS + DATA ANALYSIS', title: 'From business questions to validated solutions',
    summary: 'Partnered with business and technology stakeholders to clarify objectives, analyze current-state processes, and translate requests into actionable data and system requirements.',
    points: ['Managed analysis requests from intake through requirements clarification, data analysis, solution validation and UAT.', 'Used SQL, Python, R and Salesforce data to investigate trends, discrepancies, root causes and operational issues.', 'Worked with technical teams to resolve requirement questions and defects, validating delivery against business expectations.'],
    tools: ['SQL', 'Python', 'R', 'Salesforce', 'UAT']
  },
  {
    number: '02', company: 'Dreamline AI', role: 'SAP Business Analyst', period: 'OCT 2024 — OCT 2025',
    label: 'SYSTEMS + PROCESS VALIDATION', title: 'Improving confidence in financial data',
    summary: 'Supported SAP-related finance and operational processes through requirements documentation, transaction validation, reconciliation and testing.',
    points: ['Documented business rules, data and process requirements, acceptance criteria, and expected outcomes.', 'Validated payroll, compliance, revenue, invoice, payment, vendor and transaction datasets to identify discrepancies.', 'Supported UAT by comparing expected versus actual results, documenting defects and coordinating issue resolution.'],
    tools: ['SAP', 'Requirements', 'Data validation', 'UAT', 'Finance ops']
  },
  {
    number: '03', company: 'Community Dreams Foundation', role: 'Data Analyst', period: 'AUG 2024 — OCT 2024',
    label: 'ANALYTICS + DECISION SUPPORT', title: 'Turning operational data into useful signals',
    summary: 'Built analytical and reporting solutions to help leadership monitor performance and make decisions from complex datasets.',
    points: ['Performed extraction, cleansing, manipulation, validation and statistical analysis using SQL, Python and R.', 'Developed analytical models and reporting solutions that improved fraud detection accuracy by 22%.', 'Built KPI dashboards and recurring reports in Tableau and Power BI for clear operational performance insights.'],
    tools: ['SQL', 'Python', 'R', 'Tableau', 'Power BI']
  },
]

const services = [
  ['01', 'Business analysis', 'Stakeholder discovery, requirements elicitation, business rules and clear documentation that connects business goals to delivery.'],
  ['02', 'Data analysis & insights', 'SQL-led investigation, data quality checks, trend analysis and practical insights for operational decisions.'],
  ['03', 'UAT & solution validation', 'Test scenarios, acceptance criteria, expected-versus-actual checks, defect triage and implementation support.'],
  ['04', 'Reporting & dashboards', 'KPI definition, recurring reporting and dashboard experiences using Power BI, Tableau and Excel.'],
  ['05', 'Process improvement', 'Current- and future-state analysis, gap identification and cross-functional alignment to reduce friction in workflows.'],
]

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: .7, delay, ease: [.25, .1, .25, 1] }}>{children}</motion.div>
}

function ContactButton({ children = 'LET’S TALK' }: { children?: React.ReactNode }) {
  return <a className="contact-button" href={`mailto:${email}`}><span>{children}</span><ArrowUpRight size={17} /></a>
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['About', '#about'], ['Expertise', '#expertise'], ['Experience', '#work'], ['Contact', '#contact']]
  return <nav className="navbar">
    <a className="brand" href="#top" aria-label="Arya Pohekar home">AP<span>.</span></a>
    <div className="nav-links">{links.map(([name, href]) => <a key={name} href={href}>{name}</a>)}</div>
    <a className="nav-cta" href={`mailto:${email}`}>GET IN TOUCH <ArrowUpRight size={14}/></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    {open && <div className="mobile-menu">{links.map(([name, href]) => <a key={name} href={href} onClick={() => setOpen(false)}>{name}</a>)}</div>}
  </nav>
}

function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  return <section className="hero" id="top" onMouseMove={e => setMouse({ x: (e.clientX / window.innerWidth - .5) * 12, y: (e.clientY / window.innerHeight - .5) * 12 })}>
    <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
    <Navbar />
    <div className="hero-content">
      <FadeIn className="eyebrow"><span className="status-dot"/> TECHNO-FUNCTIONAL BUSINESS ANALYST <span className="eyebrow-line"/></FadeIn>
      <motion.h1 className="hero-heading" initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, delay: .12 }}>
        BUSINESS<br/><span>MEETS</span> <em>DATA.</em>
      </motion.h1>
      <div className="hero-bottom">
        <FadeIn delay={.35}><p className="hero-description">I turn complex business needs into clear requirements, reliable data, and technology that works for people.</p></FadeIn>
        <motion.div className="orbit-wrap" animate={{ x: mouse.x, y: mouse.y }} transition={{ type: 'spring', stiffness: 70, damping: 18 }}>
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="orbit-core"><span>AP</span><i>✳</i></div>
          <span className="orbit-label label-top">THINK</span><span className="orbit-label label-right">ANALYZE</span><span className="orbit-label label-bottom">DELIVER</span>
        </motion.div>
        <FadeIn delay={.5} className="hero-action"><a href="#work" className="round-link"><ArrowDownRight size={25}/></a><span>SCROLL TO EXPLORE</span></FadeIn>
      </div>
    </div>
    <div className="hero-index"><span>PORTFOLIO / 2026</span><span>PUNE, INDIA · OPEN TO OPPORTUNITIES</span></div>
  </section>
}

function Marquee() {
  const words = ['REQUIREMENTS', 'DATA INSIGHTS', 'UAT & VALIDATION', 'PROCESS DESIGN', 'STAKEHOLDER ALIGNMENT']
  return <div className="marquee-shell" aria-label="Areas of expertise">
    <div className="marquee-track">{[...words, ...words].map((w, i) => <span key={i}>{w}<i>✳</i></span>)}</div>
  </div>
}

function About() {
  const copy = 'I work at the intersection of business, data, and technology. My approach is equal parts structured thinking and curiosity: understand the real problem, make the requirements actionable, then validate that the solution delivers what people need.'
  return <section className="about section-pad" id="about">
    <FadeIn className="section-kicker"><span>01 / A LITTLE ABOUT ME</span><span>THE BIG PICTURE</span></FadeIn>
    <div className="about-grid">
      <FadeIn><h2 className="section-heading">THE WHY<br/><span>BEHIND</span> THE <em>WHAT.</em></h2></FadeIn>
      <div className="about-copy">
        <FadeIn delay={.12}><p className="lead-copy">{copy}</p></FadeIn>
        <FadeIn delay={.2}><p className="muted-copy">With a Master’s in Business Analytics and a Mechanical Engineering foundation, I bring both analytical depth and systems thinking to ambiguous problems. I’m comfortable moving from stakeholder conversations to SQL queries, test scenarios, and clear recommendations.</p></FadeIn>
        <FadeIn delay={.28}><a className="text-link" href={linkedin} target="_blank" rel="noreferrer">MORE ABOUT MY JOURNEY <ArrowUpRight size={16}/></a></FadeIn>
      </div>
    </div>
    <div className="stats-row">
      <div className="stat"><strong>3<span>+</span></strong><p>YEARS OF EXPERIENCE</p></div>
      <div className="stat"><strong>22<span>%</span></strong><p>FRAUD DETECTION ACCURACY IMPROVEMENT*</p></div>
      <div className="stat"><strong>2</strong><p>DEGREES · ANALYTICS + ENGINEERING</p></div>
      <p className="stat-note">*Reported outcome from analytics work at Community Dreams Foundation.</p>
    </div>
  </section>
}

function Expertise() {
  return <section className="expertise section-pad" id="expertise">
    <FadeIn className="section-kicker dark-kicker"><span>02 / WHAT I BRING</span><span>CAPABILITIES</span></FadeIn>
    <FadeIn><h2 className="section-heading dark-heading">BUILT TO<br/><span>CONNECT</span> THE <em>DOTS.</em></h2></FadeIn>
    <div className="skills-grid">{skillGroups.map((group, i) => {
      const Icon = group.icon
      return <FadeIn delay={i * .08} key={group.title} className="skill-card">
        <div className="skill-icon"><Icon size={22}/><span>0{i + 1}</span></div>
        <h3>{group.title}</h3><div className="tag-list">{group.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      </FadeIn>
    })}</div>
    <div className="tool-strip"><span>TOOLKIT</span><p>SQL <b>·</b> Python <b>·</b> R <b>·</b> Power BI <b>·</b> Tableau <b>·</b> Excel <b>·</b> Salesforce <b>·</b> SAP <b>·</b> Jira <b>·</b> Confluence</p></div>
  </section>
}

function WorkCard({ item, index }: { item: typeof work[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (work.length - 1 - index) * .035])
  return <div className="work-card-wrap" ref={ref} style={{ zIndex: index + 1 }}>
    <motion.article className="work-card" style={{ scale, top: `calc(84px + ${index * 18}px)` }}>
      <div className="work-card-top"><span className="work-number">{item.number}</span><span className="work-label">{item.label}</span><span className="work-period">{item.period}</span></div>
      <div className="work-card-heading"><div><h3>{item.company}<span>.</span></h3><p>{item.role}</p></div><a href={linkedin} target="_blank" rel="noreferrer" className="circle-arrow" aria-label={`View ${item.company} profile`}><ArrowUpRight size={22}/></a></div>
      <div className="work-card-body">
        <div className="work-visual" aria-hidden="true">
          {index === 0 ? <><div className="visual-top"><span>ANALYSIS / 001</span><BarChart3 size={18}/></div><div className="chart-bars">{[42,68,52,86,62,95,74,100,67,82,55,90].map((h, i) => <i key={i} style={{ height: `${h}%` }}/>)}</div><div className="visual-bottom"><span>INSIGHT → ACTION</span><span className="visual-pulse"/></div></> :
          index === 1 ? <><div className="visual-top"><span>SYSTEM CHECK / 002</span><Database size={18}/></div><div className="data-lines">{['TRANSACTION VALIDATION','BUSINESS RULES','EXPECTED / ACTUAL','DEFECT RESOLUTION'].map((s, i) => <div key={s}><span>0{i + 1}</span><b>{s}</b><Check size={14}/></div>)}</div><div className="visual-bottom"><span>QUALITY IS A PROCESS</span><span className="visual-pulse"/></div></> :
          <><div className="visual-top"><span>PERFORMANCE / 003</span><BrainCircuit size={18}/></div><div className="metric-visual"><strong>+22<span>%</span></strong><p>FRAUD DETECTION<br/>ACCURACY IMPROVEMENT</p><div className="metric-spark"><svg viewBox="0 0 260 58" role="img" aria-label="Rising trend line"><path d="M2 50 C 25 47, 25 33, 48 39 S 78 13, 103 27 S 133 30, 151 17 S 190 23, 207 10 S 239 13, 258 2" fill="none" stroke="currentColor" strokeWidth="2"/></svg></div></div><div className="visual-bottom"><span>DATA → DECISIONS</span><span className="visual-pulse"/></div></>}
        </div>
        <div className="work-details"><h4>{item.title}</h4><p className="work-summary">{item.summary}</p><ul>{item.points.map(p => <li key={p}>{p}</li>)}</ul><div className="work-tools">{item.tools.map(t => <span key={t}>{t}</span>)}</div></div>
      </div>
    </motion.article>
  </div>
}

function Work() {
  return <section className="work-section section-pad" id="work">
    <FadeIn className="section-kicker"><span>03 / SELECTED EXPERIENCE</span><span>2024 — 2026</span></FadeIn>
    <div className="work-heading-row"><FadeIn><h2 className="section-heading">WORK THAT<br/><span>MOVES</span> THINGS <em>FORWARD.</em></h2></FadeIn><FadeIn delay={.15}><p className="work-intro">A snapshot of the problems I’ve helped unpack, the data I’ve helped clarify, and the solutions I’ve helped validate.</p></FadeIn></div>
    <div className="work-stack">{work.map((item, i) => <WorkCard item={item} index={i} key={item.number}/>)}</div>
  </section>
}

function Services() {
  return <section className="services section-pad">
    <FadeIn className="section-kicker dark-kicker"><span>04 / HOW I CAN HELP</span><span>FROM AMBIGUITY TO CLARITY</span></FadeIn>
    <FadeIn><h2 className="section-heading dark-heading">MAKE THE<br/><span>COMPLEX</span> FEEL <em>CLEAR.</em></h2></FadeIn>
    <div className="service-list">{services.map(([num, title, desc], i) => <FadeIn key={num} delay={i * .05} className="service-row"><span className="service-num">{num}</span><h3>{title}</h3><p>{desc}</p><ArrowUpRight className="service-arrow" size={22}/></FadeIn>)}</div>
  </section>
}

function Education() {
  return <section className="education section-pad">
    <FadeIn className="section-kicker"><span>05 / THE FOUNDATION</span><span>EDUCATION</span></FadeIn>
    <h2 className="section-heading">CURIOUS BY<br/><span>DESIGN.</span></h2>
    <div className="education-grid">
      <FadeIn className="education-item"><span className="edu-year">2022 — 2024</span><div><h3>Master of Science</h3><p>Business Analytics</p><span>University of the Pacific · Eberhardt School of Business</span></div><strong>3.57<span>/4.0</span></strong></FadeIn>
      <FadeIn delay={.1} className="education-item"><span className="edu-year">2018 — 2022</span><div><h3>Bachelor of Science</h3><p>Mechanical Engineering</p><span>All India Shri Shivaji Memorial Society, College of Engineering · Pune</span></div><strong>3.62<span>/4.0</span></strong></FadeIn>
    </div>
  </section>
}

function Contact() {
  return <section className="contact-section section-pad" id="contact">
    <div className="contact-orb orb-one"/><div className="contact-orb orb-two"/>
    <FadeIn className="section-kicker"><span>06 / YOUR TURN</span><span>LET’S MAKE IT MAKE SENSE</span></FadeIn>
    <FadeIn><h2 className="contact-heading">HAVE A<br/><em>GOOD</em> <span>QUESTION?</span></h2></FadeIn>
    <div className="contact-bottom"><p>Have a business problem, an interesting data challenge, or a role where thoughtful analysis makes a difference? I’d love to hear from you.</p><ContactButton>START A CONVERSATION</ContactButton></div>
    <div className="contact-links"><a href={`mailto:${email}`}><Mail size={16}/>{email}<ArrowUpRight size={14}/></a><a href={linkedin} target="_blank" rel="noreferrer"><ExternalLink size={16}/>LINKEDIN<ArrowUpRight size={14}/></a></div>
  </section>
}

function Footer() {
  return <footer className="footer"><a className="brand" href="#top">AP<span>.</span></a><span>BUILT WITH CURIOSITY & A LITTLE SQL.</span><a href="#top">BACK TO TOP ↑</a><span>© ARYA POHEKAR · 2026</span></footer>
}

export default function App() {
  return <main><Hero/><Marquee/><About/><Expertise/><Work/><Services/><Education/><Contact/><Footer/></main>
}