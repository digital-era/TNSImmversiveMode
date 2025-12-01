import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileKey, Cpu, Brain, Activity, Layers, Eye, ShieldCheck, Box, Zap, LogOut, Hash, ArrowDown } from 'lucide-react';
import { LatencyChart } from './LatencyChart';

interface ReportContentProps {
  onLogout: () => void;
}

export const ReportContent: React.FC<ReportContentProps> = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState('philosophy');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Simple scroll spy to update active TOC item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['philosophy', 'physics', 'logic', 'aesthetics', 'references'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-polaris-900 text-slate-300 font-sans selection:bg-polaris-accent/30 selection:text-white pb-20">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-slate-800 backdrop-blur-md bg-polaris-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Box className="w-6 h-6 text-polaris-accent animate-pulse-slow" />
            <h1 className="font-bold text-white tracking-tight text-lg">PROJECT <span className="text-polaris-accent">对话北极星</span></h1>
            <span className="hidden md:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-polaris-800 text-slate-400 border border-slate-700">V2.0</span>
          </div>
          <div className="flex items-center space-x-6">
             <div className="hidden md:flex flex-col items-end">
                <span className="text-[10px] text-slate-500 font-mono uppercase">Current User</span>
                <span className="text-xs text-polaris-accent font-mono">digital-era</span>
             </div>
             <button 
                onClick={onLogout}
                className="flex items-center space-x-2 px-3 py-1.5 rounded hover:bg-red-950/30 text-slate-400 hover:text-red-400 transition-colors border border-transparent hover:border-red-900/50"
             >
               <LogOut className="w-4 h-4" />
               <span className="text-xs font-mono uppercase hidden sm:inline">Disconnect</span>
             </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
        
        {/* Sidebar Navigation (TOC) */}
        <aside className="hidden lg:block relative">
           <div className="sticky top-24 space-y-8">
              <div className="space-y-2">
                 <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4 flex items-center">
                    <Hash className="w-3 h-3 mr-2" /> Contents
                 </h3>
                 <nav className="space-y-1 border-l border-slate-800">
                    {[
                      { id: 'philosophy', label: '01. 功能蓝图' },
                      { id: 'physics', label: '02. 物理约束' },
                      { id: 'logic', label: '03. 逻辑架构' },
                      { id: 'aesthetics', label: '04. 交互美学' },
                      { id: 'references', label: '05. 核心附录' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`block w-full text-left pl-4 py-2 text-xs font-mono transition-all border-l-2 -ml-[1px] ${
                          activeSection === item.id 
                            ? 'border-polaris-accent text-polaris-accent bg-polaris-accent/5' 
                            : 'border-transparent text-slate-500 hover:text-slate-300 hover:border-slate-600'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                 </nav>
              </div>
              
              <div className="p-4 rounded bg-slate-800/20 border border-slate-800/50">
                  <div className="flex items-center space-x-2 text-red-500 mb-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Top Secret</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                      此文档包含核心架构细节。未经授权的复制或分发将受到联邦法律的制裁。
                  </p>
              </div>
           </div>
        </aside>

        {/* Main Content */}
        <main className="space-y-16 min-w-0">
          
          {/* Document Header */}
          <motion.div {...fadeIn} className="text-center lg:text-left space-y-4 border-b border-slate-800 pb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">《对话北极星》“沉浸模式”深度拆解设计报告</h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-mono text-slate-400 mt-4">
              <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-polaris-accent" /> 文件密级：绝密/核心架构</span>
              <span className="flex items-center"><Activity className="w-4 h-4 mr-2 text-polaris-accent" /> 版本：V2.0</span>
            </div>
          </motion.div>

          {/* Section 1: Philosophy */}
          <motion.section 
              id="philosophy"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 scroll-mt-24"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-polaris-800 rounded border border-slate-700">
                  <Brain className="w-6 h-6 text-polaris-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">一、功能蓝图：基于第一性原理的系统架构</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
               <div className="glass-panel p-6 rounded-lg border-l-4 border-l-polaris-accent">
                  <h4 className="text-lg font-bold text-white mb-2">知识保真 (Intellectual Fidelity)</h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    系统首要原则。确保虚拟人物的知识体系、哲学立场在历史和学术语境中高度准确。摒弃 LLM 的“平均化人格”，基于 <strong className="text-polaris-accent">Big-Five (OCEAN)</strong> 模型构建约束。
                  </p>
               </div>
               <div className="glass-panel p-6 rounded-lg border-l-4 border-l-purple-500">
                  <h4 className="text-lg font-bold text-white mb-2">反依赖设计 (Anti-Dependency)</h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    AI 不是全知先知，而是 <strong className="text-purple-400">苏格拉底式引导者</strong>。通过“差距提示”指出用户逻辑漏洞，利用 CoT 外化推理过程，建立信任。
                  </p>
               </div>
            </div>
          </motion.section>

          {/* Section 2: Physics & Latency */}
          <motion.section 
              id="physics"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 scroll-mt-24"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-polaris-800 rounded border border-slate-700">
                  <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">二、物理学第一性原理：端到端延迟约束</h3>
            </div>

            <div className="glass-panel p-6 rounded-xl">
               <div className="flex justify-between items-end mb-4">
                  <div className="max-w-2xl">
                      <p className="text-sm text-slate-400">
                          “沉浸感”的物理本质是对 <strong className="text-white">Motion-to-Photon (MTP)</strong> 延迟的极致控制。
                          为防止晕动症 (Motion Sickness)，强制执行 <span className="text-red-400 font-mono font-bold">&lt;30ms</span> 总预算。
                      </p>
                  </div>
               </div>
               <LatencyChart />
               <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-slate-500">
                  <div className="p-3 bg-slate-900/50 rounded border border-slate-800">
                      <span className="block text-polaris-accent font-bold mb-1">L2: QUIC协议</span>
                      防止TCP队头阻塞，保障5G网络下的传输稳定性。
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded border border-slate-800">
                      <span className="block text-indigo-400 font-bold mb-1">L3/4: 并行流水线</span>
                      推测性采样生成草稿，同时启动3DGS渲染，打破串行瓶颈。
                  </div>
                  <div className="p-3 bg-slate-900/50 rounded border border-slate-800">
                      <span className="block text-purple-400 font-bold mb-1">L5: ATW补偿</span>
                      异步时间扭曲技术，在最后显示阶段修正头部运动带来的丢帧。
                  </div>
               </div>
            </div>
          </motion.section>

          {/* Section 3: Logic Architecture */}
          <motion.section 
              id="logic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 scroll-mt-24"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-polaris-800 rounded border border-slate-700">
                  <Layers className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">三、逻辑架构：人格代理与知识增强</h3>
            </div>

            {/* Subsection 3.1: 5-Layer Cognitive Model */}
            <div className="mb-10">
               <h4 className="text-lg font-bold text-slate-200 mb-6 flex items-center">
                  <span className="text-polaris-accent mr-2">3.1</span> 抽象架构层级：五层认知模型
               </h4>
               <div className="glass-panel p-6 rounded-xl border border-slate-800/60 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-polaris-900/0 via-polaris-900/0 to-polaris-900/50 pointer-events-none"></div>
                  
                  <div className="flex flex-col space-y-2">
                     {[
                        { level: 1, name: '输入层', desc: '接收视觉、音频、头部追踪（6DoF）及生理信号', icon: 'INPUT', color: 'border-slate-600' },
                        { level: 2, name: '特征层', desc: '提取面部 AU (Action Units)、语调韵律、语义 Embedding', icon: 'FEATURE', color: 'border-slate-500' },
                        { level: 3, name: '融合层', desc: '多模态对齐 (MMA)，确保语音内容与面部微表情时间同步', icon: 'FUSION', color: 'border-blue-500/50' },
                        { level: 4, name: '推理层', desc: '核心 LLM Agent、知识图谱 (KG)、约束控制器', icon: 'REASON', color: 'border-polaris-accent' },
                        { level: 5, name: '生成层', desc: '神经渲染引擎 (3DGS)、空间音频合成', icon: 'OUTPUT', color: 'border-purple-500' },
                     ].map((layer, index) => (
                        <div key={layer.level} className="relative group">
                           {index !== 0 && (
                              <div className="absolute left-6 -top-2 w-px h-2 bg-slate-700 group-hover:bg-polaris-accent transition-colors"></div>
                           )}
                           <div className={`flex items-center p-3 rounded bg-slate-900/40 border ${layer.color} hover:bg-slate-800/60 transition-all`}>
                              <div className="flex-shrink-0 w-12 h-8 flex items-center justify-center bg-slate-950 rounded border border-slate-800 font-mono text-xs text-slate-400">
                                 L{layer.level}
                              </div>
                              <div className="ml-4 flex-grow grid md:grid-cols-[120px_1fr] gap-2 items-center">
                                 <div className="font-bold text-white">{layer.name}</div>
                                 <div className="text-xs text-slate-400 font-mono">{layer.desc}</div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Subsection 3.2: Modules Grid */}
             <div className="mb-6">
                <h4 className="text-lg font-bold text-slate-200 mb-6 flex items-center">
                  <span className="text-polaris-accent mr-2">3.2</span> 核心逻辑模块：人格保真体系
               </h4>
                <div className="relative overflow-hidden glass-panel rounded-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500"></div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                      <div className="p-6 hover:bg-slate-800/30 transition-colors">
                          <div className="text-xs font-mono text-slate-500 mb-2">MODULE 01</div>
                          <h4 className="font-bold text-white mb-2">知识检索层</h4>
                          <p className="text-xs text-slate-400 mb-3">GraphRAG + 矢量数据库</p>
                          <p className="text-sm text-slate-300">访问历史事实，提供跨学科多跳推理，确保上下文准确。</p>
                      </div>
                      <div className="p-6 hover:bg-slate-800/30 transition-colors">
                          <div className="text-xs font-mono text-slate-500 mb-2">MODULE 02</div>
                          <h4 className="font-bold text-white mb-2">人格风格层</h4>
                          <p className="text-xs text-slate-400 mb-3">Style Transfer + ICL</p>
                          <p className="text-sm text-slate-300">锁定角色的修辞、词汇习惯、语速与口癖。</p>
                      </div>
                      <div className="p-6 hover:bg-slate-800/30 transition-colors relative">
                          <div className="absolute top-2 right-2 text-[10px] bg-polaris-accent/20 text-polaris-accent px-1.5 py-0.5 rounded border border-polaris-accent/30">CHECKER</div>
                          <div className="text-xs font-mono text-slate-500 mb-2">MODULE 03</div>
                          <h4 className="font-bold text-white mb-2">约束遵循层</h4>
                          <p className="text-xs text-slate-400 mb-3">Constitutional AI + DPO</p>
                          <p className="text-sm text-slate-300">审查道德、历史设定及哲学一致性，防止“幻觉”。</p>
                      </div>
                      <div className="p-6 hover:bg-slate-800/30 transition-colors">
                          <div className="text-xs font-mono text-slate-500 mb-2">MODULE 04</div>
                          <h4 className="font-bold text-white mb-2">反依赖层</h4>
                          <p className="text-xs text-slate-400 mb-3">Socratic Prompting</p>
                          <p className="text-sm text-slate-300">识别逻辑漏洞，生成引导性提问，激发用户批判思维。</p>
                      </div>
                  </div>
                </div>
            </div>
          </motion.section>

          {/* Section 4: Aesthetics */}
          <motion.section 
              id="aesthetics"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 scroll-mt-24"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-polaris-800 rounded border border-slate-700">
                  <Eye className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">四、交互美学：通感 (Synesthesia)</h3>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden border border-slate-800">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-900/80 border-b border-slate-700 text-xs uppercase tracking-wider text-slate-400">
                            <th className="p-4 font-medium hidden sm:table-cell">情感状态</th>
                            <th className="p-4 font-medium">视觉映射 (Visual)</th>
                            <th className="p-4 font-medium hidden md:table-cell">听觉映射 (Auditory)</th>
                            <th className="p-4 font-medium hidden md:table-cell">行为特征</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-sm">
                        <tr className="hover:bg-slate-800/30 transition-colors group">
                            <td className="p-4 font-bold text-white border-l-2 border-transparent group-hover:border-blue-400 block sm:table-cell">
                                <span className="sm:hidden text-xs text-slate-500 uppercase block mb-1">State</span>
                                沉思 / 深度逻辑
                            </td>
                            <td className="p-4 text-slate-300">
                                <span className="md:hidden text-xs text-slate-500 uppercase block mb-1">Visual</span>
                                低饱和度、冷色调、几何平衡构图
                            </td>
                            <td className="p-4 text-slate-300 hidden md:table-cell">Alpha波频率低频音、极慢 BPM</td>
                            <td className="p-4 text-slate-300 hidden md:table-cell">减少眨眼，持续目光接触</td>
                        </tr>
                        <tr className="hover:bg-slate-800/30 transition-colors group">
                            <td className="p-4 font-bold text-white border-l-2 border-transparent group-hover:border-orange-400 block sm:table-cell">
                                <span className="sm:hidden text-xs text-slate-500 uppercase block mb-1">State</span>
                                困惑 / 认知冲突
                            </td>
                            <td className="p-4 text-slate-300">
                                <span className="md:hidden text-xs text-slate-500 uppercase block mb-1">Visual</span>
                                高对比度纹理、非线性光影
                            </td>
                            <td className="p-4 text-slate-300 hidden md:table-cell">不协和音程、升调强调</td>
                            <td className="p-4 text-slate-300 hidden md:table-cell">眉毛微抬 (AU1+2)，头部侧倾</td>
                        </tr>
                        <tr className="hover:bg-slate-800/30 transition-colors group">
                            <td className="p-4 font-bold text-white border-l-2 border-transparent group-hover:border-red-400 block sm:table-cell">
                                <span className="sm:hidden text-xs text-slate-500 uppercase block mb-1">State</span>
                                兴奋 / 宏大叙事
                            </td>
                            <td className="p-4 text-slate-300">
                                <span className="md:hidden text-xs text-slate-500 uppercase block mb-1">Visual</span>
                                高饱和暖色调、动态粒子流速加快
                            </td>
                            <td className="p-4 text-slate-300 hidden md:table-cell">管弦乐配器、全景空间音频</td>
                            <td className="p-4 text-slate-300 hidden md:table-cell">瞳孔放大，语速加快</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </motion.section>

          {/* Section 5: References */}
          <motion.section 
              id="references"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 pb-12 scroll-mt-24"
          >
               <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-polaris-800 rounded border border-slate-700">
                      <FileKey className="w-6 h-6 text-slate-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">附录：核心技术引用</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                  {[
                      { id: '[1]', title: 'Simulating Historical Figures', source: 'ResearchGate (2025)', desc: 'Knowledge fidelity patterns in LLMs.' },
                      { id: '[11]', title: 'The Cognitive Mirror', source: 'Frontiers in Education (2025)', desc: 'Framework for AI metacognition.' },
                      { id: '[14]', title: 'Latency Perception Thresholds', source: 'IEEE Computer Society', desc: 'Behavioral evidence for <30ms constraints.' },
                      { id: '[23]', title: 'FastVideoEdit: Consistency Models', source: 'IEEE Xplore', desc: 'Consistency models for efficient generation.' },
                      { id: '[48]', title: 'Step-by-Step Mastery (DPO)', source: 'arXiv (2025)', desc: 'Enhancing soft constraint following.' },
                      { id: '[67]', title: 'Virtual Skin & Synesthesia', source: 'OAPEN Library', desc: 'Co-creating 3D materials with AI.' }
                  ].map((ref) => (
                      <div key={ref.id} className="flex items-start space-x-4 p-4 rounded border border-slate-800 bg-slate-900/40 hover:border-slate-600 transition-colors">
                          <span className="text-polaris-accent font-mono text-sm">{ref.id}</span>
                          <div>
                              <h5 className="text-white font-medium text-sm">{ref.title}</h5>
                              <p className="text-slate-500 text-xs mt-1">{ref.source}</p>
                              <p className="text-slate-400 text-xs mt-2 italic">"{ref.desc}"</p>
                          </div>
                      </div>
                  ))}
              </div>
          </motion.section>
        </main>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-8 mt-12 border-t border-slate-800 text-center">
        <div className="flex justify-center items-center space-x-2 mb-2">
            <Cpu className="w-4 h-4 text-slate-600" />
            <span className="text-slate-600 text-xs tracking-widest uppercase">System Status: Nominal</span>
        </div>
        <p className="text-slate-700 text-xs">
            © 2025 Project Architecture Team. All rights reserved. <br/>
            Authorized Personnel Only. Class A-1 Security Clearance Required.
        </p>
      </footer>
    </div>
  );
};