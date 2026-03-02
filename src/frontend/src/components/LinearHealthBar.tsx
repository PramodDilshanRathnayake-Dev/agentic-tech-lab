'use client';

import React from 'react';

interface Milestone {
    id: number;
    label: string;
    percentage: number;
    date: string;
    status: 'completed' | 'active' | 'pending';
}

interface LinearHealthBarProps {
    percentage: number;
    milestones: Milestone[];
    projectName: string;
}

export const LinearHealthBar: React.FC<LinearHealthBarProps> = ({ percentage, milestones, projectName }) => {
    return (
        <div className="bg-[#0B1221]/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 shadow-2xl overflow-hidden">
            <div className="flex justify-between items-end mb-4">
                <div>
                    <h3 className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-1">{projectName}</h3>
                    <div className="text-2xl font-bold text-white">{percentage}% <span className="text-sm font-normal text-slate-400">complete</span></div>
                </div>
                <div className="text-right">
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-medium">Est. Completion</div>
                    <div className="text-sm font-bold text-cyan-200">Jan 15, 2024</div>
                </div>
            </div>

            <div className="relative pt-8 pb-12">
                {/* Main Track */}
                <div className="h-1.5 w-full bg-cyan-900/30 rounded-full relative overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-1000 ease-out"
                        style={{ width: `${percentage}%` }}
                    />
                </div>

                {/* Milestones */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    {milestones.map((m) => (
                        <div
                            key={m.id}
                            className="absolute top-[26px] flex flex-col items-center"
                            style={{ left: `${m.percentage}%`, transform: 'translateX(-50%)' }}
                        >
                            <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 ${m.status === 'completed' ? 'bg-cyan-400 border-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]' :
                                    m.status === 'active' ? 'bg-[#0B1221] border-cyan-400 animate-pulse' :
                                        'bg-[#0B1221] border-slate-700'
                                }`} />

                            <div className="mt-4 text-center pointer-events-auto">
                                <div className={`text-[10px] font-bold uppercase tracking-tighter ${m.status === 'pending' ? 'text-slate-500' : 'text-cyan-100'}`}>
                                    {m.label}
                                </div>
                                <div className="text-[8px] text-slate-500 font-medium">
                                    {m.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
