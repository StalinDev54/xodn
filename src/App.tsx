/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Brain, 
  Video, 
  Shield, 
  ArrowRight, 
  Play, 
  Users, 
  Calendar, 
  Cpu, 
  ChevronRight,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  Infinity,
  Database,
  Zap,
  Twitter,
  Github,
  MessageCircle
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-white/10 group-hover:scale-110 transition-transform duration-300">
            <img src="/src/assets/icon.png" alt="心元 Logo" className="w-8 h-8 object-contain" />
          </div>
          <span className="font-bold text-2xl tracking-tight font-serif text-white">心元</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['核心能力', '发展规划', '关于我们'].map((item) => (
            <a key={item} href={`#${item}`} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.location.href = 'https://ai.xodn.com'}
            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-zinc-200 transition-all transform active:scale-95 shadow-xl shadow-white/5"
          >
            开启记忆封存
          </button>
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#171717] border-b border-white/5 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['核心能力', '发展规划', '关于我们'].map((item) => (
                <a key={item} href={`#${item}`} className="text-lg font-medium text-zinc-300" onClick={() => setIsMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const scrollToLeiFeng = () => {
    const element = document.getElementById('digital-hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-white rounded-full blur-[120px] opacity-5 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-zinc-500 rounded-full blur-[120px] opacity-5 animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-white text-xs font-bold mb-8 border border-white/20 tracking-wider uppercase">
              <Sparkles className="w-3 h-3" /> X Origin Digital Nexus（XODN） 
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-8 font-serif leading-[1.1]"
          >
            心元 · 让生命 <br />
            <span className="gradient-text">记忆永恒</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            不仅仅是存储，而是生命的延续。
            构建您的数字生命记忆库，让爱与智慧跨越时间，在数字世界中永不凋零。
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <button 
              onClick={() => window.location.href = 'https://ai.xodn.com'}
              className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all transform hover:scale-105 shadow-2xl shadow-white/10"
            >
              开启记忆封存
            </button>
            <button 
              onClick={scrollToLeiFeng}
              className="w-full sm:w-auto glass-card px-10 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-all flex items-center gap-3 justify-center group"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Play className="w-4 h-4 fill-white" />
              </div>
              探索数字生命
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Image Cards */}
      <div className="absolute bottom-40 md:bottom-16 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 md:h-64 pointer-events-none overflow-hidden opacity-40">
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
            <div key={i} className="flex-shrink-0 w-48 md:w-80 h-32 md:h-48 rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
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
    </section>
  );
};

const CoreCapabilities = () => {
  const capabilities = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "多模态记忆引擎",
      tag: "PERCEPTION",
      desc: "融合文字、语音、图像与视频，全方位还原生命印记。",
      tech: ["微表情捕捉", "声纹提取", "语义理解"]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "心元大模型",
      tag: "COGNITION",
      desc: "专属私有化模型训练，深度学习个人语言风格与思维逻辑。",
      tech: ["人格对齐", "性格模拟", "长短期记忆"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "永恒记忆库",
      tag: "STORAGE",
      desc: "去中心化加密存储，确保您的数字资产永久归您所有。",
      tech: ["隐私计算", "时空索引", "加密存储"]
    }
  ];

  return (
    <section id="核心能力" className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-mono uppercase tracking-widest mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Integrated Architecture v3.0
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-8">
              核心能力与 <br />
              <span className="gradient-text">技术架构</span>
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              我们将尖端AI能力与底层架构深度融合，构建从感知到永恒存储的完整闭环。
            </p>
          </div>
          
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col justify-between group hover:border-white/20 transition-all">
              <div>
                <ShieldCheck className="w-8 h-8 text-white mb-4" />
                <h4 className="text-white font-bold mb-2">隐私主权保护</h4>
                <p className="text-zinc-500 text-sm font-light">去中心化技术，确保数据主权。</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600">
                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                ENCRYPTED_ACTIVE
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col justify-between group hover:border-white/20 transition-all">
              <div>
                <Infinity className="w-8 h-8 text-white mb-4" />
                <h4 className="text-white font-bold mb-2">生命永续计划</h4>
                <p className="text-zinc-500 text-sm font-light">自动化的记忆整理与生命叙事。</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600">
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
              className="group relative p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                  {cap.icon}
                </div>
                <span className="text-[10px] font-mono text-zinc-600 tracking-widest">{cap.tag}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8">{cap.desc}</p>
              
              <div className="space-y-3">
                {cap.tech.map((t, j) => (
                  <div key={j} className="flex items-center gap-3 text-[11px] text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    <div className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-white transition-colors" />
                    {t}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] font-mono text-zinc-700 uppercase">System Ready</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const LeiFengSection = () => {
  return (
    <section id="digital-hero" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-white font-bold tracking-wider uppercase text-sm mb-4 block">Digital Heritage Demo</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">探索数字生命 · <span className="gradient-text">雷锋</span></h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          onClick={() => window.location.href = 'https://xinyuan.funcstudio.top/index-mobile.html'}
          className="relative max-w-5xl mx-auto glass-card overflow-hidden cursor-pointer group"
        >
          {/* Scanning Line Effect */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent z-20 animate-scan opacity-50" />
          
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Visual Side */}
            <div className="relative h-[400px] md:h-[600px] bg-black flex items-center justify-center overflow-hidden">
              {/* Tech Circles */}
              <div className="absolute w-[400px] h-[400px] border border-white/20 rounded-full animate-spin-slow" />
              <div className="absolute w-[350px] h-[350px] border border-white/10 rounded-full animate-reverse-spin" />
              
              <img 
                src="https://wework.qpic.cn/wwpic3az/617140_smy7QsXmRzS63Fj_1770733481/0" 
                alt="雷锋数字分身" 
                className="relative z-10 h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              
              {/* HUD Elements */}
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
            <div className="p-8 md:p-12 flex flex-col justify-center bg-zinc-950">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">雷锋 · 数字永生体</h3>
                      <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">Digital Soul v2.5</p>
                    </div>
                  </div>
                  <div className="p-6 bg-black/40 rounded-2xl border border-white/5 italic text-zinc-300 leading-relaxed relative">
                    <span className="absolute -top-3 -left-2 text-4xl text-white/20 font-serif">"</span>
                    人的生命是有限的，可是，为人民服务是无限的，我要把有限的生命，投入到无限的为人民服务之中去。
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    通过心元多模态大模型，我们成功还原了雷锋同志的语言风格、处事逻辑与崇高精神。点击此处，跨越时空与伟大的灵魂对话。
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['精神传承', '实时对话', '情感共鸣'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-400 uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                    立即开启对话 <ArrowRight className="w-5 h-5" />
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
  const steps = [
    { phase: "Phase 1 启蒙", time: "1年内", title: "单模态信息解析与原型验证", items: ["完成最小原型开发", "验证单维度AI分析", "推进多模态模型训练"] },
    { phase: "Phase 2 融合", time: "2年内", title: "多源数据融合，数字生命初具雏形", items: ["场景化产品落地", "联合科研机构内测", "组建完整技术团队", "多模态数据融合"], featured: true },
    { phase: "Phase 3 永生", time: "3年内", title: "构建完整数字生命生态", items: ["从'分析'到'预测'跨越", "技术+产品+服务闭环", "成为赛道头部玩家"] }
  ];

  return (
    <section id="发展规划" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-white font-bold tracking-wider uppercase text-sm mb-4 block">Strategic Roadmap</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">发展<span className="gradient-text">蓝图</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
            我们制定了清晰的三阶段战略，致力于在未来三年内实现数字生命的全面普及。
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
              className={`relative z-10 glass-card p-8 md:p-10 ${step.featured ? 'border-white/30 bg-white/5' : 'border-white/5'}`}
            >
              <div className="flex justify-between items-start mb-8">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${step.featured ? 'bg-white text-black border-white' : 'bg-white/5 text-zinc-400 border-white/10'}`}>
                  {step.phase}
                </span>
                <span className="text-white font-mono text-sm">{step.time}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <ul className="space-y-3">
                {step.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-zinc-400">
                    <div className={`w-1.5 h-1.5 rounded-full ${step.featured ? 'bg-white' : 'bg-zinc-600'}`} />
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
  return (
    <section id="关于我们" className="py-32 bg-[#171717] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                <img src="https://picsum.photos/seed/developer-workspace/500/500?grayscale" alt="Team Workspace" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/5 shadow-2xl mt-12">
                <img src="https://picsum.photos/seed/creative-coding/500/500?grayscale" alt="Creative Coding" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-white font-bold tracking-wider uppercase text-sm mb-6 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif leading-tight">关于<span className="gradient-text">我们</span></h2>
            <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                心元团队汇聚了来自<span className="text-white font-medium">湖南工学院</span>的顶尖青年才俊，在人工智能、大数据分析及商业运营领域拥有深厚积累。
              </p>
              <p>
                我们是一群<span className="text-white font-medium">用代码编织记忆的造梦者</span>，相信技术的力量能够跨越生死的界限，让每一份珍贵的情感都能得到永恒的保存。
              </p>
              <p className="text-white font-medium italic border-l-2 border-white pl-6 py-2">
                "用科技留住温情，让每一个普通人的生命光辉都能被世界铭记。"
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-10">
              <div>
                <div className="text-3xl font-bold text-white mb-1">2025</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest">项目启动</div>
              </div>
              <div className="w-px h-10 bg-white/5" />
              <div>
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest">核心成员</div>
              </div>
              <div className="w-px h-10 bg-white/5" />
              <div>
                <div className="text-3xl font-bold text-white mb-1">3年</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest">规划周期</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <img src="/src/assets/icon.png" alt="心元 Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className="font-bold text-xl tracking-tight font-serif text-white">心元</span>
            </div>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-8">
              致力于通过人工智能技术，为人类构建永恒的数字记忆空间。让每一个伟大的灵魂都能在数字世界中得到延续。
            </p>
            <div className="flex gap-4">
              {[
                { name: 'Twitter', icon: <Twitter className="w-5 h-5" /> },
                { name: 'GitHub', icon: <Github className="w-5 h-5" /> },
                { name: 'Discord', icon: <MessageCircle className="w-5 h-5" /> }
              ].map(social => (
                <a key={social.name} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all">
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">快速链接</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              {['核心能力', '发展规划', '关于我们'].map(item => (
                <li key={item}><a href={`#${item}`} className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">联系我们</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>湖南省衡阳市珠晖区</li>
              <li>湖南工学院 · 心元团队</li>
              <li>x@xodn.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-zinc-600">
            © 2026 心元 (Xinyuan AI). All rights reserved. 湘ICP备2026007568号
          </p>
          <div className="flex gap-8 text-xs text-zinc-600">
            <a href="#" className="hover:text-zinc-400 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <LeiFengSection />
        <CoreCapabilities />
        <Roadmap />
        <About />
      </main>
      <Footer />
      
      {/* Decorative background blur */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-zinc-500/5 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
