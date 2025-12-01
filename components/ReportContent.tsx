import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileKey, Cpu, Brain, Activity, Layers, Eye, ShieldCheck, Box, Zap, LogOut, Hash, Sparkles, Network } from 'lucide-react';
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
            <span className="hidden md:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-polaris-800 text-slate-400 border border-slate-700">V3.0</span>
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
              <span className="flex items-center"><Activity className="w-4 h-4 mr-2 text-polaris-accent" /> 版本：V3.0</span>
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
              <h3 className="text-xl md:text-2xl font-bold text-white">一、功能蓝图：双相认知共鸣</h3>
            </div>
            
            <div className="glass-panel p-6 rounded-lg mb-6">
                <p className="text-sm leading-relaxed text-slate-400 mb-4">
                    系统超越传统检索，构建 <strong className="text-white">知识保真 (Intellectual Fidelity)</strong> 与 <strong className="text-white">灵魂共鸣</strong> 的场域。
                    交互遵循“先立后破”范式，即 <strong className="text-polaris-accent">双相认知共鸣 (Biphasic Cognitive Resonance)</strong>。
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="group relative p-6 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-polaris-accent/50 transition-all">
                  <div className="absolute top-0 left-0 w-1 h-full bg-polaris-accent rounded-l"></div>
                  <div className="flex items-center justify-between mb-3">
                     <h4 className="text-lg font-bold text-white">Phase 1: 本质直击</h4>
                     <span className="text-[10px] font-mono uppercase bg-polaris-accent/10 text-polaris-accent px-2 py-0.5 rounded">Essentialism Hit</span>
                  </div>
                  <p className="text-sm text-slate-400">
                    作为“智慧结晶体”，基于角色独特的哲学观给出极具穿透力的直接洞见，满足用户“下载大师思想精髓”的初衷。
                  </p>
               </div>
               <div className="group relative p-6 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-purple-500/50 transition-all">
                  <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 rounded-l"></div>
                  <div className="flex items-center justify-between mb-3">
                     <h4 className="text-lg font-bold text-white">Phase 2: 思维邀约</h4>
                     <span className="text-[10px] font-mono uppercase bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded">Invitation</span>
                  </div>
                  <p className="text-sm text-slate-400">
                    转化为“思维催化剂”，将大师观点作为基石，抛出延展性问题，邀请用户进入该思维模型共建。
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
              <h3 className="text-xl md:text-2xl font-bold text-white">二、物理约束：双轨制延迟预算</h3>
            </div>

            <div className="glass-panel p-6 rounded-xl">
               <div className="flex justify-between items-end mb-4">
                  <div className="max-w-3xl">
                      <p className="text-sm text-slate-400 mb-2">
                          依据丹尼尔·卡尼曼的 <strong className="text-white">双系统理论 (System 1/2)</strong>，
                          我们将交互拆分为 <span className="text-yellow-400">“直觉反应”</span> 与 <span className="text-indigo-400">“理性回复”</span> 两条异步轨道。
                      </p>
                      <p className="text-xs font-mono text-slate-500">
                          目标：Motion-to-Photon (MTP) &lt; 30ms (晕动症阈值)
                      </p>
                  </div>
               </div>
               <LatencyChart />
               <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-slate-500">
                  <div className="p-3 bg-yellow-900/10 border border-yellow-900/30 rounded">
                      <span className="block text-yellow-400 font-bold mb-1">System 1 (直觉轨)</span>
                      在VAD触发瞬间生成非语言信号（点头、语气词），建立即时连接，掩盖后台计算。
                  </div>
                  <div className="p-3 bg-indigo-900/10 border border-indigo-900/30 rounded">
                      <span className="block text-indigo-400 font-bold mb-1">System 2 (理性轨)</span>
                      异步并行执行GraphRAG与审查，计算完成后无缝拼接入音频流。
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
                  <Network className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">三、逻辑架构：分层流式输出</h3>
            </div>

            {/* Subsection 3.1: Layered Streaming Model */}
            <div className="mb-10">
               <h4 className="text-lg font-bold text-slate-200 mb-6 flex items-center">
                  <span className="text-polaris-accent mr-2">3.1</span> 核心流控：分层异步流水线
               </h4>
               <div className="space-y-4">
                  {/* Level 0 */}
                  <div className="flex group">
                      <div className="w-24 pt-4 flex flex-col items-center border-r border-slate-800">
                          <span className="text-xs font-mono text-slate-500">0-50ms</span>
                          <div className="w-2 h-2 rounded-full bg-slate-600 mt-2 group-hover:bg-yellow-400 transition-colors"></div>
                      </div>
                      <div className="flex-1 p-4 ml-4 bg-slate-900/40 border border-slate-800 rounded group-hover:border-slate-600 transition-all">
                          <div className="flex items-center space-x-2 mb-2">
                              <span className="px-2 py-0.5 text-[10px] font-bold bg-slate-800 text-white rounded">LEVEL 0</span>
                              <h5 className="text-sm font-bold text-slate-200">生物性反应 (Biological Reaction)</h5>
                          </div>
                          <p className="text-xs text-slate-400">纯视觉与副语言。瞳孔微缩、吸气、头部微侧。由边缘端模型直接映射。</p>
                      </div>
                  </div>
                  
                  {/* Level 1 */}
                   <div className="flex group">
                      <div className="w-24 pt-4 flex flex-col items-center border-r border-slate-800">
                          <span className="text-xs font-mono text-slate-500">50-200ms</span>
                          <div className="w-2 h-2 rounded-full bg-slate-600 mt-2 group-hover:bg-polaris-accent transition-colors"></div>
                      </div>
                      <div className="flex-1 p-4 ml-4 bg-slate-900/40 border border-slate-800 rounded group-hover:border-polaris-accent/50 transition-all">
                          <div className="flex items-center space-x-2 mb-2">
                              <span className="px-2 py-0.5 text-[10px] font-bold bg-polaris-accent/20 text-polaris-accent rounded">LEVEL 1</span>
                              <h5 className="text-sm font-bold text-slate-200">语义填充 (Semantic Filler)</h5>
                          </div>
                          <p className="text-xs text-slate-400">具有角色特征的短语 (e.g., "Interesting perspective...")。由 SLM 快速生成。</p>
                      </div>
                  </div>

                  {/* Level 2 */}
                   <div className="flex group">
                      <div className="w-24 pt-4 flex flex-col items-center border-r border-slate-800">
                          <span className="text-xs font-mono text-slate-500">&gt;200ms</span>
                          <div className="w-2 h-2 rounded-full bg-slate-600 mt-2 group-hover:bg-purple-500 transition-colors"></div>
                      </div>
                      <div className="flex-1 p-4 ml-4 bg-slate-900/40 border border-slate-800 rounded group-hover:border-purple-500/50 transition-all">
                          <div className="flex items-center space-x-2 mb-2">
                              <span className="px-2 py-0.5 text-[10px] font-bold bg-purple-500/20 text-purple-400 rounded">LEVEL 2</span>
                              <h5 className="text-sm font-bold text-slate-200">核心认知载荷 (Core Payload)</h5>
                          </div>
                          <p className="text-xs text-slate-400">核心洞见与思维邀约。主 LLM 后台计算，文本流无缝拼接至 Level 1 音频尾部。</p>
                      </div>
                  </div>
               </div>
            </div>

            {/* Subsection 3.2: Modules Grid */}
             <div className="mb-6">
                <h4 className="text-lg font-bold text-slate-200 mb-6 flex items-center">
                  <span className="text-polaris-accent mr-2">3.2</span> 人格代理结构 (Maker-Checker)
               </h4>
                <div className="relative overflow-hidden glass-panel rounded-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-blue-500 to-purple-500"></div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                      <div className="p-6 hover:bg-slate-800/30 transition-colors">
                          <div className="text-[10px] font-mono text-yellow-500 mb-2 uppercase">System 1</div>
                          <h4 className="font-bold text-white mb-2">直觉反应器</h4>
                          <p className="text-xs text-slate-400 mb-3">SLM (3B) + Rule Engine</p>
                          <p className="text-sm text-slate-300">生成即时微表情与填充语，维持对话热度。</p>
                      </div>
                      <div className="p-6 hover:bg-slate-800/30 transition-colors">
                          <div className="text-[10px] font-mono text-indigo-400 mb-2 uppercase">System 2</div>
                          <h4 className="font-bold text-white mb-2">知识检索层</h4>
                          <p className="text-xs text-slate-400 mb-3">GraphRAG</p>
                          <p className="text-sm text-slate-300">访问历史事实，构建高保真知识图谱上下文。</p>
                      </div>
                      <div className="p-6 hover:bg-slate-800/30 transition-colors">
                          <div className="text-[10px] font-mono text-indigo-400 mb-2 uppercase">System 2</div>
                          <h4 className="font-bold text-white mb-2">人格风格层</h4>
                          <p className="text-xs text-slate-400 mb-3">Style Transfer</p>
                          <p className="text-sm text-slate-300">锁定角色的修辞、词汇习惯、语速与口癖。</p>
                      </div>
                      <div className="p-6 hover:bg-slate-800/30 transition-colors relative">
                          <div className="absolute top-2 right-2 text-[10px] bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded border border-purple-500/30">CORE</div>
                          <div className="text-[10px] font-mono text-purple-400 mb-2 uppercase">System 2</div>
                          <h4 className="font-bold text-white mb-2">洞见与邀约层</h4>
                          <p className="text-xs text-slate-400 mb-3">T-A-Q Structure</p>
                          <p className="text-sm text-slate-300">执行 Thesis (观点) &rarr; Application (应用) &rarr; Question (邀约) 逻辑。</p>
                      </div>
                  </div>
                </div>
            </div>
            
            <div className="glass-panel p-6 rounded-lg border-l-4 border-l-cyan-500">
               <h4 className="text-sm font-bold text-white mb-2">技术修正：预测性口型 (Visual Pre-emption)</h4>
               <p className="text-xs leading-relaxed text-slate-400">
                 为解决音画同步，系统执行“视觉抢跑”。TTS在生成音频波形前先行解算音素，视觉信号提前 <span className="text-white font-mono">20-30ms</span> 发送至渲染引擎。当声音通过物理空气传播时，口型光子恰好到达视网膜，实现物理级同步。
               </p>
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
              <h3 className="text-xl md:text-2xl font-bold text-white">四、交互美学：情绪积分迟滞系统</h3>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden border border-slate-800">
                <div className="p-4 bg-slate-900/50 border-b border-slate-800 text-xs text-slate-500">
                   环境变化不再是对单句情绪的瞬时反应，而是对对话“势能”的宏观映射 (Integral Pool & Hysteresis)。
                </div>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-900/80 border-b border-slate-700 text-xs uppercase tracking-wider text-slate-400">
                            <th className="p-4 font-medium hidden sm:table-cell">积分状态 (Integral State)</th>
                            <th className="p-4 font-medium">响应策略 (Response)</th>
                            <th className="p-4 font-medium hidden md:table-cell">视觉参数 (Visual)</th>
                            <th className="p-4 font-medium hidden md:table-cell">听觉参数 (Auditory)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-sm">
                        <tr className="hover:bg-slate-800/30 transition-colors group">
                            <td className="p-4 font-bold text-slate-300 border-l-2 border-transparent group-hover:border-slate-500 block sm:table-cell">
                                <span className="sm:hidden text-xs text-slate-500 uppercase block mb-1">State</span>
                                积分 &lt; 阈值 (微小波动)
                            </td>
                            <td className="p-4 text-white font-mono text-xs">
                                <span className="md:hidden text-xs text-slate-500 uppercase block mb-1">Strategy</span>
                                [稳态] 无环境变化
                            </td>
                            <td className="p-4 text-slate-400 hidden md:table-cell">保持当前光照，仅面部微表情</td>
                            <td className="p-4 text-slate-400 hidden md:table-cell">保持背景白噪音</td>
                        </tr>
                        <tr className="hover:bg-slate-800/30 transition-colors group">
                            <td className="p-4 font-bold text-blue-300 border-l-2 border-transparent group-hover:border-blue-400 block sm:table-cell">
                                <span className="sm:hidden text-xs text-slate-500 uppercase block mb-1">State</span>
                                积分 &gt; 阈值 (深思累积)
                            </td>
                            <td className="p-4 text-white font-mono text-xs">
                                <span className="md:hidden text-xs text-slate-500 uppercase block mb-1">Strategy</span>
                                [渐变态] 5秒平滑过渡
                            </td>
                            <td className="p-4 text-slate-400 hidden md:table-cell">冷色调渐变，几何平衡构图</td>
                            <td className="p-4 text-slate-400 hidden md:table-cell">低频增强，BPM 减慢</td>
                        </tr>
                        <tr className="hover:bg-slate-800/30 transition-colors group">
                            <td className="p-4 font-bold text-red-300 border-l-2 border-transparent group-hover:border-red-400 block sm:table-cell">
                                <span className="sm:hidden text-xs text-slate-500 uppercase block mb-1">State</span>
                                积分 &gt;&gt; 阈值 (顿悟/激烈)
                            </td>
                            <td className="p-4 text-white font-mono text-xs">
                                <span className="md:hidden text-xs text-slate-500 uppercase block mb-1">Strategy</span>
                                [激发态] 瞬态突破
                            </td>
                            <td className="p-4 text-slate-400 hidden md:table-cell">物理空间虚化，粒子流爆发</td>
                            <td className="p-4 text-slate-400 hidden md:table-cell">全景音频包裹，管弦乐动机</td>
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
                  <h3 className="text-xl md:text-2xl font-bold text-white">附录：核心技术引用 (V3.0)</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                  {[
                      { id: '[1]', title: 'Dual-Process Agents', source: 'NeurIPS (2025)', desc: 'System 1/2 in Large Language Agents.' },
                      { id: '[3]', title: 'Anchor-and-Extend Prompting', source: 'Journal of Learning Analytics', desc: 'Bridging gap strategies for resonance.' },
                      { id: '[4]', title: 'Opinionated RAG', source: 'arXiv', desc: 'Injecting Persona and Stance into Contexts.' },
                      { id: '[6]', title: 'Speculative Streaming', source: 'IEEE IoT Journal', desc: 'Edge-Based Speculative Decoding.' },
                      { id: '[10]', title: 'Zero-Latency Lip Sync', source: 'IEEE Trans. Multimedia', desc: 'Predictive Viseme Generation.' },
                      { id: '[12]', title: 'Temporal Dynamics in Affect', source: 'IEEE Affective Computing', desc: 'Modeling Hysteresis in Emotion.' }
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