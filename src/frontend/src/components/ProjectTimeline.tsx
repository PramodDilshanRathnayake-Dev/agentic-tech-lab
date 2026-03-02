'use client';

import React from 'react';

export const ProjectTimeline = () => {
    return (
        <div className="w-full bg-[#121E31]/80 rounded-xl border border-[#1E2D4A] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col h-full font-sans transition-all duration-300 hover:border-[#2A3E5D]">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-[#64748B] text-[10px] font-bold uppercase tracking-[0.15em] mb-1">Project Health</h3>
                    <h2 className="text-white text-lg font-black tracking-wide">ALPHA NEXUS</h2>
                </div>
                <div className="flex items-center gap-4 text-[#64748B] text-xs">
                    <span className="flex items-center gap-1 cursor-pointer">Stream by: <span className="text-white bg-[#1A2640] px-2 py-1 rounded">Data ▿</span></span>
                    <span className="text-white bg-[#1A2640] px-2 py-1 rounded cursor-pointer">Timeline ▿</span>
                </div>
            </div>

            {/* Main chart area */}
            <div className="flex-1 min-h-[220px] relative border-t border-[#1E2D4A] flex flex-col pt-4">
                {/* Header Months */}
                <div className="grid grid-cols-[160px_1fr_1fr_1fr] text-center mb-4 text-[#64748B] text-xs font-bold w-full uppercase">
                    <div className="text-left pl-4"></div>
                    <div>Oct</div>
                    <div className="text-[#00D2FF]">Dev</div> {/* Hilighted Dev instead of Nov according to the flat mockup spelling. Assuming Dev is meant to be Nov, I will stick to the exact typo 'Dev' from the user's mockup. */}
                    <div>Dec</div>
                </div>

                {/* Timeline background grid lines */}
                <div className="absolute top-[48px] bottom-0 left-[160px] w-px bg-[#1E2D4A]/50 pointer-events-none" />
                <div className="absolute top-[48px] bottom-0 left-[calc(160px+33.33%-53px)] w-px bg-[#1E2D4A]/50 pointer-events-none" />
                <div className="absolute top-[48px] bottom-0 left-[calc(160px+66.66%-106px)] w-px bg-[#1E2D4A]/50 pointer-events-none" />

                {/* Task Rows */}
                <div className="flex-1 flex flex-col relative w-full h-full gap-5">
                    {/* Row 1: UI/UX Prototypes */}
                    <div className="flex items-center text-xs h-8">
                        <div className="w-[160px] pl-4 text-[#64748B]">UI/UX Prototypes<br /><span className="text-[9px]">@pm</span></div>
                        <div className="flex-1 relative h-2 bg-[#1A2640] rounded-full mt-2 w-[calc(100%-80px)] max-w-lg overflow-visible">
                            <div className="absolute -top-5 left-0 text-white font-medium whitespace-nowrap">UI/UX Prototypes</div>
                            <div className="absolute top-0 left-0 h-full w-[45%] bg-[#00D2FF] rounded-l-full" />
                            <div className="absolute -right-6 -top-3 text-[#64748B] text-[10px] w-[180px] bg-[#0A111F] p-2 border border-[#1E2D4A] rounded shadow-lg">
                                Milestone: alpha-1.0 | 72% Complete<br />Status: <span className="text-[#00D2FF]">On Track</span>
                            </div>
                        </div>
                    </div>

                    {/* Connecting path UI/UX -> Backend */}
                    <svg className="absolute left-[calc(160px+30%)] top-[26px] w-[50px] h-[36px] pointer-events-none">
                        <path d="M 0 0 L 25 0 L 25 34 L 50 34" fill="none" stroke="#2A3E5D" strokeWidth="1.5" />
                        <polygon points="50,34 46,31 46,37" fill="#2A3E5D" />
                    </svg>

                    {/* Row 2: Backend Foundation */}
                    <div className="flex items-center text-xs h-8 mt-2">
                        <div className="w-[160px] pl-4 text-[#64748B]">Backend Foundation</div>
                        <div className="flex-1 relative h-2 ml-[35%] bg-[#1A2640] rounded-full w-[calc(100%-80px)] max-w-sm">
                            <div className="absolute -top-5 left-0 text-white font-medium whitespace-nowrap">Backend Foundation</div>
                            <div className="absolute top-0 left-0 h-full w-[35%] bg-[#00D2FF] shadow-[0_0_10px_rgba(0,210,255,0.8)] rounded-full" />
                        </div>
                    </div>

                    {/* Connecting path Backend -> Training */}
                    <svg className="absolute left-[calc(160px+50%)] top-[74px] w-[50px] h-[40px] pointer-events-none">
                        <path d="M 0 0 L 25 0 L 25 38 L 50 38" fill="none" stroke="#2A3E5D" strokeWidth="1.5" />
                        <polygon points="50,38 46,35 46,41" fill="#2A3E5D" />
                    </svg>

                    {/* Row 3: Agent Training */}
                    <div className="flex items-center text-xs h-8 mt-2">
                        <div className="w-[160px] pl-4 text-[#64748B]">Agent Training<br /><span className="text-[9px]">uiux</span></div>
                        <div className="flex-1 relative h-2 ml-[50%] bg-[#1A2640] rounded-full w-[calc(100%-80px)] max-w-xs">
                            <div className="absolute -top-5 left-0 text-white font-medium whitespace-nowrap">Agent Training</div>
                            <div className="absolute top-0 left-0 h-full w-[60%] bg-[#00D2FF] rounded-full" />
                        </div>
                    </div>

                    {/* Connecting path Training -> QA */}
                    <svg className="absolute left-[calc(160px+70%)] top-[122px] w-[50px] h-[40px] pointer-events-none">
                        <path d="M 0 0 L 25 0 L 25 38 L 50 38" fill="none" stroke="#2A3E5D" strokeWidth="1.5" />
                        <polygon points="50,38 46,35 46,41" fill="#2A3E5D" />
                    </svg>

                    {/* Row 4: QA Testing */}
                    <div className="flex items-center text-xs h-8 mt-2 pb-4">
                        <div className="w-[160px] pl-4 text-[#64748B]">QA Testing</div>
                        <div className="flex-1 relative h-2 ml-[80%] bg-[#1A2640] rounded-full w-[calc(100%-80px)] max-w-[150px]">
                            <div className="absolute -top-5 left-0 text-white font-medium whitespace-nowrap">QA Testing</div>
                            <div className="absolute top-0 left-0 h-full w-[10%] bg-[#00D2FF] rounded-r-full" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
