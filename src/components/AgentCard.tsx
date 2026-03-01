import { GlassPanel } from './GlassPanel';
import { StatusBadge } from './StatusBadge';

interface AgentCardProps {
    handle: string;
    name: string;
    role: string;
    status: 'active' | 'working' | 'blocked' | 'standby';
    avatarColor: string;
}

export function AgentCard({ handle, name, role, status, avatarColor }: AgentCardProps) {
    return (
        <GlassPanel hoverable className="p-4 flex flex-col gap-3 min-w-[200px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center font-bold text-lg shadow-inner`}>
                        {name.charAt(0)}
                    </div>
                    <div>
                        <div className="font-semibold text-white tracking-wide">{handle}</div>
                        <div className="text-sm text-slate-400">{name}</div>
                    </div>
                </div>
                <StatusBadge status={status} />
            </div>

            <div className="mt-2 pt-3 border-t border-white/5">
                <div className="text-xs text-slate-500 uppercase font-medium tracking-wider mb-1">Current Focus</div>
                <div className="text-sm text-cyan-50 font-medium">{role}</div>
            </div>
        </GlassPanel>
    );
}
