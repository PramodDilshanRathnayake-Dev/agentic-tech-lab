'use client';

import React from 'react';

interface TimelineNode {
    id: number;
    label: string;
    date: string;
    status: 'completed' | 'active' | 'pending';
}

interface ProjectHealthProps {
    percentage: number;
    sprint: {
        id: number;
        name: string;
        startDate: string;
        endDate: string;
        status: string;
        velocity: string;
    };
    timeline: TimelineNode[];
}

export const ProjectHealth: React.FC<ProjectHealthProps> = ({ percentage, sprint, timeline }) => {
    return (
        <div className="bg-[#0B1221]/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 shadow-2xl overflow-hidden relative">
            <div className="flex flex-col lg:flex-row gap-8">

                {/* Progress Circle Section */}
                <div className="flex flex-col items-center justify-center flex-shrink-0">
                    <h3 className="text-cyan-400 text-sm font-semibold mb-4 tracking-widest uppercase">Project Health</h3>
                    <div className="relative w-48 h-48">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="96"
                                cy="96"
                                r="88"
                                stroke="currentColor"
                                strokeWidth="12"
                                fill="transparent"
                                className="text-cyan-900/30"
                            />
                            <circle
                                cx="96"
                                cy="96"
                                r="88"
                                stroke="currentColor"
                                strokeWidth="12"
                                fill="transparent"
                                strokeDasharray={2 * Math.PI * 88}
                                strokeDashoffset={2 * Math.PI * 88 * (1 - percentage / 100)}
                                strokeLinecap="round"
                                className="text-cyan-400 transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-4xl font-bold tracking-tight">{percentage}%</span>
                            <span className="text-[10px] uppercase tracking-tighter text-cyan-200/50">Complete</span>
                        </div>
                    </div>
                </div>

                {/* Timeline & Details Section */}
                <div className="flex-1 space-y-6">
                    <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-cyan-200/50 uppercase tracking-wider">Sprint Timeline</h4>
                        <div className="relative pt-6 pb-2 px-4 flex justify-between">
                            <div className="absolute top-[34px] left-8 right-8 h-0.5 bg-cyan-900/30" />
                            {timeline.map((node) => (
                                <div key={node.id} className="relative z-10 flex flex-col items-center group">
                                    <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${node.status === 'completed' ? 'bg-cyan-400 border-cyan-400' :
                                            node.status === 'active' ? 'bg-[#0B1221] border-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]' :
                                                'bg-[#0B1221] border-slate-700'
                                        }`} />
                                    <div className="mt-3 text-center">
                                        <p className={`text-[10px] font-medium ${node.status === 'pending' ? 'text-slate-500' : 'text-white'}`}>{node.label}</p>
                                        <p className="text-[8px] text-cyan-200/40">{node.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-cyan-950/20 rounded-xl p-4 border border-cyan-500/10 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <p className="text-[10px] text-cyan-200/40 uppercase">Current Sprint</p>
                            <p className="text-xs font-medium">Sprint {sprint.id}: {sprint.name}</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-cyan-200/40 uppercase">Status</p>
                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                <p className="text-xs font-medium text-cyan-400">{sprint.status}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] text-cyan-200/40 uppercase">Velocity</p>
                            <p className="text-xs font-medium">{sprint.velocity}</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-cyan-200/40 uppercase">Timeline</p>
                            <p className="text-xs font-medium">{sprint.startDate.slice(5)} - {sprint.endDate.slice(5)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
