import React, { useState } from "react";

const translations = {
  en: {
    tagline: "Your Movement Recovery Partner",
    description: "Premium products and partnerships designed to support physical recovery and well-being.",
    about: "About Us",
    aboutText: "PRIMEmotion is a New Zealand-based wellness brand focused on delivering high-quality recovery solutions for athletes, active individuals, and wellness-conscious communities.",
    products: "Products",
    comingSoon: "Product listings coming soon...",
    partners: "Our Partners",
    buildingPartners: "We are currently building strategic partnerships.",
    contact: "Contact Us",
    name: "Your name",
    email: "Your email",
    message: "Your message",
    send: "Send",
    explore: "Explore Now"
  },
  zh: {
    tagline: "您的运动恢复伙伴",
    description: "高品质产品与合作关系，助您身体恢复与健康生活。",
    about: "关于我们",
    aboutText: "PRIMEmotion 是一家位于新西兰的健康品牌，专注于为运动员、活跃人士和健康意识人群提供高品质恢复解决方案。",
    products: "产品",
    comingSoon: "产品即将上线...",
    partners: "我们的合作伙伴",
    buildingPartners: "我们正在建立战略合作关系。",
    contact: "联系我们",
    name: "您的姓名",
    email: "您的邮箱",
    message: "您的留言",
    send: "发送",
    explore: "立即探索"
  },
  mi: {
    tagline: "Tō hoa whakaora nekehanga",
    description: "Ngā hua kounga me ngā hononga hei tautoko i te whakaora ā-tinana me te oranga.",
    about: "Mō Mātou",
    aboutText: "Ko PRIMEmotion he tohu oranga nō Aotearoa e arotahi ana ki te tuku rongoā whakaora kounga mō ngā kaitākaro, ngā tāngata hihiko me ngā hapori whai whakaaro ki te oranga.",
    products: "Ngā Hua",
    comingSoon: "Ka tae mai ngā hua ākuanei...",
    partners: "Ō Mātou Hoa",
    buildingPartners: "Kei te waihanga mātou i ngā hononga rautaki.",
    contact: "Whakapā Mai",
    name: "Tō ingoa",
    email: "Tō īmēra",
    message: "Tō karere",
    send: "Tukua",
    explore: "Tirohia Ināianei"
  }
};

export default function HomePage() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white', color: '#1f2937', padding: '2.5rem 1.5rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>PRIMEmotion</h1>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="#about">{t.about}</a>
          <a href="#products">{t.products}</a>
          <a href="#partners">{t.partners}</a>
          <a href="#contact">{t.contact}</a>
          <select value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="en">EN</option>
            <option value="zh">中文</option>
            <option value="mi">Māori</option>
          </select>
        </nav>
      </header>

      <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: '600', marginBottom: '1rem' }}>{t.tagline}</h2>
        <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '1.5rem' }}>{t.description}</p>
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#000', color: '#fff', borderRadius: '0.375rem' }}>{t.explore}</button>
      </section>

      <section id="about" style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>{t.about}</h3>
        <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem' }}>
          <p style={{ color: '#374151' }}>{t.aboutText}</p>
        </div>
      </section>

      <section id="products" style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>{t.products}</h3>
        <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem' }}>
          <p style={{ fontStyle: 'italic', color: '#6b7280' }}>{t.comingSoon}</p>
        </div>
      </section>

      <section id="partners" style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>{t.partners}</h3>
        <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem' }}>
          <p style={{ fontStyle: 'italic', color: '#6b7280' }}>{t.buildingPartners}</p>
        </div>
      </section>

      <section id="contact">
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>{t.contact}</h3>
        <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder={t.name} style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.375rem' }} />
            <input type="email" placeholder={t.email} style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.375rem' }} />
            <textarea placeholder={t.message} style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.375rem', minHeight: '6rem' }} />
            <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#000', color: '#fff', borderRadius: '0.375rem' }}>{t.send}</button>
          </form>
        </div>
      </section>
    </main>
  );
}