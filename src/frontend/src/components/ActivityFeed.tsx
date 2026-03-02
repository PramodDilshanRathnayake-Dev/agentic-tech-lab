'use client';

import React from 'react';

const activities = [
    { id: 1, title: 'Milestone complete:', time: '5 min ago', sub: '5 min ago' },
    { id: 2, title: 'Agent training batch:', time: '15 min ago', sub: '15 min ago' },
    { id: 3, title: 'Agent training batch:', time: '15 min ago', sub: '15 min ago' },
    { id: 4, title: 'Agent training batch:', time: '15 min ago', sub: '15 min ago' },
    { id: 5, title: 'Agent training batch:', time: '5 min ago', sub: '13 min ago' },
];

export const ActivityFeed = () => {
    return (
        <div className="w-full bg-[#121E31]/80 rounded-xl border border-[#1E2D4A] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col h-full hover:border-[#2A3E5D] transition-colors relative overflow-hidden">
            <div className="flex justify-between items-center mb-6 z-10 relative">
                <h3 className="text-white text-sm font-semibold tracking-wide">Live activity feed</h3>
                <span className="text-[#64748B] tracking-widest leading-none">...</span>
            </div>

            <div className="flex flex-col flex-1 pl-4 relative z-10 pt-2">
                {/* Connecting line */}
                <div className="absolute top-4 bottom-8 left-[21px] w-px bg-[#1E2D4A] z-0" />

                {activities.map((activity, idx) => (
                    <div key={activity.id} className="relative flex items-start pb-6">
                        {/* Dot */}
                        <div className="absolute left-[-11px] top-1.5 w-2 h-2 rounded-full bg-[#00D2FF] z-10 shadow-[0_0_8px_#00D2FF]" />

                        <div className="ml-5">
                            <p className="text-[#94A3B8] text-xs font-medium leading-tight">
                                {activity.title} <span className="text-white">{activity.time}</span>
                            </p>
                            <p className="text-[#64748B] text-[10px] mt-1">{activity.sub}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fade out bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#121E31] to-transparent pointer-events-none z-20" />
        </div>
    );
};
