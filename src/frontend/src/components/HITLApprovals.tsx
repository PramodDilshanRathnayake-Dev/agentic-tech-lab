'use client';

import React from 'react';

const approvals = [
    { id: 1, title: 'Project Milestone', pending: 'Pending CEO Review' },
    { id: 2, title: 'Architectural Design', pending: 'Pending CEO Review' },
    { id: 3, title: 'UI/UX Prototype', pending: 'Pending CEO Review' }
];

export const HITLApprovals = () => {
    return (
        <div className="w-full bg-[#121E31]/80 rounded-xl border border-[#1E2D4A] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col h-full hover:border-[#2A3E5D] transition-colors">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#64748B] text-[12px] font-bold uppercase tracking-[0.15em]">HUMAN-IN-THE-LOOP APPROVALS</h3>
                <span className="text-[#64748B] tracking-widest leading-none">...</span>
            </div>

            <div className="flex flex-col gap-3">
                {approvals.map(approval => (
                    <div key={approval.id} className="bg-[#0A111F] border border-[#1E2D4A] rounded-xl p-4 flex items-center justify-between shadow-sm">
                        <div>
                            <h4 className="text-white font-semibold text-sm leading-tight">{approval.title}</h4>
                            <p className="text-[#FB923C] text-[10px] mt-1">{approval.pending}</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 rounded-full text-[10px] font-bold text-[#00D2FF] border border-[#00D2FF] bg-[#00D2FF]/10 hover:bg-[#00D2FF]/20 shadow-[0_0_8px_rgba(0,210,255,0.2)] transition-all uppercase tracking-wider">
                                Approve
                            </button>
                            <button className="px-3 py-1 rounded-full text-[10px] font-bold text-[#FB7185] border border-[#FB7185] bg-[#FB7185]/10 hover:bg-[#FB7185]/20 shadow-[0_0_8px_rgba(251,113,133,0.2)] transition-all uppercase tracking-wider">
                                Deny
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
