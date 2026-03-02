import React from 'react';
import Image from 'next/image';

interface AgentCardProps {
    id: string;
    name: string;
    role: string;
    handle: string;
    status: string;
    isActive?: boolean;
}

export const AgentCard: React.FC<AgentCardProps> = ({ name, role, handle, status, isActive }) => {
    return (
        <div className={`relative flex flex-col items-center justify-center py-5 px-6 rounded-xl border transition-all duration-300 w-full min-w-[140px] shadow-[0_4px_20px_rgba(0,0,0,0.3)]
      ${isActive
                ? 'bg-[#121E31] border-[#00D2FF] shadow-[0_0_15px_rgba(0,210,255,0.15)]'
                : 'bg-[#121E31]/80 border-[#1E2D4A] hover:border-[#2A3E5D]'
            }`}
        >
            {/* Top right dot indicator */}
            <div className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#00D2FF] shadow-[0_0_5px_#00D2FF]' : 'bg-[#00D2FF]/50'}`} />

            {/* Avatar */}
            <div className={`relative w-14 h-14 rounded-full mb-3 p-[2px] ${isActive ? 'bg-gradient-to-b from-[#00D2FF] to-transparent' : 'bg-[#1E2D4A]'}`}>
                <div className="w-full h-full rounded-full bg-[#0B1221] flex items-center justify-center overflow-hidden">
                    {/* Using a placeholder text for avatar but in a real app this would be an Image */}
                    <span className="text-xl font-bold text-slate-300 tracking-wider">
                        {name.charAt(0)}
                    </span>
                </div>
            </div>

            {/* Text Info */}
            <h3 className="text-sm font-bold text-white mb-0.5">{name}</h3>
            <p className="text-[11px] text-[#64748B] mb-3">{handle}</p>

            {/* Status */}
            <div className="flex items-center gap-1.5 text-[11px] mt-auto">
                <span className="text-[#64748B]">Status:</span>
                <span className={`${status.toLowerCase().includes('track') ? 'text-[#00D2FF] font-medium' : status.toLowerCase().includes('qa') ? 'text-[#34D399] font-medium' : 'text-[#64748B]'}`}>
                    {status}
                </span>
            </div>
        </div>
    );
};
