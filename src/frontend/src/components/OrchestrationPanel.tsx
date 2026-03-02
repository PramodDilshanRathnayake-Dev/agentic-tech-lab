'use client';

import React from 'react';

export const OrchestrationPanel = () => {
    return (
        <div className="w-full bg-[#121E31]/80 rounded-xl border border-[#1E2D4A] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col h-full hover:border-[#2A3E5D] transition-colors">
            <h3 className="text-[#64748B] text-[12px] font-bold uppercase tracking-[0.15em] mb-4">AI AGENT ORCHESTRA</h3>

            <div className="flex gap-4 flex-1">
                {/* Agent Network Area */}
                <div className="flex-[2] bg-[#0A111F] border border-[#1E2D4A] rounded-xl p-4 relative overflow-hidden flex flex-col">
                    <div className="flex justify-between items-center mb-2 z-10 relative">
                        <h4 className="text-white text-sm font-semibold">Agent Network</h4>
                        <span className="text-[#64748B] text-[10px] border border-[#1E2D4A] px-2 py-1 rounded bg-[#121E31]">Expanded Relationship Status</span>
                    </div>

                    <div className="flex-1 relative mt-4">
                        {/* Static SVG for Graph connections. Matches visual layout. */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: '180px' }}>
                            {/* David K -> Maria G */}
                            <path d="M 12% 15% L 45% 15%" stroke="#00D2FF" strokeWidth="1.5" fill="none" opacity="0.6" markerEnd="url(#arrow)" />
                            <text x="28%" y="10%" fill="#64748B" fontSize="10" textAnchor="middle">Real-time</text>
                            <text x="28%" y="20%" fill="#64748B" fontSize="10" textAnchor="middle">data</text>

                            {/* David K -> Liam M */}
                            <path d="M 16% 35% L 35% 85%" stroke="#00D2FF" strokeWidth="1.5" fill="none" opacity="0.6" markerEnd="url(#arrow)" />
                            <text x="22%" y="65%" fill="#64748B" fontSize="10" textAnchor="middle">Data</text>

                            {/* Maria G -> Alex R */}
                            <path d="M 50% 12% L 75% 12%" stroke="#00D2FF" strokeWidth="1.5" fill="none" opacity="0.6" markerEnd="url(#arrow)" />
                            <text x="62%" y="8%" fill="#64748B" fontSize="10" textAnchor="middle">Real-time data</text>

                            {/* Alex R -> Maria G */}
                            <path d="M 75% 20% L 50% 20%" stroke="#00D2FF" strokeWidth="1.5" fill="none" opacity="0.6" markerEnd="url(#arrow)" />
                            <text x="62%" y="25%" fill="#64748B" fontSize="10" textAnchor="middle">Link</text>

                            {/* Maria G -> Liam M */}
                            <path d="M 45% 35% L 40% 70%" stroke="#00D2FF" strokeWidth="1.5" fill="none" opacity="0.6" markerEnd="url(#arrow)" />
                            <text x="40%" y="55%" fill="#64748B" fontSize="10" textAnchor="end">Plan</text>

                            {/* Liam M (dev) -> Maria G */}
                            <path d="M 45% 70% L 50% 35%" stroke="#00D2FF" strokeWidth="1.5" fill="none" opacity="0.6" markerEnd="url(#arrow)" />
                            <text x="50%" y="55%" fill="#64748B" fontSize="10" textAnchor="start">Real-time</text>

                            {/* Liam M (dev) -> Liam M (qa) */}
                            <path d="M 55% 85% L 75% 85%" stroke="#00D2FF" strokeWidth="1.5" fill="none" opacity="0.6" markerEnd="url(#arrow)" />
                            <text x="65%" y="90%" fill="#64748B" fontSize="10" textAnchor="middle">Data</text>

                            {/* Alex R -> Liam M (qa) */}
                            <path d="M 80% 30% L 80% 70%" stroke="#00D2FF" strokeWidth="1.5" fill="none" opacity="0.6" markerEnd="url(#arrow)" />
                            <text x="82%" y="55%" fill="#64748B" fontSize="10" textAnchor="start">Real-time</text>

                            <defs>
                                <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto-start-reverse">
                                    <polygon points="0 0, 6 3, 0 6" fill="#00D2FF" opacity="0.8" />
                                </marker>
                            </defs>
                        </svg>

                        {/* Node Elements */}
                        <div className="absolute left-[8%] top-[5%]">
                            <AgentNode initial="D" name="David K." role="architect" />
                        </div>
                        <div className="absolute left-[40%] top-[10%]">
                            <AgentNode initial="M" name="Maria G." role="uiux" />
                        </div>
                        <div className="absolute left-[72%] top-[10%]">
                            <AgentNode initial="A" name="Alex R." role="dev" />
                        </div>
                        <div className="absolute left-[35%] top-[70%]">
                            <AgentNode initial="L" name="Liam M." role="dev" />
                        </div>
                        <div className="absolute left-[75%] top-[70%]">
                            <AgentNode initial="L" name="Liam M." role="qa" />
                        </div>
                    </div>
                </div>

                {/* Orchestration Health */}
                <div className="flex-1 bg-[#0A111F] border border-[#1E2D4A] rounded-xl p-4 flex flex-col justify-between">
                    <h4 className="text-white text-sm font-semibold mb-6 text-center">Orchestration Health</h4>

                    <div className="flex justify-center mb-6 relative">
                        {/* Circle Gauge */}
                        <div className="w-24 h-24 rounded-full border-[8px] border-[#1A2640] flex items-center justify-center relative">
                            <div className="absolute inset-[-8px] rounded-full border-[8px] border-[#00D2FF] border-l-transparent border-b-transparent transform rotate-45"></div>
                            <div className="text-center">
                                <div className="text-white text-2xl font-bold">88%</div>
                                <div className="text-[#64748B] text-[10px]">Efficiency</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="w-full">
                            <div className="flex justify-between text-[#64748B] text-[10px] mb-1">
                                <span>Agent Alex R:</span>
                                <span>65% utilization</span>
                            </div>
                            <div className="h-1 bg-[#1A2640] rounded-full overflow-hidden"><div className="h-full w-[65%] bg-[#00D2FF]"></div></div>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between text-[#64748B] text-[10px] mb-1">
                                <span>Agent Maria G:</span>
                                <span>9% utilization</span>
                            </div>
                            <div className="h-1 bg-[#1A2640] rounded-full overflow-hidden"><div className="h-full w-[9%] bg-[#00D2FF]"></div></div>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between text-[#64748B] text-[10px] mb-1">
                                <span>Agent Alexx R:</span>
                                <span>65% utilization</span>
                            </div>
                            <div className="h-1 bg-[#1A2640] rounded-full overflow-hidden"><div className="h-full w-[65%] bg-[#00D2FF]"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AgentNode = ({ initial, name, role }: { initial: string, name: string, role: string }) => (
    <div className="bg-[#121E31] border border-[#00D2FF]/50 shadow-[0_0_15px_rgba(0,210,255,0.15)] rounded-xl py-2 px-3 flex flex-col items-center min-w-[70px] z-20 relative">
        <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#00D2FF] to-transparent p-px mb-1">
            <div className="w-full h-full rounded-full bg-[#0A111F] flex items-center justify-center text-white text-xs font-bold font-serif">{initial}</div>
        </div>
        <div className="text-white text-xs font-bold leading-tight">{name}</div>
        <div className="text-[#64748B] text-[10px]">{role}</div>
    </div>
);
