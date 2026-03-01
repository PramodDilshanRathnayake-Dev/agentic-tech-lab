interface StatusBadgeProps {
    status: 'active' | 'working' | 'blocked' | 'standby';
}

export function StatusBadge({ status }: StatusBadgeProps) {
    const getStatusStyles = () => {
        switch (status) {
            case 'active':
                return { dot: 'bg-[#00E676] shadow-[0_0_10px_#00E676]', text: 'text-[#00E676]', border: 'border-[#00E676]/30' };
            case 'working':
                return { dot: 'bg-[#FFD600] shadow-[0_0_10px_#FFD600]', text: 'text-[#FFD600]', border: 'border-[#FFD600]/30' };
            case 'blocked':
                return { dot: 'bg-[#FF1744] shadow-[0_0_10px_#FF1744]', text: 'text-[#FF1744]', border: 'border-[#FF1744]/30' };
            case 'standby':
            default:
                return { dot: 'bg-[#3A7BD5] shadow-[0_0_10px_#3A7BD5]', text: 'text-[#3A7BD5]', border: 'border-[#3A7BD5]/30' };
        }
    };

    const styles = getStatusStyles();

    return (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${styles.border} bg-white/5`}>
            <span className={`w-2 h-2 rounded-full ${styles.dot}`} />
            <span className={`text-[10px] uppercase font-bold tracking-wider ${styles.text}`}>
                {status}
            </span>
        </div>
    );
}
