// ============================================================
//  S&W TECH MARKET — CONFIG
//  Edit this file to rebrand. Use rebranding.html for easy UI.
// ============================================================

const SW_CONFIG = window.SW_CONFIG = {

  // ── IDENTITY ──────────────────────────────────────────────
  name:        "S&W Tech Market",
  tagline:     "Your Tech, Delivered",
  description: "Pakistan's most trusted tech marketplace. Premium products, genuine warranty, lightning-fast delivery across the country.",
  established: "2020",
  city:        "Lahore, Pakistan",
  slogan:      "Next-Gen Tech. Best Prices.",

  // ── CONTACT ───────────────────────────────────────────────
  whatsapp: "923001234567",
  phone:    "+92 300 123 4567",
  address:  "Main Market, Gulberg III, Lahore",
  mapsUrl:  "https://maps.google.com/?q=Gulberg+Lahore",
  email:    "info@swtech.pk",

  // ── HOURS ─────────────────────────────────────────────────
  hours: {
    "Mon – Sat": "10:00 AM – 9:00 PM",
    "Sunday":    "12:00 PM – 7:00 PM",
  },

  // ── SOCIAL ────────────────────────────────────────────────
  social: {
    facebook:  "https://facebook.com/",
    instagram: "https://instagram.com/",
    tiktok:    "https://tiktok.com/",
    youtube:   "https://youtube.com/",
  },

  // ── COLORS ────────────────────────────────────────────────
  colors: {
    primary:     "#2563EB",
    primaryLight:"#3B82F6",
    cyan:        "#06B6D4",
    dark:        "#050A14",
    surface:     "#0A1628",
    surfaceAlt:  "#0F2040",
    card:        "#111E35",
    text:        "#E8F0FF",
    muted:       "#5A7099",
    accent:      "#F59E0B",
  },

  // ── HERO SLIDES (editable from admin) ─────────────────────
  // These are default slides. Admin can override via Firebase settings/heroSlides
  heroSlides: [
    { emoji:"💻", label:"Laptops",      headline:"Power Meets",    sub:"Portability",    bg:"linear-gradient(135deg,#0F2040 0%,#050A14 100%)" },
    { emoji:"📱", label:"Smartphones",  headline:"Stay",           sub:"Connected",      bg:"linear-gradient(135deg,#0F1A30 0%,#050A14 100%)" },
    { emoji:"🎮", label:"Gaming Gear",  headline:"Level Up",       sub:"Your Game",      bg:"linear-gradient(135deg,#1A0F2E 0%,#050A14 100%)" },
    { emoji:"🎧", label:"Audio",        headline:"Hear Every",     sub:"Detail",         bg:"linear-gradient(135deg,#0F2040 0%,#0A1628 100%)" },
    { emoji:"⌚", label:"Wearables",    headline:"Tech On",        sub:"Your Wrist",     bg:"linear-gradient(135deg,#0A2020 0%,#050A14 100%)" },
  ],

  // ── CATEGORIES ────────────────────────────────────────────
  categories: [
    { name:"Laptops",      emoji:"💻", desc:"Business, Gaming & Ultrabooks" },
    { name:"Smartphones",  emoji:"📱", desc:"Android, iOS & Accessories" },
    { name:"Gaming",       emoji:"🎮", desc:"Controllers, Headsets & More" },
    { name:"Audio",        emoji:"🎧", desc:"Earbuds, Speakers & Headphones" },
    { name:"Smart Watches",emoji:"⌚", desc:"Fitness & Smartwatches" },
    { name:"Monitors",     emoji:"🖥",  desc:"4K, Gaming & Professional" },
    { name:"Cameras",      emoji:"📷", desc:"DSLRs, Action & Security Cams" },
    { name:"Aesthetics",   emoji:"✨", desc:"RGB, Desk Setup & Décor" },
    { name:"Accessories",  emoji:"🔌", desc:"Cables, Bags, Hubs & More" },
    { name:"Networking",   emoji:"📡", desc:"Routers, Switches & Modems" },
  ],

  // ── LOYALTY ───────────────────────────────────────────────
  loyaltyDivisor: 500,
  loyaltyPerUnit: 1,
  loyaltyRedeem:  10,

  // ── ADMIN ─────────────────────────────────────────────────
  adminPassword: "swtech2024",
  imgbbKey:      "ab7a51eaed988c67582fc8bcc877df5a",

  // ── FIREBASE ──────────────────────────────────────────────
  firebase: {
    apiKey:            "AIzaSyBvG8fJCn8oi1spKFRkon-xff6kV_NvIsg",
    authDomain:        "sw-tech-market.firebaseapp.com",
    databaseURL:       "https://sw-tech-market-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId:         "sw-tech-market",
    storageBucket:     "sw-tech-market.firebasestorage.app",
    messagingSenderId: "1086791612893",
    appId:             "1:1086791612893:web:3eb9fe0fc332feaae9de34",
  },

  // ── SEASONAL THEMES ───────────────────────────────────────
  themes: {
    "":             { name:"Default",        emoji:"💻", primary:"#2563EB", accent:"#06B6D4", banner:"" },
    "sale":         { name:"Mega Sale",      emoji:"🔥", primary:"#DC2626", accent:"#FCD34D", banner:"🔥 MEGA SALE — Up to 50% off selected items this week!" },
    "eid":          { name:"Eid Special",    emoji:"🌙", primary:"#059669", accent:"#FCD34D", banner:"🌙 Eid Mubarak! Special tech deals — limited time only" },
    "back2school":  { name:"Back to School", emoji:"🎒", primary:"#7C3AED", accent:"#A78BFA", banner:"🎒 Back to School Sale — Laptops & accessories discounted!" },
    "independence": { name:"Independence Day",emoji:"🇵🇰",primary:"#065F46", accent:"#FFFFFF", banner:"🇵🇰 Happy Independence Day! Special 14 August tech offers" },
    "winter":       { name:"Winter Sale",    emoji:"❄️",  primary:"#1E3A5F", accent:"#93C5FD", banner:"❄️ Winter Sale is here — grab your tech before stock runs out!" },
  },

  // ── SURVEY QUESTIONS ──────────────────────────────────────
  survey: {
    enabled: true,
    questions: [
      { id:"city",     type:"select",  label:"Which city are you from?",       options:["Lahore","Karachi","Islamabad","Rawalpindi","Faisalabad","Multan","Peshawar","Other"] },
      { id:"source",   type:"select",  label:"How did you hear about us?",     options:["Instagram","Facebook","TikTok","Google","Friend / Family","YouTube","Other"] },
      { id:"device",   type:"select",  label:"What device are you ordering on?",options:["Smartphone","Laptop","PC","Tablet"] },
      { id:"rating",   type:"stars",   label:"How was your ordering experience?" },
      { id:"feedback", type:"textarea",label:"Any suggestions for us? (optional)" },
    ]
  }
};

// ── AUTO APPLY CSS VARS ───────────────────────────────────────
(function(){
  var c = SW_CONFIG.colors;
  var r = document.documentElement.style;
  r.setProperty('--primary',      c.primary);
  r.setProperty('--primary-l',    c.primaryLight);
  r.setProperty('--cyan',         c.cyan);
  r.setProperty('--dark',         c.dark);
  r.setProperty('--surface',      c.surface);
  r.setProperty('--surface-alt',  c.surfaceAlt);
  r.setProperty('--card',         c.card);
  r.setProperty('--text',         c.text);
  r.setProperty('--muted',        c.muted);
  r.setProperty('--accent',       c.accent);
})();
