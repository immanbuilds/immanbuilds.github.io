import { motion } from "motion/react";
import { ArrowRight, CheckCircle, ExternalLink, Mail, MessageSquare, Phone, ShieldCheck, Quote, Github, Linkedin, Instagram, Terminal } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-slate-50/70 backdrop-blur-xl shadow-sm">
    <div className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto">
      <div className="text-xl font-bold tracking-tighter text-slate-900 font-headline uppercase">
        immanbuilds
      </div>
      <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
        <a className="text-slate-600 hover:text-primary transition-colors" href="#about">About</a>
        <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#services">Services</a>
        <a className="text-slate-600 hover:text-primary transition-colors" href="#projects">Projects</a>
        <a className="text-slate-600 hover:text-primary transition-colors" href="#security">Cybersecurity</a>
        <a className="text-slate-600 hover:text-primary transition-colors" href="#testimonials">Testimonials</a>
        <a className="text-slate-600 hover:text-primary transition-colors" href="#connect">Connect</a>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://wa.me/919894803044" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-2.5 rounded-lg font-label text-sm font-semibold hover:opacity-80 transition-all active:scale-95 duration-300">
          Chat Now
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center px-8 max-w-7xl mx-auto overflow-hidden py-20 pt-32">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:col-span-7 z-10"
      >
        <span className="inline-block font-label text-primary font-bold tracking-widest text-xs uppercase mb-4">Available for Freelance</span>
        <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface leading-[0.9] mb-6">
          I’m Prince Immanuel
          <span className="block text-primary">Website Developer</span>
        </h1>
        <p className="font-body text-xl text-slate-600 max-w-xl mb-10 leading-relaxed">
          I help businesses get online by building websites, improving SEO, and maintaining their digital presence.
        </p>
        <div className="flex flex-wrap gap-4">
          <a className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-md font-semibold hover:opacity-90 transition-all flex items-center gap-2" href="#services">
            Services
            <ArrowRight size={18} />
          </a>
          <a href="https://wa.me/919894803044" target="_blank" rel="noopener noreferrer" className="bg-slate-100 text-primary px-8 py-4 rounded-md font-semibold hover:bg-slate-200 transition-all flex items-center gap-2">
            Chat Now
            <MessageSquare size={18} />
          </a>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="md:col-span-5 relative h-[500px] md:h-[600px]"
      >
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="glass-panel absolute inset-4 rounded-2xl border border-white/20 shadow-2xl overflow-hidden flex items-center justify-center">
          <img 
            className="w-full h-full object-cover grayscale-img" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkuQ55vSv2ljoIV2ct2W_j41QT4CyulXtYquT_lnlOSyjkJp-4CgRgw0mu9KcGSc2JDRCKlrPO2K-EGHQxueS4hQega7sIPrchyRkyHRo159FRaEWzeeV7aVJECkSH71z23s4JRfOLDKguI_gKkFkiTxRdW-dXcauNC-jphKYKDKp0Nj4KDKp0Nj4KZZhAvsVD7Y4k69nk3C3jNaqqfw4c7a9MeWMhTZjmdmjwUESPiR4Fnc8SDNkNO-k9o0JDgAx1OnO2WVC2Mbuitm-HVTQ" 
            alt="Prince Immanuel"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section className="bg-slate-950 text-slate-200 py-32 px-8 overflow-hidden relative" id="about">
    {/* Background Grid Pattern */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Large Typographic Statement */}
        <div className="lg:col-span-7">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-12">
              About
            </h2>
            
            <div className="max-w-2xl">
              <p className="font-body text-xl text-slate-400 leading-relaxed mb-12">
                I’m <span className="text-white font-bold">Prince Immanuel</span>, a freelance web developer helping businesses build their online presence. I design and develop websites, improve SEO to increase visibility on search engines, and maintain websites to prevent technical issues. My focus is to help businesses grow online with simple, effective, and reliable digital solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Visual/Technical Grid */}
        <div className="lg:col-span-5">
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Secure by Design", desc: "Security isn't an afterthought; it's the foundation of every build.", icon: <ShieldCheck size={24} /> },
              { title: "Performance First", desc: "Lightning fast load times and optimized core web vitals.", icon: <Terminal size={24} /> },
              { title: "Growth Oriented", desc: "SEO strategies that turn websites into lead generation machines.", icon: <ArrowRight size={24} /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-slate-900/50 border border-slate-800 rounded-xl hover:bg-primary/10 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-xl mb-2 text-white">{item.title}</h3>
                    <p className="text-slate-400 font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-32 px-8 max-w-7xl mx-auto" id="services">
    <div className="mb-16">
      <h2 className="font-headline text-5xl font-bold tracking-tight mb-4 text-on-surface">Digital Solutions</h2>
      <div className="h-1 w-20 bg-primary"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
      <div className="group relative bg-white p-12 hover:bg-primary transition-all duration-500 overflow-hidden border-r border-b border-slate-100">
        <div className="relative z-10">
          <span className="font-label text-primary group-hover:text-white transition-colors">01</span>
          <h3 className="font-headline text-3xl font-bold my-6 text-on-surface group-hover:text-white transition-colors">Website Development</h3>
          <p className="font-body text-slate-500 group-hover:text-white/80 transition-colors mb-8 text-lg">
            I build professional websites that help businesses establish their online presence and attract customers. Includes Business, E-commerce, Portfolio Websites, and Maintenance.
          </p>
          <div className="flex flex-wrap gap-2">
            {["E-COMMERCE", "PORTFOLIO", "BUSINESS"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-slate-100 rounded text-xs font-bold group-hover:bg-white/20 transition-colors">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="group relative bg-white p-12 hover:bg-primary transition-all duration-500 overflow-hidden border-b border-slate-100">
        <div className="relative z-10">
          <span className="font-label text-primary group-hover:text-white transition-colors">02</span>
          <h3 className="font-headline text-3xl font-bold my-6 text-on-surface group-hover:text-white transition-colors">SEO Services</h3>
          <p className="font-body text-slate-500 group-hover:text-white/80 transition-colors mb-8 text-lg">
            I help businesses improve their visibility on search engines. Includes SEO Audit, Competitor Analysis, On-page, Content, and Technical SEO.
          </p>
          <ul className="grid grid-cols-2 gap-y-2 text-sm font-bold font-label text-primary group-hover:text-white transition-colors">
            {["SEO AUDIT", "CONTENT SEO", "ON-PAGE", "TECHNICAL"].map(item => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle size={14} /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section className="py-32 bg-secondary" id="projects">
    <div className="max-w-7xl mx-auto px-8">
      <div className="mb-16">
        <span className="font-label text-primary-container tracking-[0.3em] text-xs uppercase mb-2 block">Case Studies</span>
        <h2 className="font-headline text-5xl font-bold text-white tracking-tighter">Recent Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="aspect-video mb-8 overflow-hidden rounded-xl bg-slate-800">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale-img" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlFXxx4Qcgb0JH8Ax9z6zQcAbxnUcK_PaYP8SxK8308sgK4aoLk2wOk7-MvJ7wQGndDfBnBI3tCKclA5CcITzQNWiVsbBrhgRWd-c09D0JiwuCtVDe3dRAAzVCGZVbvsNnI_4i7t5fRnGlP8zHHCKejAHjK2xc2Uv81U7sSAmVd2Cz2rMRhKrfsmX85t7V3xlJsvbuudVCQpijpieCOWg2Ab9vIRrx_A0W6kIHxcDhIgZmv8R5p-IBM4ffrhF0p9D2eCpBBOZL3Mw" 
              alt="Logistics Project"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="font-headline text-2xl font-bold text-white mb-2">cheservicebureaulogisticsllp.com</h3>
          <p className="text-slate-400 font-body mb-6">WordPress business portfolio for a logistics company focused on efficiency and scale.</p>
          <a className="text-primary-container hover:text-white transition-colors font-bold text-sm inline-flex items-center gap-2" href="#">
            VIEW PROJECT <ExternalLink size={16} />
          </a>
        </motion.div>
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group"
        >
          <div className="aspect-video mb-8 overflow-hidden rounded-xl bg-slate-800">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale-img" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIrlpKgjj3qhhy3Hgk2t6vY8h3LELBdOR16ogfpXjv_Fsa_gdXZPPlCJlwEnZoTiFhXUNCb5s_lJ-80thpHpE3w-0EjX4XPSLbIkG7oOcEOmVoc7nddZM9P0zeLb7iUoBzm9Q7NTszknu_Qw6-ezJgS7MQCRhl5PCmXvZ1caIaGy4sv8qrQ67nD4pkRoM3HBGRj6U_CCl4-HZwp_dEAM_KKkxzIA_VQ850pC8houRhbI62DlDIiWcB7i8aqGxywPIf_mgzaN-AjvA" 
              alt="Interior Design Project"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="font-headline text-2xl font-bold text-white mb-2">livzenstudio.in</h3>
          <p className="text-slate-400 font-body mb-6">Modern website for an interior design firm showcasing high-end spatial aesthetics.</p>
          <a className="text-primary-container hover:text-white transition-colors font-bold text-sm inline-flex items-center gap-2" href="#">
            VIEW PROJECT <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

const Security = () => (
  <section className="py-32 px-8 max-w-7xl mx-auto" id="security">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
      <div className="md:col-span-5 sticky top-32">
        <span className="font-label text-tertiary font-bold tracking-widest text-xs uppercase mb-4 block">Future Penetration Tester</span>
        <h2 className="font-headline text-5xl font-bold tracking-tight mb-8">Cyber Security Journey</h2>
        <p className="font-body text-xl text-slate-600 leading-relaxed mb-8">
          Passionate about becoming a Penetration Tester. Conducted cyber security awareness and training programs. Goal is to build functional and secure websites.
        </p>
        <div className="bg-tertiary/5 p-6 rounded-lg border-l-4 border-tertiary">
          <p className="text-tertiary font-bold font-label italic">"Security is not a feature, it's a foundation."</p>
        </div>
      </div>
      <div className="md:col-span-7">
        <h3 className="font-headline text-2xl font-bold mb-12 flex items-center gap-3">
          <Terminal size={24} className="text-tertiary" />
          Awareness & Training Activities
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDCwXgM0MlWMca0UcMgNfZ6w1Ej-x_ZGWvqjKyE1JWjkpbGLz-PJO6LeHoL2btk0KgOi4-0lxvNSVEyzhXReIP_7DDMK-mYVBHnPg5B0N2BhY3AUnDffU_TOmfH9ENF_wzpi6jgDh3pR5K_hU4G2govoWJ8VRsWZWQHdAGAxIxeyOjMnqVePPUxOIw1oBaRLdYYRw1VQCeaHPeTvOuQMJs1OAEBTmum6n8rzlXgxDox1WM2z6nvfHLyL5eDvpcqoiACKxgcSg14Dcw",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC8j4fduxXC6nX1A4SjlWu1FuQEzRzFbxuaymy0WHAno-3XQfqRJ_XowpiLnwweTXXQMcKZ1KC-p1o9Gx4yiC3rkwWDdYTfH7wWTBL2frhzY7GQ5WqtUc5q_mR8mWDxU7f3VHkS-mFrbf5vY-eloH5Dq3t-AjEVmGEAByYEJy_dtnfPcop2Acg3qIDBbljxNtl0UIa5mGdlXZa2JikSrda0p8qbbSliOR3m6XDtRDUnEwCK4TSjHLLLAnQ2TAG5uCiOvTcjQ0BL3Ys",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAu3ZQncNtaRqrHgbTm3x32_dv5DVTwxwjlapl1CrLoJTioQeiqd_tNV0KLs_s6hjHXZ-Qrfj-jlCFW1iNiD2W1REyYvBB5jaHU2zP_QA4X7SupZa6wMeAykV2XSJRzkEv05vLHJBSgGgNcJBvf54VgAxztURlCbWxAmzwBMZnQKm1uaWjTY1VbLHs401lhYXkaTYvnMmtmXyCUdWyexrjjQW8IqPRJFuofJHuBAvl8jkAPsjBGXeI8ubFigszQZrcsO16O8aygUEs",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAlA6HbUM7oN6TUuz-Z7nld-uq1MX6mZ9qp2KrUIU7qeMjkEtRVlSOUil2FdB2BxZObVnKawzFMOlMMovdZB2NUPgqU4I00eFvAIR5iEocqxEdS3NNC8cEMavznSRsCdiNDSVosHbygU5o4yxNcatCjh2OPrFgvZOp2VJRv97vybYRGNGqopM8b-4uYDrU3lrcHxsoKb59li2AT5ir_Wy06HnYApoxgnYz_jmwvKOeWNsHHFGXnP34Llh-ddzBKkr3YfrJCq-2sAuY"
          ].map((src, idx) => (
            <div key={idx} className={`aspect-square bg-slate-100 rounded-xl overflow-hidden shadow-lg ${idx % 2 !== 0 ? 'mt-8' : ''}`}>
              <img 
                className="w-full h-full object-cover grayscale-img" 
                src={src} 
                alt={`Training ${idx}`}
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="py-24 bg-slate-50" id="testimonials">
    <div className="max-w-4xl mx-auto px-8 text-center">
      <Quote size={64} className="text-primary mx-auto mb-8 opacity-20" />
      <p className="font-headline text-2xl md:text-3xl font-medium text-on-surface leading-tight mb-12 italic">
        "I recently worked with this website development for my business website, and I am very satisfied with their service. Mr. Prince understood my requirements clearly and created a professional and modern design. Communication was smooth throughout the project, and they delivered the website on time. The website is fast, mobile-friendly, and easy to use. Prince also provided good support after delivery whenever I needed changes. I highly recommend them to anyone looking for quality website development services."
      </p>
      <div>
        <p className="font-headline font-bold text-on-surface">Service Bureau Logistics LLP</p>
        <p className="font-label text-slate-500 text-sm tracking-widest uppercase">CLIENT PARTNER</p>
      </div>
    </div>
  </section>
);

const Connect = () => (
  <section className="py-32 px-8 max-w-7xl mx-auto text-center" id="connect">
    <h2 className="font-headline text-4xl font-bold mb-12">Let's connect in the digital space.</h2>
    <div className="flex flex-wrap justify-center gap-12">
      {[
        { label: "LinkedIn", icon: <Linkedin size={24} />, color: "hover:bg-primary", href: "https://www.linkedin.com/in/cyberwithprince/" },
        { label: "GitHub", icon: <Github size={24} />, color: "hover:bg-slate-900", href: "https://github.com/cyberwithprince" },
        { label: "TryHackMe", icon: <Terminal size={24} />, color: "hover:bg-tertiary", href: "https://tryhackme.com/p/0xPr1nce" },
        { label: "Email", icon: <Mail size={24} />, color: "hover:bg-red-600", href: "mailto:immanbuilds@gmail.com" }
      ].map(social => (
        <a key={social.label} className="group flex items-center gap-3 font-headline text-2xl font-bold hover:text-primary transition-colors" href={social.href} target="_blank" rel="noopener noreferrer">
          <span className={`w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:text-white group-hover:border-transparent transition-all ${social.color}`}>
            {social.icon}
          </span>
          {social.label}
        </a>
      ))}
    </div>
  </section>
);

const FooterCTA = () => (
  <section className="py-24 bg-primary text-white text-center px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 tracking-tight italic">Ready to grow your business online?</h2>
      <p className="font-body text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
        Let’s build a high-performing website tailored to your business goals. Secure, fast, and SEO-optimized from day one.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="tel:+919894803044" className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all flex items-center gap-2 shadow-lg">
          <Phone size={20} />
          Call Me
        </a>
        <a href="https://wa.me/919894803044" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg">
          <MessageSquare size={20} />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-50 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="font-headline font-bold text-slate-900 text-lg uppercase tracking-tighter">
        immanbuilds
      </div>
      <div className="flex gap-8 font-body text-sm text-slate-500">
        <a className="hover:text-slate-900 transition-colors" href="https://github.com/cyberwithprince" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="hover:text-slate-900 transition-colors" href="https://www.linkedin.com/in/cyberwithprince/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="hover:text-slate-900 transition-colors" href="mailto:immanbuilds@gmail.com">Email</a>
        <a className="hover:text-slate-900 transition-colors underline decoration-primary" href="https://tryhackme.com/p/0xPr1nce" target="_blank" rel="noopener noreferrer">TryHackMe</a>
      </div>
      <div className="text-slate-500 font-body text-sm">
        © 2026 immanbuilds. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary-container selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Security />
      <Testimonial />
      <Connect />
      <FooterCTA />
      <Footer />
    </div>
  );
}
