'use client';

import React from 'react';

export const BudgetTracking = () => {
    return (
        <div className="w-full bg-[#121E31]/80 rounded-xl border border-[#1E2D4A] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col h-full hover:border-[#2A3E5D] transition-colors">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#64748B] text-[12px] font-bold uppercase tracking-[0.15em]">BUDGET & TOKEN TRACKING</h3>
                <span className="text-[#64748B] tracking-widest leading-none">...</span>
            </div>

            <h4 className="text-white text-sm font-semibold mb-4">Total Budget</h4>

            <div className="flex items-center gap-6 mb-8">
                {/* 100% Ring Gauge */}
                <div className="relative w-24 h-24 flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="#1A2640" strokeWidth="12" fill="none" />
                        <circle cx="50" cy="50" r="40" stroke="#00D2FF" strokeWidth="12" fill="none" strokeDasharray="251.2" strokeDashoffset="0" className="drop-shadow-[0_0_8px_rgba(0,210,255,0.5)]" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">100%</span>
                    </div>
                </div>

                {/* Text Details & Linear Progress */}
                <div className="flex-1">
                    <div className="text-white text-lg font-bold mb-1">$1,250,000 <span className="text-[#64748B] text-sm font-normal">/ $885k spent</span></div>
                    <div className="flex justify-between text-[10px] mb-1">
                        <span className="text-[#64748B]">+ $38.985k spent</span>
                    </div>
                    {/* Linear Bar */}
                    <div className="h-1.5 bg-[#1A2640] rounded-full overflow-hidden mb-1">
                        <div className="h-full w-[70%] bg-gradient-to-r from-slate-500 to-slate-300 rounded-full" />
                    </div>
                    <div className="text-[10px] text-[#64748B] mt-1">8.255M Tokens</div>
                </div>
            </div>

            <div className="flex justify-between items-end mb-4">
                <h4 className="text-white text-sm font-semibold">Token Usage</h4>
                <div className="text-white text-xs font-bold">8.2M <span className="text-[#64748B] font-normal">/ 15M Tokens</span></div>
            </div>

            {/* Token Usage Line Chart Visualization */}
            <div className="flex-1 relative border-l border-b border-[#1E2D4A] ml-6 mb-10 min-h-[140px]">
                {/* Y-axis Labels */}
                <div className="absolute -left-6 top-0 bottom-0 flex flex-col justify-between text-[10px] text-[#64748B] pb-2 text-right pr-2">
                    <span>8M</span>
                    <span>6M</span>
                    <span>4M</span>
                    <span>2M</span>
                    <span>0</span>
                </div>

                {/* X-axis Labels */}
                <div className="absolute bottom-[-22px] left-0 right-0 flex justify-between text-[10px] text-[#64748B] px-2">
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Dec</span>
                </div>

                {/* Grid Lines */}
                <div className="absolute inset-x-0 top-1/4 h-px bg-[#1E2D4A]/50 pointer-events-none" />
                <div className="absolute inset-x-0 top-2/4 h-px bg-[#1E2D4A]/50 pointer-events-none" />
                <div className="absolute inset-x-0 top-3/4 h-px bg-[#1E2D4A]/50 pointer-events-none" />

                {/* Chart SVG */}
                <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.0" />
                        </linearGradient>
                    </defs>

                    {/* The Area */}
                    <polygon points="0,100 0,60 20,40 40,50 60,30 80,45 100,20 100,100" fill="url(#chartGradient)" />
                    {/* The Line */}
                    <polyline points="0,60 20,40 40,50 60,30 80,45 100,20" fill="none" stroke="#00D2FF" strokeWidth="2" className="drop-shadow-[0_0_5px_rgba(0,210,255,0.8)]" />
                </svg>
            </div>
        </div>
    );
};
