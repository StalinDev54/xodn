/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import iconImage from './assets/icon.png';
import wechatQrImage from './assets/vx.jpg';
import ios1Image from './assets/ios_1_1.jpg';
import ios2Image from './assets/ios_1_2.jpg';
import ios3Image from './assets/ios_1_3.jpg';
import ios4Image from './assets/ios_1_4.jpg';
import ios5Image from './assets/ios_1_5.jpg';
import ios6Image from './assets/ios_1_6.jpg';
import ios7Image from './assets/ios_1_7.jpg';
import { 
  Brain, 
  ArrowRight, 
  Cpu, 
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  Infinity,
  Database,
  Phone,
  MapPin,
  Globe,
  ArrowUpRight,
  Mail,
  Sun,
  Moon,
  Languages,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Tablet,
  Maximize2
} from 'lucide-react';

const WeChatIcon = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M9.2 5.25C5.5 5.25 2.5 7.72 2.5 10.84C2.5 12.65 3.49 14.25 5.08 15.28L4.45 17.61L6.98 16.36C7.68 16.55 8.42 16.65 9.2 16.65C12.9 16.65 15.9 14.18 15.9 11.06C15.9 7.94 12.9 5.25 9.2 5.25Z"
      fill="currentColor"
    />
    <path
      d="M16.02 9.51C19.08 9.51 21.5 11.58 21.5 14.1C21.5 15.47 20.77 16.69 19.61 17.52L20.05 19.5L17.95 18.43C17.34 18.58 16.69 18.66 16.02 18.66C12.96 18.66 10.53 16.59 10.53 14.1C10.53 11.61 12.96 9.51 16.02 9.51Z"
      fill="currentColor"
      fillOpacity="0.85"
    />
    <circle cx="7.5" cy="10.8" r="0.95" fill="#0d0d0d" />
    <circle cx="10.9" cy="10.8" r="0.95" fill="#0d0d0d" />
    <circle cx="14.7" cy="14.05" r="0.85" fill="#0d0d0d" />
    <circle cx="17.35" cy="14.05" r="0.85" fill="#0d0d0d" />
  </svg>
);

import { createContext, useContext } from 'react';

type Language = 'zh' | 'en';
type Theme = 'dark' | 'light';

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

const AppContext = createContext<AppContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  lang: 'zh',
  setLang: () => {},
});

export const useApp = () => useContext(AppContext);

const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
const isCompanyPage = currentPath === '/company' || currentPath === '/about';
const phoneNumber = '18874182709';

const WechatQrModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { theme, lang } = useApp();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className={`w-full max-w-md rounded-[2rem] border p-6 shadow-2xl ${
              theme === 'light'
                ? 'bg-white border-zinc-200 text-zinc-900'
                : 'bg-[#111] border-white/10 text-white'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className={`text-xl font-semibold ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>
                  {lang === 'zh' ? '扫码添加微信' : 'Scan QR for WeChat'}
                </div>
                <div className={`mt-2 text-sm ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  {lang === 'zh' ? '心元 · Echo（9:30–18:00）' : 'Xinyuan · Echo (9:30–18:00)'}
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className={`rounded-full p-2 transition-colors ${
                  theme === 'light'
                    ? 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    : 'bg-white/5 text-zinc-400 hover:bg-white hover:text-black'
                }`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] bg-white p-4 shadow-inner border border-zinc-100">
              <img src={wechatQrImage} alt="客服微信二维码" className="w-full rounded-[1rem]" />
            </div>
            <div className={`mt-4 text-center text-sm ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>
              {lang === 'zh' ? '扫一扫上方二维码，添加客服微信' : 'Scan the QR code above to add WeChat customer service'}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const AndroidDownloadModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { theme, lang } = useApp();

  const handleConfirmDownload = () => {
    onClose();
    const link = document.createElement('a');
    link.href = 'https://xodn.com/%E5%BF%83%E5%85%83.apk';
    link.download = '心元.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className={`w-full max-w-sm rounded-[2rem] border p-6 shadow-2xl ${
              theme === 'light'
                ? 'bg-white border-zinc-200 text-zinc-900'
                : 'bg-[#111] border-white/10 text-white'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-white p-2 border border-zinc-200/80 shadow-md flex items-center justify-center flex-shrink-0">
                <img src={iconImage} alt="心元 Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className={`text-base font-bold ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>
                  {lang === 'zh' ? '安装下载确认' : 'Download Confirmation'}
                </h3>
                <p className="text-xs font-mono text-blue-500">xodn.com/心元.apk</p>
              </div>
            </div>

            <p className={`text-sm leading-relaxed mb-6 ${theme === 'light' ? 'text-zinc-700' : 'text-zinc-300'}`}>
              {lang === 'zh' ? '是否立即安装下载心元 AI 安卓最新版 (心元.apk)？' : 'Do you want to download and install Xinyuan AI Android APK (心元.apk)?'}
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className={`flex-1 py-3 rounded-full text-xs font-bold transition-all border ${
                  theme === 'light'
                    ? 'bg-zinc-100 text-zinc-700 border-zinc-200 hover:bg-zinc-200'
                    : 'bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10'
                }`}
              >
                {lang === 'zh' ? '取消' : 'Cancel'}
              </button>

              <button
                type="button"
                onClick={handleConfirmDownload}
                className="flex-1 py-3 rounded-full text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all active:scale-95"
              >
                {lang === 'zh' ? '立即安装下载' : 'Download Now'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const topNavItems = [
  { label: '首页', href: '/' },
  { label: '核心能力', href: '/capabilities' },
  { label: '用户评价', href: '/reviews' },
  { label: '关于我们', href: '/about-us' },
];

const Navbar = () => {
  const { theme, toggleTheme, lang, setLang } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLabels: Record<string, { zh: string; en: string }> = {
    '/': { zh: '首页', en: 'Home' },
    '/capabilities': { zh: '核心能力', en: 'Capabilities' },
    '/reviews': { zh: '用户评价', en: 'Reviews' },
    '/about-us': { zh: '关于我们', en: 'About Us' },
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'light'
            ? 'bg-white/85 backdrop-blur-xl border-b border-zinc-200 py-3 md:py-4 shadow-sm'
            : 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3 md:py-4'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-300 border border-zinc-200/50">
            <img src={iconImage} alt="心元 Logo" className="w-7 h-7 md:w-8 md:h-8 object-contain" />
          </div>
          <span className={`font-bold text-xl md:text-2xl tracking-tight font-serif ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>
            心元
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {topNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                theme === 'light' ? 'text-zinc-600 hover:text-zinc-900' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {navLabels[item.href]?.[lang] || item.label}
            </a>
          ))}
        </div>

        {/* Right Tools: i18n, Theme Switcher, Explore CTA */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                theme === 'light'
                  ? 'bg-zinc-100 border-zinc-300 text-zinc-800 hover:bg-zinc-200'
                  : 'bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '文A' : 'EN'}</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>

            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className={`absolute right-0 mt-2 w-28 rounded-2xl p-1.5 shadow-2xl border z-50 ${
                    theme === 'light'
                      ? 'bg-white border-zinc-200 text-zinc-800'
                      : 'bg-zinc-900 border-white/10 text-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => { setLang('zh'); setIsLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                      lang === 'zh'
                        ? 'bg-blue-500/10 text-blue-500 font-bold'
                        : theme === 'light' ? 'hover:bg-zinc-100' : 'hover:bg-white/5'
                    }`}
                  >
                    简体中文
                  </button>
                  <button
                    type="button"
                    onClick={() => { setLang('en'); setIsLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                      lang === 'en'
                        ? 'bg-blue-500/10 text-blue-500 font-bold'
                        : theme === 'light' ? 'hover:bg-zinc-100' : 'hover:bg-white/5'
                    }`}
                  >
                    English
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className={`hidden sm:block h-4 w-px ${theme === 'light' ? 'bg-zinc-300' : 'bg-white/10'}`} />

          {/* Theme Switch Pill Button matching User Screenshot */}
          <button
            type="button"
            onClick={toggleTheme}
            title={theme === 'dark' ? '切换浅色模式' : '切换深色模式'}
            className={`relative flex items-center h-8 w-14 rounded-full p-1 border transition-colors cursor-pointer ${
              theme === 'light'
                ? 'bg-zinc-200 border-zinc-300'
                : 'bg-zinc-800 border-white/10'
            }`}
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${
                theme === 'light'
                  ? 'translate-x-6 bg-white text-amber-500'
                  : 'translate-x-0 bg-zinc-950 text-amber-400 border border-white/10'
              }`}
            >
              {theme === 'light' ? <Sun className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> : <Moon className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />}
            </motion.div>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-expanded={isNavMenuOpen}
            onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold transition-all lg:hidden ${
              theme === 'light'
                ? 'bg-zinc-100 border-zinc-300 text-zinc-800'
                : 'bg-white/5 border-white/10 text-white'
            }`}
          >
            {isNavMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          {/* Explore CTA */}
          <a 
            href="/download"
            className={`hidden sm:inline-flex px-5 py-2 rounded-full text-xs font-bold transition-all transform active:scale-95 shadow-md ${
              theme === 'light'
                ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                : 'bg-white text-black hover:bg-zinc-200'
            }`}
          >
            {lang === 'zh' ? '立即探索' : 'Explore'}
          </a>
        </div>
      </div>

      <AnimatePresence>
        {isNavMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute left-0 top-full w-full p-6 backdrop-blur-xl transition-colors shadow-2xl ${
              theme === 'light'
                ? 'bg-white/95 border-b border-zinc-200 text-zinc-900'
                : 'bg-[#171717]/95 border-b border-white/10 text-white'
            }`}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-5 px-0 md:items-end">
              {topNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-medium transition-colors md:text-right ${
                    theme === 'light'
                      ? 'text-zinc-800 hover:text-blue-600'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                  onClick={() => setIsNavMenuOpen(false)}
                >
                  {navLabels[item.href]?.[lang] || item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const AboutPage = () => {
  const { theme, lang } = useApp();
  const [isWechatQrOpen, setIsWechatQrOpen] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyPhoneNumber = async () => {
    await navigator.clipboard.writeText(phoneNumber);
    setPhoneCopied(true);
    window.setTimeout(() => setPhoneCopied(false), 2200);
  };

  const introCards = [
    {
      title: lang === 'zh' ? '公司定位' : 'Positioning',
      desc: lang === 'zh'
        ? '心元是一家以数字人格 AI 引擎为核心，致力于打通虚拟 AI 与物理世界壁垒，提供“软件+硬件+场景”一体化具身智能解决方案的科技企业。'
        : 'Xinyuan is a tech enterprise powered by digital persona AI engine, dedicated to bridging virtual AI and physical world via integrated software+hardware+scenario solutions.',
    },
    {
      title: lang === 'zh' ? '战略使命' : 'Strategic Mission',
      desc: lang === 'zh'
        ? '用数字生命技术，解决情感陪伴、知识传承、公共服务、文化活化、特种作业五大核心痛点。'
        : 'Using digital life tech to resolve 5 core pain points: companionship, knowledge heritage, public services, cultural activation, and specialized operations.',
    },
    {
      title: lang === 'zh' ? '终极使命' : 'Ultimate Mission',
      desc: lang === 'zh'
        ? '创造有价值、有温度的 AI，让技术回归人文关怀。'
        : 'Creating valuable, warm AI that returns technology to humanistic care.',
    },
  ];

  const capabilityColumns = [
    {
      eyebrow: '01',
      title: lang === 'zh' ? '大众消费领域' : 'Mass Consumer Domain',
      desc: lang === 'zh'
        ? '面向广泛用户群体，提供高性价比、易于上手的标准化科技产品与服务。'
        : 'Providing cost-effective, easy-to-use standardized tech products & services for general users.',
    },
    {
      eyebrow: '02',
      title: lang === 'zh' ? '行业解决方案' : 'Industry Solutions',
      desc: lang === 'zh'
        ? '聚焦企业级市场，深度融合垂直行业场景，提供可定制的数字化与智能化转型方案。'
        : 'Focusing on enterprise markets with deep integration into vertical industry scenarios.',
    },
    {
      eyebrow: '03',
      title: lang === 'zh' ? '特种专业领域' : 'Specialized Domains',
      desc: lang === 'zh'
        ? '深耕高门槛、高技术壁垒的特殊场景，提供满足高标准要求的定制化产品。'
        : 'Deep cultivation in high-barrier specialized scenarios with high-standard custom equipment.',
    },
  ];

  return (
    <>
      <main className={`transition-colors duration-300 ${
        theme === 'light' ? 'bg-[#f8fafc] text-zinc-900' : 'bg-black text-white'
      }`}>
      <section id="公司介绍" className="relative overflow-hidden pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto px-6 relative z-10 pb-16 md:pb-20">
          <div className="max-w-5xl">
            <div className={`text-[11px] uppercase tracking-[0.34em] ${
              theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'
            }`}>About Xinyuan</div>
            <div className="mt-8 max-w-5xl">
              <h1 className={`max-w-[12ch] font-serif text-[3.4rem] font-semibold leading-[1.12] tracking-tight md:text-[5.2rem] xl:text-[6.4rem] ${
                theme === 'light' ? 'text-zinc-900' : 'text-white'
              }`}>
                {lang === 'zh' ? (
                  <>以数字人格 AI 引擎为核心，<br />构建具身智能解决方案。</>
                ) : (
                  <>Powered by Digital Persona AI,<br />Building Embodied Intelligence.</>
                )}
              </h1>
              <p className={`mt-8 max-w-4xl text-lg leading-8 md:text-[1.35rem] md:leading-10 font-light ${
                theme === 'light' ? 'text-zinc-600' : 'text-zinc-300'
              }`}>
                {lang === 'zh'
                  ? '心元致力于打通虚拟 AI 与物理世界的连接链路，围绕“软件+硬件+场景”提供一体化方案，让 AI 不只停留在屏幕中，而是真正进入服务、行业与特殊作业场景。'
                  : 'Xinyuan bridges virtual AI and physical reality, delivering software + hardware + scenario solutions.'}
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className={`text-[11px] uppercase tracking-[0.34em] ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>Company</div>
              <h2 className={`mt-5 font-serif text-3xl font-semibold leading-tight md:text-5xl ${
                theme === 'light' ? 'text-zinc-900' : 'text-white'
              }`}>
                衡阳市灵库科技有限公司
              </h2>
            </div>
            <div className={`space-y-5 text-base leading-8 md:text-lg md:leading-9 ${
              theme === 'light' ? 'text-zinc-700' : 'text-zinc-300'
            }`}>
              <p>
                {lang === 'zh'
                  ? '我们聚焦数字生命、具身交互与场景化智能应用，持续推动 AI 从单一软件能力走向软硬一体。'
                  : 'Focusing on digital life, embodied interaction, and scenario intelligence.'}
              </p>
              <div className="flex flex-wrap gap-4 pt-3">
                <a href="https://ai.xodn.com" className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all ${
                  theme === 'light'
                    ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                    : 'bg-white text-black hover:bg-zinc-200'
                }`}>
                  {lang === 'zh' ? '进入产品' : 'Launch Product'} <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="#联系我们" className={`inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-bold transition-all ${
                  theme === 'light'
                    ? 'bg-white border-zinc-300 text-zinc-800 hover:bg-zinc-100'
                    : 'bg-white/[0.04] border-white/10 text-white hover:bg-white/[0.08]'
                }`}>
                  {lang === 'zh' ? '联系我们' : 'Contact Us'} <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {introCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-[1.75rem] border p-6 md:p-7 ${
                  theme === 'light'
                    ? 'bg-white border-zinc-200 shadow-sm'
                    : 'bg-white/[0.03] border-white/8'
                }`}
              >
                <div className={`text-sm ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>{item.title}</div>
                <p className={`mt-4 text-xl leading-8 md:text-[1.5rem] md:leading-9 ${
                  theme === 'light' ? 'text-zinc-900' : 'text-white'
                }`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability section */}
      <section id="我们的能力" className={`py-20 md:py-24 ${
        theme === 'light' ? 'bg-zinc-100/80' : 'bg-[#050505]'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className={`text-[11px] uppercase tracking-[0.34em] ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>Business</div>
            <h2 className={`mt-5 font-serif text-3xl font-semibold leading-tight md:text-5xl ${
              theme === 'light' ? 'text-zinc-900' : 'text-white'
            }`}>
              {lang === 'zh' ? '三大业务方向，覆盖不同层级的智能化需求。' : 'Three Core Business Directions'}
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {capabilityColumns.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-[1.75rem] border p-6 md:p-7 ${
                  theme === 'light'
                    ? 'bg-white border-zinc-200 shadow-sm'
                    : 'bg-zinc-950/90 border-white/8'
                }`}
              >
                <div className={`text-sm font-medium ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>{item.eyebrow}</div>
                <h3 className={`mt-7 text-2xl font-semibold leading-tight ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>{item.title}</h3>
                <p className={`mt-4 text-base leading-7 md:text-[1.05rem] md:leading-8 ${theme === 'light' ? 'text-zinc-600' : 'text-zinc-300'}`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="联系我们" className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`rounded-[2.5rem] border px-8 py-10 md:px-12 md:py-14 ${
            theme === 'light'
              ? 'bg-white border-zinc-200 shadow-lg'
              : 'bg-gradient-to-b from-white/[0.05] to-white/[0.02] border-white/8'
          }`}>
            <div className={`text-[11px] uppercase tracking-[0.34em] ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>Contact</div>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className={`font-serif text-4xl font-semibold leading-tight md:text-6xl ${
                  theme === 'light' ? 'text-zinc-900' : 'text-white'
                }`}>
                  {lang === 'zh' ? '与灵库科技建立连接。' : 'Connect with Lingku Tech.'}
                </h2>
                <p className={`mt-6 max-w-2xl text-xl leading-9 ${
                  theme === 'light' ? 'text-zinc-600' : 'text-zinc-300'
                }`}>
                  {lang === 'zh'
                    ? '如果你希望了解 AI 数字人定制、历史人物复刻、文旅数字导览或亲人数字复刻服务，欢迎直接联系。'
                    : 'Contact us for AI digital avatar customization, historical persona cloning, and digital heritage.'}
                </p>
              </div>

              <a href="https://ai.xodn.com" className={`inline-flex h-fit items-center justify-center gap-2 rounded-full px-8 py-4 font-bold transition-colors ${
                theme === 'light'
                  ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                  : 'bg-white text-black hover:bg-zinc-200'
              }`}>
                {lang === 'zh' ? '进入产品' : 'Launch Product'} <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              <div className={`rounded-[2rem] border p-6 md:p-7 ${
                theme === 'light' ? 'bg-zinc-50 border-zinc-200' : 'bg-black/20 border-white/8'
              }`}>
                <MapPin className={`w-5 h-5 ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`} />
                <div className={`mt-6 text-sm ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>{lang === 'zh' ? '办公地址' : 'Address'}</div>
                <div className={`mt-3 text-lg leading-8 ${theme === 'light' ? 'text-zinc-800' : 'text-white'}`}>衡阳市珠晖区衡花路18号<br />湖南工学院信息楼2509室</div>
              </div>
              <div className={`rounded-[2rem] border p-6 md:p-7 ${
                theme === 'light' ? 'bg-zinc-50 border-zinc-200' : 'bg-black/20 border-white/8'
              }`}>
                <button
                  type="button"
                  onClick={() => setIsWechatQrOpen(true)}
                  className="w-full text-left"
                >
                  <WeChatIcon className={`w-5 h-5 ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`} />
                  <div className={`mt-6 text-sm ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>{lang === 'zh' ? '客服微信' : 'WeChat Service'}</div>
                  <div className={`mt-3 text-lg leading-8 ${theme === 'light' ? 'text-zinc-800' : 'text-white'}`}>{lang === 'zh' ? '点击查看二维码' : 'Click for QR Code'}</div>
                </button>
              </div>
              <div className={`rounded-[2rem] border p-6 md:p-7 ${
                theme === 'light' ? 'bg-zinc-50 border-zinc-200' : 'bg-black/20 border-white/8'
              }`}>
                <button
                  type="button"
                  onClick={copyPhoneNumber}
                  className="relative w-full text-left"
                >
                  <Phone className={`w-5 h-5 ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`} />
                  <div className={`mt-6 text-sm ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>{lang === 'zh' ? '联系电话' : 'Phone'}</div>
                  <div className={`mt-3 text-lg leading-8 ${theme === 'light' ? 'text-zinc-800' : 'text-white'}`}>{phoneNumber}</div>
                  {phoneCopied && (
                    <span className="absolute -top-2 right-0 whitespace-nowrap rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs font-medium text-black shadow-lg">
                      {lang === 'zh' ? '电话已复制' : 'Phone Copied'}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <WechatQrModal open={isWechatQrOpen} onClose={() => setIsWechatQrOpen(false)} />
    </>
  );
};

const Hero = () => {
  const { theme, lang } = useApp();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className={`absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] opacity-5 animate-pulse ${theme === 'light' ? 'bg-blue-500' : 'bg-white'}`} />
      <div className={`absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[120px] opacity-5 animate-pulse delay-1000 ${theme === 'light' ? 'bg-indigo-500' : 'bg-zinc-500'}`} />
      
      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10 -translate-y-12 md:-translate-y-14">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-flex max-w-full items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider md:px-4 md:text-xs mb-6 md:mb-8 ${
              theme === 'light'
                ? 'border-zinc-300 bg-white/80 text-zinc-800 shadow-sm'
                : 'border-white/20 bg-white/10 text-white'
            }`}>
              <Sparkles className="w-3 h-3 text-blue-500" /> X Origin Digital Nexus（XODN.com）
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-[3rem] md:text-8xl font-bold tracking-tight mb-5 md:mb-8 font-serif leading-[1.04] md:leading-[1.1] ${
              theme === 'light' ? 'text-zinc-900' : 'text-white'
            }`}
          >
            {lang === 'zh' ? (
              <>心元 · 灵魂<br /><span className="gradient-text">永不灭</span></>
            ) : (
              <>Xinyuan · Soul<br /><span className="gradient-text">Never Fades</span></>
            )}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mx-auto mb-8 max-w-[20rem] text-center text-[0.95rem] font-light leading-7 md:mb-10 md:max-w-[46rem] md:text-lg md:leading-9 ${
              theme === 'light' ? 'text-zinc-600' : 'text-zinc-300'
            }`}
          >
            <span className="block">{lang === 'zh' ? '不仅仅是存储，而是生命的延续。' : 'More than storage, the continuation of life.'}</span>
            <span className="block md:mt-1">{lang === 'zh' ? '构建您的数字生命记忆库，' : 'Build your digital memory vault,'}</span>
            <span className="block md:mt-1">{lang === 'zh' ? '让爱与智慧跨越时间。' : 'enabling love and wisdom across time.'}</span>
            <span className="block md:mt-1">{lang === 'zh' ? '在数字世界中永不凋零。' : 'Never fading in the digital realm.'}</span>
          </motion.p>

        </div>
      </div>

      {/* Floating Image Cards */}
      <div className="absolute bottom-20 md:bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-36 md:h-64 pointer-events-none overflow-hidden opacity-35 md:opacity-40">
        <div className="flex gap-3 md:gap-6 animate-scroll">
          {[
            "https://wework.qpic.cn/wwpic3az/632735_t4PZ65BnSF-C2H-_1770197240/0",
            "https://wework.qpic.cn/wwpic3az/873879_ClDbgXrqQt6If7S_1770197658/0",
            "https://wework.qpic.cn/wwpic3az/687017_Gj_OIQmUTsiXwCX_1770197606/0",
            "https://wework.qpic.cn/wwpic3az/78759_b7GvojeQQA2ZBq9_1767768374/0",
            "https://wework.qpic.cn/wwpic3az/632735_t4PZ65BnSF-C2H-_1770197240/0",
            "https://wework.qpic.cn/wwpic3az/873879_ClDbgXrqQt6If7S_1770197658/0",
            "https://wework.qpic.cn/wwpic3az/687017_Gj_OIQmUTsiXwCX_1770197606/0"
          ].map((url, i) => (
            <div key={i} className={`flex-shrink-0 w-44 md:w-80 h-28 md:h-48 rounded-xl md:rounded-2xl overflow-hidden border shadow-2xl ${
              theme === 'light' ? 'border-zinc-200 shadow-zinc-200' : 'border-white/10'
            }`}>
              <img 
                src={url} 
                alt={`Memory ${i + 1}`} 
                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-28 left-1/2 z-20 flex h-28 w-full max-w-7xl -translate-x-1/2 items-center justify-center md:bottom-16 md:h-48">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => window.location.href = '/download'}
          className={`px-9 py-3.5 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2 ${
            theme === 'light'
              ? 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-zinc-400/30'
              : 'bg-white text-black hover:bg-zinc-200 shadow-black/40'
          }`}
        >
          {lang === 'zh' ? '立即探索' : 'Explore Now'} <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
};

const CoreCapabilities = () => {
  const { theme, lang } = useApp();

  const capabilities = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: lang === 'zh' ? "多模态记忆引擎" : "Multimodal Memory Engine",
      tag: "PERCEPTION",
      desc: lang === 'zh' ? "融合文字、语音、图像与视频，全方位还原生命印记。" : "Fusing text, voice, images, and video to reconstruct life marks.",
      tech: lang === 'zh' ? ["微表情捕捉", "声纹提取", "语义理解"] : ["Micro-expression", "Voiceprint Extraction", "Semantic NLU"]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: lang === 'zh' ? "心元大模型" : "Xinyuan LLM",
      tag: "COGNITION",
      desc: lang === 'zh' ? "专属私有化模型训练，深度学习个人语言风格与思维逻辑。" : "Exclusive private LLM training, learning personal language style & thinking logic.",
      tech: lang === 'zh' ? ["人格对齐", "性格模拟", "长短期记忆"] : ["Persona Alignment", "Personality Simulation", "Long-term Memory"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: lang === 'zh' ? "永恒记忆库" : "Eternal Memory Vault",
      tag: "STORAGE",
      desc: lang === 'zh' ? "去中心化加密存储，确保您的数字资产永久归您所有。" : "Decentralized encrypted storage ensuring your digital assets belong to you forever.",
      tech: lang === 'zh' ? ["隐私计算", "时空索引", "加密存储"] : ["Privacy Computing", "Spatio-temporal Index", "Encrypted Storage"]
    }
  ];

  return (
    <section id="核心能力" className={`py-32 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-[#f8fafc] text-zinc-900' : 'bg-black text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest mb-6 border ${
              theme === 'light'
                ? 'bg-zinc-100 border-zinc-300 text-zinc-800'
                : 'bg-white/5 border-white/10 text-white'
            }`}>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Integrated Architecture v3.0
            </div>
            <h2 className={`text-4xl md:text-6xl font-bold font-serif leading-tight mb-8 ${
              theme === 'light' ? 'text-zinc-900' : 'text-white'
            }`}>
              {lang === 'zh' ? <>核心能力与 <br /><span className="gradient-text">技术架构</span></> : <>Core Capabilities & <br /><span className="gradient-text">Architecture</span></>}
            </h2>
            <p className={`text-lg font-light leading-relaxed ${
              theme === 'light' ? 'text-zinc-600' : 'text-zinc-400'
            }`}>
              {lang === 'zh' ? '我们将尖端AI能力与底层架构深度融合，构建从感知到永恒存储的完整闭环。' : 'Integrating cutting-edge AI capabilities with underlying architecture.'}
            </p>
          </div>
          
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            <div className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
              theme === 'light' ? 'bg-white border-zinc-200 shadow-sm' : 'bg-zinc-900/50 border-white/5'
            }`}>
              <div>
                <ShieldCheck className={`w-8 h-8 mb-4 ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`} />
                <h4 className={`font-bold mb-2 ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>{lang === 'zh' ? '隐私主权保护' : 'Privacy Sovereignty'}</h4>
                <p className={`text-sm font-light ${theme === 'light' ? 'text-zinc-600' : 'text-zinc-300'}`}>{lang === 'zh' ? '去中心化技术，确保数据主权。' : 'Decentralized tech ensuring data sovereignty.'}</p>
              </div>
              <div className={`mt-6 flex items-center gap-2 text-[10px] font-mono ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                ENCRYPTED_ACTIVE
              </div>
            </div>
            <div className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
              theme === 'light' ? 'bg-white border-zinc-200 shadow-sm' : 'bg-zinc-900/50 border-white/5'
            }`}>
              <div>
                <Infinity className={`w-8 h-8 mb-4 ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`} />
                <h4 className={`font-bold mb-2 ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>{lang === 'zh' ? '生命永续计划' : 'Eternal Life Plan'}</h4>
                <p className={`text-sm font-light ${theme === 'light' ? 'text-zinc-600' : 'text-zinc-300'}`}>{lang === 'zh' ? '自动化的记忆整理与生命叙事。' : 'Automated memory sorting & digital narrative.'}</p>
              </div>
              <div className={`mt-6 flex items-center gap-2 text-[10px] font-mono ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                <div className="w-2 h-2 rounded-full bg-blue-500/50" />
                SYNC_COMPLETE
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-8 rounded-3xl border transition-all duration-500 ${
                theme === 'light'
                  ? 'bg-white border-zinc-200 shadow-md hover:shadow-xl'
                  : 'bg-zinc-900/30 border-white/5 hover:bg-zinc-900/50'
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ${
                  theme === 'light' ? 'bg-zinc-100 text-zinc-900' : 'bg-white/5 text-white'
                }`}>
                  {cap.icon}
                </div>
                <span className={`text-[10px] font-mono tracking-widest ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>{cap.tag}</span>
              </div>
              
              <h3 className={`text-xl font-bold mb-3 ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>{cap.title}</h3>
              <p className={`text-sm font-light leading-relaxed mb-8 ${theme === 'light' ? 'text-zinc-600' : 'text-zinc-400'}`}>{cap.desc}</p>
              
              <div className="space-y-3">
                {cap.tech.map((t, j) => (
                  <div key={j} className={`flex items-center gap-3 text-[11px] transition-colors ${
                    theme === 'light' ? 'text-zinc-700' : 'text-zinc-300 group-hover:text-white'
                  }`}>
                    <div className={`w-1 h-1 rounded-full ${theme === 'light' ? 'bg-blue-500' : 'bg-zinc-800 group-hover:bg-white'}`} />
                    {t}
                  </div>
                ))}
              </div>

              <div className={`mt-8 pt-6 border-t flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity ${
                theme === 'light' ? 'border-zinc-200' : 'border-white/5'
              }`}>
                <span className={`text-[9px] font-mono uppercase ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>System Ready</span>
                <ArrowRight className={`w-4 h-4 ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const reviewsData = [
  {
    id: 1,
    name: '华声在线 · 华声教育',
    source: '媒体报道',
    iconType: 'huasheng',
    rating: 0,
    url: 'https://hsjy.voc.com.cn/mobile/news/202606/32992250.html',
    content: '【报道】AI助力高考志愿填报，湖南工学院团队研发“心元”AI系统落地，成功斩获 50 万元天使轮融资！由赵盛烨教授指导、学生彭宇负责的核心团队在多模态与数字人领域持续攻关。',
  },
  {
    id: 2,
    name: '湖南工学院官网',
    source: '媒体报道',
    iconType: 'hnit',
    rating: 0,
    url: 'https://www.hnit.edu.cn/cxcyxy/info/1129/5253.htm',
    content: '【报道】我校计算机科学与工程学院“心元”AI数字生命项目聚焦数字永生、文化传承与情感陪伴，荣获省级立项并获 50 万元资金支持。',
  },
  {
    id: 3,
    name: '酷安网',
    source: '媒体评价',
    iconType: 'coolap',
    rating: 5,
    content: '一个功能齐备、温度感满满的 AI 数字生命平台，界面极简优雅，微表情捕捉与声纹还原太逼真了！在数字人格复刻上体验极佳。',
  },
  {
    id: 4,
    name: '一加科技',
    source: '媒体评价',
    iconType: 'oneplus',
    rating: 5,
    content: '简明美好的设计，聚合多模态语音复刻、记忆库搭建与交互助手，在数字生命与情感留存领域，有一个心元就够了。',
  },
  {
    id: 5,
    name: 'ZEALER官方',
    source: '媒体评价',
    iconType: 'zealer',
    rating: 5,
    content: '心元，AI 数字生命与家族记忆存储界的‘瑞士军刀’。让技术回归人文关怀。',
  },
  {
    id: 6,
    name: '恣睢',
    source: '华为应用商店',
    iconType: 'huawei',
    rating: 5,
    content: '好用！功能很多很实用很温情，页面简洁还没广告！声音和聊天风格把我外公复刻得一模一样，太感谢心元团队了，泪目！五星好评！',
  },
  {
    id: 7,
    name: '你的大宝贝叶玖',
    source: 'OPPO 应用商店',
    iconType: 'oppo',
    rating: 5,
    content: '强烈推荐!!!这真的是个神仙 AI 软件啊!多模态数字人生成非常流畅，还可以长效保存家族回忆和语音印记，完全不占过多手机内存，太神仙了，爱了爱了！',
  },
  {
    id: 8,
    name: 'um',
    source: '华为应用商店',
    iconType: 'huawei',
    rating: 5,
    content: '真的很良心的数字生命软件，界面格式极简，看着很舒服，暖黑暗色系用着很高级，全过程隐私私有化加密还没有广告，极度安利给每一个想留存亲人声音和故事的朋友！',
  },
  {
    id: 9,
    name: '星河微茫',
    source: 'Apple App Store',
    iconType: 'apple',
    rating: 5,
    content: '给去世的老爷爷做了数字分身，当看到屏幕里的老人家微笑着叫我小名那一刻，全家人眼眶都湿了。技术有温度，感谢心元团队！',
  },
];

const renderReviewIcon = (type: string) => {
  switch (type) {
    case 'huasheng':
      return (
        <div className="w-9 h-9 rounded-xl bg-[#E60012] flex items-center justify-center text-white flex-shrink-0 shadow-md">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v2h4v-2zm0-4H7v2h10V9zm-6 4H7v4h4v-4zm8 4h-2v-2h2v2z"/>
          </svg>
        </div>
      );
    case 'hnit':
      return (
        <div className="w-9 h-9 rounded-xl bg-[#004B97] flex items-center justify-center text-white flex-shrink-0 shadow-md">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
          </svg>
        </div>
      );
    case 'coolap':
      return (
        <div className="w-9 h-9 rounded-xl bg-[#11B566] flex items-center justify-center text-white flex-shrink-0 shadow-md">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 1022 12 10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm-2-12l6 4-6 4V8z"/>
          </svg>
        </div>
      );
    case 'oneplus':
      return (
        <div className="w-9 h-9 rounded-xl bg-[#EB0029] flex items-center justify-center text-white flex-shrink-0 shadow-md">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M2 2v20h20V2H2zm18 18H4V4h16v16zM8 7h2v10H8V7zm5 3h2v2h2v2h-2v2h-2v-2h-2v-2h2v-2z"/>
          </svg>
        </div>
      );
    case 'zealer':
      return (
        <div className="w-9 h-9 rounded-xl bg-[#141414] border border-zinc-700 flex items-center justify-center text-white flex-shrink-0 shadow-md">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M4 5h16v3L10 16h10v3H4v-3l10-8H4V5z"/>
          </svg>
        </div>
      );
    case 'huawei':
      return (
        <div className="w-9 h-9 rounded-xl bg-[#C7000B] flex items-center justify-center text-white flex-shrink-0 shadow-md">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2L10.5 7.5H13.5L12 2ZM6.5 4.5L8.5 9.5H11.5L8.5 4.5H6.5ZM17.5 4.5H15.5L12.5 9.5H15.5L17.5 4.5ZM3 9L6.5 12.5L9.5 9.5H6.5L3 9ZM21 9L17.5 9.5L14.5 12.5L17.5 12.5L21 9ZM5 15.5L8 14.5L10 18.5L7 18.5L5 15.5ZM19 15.5L17 18.5L14 18.5L16 14.5L19 15.5ZM12 14.5L10.5 19.5H13.5L12 14.5Z" />
          </svg>
        </div>
      );
    case 'oppo':
      return (
        <div className="w-9 h-9 rounded-xl bg-[#0F794B] flex items-center justify-center text-white flex-shrink-0 shadow-md">
          <svg className="w-6 h-3 fill-current" viewBox="0 0 100 40">
            <path d="M20 5C8.954 5 0 11.716 0 20s8.954 15 20 15 20-6.716 20-15S31.046 5 20 5zm0 22c-5.523 0-10-3.134-10-7s4.477-7 10-7 10 3.134 10 7-4.477 7-10 7zm30-22c-11.046 0-20 6.716-20 15s8.954 15 20 15 20-6.716 20-15S61.046 5 50 5zm0 22c-5.523 0-10-3.134-10-7s4.477-7 10-7 10 3.134 10 7-4.477 7-10 7zm30-22c-11.046 0-20 6.716-20 15s8.954 15 20 15 20-6.716 20-15S91.046 5 80 5zm0 22c-5.523 0-10-3.134-10-7s4.477-7 10-7 10 3.134 10 7-4.477 7-10 7z" />
          </svg>
        </div>
      );
    case 'apple':
      return (
        <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white flex-shrink-0 shadow-md">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.96.99-3.12-1 .04-2.2.67-2.9 1.49-.62.72-1.16 1.88-1.01 3.01 1.12.09 2.25-.56 2.92-1.38z"/>
          </svg>
        </div>
      );
    default:
      return (
        <div className="w-9 h-9 rounded-xl bg-[#141416] flex items-center justify-center text-white flex-shrink-0 shadow-md">
          <img src={iconImage} alt="心元 Logo" className="w-6 h-6 object-contain" />
        </div>
      );
  }
};

const UserReviewsSection = () => {
  const { theme, lang } = useApp();
  const [filter, setFilter] = useState<'all' | 'media' | 'appstore'>('all');

  const filteredReviews = reviewsData.filter(item => {
    if (filter === 'media') return item.source.includes('媒体');
    if (filter === 'appstore') return !item.source.includes('媒体');
    return true;
  });

  return (
    <section id="reviews" className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-[#f8fafc]' : 'bg-[#09090b]'
    }`}>
      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className={`text-xs font-mono uppercase tracking-widest block mb-3 ${
            theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'
          }`}>User Feedback & Real Media</span>
          <h2 className={`text-4xl md:text-6xl font-bold font-serif mb-3 ${
            theme === 'light' ? 'text-zinc-900' : 'text-white'
          }`}>
            {lang === 'zh' ? '用户评价' : 'User Reviews'}
          </h2>
          <p className={`text-base md:text-lg font-light ${
            theme === 'light' ? 'text-zinc-600' : 'text-zinc-400'
          }`}>
            {lang === 'zh' ? '来自用户的真实反馈与权威媒体报道' : 'Real user feedback & authoritative media reports'}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', labelZh: '全部反馈', labelEn: 'All' },
              { id: 'media', labelZh: '媒体报道', labelEn: 'Media Reports' },
              { id: 'appstore', labelZh: '应用商店评价', labelEn: 'Store Reviews' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === tab.id
                    ? theme === 'light'
                      ? 'bg-zinc-900 text-white shadow-md'
                      : 'bg-white text-black shadow-lg shadow-white/10'
                    : theme === 'light'
                      ? 'bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-100'
                      : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {lang === 'zh' ? tab.labelZh : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredReviews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-3xl p-6 md:p-7 flex flex-col justify-between transition-all group theme-card ${
                theme === 'light' ? 'border-zinc-200 shadow-sm hover:shadow-md' : 'border-white/8 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    {renderReviewIcon(item.iconType)}
                    <span className={`font-bold text-base md:text-lg ${
                      theme === 'light' ? 'text-zinc-900' : 'text-white'
                    }`}>{item.name}</span>
                  </div>
                  <span className={`text-[11px] font-medium px-3 py-1 rounded-full border ${
                    theme === 'light'
                      ? 'bg-zinc-100 text-zinc-600 border-zinc-200'
                      : 'bg-white/5 text-zinc-400 border-white/5'
                  }`}>
                    {item.source}
                  </span>
                </div>

                {item.rating > 0 && (
                  <div className="flex gap-1 mb-4 text-emerald-500">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className="text-base">★</span>
                    ))}
                  </div>
                )}

                <p className={`text-sm md:text-[0.95rem] leading-relaxed font-light mb-4 ${
                  theme === 'light' ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  {item.content}
                </p>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors pt-2 border-t w-full ${
                      theme === 'light'
                        ? 'text-blue-600 hover:text-blue-700 border-zinc-200'
                        : 'text-blue-400 hover:text-blue-300 border-white/5'
                    }`}
                  >
                    {lang === 'zh' ? '查看原文报道' : 'View Article'} <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const softwarePreviewImages = [
  ios1Image,
  ios2Image,
  ios3Image,
  ios4Image,
  ios5Image,
  ios6Image,
  ios7Image,
];

const DownloadPlatformModal = ({
  open,
  onClose,
  onSelectAndroid,
}: {
  open: boolean;
  onClose: () => void;
  onSelectAndroid: () => void;
}) => {
  const { theme, lang } = useApp();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 px-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`w-full max-w-md rounded-[2.5rem] border p-6 sm:p-8 shadow-2xl relative overflow-hidden ${
              theme === 'light'
                ? 'bg-white border-zinc-200 text-zinc-900 shadow-zinc-300/50'
                : 'bg-[#121214] border-white/15 text-white shadow-black/80'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 p-2 flex items-center justify-center border border-blue-500/20">
                  <img src={iconImage} alt="心元 Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                    {lang === 'zh' ? '选择系统平台下载' : 'Select Download Platform'}
                  </h3>
                  <p className={`text-xs sm:text-sm ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    {lang === 'zh' ? '支持 Android、iOS 及网页端' : 'Available for Android, iOS & Web'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className={`rounded-full p-2 transition-colors ${
                  theme === 'light'
                    ? 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Platform Options List */}
            <div className="space-y-3">
              {/* Android Option */}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectAndroid();
                }}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all group active:scale-[0.98] ${
                  theme === 'light'
                    ? 'bg-zinc-50 hover:bg-blue-50/50 border-zinc-200/80 hover:border-blue-300'
                    : 'bg-white/5 hover:bg-blue-500/10 border-white/10 hover:border-blue-500/30'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5516 0 .9997.4482.9997.9993s-.4481.9997-.9997.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5516 0 .9997.4482.9997.9993s-.4481.9997-.9997.9997zm11.4045-6.02l1.9973-3.4592c.1259-.2179.0506-.4962-.1673-.6221-.2179-.1259-.4967-.0511-.6226.1668l-2.0232 3.5042c-1.5273-.6971-3.2709-1.0901-5.1157-1.0901s-3.5884.393-5.1157 1.0901l-2.0232-3.5042c-.1259-.2179-.4047-.2927-.6226-.1668-.2179.1259-.2932.4042-.1673.6221l1.9973 3.4592c-3.1118 1.696-5.2159 4.8872-5.4674 8.6477h22.9979c-.2515-3.7605-2.3556-6.9517-5.4674-8.6477z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-base flex items-center gap-2">
                      <span>Android</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 font-mono font-semibold">APK</span>
                    </div>
                    <div className={`text-xs ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      {lang === 'zh' ? '心元 APK 极速安装包' : 'Direct APK Download'}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>

              {/* iOS Option */}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  window.open('https://testflight.apple.com/join/f1uvw1uE', '_blank');
                }}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all group active:scale-[0.98] ${
                  theme === 'light'
                    ? 'bg-zinc-50 hover:bg-blue-50/50 border-zinc-200/80 hover:border-blue-300'
                    : 'bg-white/5 hover:bg-blue-500/10 border-white/10 hover:border-blue-500/30'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.96.99-3.12-1 .04-2.2.67-2.9 1.49-.62.72-1.16 1.88-1.01 3.01 1.12.09 2.25-.56 2.92-1.38z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-base flex items-center gap-2">
                      <span>iOS (iPhone / iPad)</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-500 font-mono font-semibold">TestFlight</span>
                    </div>
                    <div className={`text-xs ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      {lang === 'zh' ? 'App Store 内测体验' : 'App Store TestFlight'}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>

              {/* Web Option */}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  window.open('https://ai.xodn.com', '_blank');
                }}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all group active:scale-[0.98] ${
                  theme === 'light'
                    ? 'bg-zinc-50 hover:bg-blue-50/50 border-zinc-200/80 hover:border-blue-300'
                    : 'bg-white/5 hover:bg-blue-500/10 border-white/10 hover:border-blue-500/30'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-base flex items-center gap-2">
                      <span>{lang === 'zh' ? '网页在线版' : 'Web Version'}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-500 font-mono font-semibold">Online</span>
                    </div>
                    <div className={`text-xs ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      {lang === 'zh' ? '浏览器免安装即点即用' : 'No Install Required'}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DownloadReleasePage = () => {
  const { theme, lang } = useApp();
  const [isAndroidModalOpen, setIsAndroidModalOpen] = useState(false);
  const [isPlatformModalOpen, setIsPlatformModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex(prev => (prev !== null && prev > 0 ? prev - 1 : softwarePreviewImages.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveImageIndex(prev => (prev !== null && prev < softwarePreviewImages.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

  return (
    <>
    <main className={`min-h-screen flex flex-col items-center px-4 sm:px-6 pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-[#f8fafc] text-zinc-900' : 'bg-black text-white'
    }`}>
      {/* Soft background glow */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none ${
        theme === 'light' ? 'bg-blue-500/15' : 'bg-blue-500/10'
      }`} />

      {/* Hero Header Section */}
      <div className="max-w-3xl w-full text-center z-10 flex flex-col items-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 font-serif leading-tight ${
            theme === 'light' ? 'text-zinc-900' : 'text-white'
          }`}
        >
          {lang === 'zh' ? (
            <>探索<span className="text-blue-500 font-extrabold mx-1.5 inline-block">数字生命</span>与<span className="text-blue-600 font-extrabold mx-1.5 inline-block">具身智能</span>的技术边界</>
          ) : (
            <>Frontiers of <span className="text-blue-500 font-extrabold mx-1 inline-block">Digital Life</span> & <span className="text-blue-600 font-extrabold mx-1 inline-block">Embodied Intelligence</span></>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-sm sm:text-base md:text-lg font-light tracking-wide mb-6 ${
            theme === 'light' ? 'text-zinc-600' : 'text-zinc-400'
          }`}
        >
          {lang === 'zh' 
            ? '多模态私有化引擎 · 去中心化长效加密 · 全场景极速协同' 
            : 'Multimodal Persona Engine · Private Encrypted Vault · High-Speed Cross-Platform Architecture'}
        </motion.p>

        {/* Prominent "免费获取" (Get for Free) Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="w-full max-w-xs"
        >
          <button
            type="button"
            onClick={() => setIsPlatformModalOpen(true)}
            className="w-full py-4 px-8 rounded-full font-bold text-lg flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-95 transition-all group"
          >
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>{lang === 'zh' ? '免费获取' : 'Get for Free'}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* App Preview Section (Displayed FIRST, App Store Style) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-6xl w-full z-10 mb-8 px-2 sm:px-4"
      >
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
            theme === 'light' ? 'text-zinc-900' : 'text-white'
          }`}>
            {lang === 'zh' ? '预览' : 'Preview'}
          </h2>

          {/* Controls for Desktop Scroll */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Previous screenshot"
              className={`p-2.5 rounded-full border transition-all ${
                theme === 'light'
                  ? 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-100 shadow-sm active:scale-95'
                  : 'bg-zinc-900 border-white/10 text-zinc-300 hover:bg-zinc-800 active:scale-95'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Next screenshot"
              className={`p-2.5 rounded-full border transition-all ${
                theme === 'light'
                  ? 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-100 shadow-sm active:scale-95'
                  : 'bg-zinc-900 border-white/10 text-zinc-300 hover:bg-zinc-800 active:scale-95'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Software Screenshots Horizontal Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar py-4 px-1 scroll-smooth"
        >
          {softwarePreviewImages.map((imgSrc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index }}
              onClick={() => setActiveImageIndex(index)}
              className={`flex-shrink-0 snap-center group relative cursor-pointer overflow-hidden rounded-[2rem] border shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-zinc-100 border-zinc-200/80 shadow-zinc-200/50'
                  : 'bg-zinc-900 border-white/10 shadow-black/50'
              } w-[240px] xs:w-[260px] sm:w-[280px] md:w-[310px] aspect-[9/19.5]`}
            >
              <img
                src={imgSrc}
                alt={`心元 App 软件介绍 ${index + 1}`}
                className="w-full h-full object-cover rounded-[2rem] select-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 transform scale-90 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Device Support Bar */}
        <div className={`flex items-center justify-between border-t border-b py-4 px-2 mt-4 text-xs sm:text-sm ${
          theme === 'light' ? 'border-zinc-200/80 text-zinc-500' : 'border-white/10 text-zinc-400'
        }`}>
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4" />
            <Tablet className="w-4 h-4" />
            <span className="font-medium">iPhone, iPad, Android</span>
          </div>
          <ChevronDown className="w-4 h-4 opacity-60" />
        </div>
      </motion.div>

      {/* Software Description Section */}
      <div className="max-w-6xl w-full z-10 mt-4 px-4">
        <div className="max-w-3xl text-left space-y-4">
          <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${
            theme === 'light' ? 'text-zinc-900' : 'text-white'
          }`}>
            {lang === 'zh' ? '心元，记录与开启美好数字生活' : 'Xinyuan, Record & Begin Your Digital Life'}
          </h3>
          <p className={`text-sm sm:text-base leading-relaxed ${
            theme === 'light' ? 'text-zinc-600' : 'text-zinc-400'
          }`}>
            {lang === 'zh'
              ? '每天，都有人使用心元 AI 连接数字生命与智能体，让交流、陪伴与思想的碰撞变得更加自然真实。'
              : 'Every day, people use Xinyuan AI to connect with digital lives and agents, making conversations and companionship natural and meaningful.'}
          </p>
          <ul className={`space-y-2 pt-2 text-xs sm:text-sm ${
            theme === 'light' ? 'text-zinc-700' : 'text-zinc-300'
          }`}>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              {lang === 'zh' ? '精彩直播与多模态智能交互' : 'Live Interaction & Multimodal AI'}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              {lang === 'zh' ? '专属数字分身与个性记忆积累' : 'Custom Digital Avatars & Personal Memory Store'}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              {lang === 'zh' ? '全平台极速体验，安全流畅' : 'Cross-Platform Instant Experience, Safe & Smooth'}
            </li>
          </ul>
        </div>
      </div>
    </main>

    {/* Unified Platform Selection Download Modal */}
    <DownloadPlatformModal
      open={isPlatformModalOpen}
      onClose={() => setIsPlatformModalOpen(false)}
      onSelectAndroid={() => setIsAndroidModalOpen(true)}
    />

    {/* Android Download Confirmation Modal */}
    <AndroidDownloadModal open={isAndroidModalOpen} onClose={() => setIsAndroidModalOpen(false)} />

    {/* Software Screenshot Fullscreen Modal / Lightbox */}
    <AnimatePresence>
      {activeImageIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActiveImageIndex(null)}
            aria-label="Close modal"
            className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex(prev => (prev !== null && prev > 0 ? prev - 1 : softwarePreviewImages.length - 1));
            }}
            aria-label="Previous screenshot"
            className="absolute left-4 sm:left-8 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Fullscreen image container */}
          <motion.div
            key={activeImageIndex}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative max-h-[85vh] max-w-[90vw] sm:max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={softwarePreviewImages[activeImageIndex]}
              alt={`心元 App 软件介绍图 ${activeImageIndex + 1}`}
              className="w-full h-full max-h-[85vh] object-contain rounded-[2.5rem]"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono border border-white/10">
              {activeImageIndex + 1} / {softwarePreviewImages.length}
            </div>
          </motion.div>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex(prev => (prev !== null && prev < softwarePreviewImages.length - 1 ? prev + 1 : 0));
            }}
            aria-label="Next screenshot"
            className="absolute right-4 sm:right-8 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

const LeiFengSection = () => {
  const { theme, lang } = useApp();

  return (
    <section id="digital-hero" className={`py-32 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-[#f8fafc]' : 'bg-black'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className={`font-bold tracking-wider uppercase text-sm mb-4 block ${
            theme === 'light' ? 'text-zinc-500' : 'text-white'
          }`}>Digital Heritage Demo</span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 font-serif ${
            theme === 'light' ? 'text-zinc-900' : 'text-white'
          }`}>
            {lang === 'zh' ? <>探索数字生命 · <span className="gradient-text">雷锋</span></> : <>Explore Digital Life · <span className="gradient-text">Lei Feng</span></>}
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          onClick={() => window.location.href = 'https://digital.front.happyway.top'}
          className={`relative max-w-5xl mx-auto overflow-hidden cursor-pointer group rounded-3xl border transition-all ${
            theme === 'light' ? 'bg-white border-zinc-200 shadow-xl' : 'glass-card'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Visual Side */}
            <div className="relative h-[400px] md:h-[600px] bg-black flex items-center justify-center overflow-hidden">
              <div className="absolute w-[400px] h-[400px] border border-white/20 rounded-full animate-spin-slow" />
              <div className="absolute w-[350px] h-[350px] border border-white/10 rounded-full animate-reverse-spin" />
              
              <img 
                src="https://wework.qpic.cn/wwpic3az/617140_smy7QsXmRzS63Fj_1770733481/0" 
                alt="雷锋数字分身" 
                className="relative z-10 h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute top-6 left-6 z-20 font-mono text-[10px] text-white space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  SYSTEM ONLINE
                </div>
                <div>CORE_STABILITY: 99.8%</div>
                <div>NEURAL_SYNC: ACTIVE</div>
              </div>
            </div>

            {/* Right: Interaction Side */}
            <div className={`p-8 md:p-12 flex flex-col justify-center ${
              theme === 'light' ? 'bg-white text-zinc-900' : 'bg-zinc-950 text-white'
            }`}>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      theme === 'light' ? 'bg-zinc-100 text-zinc-900' : 'bg-white/20 text-white'
                    }`}>
                      <Brain className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>
                        {lang === 'zh' ? '雷锋 · 数字永生体' : 'Lei Feng · Digital Avatar'}
                      </h3>
                      <p className={`text-xs font-mono uppercase tracking-widest ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-300'}`}>Digital Soul v2.5</p>
                    </div>
                  </div>
                  <div className={`p-6 rounded-2xl border italic leading-relaxed relative ${
                    theme === 'light'
                      ? 'bg-zinc-50 border-zinc-200 text-zinc-700'
                      : 'bg-black/40 border-white/5 text-zinc-300'
                  }`}>
                    "人的生命是有限的，可是，为人民服务是无限的，我要把有限的生命，投入到无限的为人民服务之中去。"
                  </div>
                </div>

                <div className="space-y-4">
                  <p className={`text-sm leading-relaxed ${theme === 'light' ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    {lang === 'zh'
                      ? '通过心元多模态大模型，我们成功还原了雷锋同志的语言风格、处事逻辑与崇高精神。点击此处，跨越时空与伟大的灵魂对话。'
                      : 'Using Xinyuan multimodal LLM, we faithfully restored Comrade Lei Feng\'s language style and core spirit.'}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['精神传承', '实时对话', '情感共鸣'].map(tag => (
                      <span key={tag} className={`px-3 py-1 rounded-full border text-[10px] uppercase tracking-tighter ${
                        theme === 'light'
                          ? 'bg-zinc-100 border-zinc-200 text-zinc-700'
                          : 'bg-white/5 border-white/10 text-zinc-400'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <div className={`inline-flex items-center gap-2 font-bold group-hover:gap-4 transition-all ${
                    theme === 'light' ? 'text-zinc-900' : 'text-white'
                  }`}>
                    {lang === 'zh' ? '立即开启对话' : 'Start Dialogue'} <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  const { theme, lang } = useApp();

  const steps = [
    {
      phase: lang === 'zh' ? "Phase 1 启蒙" : "Phase 1 Enlightenment",
      time: lang === 'zh' ? "1年内" : "Year 1",
      title: lang === 'zh' ? "单模态信息解析与原型验证" : "Single-modal parsing & MVP verification",
      items: lang === 'zh' ? ["完成最小原型开发", "验证单维度AI分析", "推进多模态模型训练"] : ["MVP Development", "Single-dim AI Analysis", "Multimodal Model Training"]
    },
    {
      phase: lang === 'zh' ? "Phase 2 融合" : "Phase 2 Fusion",
      time: lang === 'zh' ? "2年内" : "Year 2",
      title: lang === 'zh' ? "多源数据融合，数字生命初具雏形" : "Multi-source fusion & digital life prototype",
      items: lang === 'zh' ? ["场景化产品落地", "联合科研机构内测", "组建完整技术团队", "多模态数据融合"] : ["Product Deployment", "Joint Research Testing", "Full Tech Team Setup", "Multimodal Data Fusion"],
      featured: true
    },
    {
      phase: lang === 'zh' ? "Phase 3 永生" : "Phase 3 Perpetuity",
      time: lang === 'zh' ? "3年内" : "Year 3",
      title: lang === 'zh' ? "构建完整数字生命生态" : "Building comprehensive digital life ecosystem",
      items: lang === 'zh' ? ["从'分析'到'预测'跨越", "技术+产品+服务闭环", "成为赛道头部玩家"] : ["Jump from Analysis to Prediction", "Closed Tech-Product Loop", "Market Leader"]
    }
  ];

  return (
    <section id="发展规划" className={`py-32 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-[#f8fafc]' : 'bg-black'
    }`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className={`font-bold tracking-wider uppercase text-sm mb-4 block ${
            theme === 'light' ? 'text-zinc-500' : 'text-white'
          }`}>Strategic Roadmap</span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 font-serif ${
            theme === 'light' ? 'text-zinc-900' : 'text-white'
          }`}>
            {lang === 'zh' ? <>发展<span className="gradient-text">蓝图</span></> : <>Strategic <span className="gradient-text">Roadmap</span></>}
          </h2>
          <p className={`max-w-2xl mx-auto text-lg font-light ${
            theme === 'light' ? 'text-zinc-600' : 'text-zinc-400'
          }`}>
            {lang === 'zh' ? '我们制定了清晰的三阶段战略，致力于在未来三年内实现数字生命的全面普及。' : 'We established a clear 3-stage strategy to generalize digital life in 3 years.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative z-10 p-8 md:p-10 rounded-3xl border transition-all ${
                theme === 'light'
                  ? step.featured ? 'bg-white border-zinc-400 shadow-xl' : 'bg-white border-zinc-200 shadow-md'
                  : step.featured ? 'glass-card border-white/30 bg-white/5' : 'glass-card border-white/5'
              }`}
            >
              <div className="flex justify-between items-start mb-8">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  step.featured
                    ? theme === 'light' ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-black border-white'
                    : theme === 'light' ? 'bg-zinc-100 text-zinc-700 border-zinc-300' : 'bg-white/5 text-zinc-400 border-white/10'
                }`}>
                  {step.phase}
                </span>
                <span className={`font-mono text-sm ${theme === 'light' ? 'text-zinc-500' : 'text-white'}`}>{step.time}</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>{step.title}</h3>
              <ul className="space-y-3">
                {step.items.map((item, j) => (
                  <li key={j} className={`flex items-center gap-3 text-sm ${
                    theme === 'light' ? 'text-zinc-600' : 'text-zinc-400'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      step.featured
                        ? theme === 'light' ? 'bg-zinc-900' : 'bg-white'
                        : theme === 'light' ? 'bg-zinc-400' : 'bg-zinc-600'
                    }`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const { theme, lang } = useApp();

  return (
    <section id="关于我们" className={`py-32 relative transition-colors duration-300 ${
      theme === 'light' ? 'bg-zinc-100/80' : 'bg-[#171717]'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className={`aspect-square rounded-3xl overflow-hidden border shadow-2xl ${
                theme === 'light' ? 'border-zinc-300' : 'border-white/5'
              }`}>
                <img src="https://picsum.photos/seed/developer-workspace/500/500?grayscale" alt="Team Workspace" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className={`aspect-square rounded-3xl overflow-hidden border shadow-2xl mt-12 ${
                theme === 'light' ? 'border-zinc-300' : 'border-white/5'
              }`}>
                <img src="https://picsum.photos/seed/creative-coding/500/500?grayscale" alt="Creative Coding" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className={`font-bold tracking-wider uppercase text-sm mb-6 block ${
              theme === 'light' ? 'text-zinc-500' : 'text-white'
            }`}>About Us</span>
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 font-serif leading-tight ${
              theme === 'light' ? 'text-zinc-900' : 'text-white'
            }`}>
              {lang === 'zh' ? <>关于<span className="gradient-text">我们</span></> : <>About <span className="gradient-text">Us</span></>}
            </h2>
            <div className={`space-y-6 text-lg font-light leading-relaxed ${
              theme === 'light' ? 'text-zinc-600' : 'text-zinc-400'
            }`}>
              <p>
                心元团队汇聚了来自<span className={`font-medium ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>湖南工学院</span>的顶尖青年才俊，在人工智能、大数据分析及商业运营领域拥有深厚积累。
              </p>
              <p>
                我们是一群<span className={`font-medium ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>用代码编织记忆的造梦者</span>，相信技术的力量能够跨越生死的界限，让每一份珍贵的情感都能得到永恒的保存。
              </p>
              <p className={`font-medium italic border-l-2 pl-6 py-2 ${
                theme === 'light' ? 'border-zinc-900 text-zinc-800' : 'border-white text-white'
              }`}>
                "用科技留住温情，让每一个普通人的生命光辉都能被世界铭记。"
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-10">
              <div>
                <div className={`text-3xl font-bold mb-1 ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>2025</div>
                <div className={`text-xs uppercase tracking-widest ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-300'}`}>{lang === 'zh' ? '项目启动' : 'Started'}</div>
              </div>
              <div className={`w-px h-10 ${theme === 'light' ? 'bg-zinc-300' : 'bg-white/5'}`} />
              <div>
                <div className={`text-3xl font-bold mb-1 ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>10+</div>
                <div className={`text-xs uppercase tracking-widest ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-300'}`}>{lang === 'zh' ? '核心成员' : 'Members'}</div>
              </div>
              <div className={`w-px h-10 ${theme === 'light' ? 'bg-zinc-300' : 'bg-white/5'}`} />
              <div>
                <div className={`text-3xl font-bold mb-1 ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>3年</div>
                <div className={`text-xs uppercase tracking-widest ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-300'}`}>{lang === 'zh' ? '规划周期' : 'Cycle'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { theme, lang } = useApp();
  const [isWechatQrOpen, setIsWechatQrOpen] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const footerLinks: { labelZh: string; labelEn: string; href: string }[] = [
    { labelZh: '首页', labelEn: 'Home', href: '/' },
    { labelZh: '核心能力', labelEn: 'Capabilities', href: '/capabilities' },
    { labelZh: '发展规划', labelEn: 'Roadmap', href: '/roadmap' },
    { labelZh: '关于我们', labelEn: 'About Us', href: '/about-us' },
    { labelZh: '公司介绍页', labelEn: 'Company', href: '/company' },
  ];

  const copyPhoneNumber = async () => {
    await navigator.clipboard.writeText(phoneNumber);
    setPhoneCopied(true);
    window.setTimeout(() => setPhoneCopied(false), 2200);
  };

  return (
    <>
      <footer className={`border-t py-16 md:py-20 transition-colors duration-300 ${
        theme === 'light'
          ? 'bg-zinc-100/80 border-zinc-200 text-zinc-900'
          : 'bg-[#0d0d0d] border-white/5 text-white'
      }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-zinc-200/50 shadow-sm">
                <img src={iconImage} alt="心元 Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className={`font-bold text-xl tracking-tight font-serif ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>心元</span>
            </div>
            <p className={`max-w-sm leading-relaxed mb-8 font-light text-sm ${
              theme === 'light' ? 'text-zinc-600' : 'text-zinc-300'
            }`}>
              {lang === 'zh'
                ? '致力于通过人工智能技术，为人类构建永恒的数字记忆空间。让每一个伟大的灵魂都能在数字世界中得到延续。'
                : 'Dedicated to constructing an eternal digital memory vault for humanity via AI, enabling every soul to continue in the digital realm.'}
            </p>
            <div className="flex gap-4">
              <a
                href="https://ai.xodn.com"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  theme === 'light'
                    ? 'bg-white text-zinc-700 hover:bg-zinc-200 border border-zinc-200 shadow-sm'
                    : 'bg-white/5 text-zinc-400 hover:bg-white hover:text-black'
                }`}
              >
                <span className="sr-only">产品</span>
                <Globe className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setIsWechatQrOpen(true)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  theme === 'light'
                    ? 'bg-white text-zinc-700 hover:bg-zinc-200 border border-zinc-200 shadow-sm'
                    : 'bg-white/5 text-zinc-400 hover:bg-white hover:text-black'
                }`}
              >
                <span className="sr-only">微信</span>
                <WeChatIcon className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={copyPhoneNumber}
                className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  theme === 'light'
                    ? 'bg-white text-zinc-700 hover:bg-zinc-200 border border-zinc-200 shadow-sm'
                    : 'bg-white/5 text-zinc-400 hover:bg-white hover:text-black'
                }`}
              >
                <span className="sr-only">电话</span>
                <Phone className="w-5 h-5" />
                {phoneCopied && (
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-black shadow-lg">
                    {lang === 'zh' ? '电话已复制' : 'Phone Copied'}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div>
            <h4 className={`font-bold mb-6 ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>
              {lang === 'zh' ? '快速链接' : 'Quick Links'}
            </h4>
            <ul className={`space-y-4 text-sm ${theme === 'light' ? 'text-zinc-600' : 'text-zinc-300'}`}>
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={`transition-colors ${theme === 'light' ? 'hover:text-zinc-900' : 'hover:text-white'}`}>
                    {lang === 'zh' ? item.labelZh : item.labelEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-bold mb-6 ${theme === 'light' ? 'text-zinc-900' : 'text-white'}`}>
              {lang === 'zh' ? '联系我们' : 'Contact Us'}
            </h4>
            <ul className={`space-y-3 text-sm font-light ${theme === 'light' ? 'text-zinc-600' : 'text-zinc-300'}`}>
              <li>{lang === 'zh' ? '湖南省衡阳市珠晖区' : 'Zhuhui District, Hengyang, Hunan'}</li>
              <li>{lang === 'zh' ? '湖南工学院 · 心元团队' : 'Hunan Institute of Tech · Xinyuan Team'}</li>
              <li>{phoneNumber}</li>
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 ${
          theme === 'light' ? 'border-zinc-200' : 'border-white/5'
        }`}>
          <div className={`text-xs text-center md:text-left ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>
            <p>© 2026 衡阳市灵库科技有限公司 · 心元 (Xinyuan AI). All rights reserved.</p>
            <p className="mt-1">
              <a 
                href="https://beian.miit.gov.cn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-colors ${theme === 'light' ? 'hover:text-zinc-900' : 'hover:text-white'}`}
              >
                湘ICP备2026007568号
              </a>
            </p>
          </div>
          <div className={`flex gap-8 text-xs ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}`}>
            <a href="https://xodn.com/tp/privacy.html" className={`transition-colors ${theme === 'light' ? 'hover:text-zinc-900' : 'hover:text-white'}`}>
              {lang === 'zh' ? '隐私政策' : 'Privacy Policy'}
            </a>
            <a href="https://xodn.com/tp/user_agreement.html" className={`transition-colors ${theme === 'light' ? 'hover:text-zinc-900' : 'hover:text-white'}`}>
              {lang === 'zh' ? '用户条款' : 'Terms of Service'}
            </a>
          </div>
        </div>
      </div>
    </footer>
    <WechatQrModal open={isWechatQrOpen} onClose={() => setIsWechatQrOpen(false)} />
    </>
  );
};

const PageContent = () => {
  if (isCompanyPage) {
    return <AboutPage />;
  }

  switch (currentPath) {
    case '/':
      return (
        <main>
          <Hero />
        </main>
      );
    case '/download':
    case '/explore':
      return <DownloadReleasePage />;
    case '/reviews':
      return (
        <main className="pt-20">
          <UserReviewsSection />
        </main>
      );
    case '/digital-life':
      return (
        <main className="pt-20">
          <LeiFengSection />
        </main>
      );
    case '/capabilities':
      return (
        <main className="pt-20">
          <CoreCapabilities />
        </main>
      );
    case '/roadmap':
      return (
        <main className="pt-20">
          <Roadmap />
        </main>
      );
    case '/about-us':
      return (
        <main className="pt-20">
          <About />
        </main>
      );
    default:
      return (
        <main>
          <Hero />
        </main>
      );
  }
};

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('xodn_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  const [lang, setLang] = useState<'zh' | 'en'>(() => {
    return (localStorage.getItem('xodn_lang') as 'zh' | 'en') || 'zh';
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('xodn_theme')) {
        setTheme(e.matches ? 'light' : 'dark');
      }
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('xodn_theme', theme);
    if (theme === 'light') {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('xodn_lang', lang);
  }, [lang]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, setLang }}>
      <div className="min-h-screen selection:bg-white/20 selection:text-white transition-colors duration-300">
        <Navbar />
        <PageContent />
        <Footer />
        
        {/* Decorative background blur */}
        <div className="fixed inset-0 pointer-events-none z-[-1]">
          <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] ${theme === 'light' ? 'bg-blue-500/5' : 'bg-white/5'}`} />
          <div className={`absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full blur-[150px] ${theme === 'light' ? 'bg-indigo-500/5' : 'bg-zinc-500/5'}`} />
        </div>
      </div>
    </AppContext.Provider>
  );
}
