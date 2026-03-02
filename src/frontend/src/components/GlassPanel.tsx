import { ReactNode } from 'react';

interface GlassPanelProps {
    children: ReactNode;
    className?: string;
    hoverable?: boolean;
}

export function GlassPanel({ children, className = '', hoverable = false }: GlassPanelProps) {
    return (
        <div className={`glass-panel transition-all duration-300 ${hoverable ? 'hover:bg-[var(--color-panel-hover)] hover:shadow-[var(--shadow-glow)] hover:scale-[1.02]' : ''} ${className}`}>
            {children}
        </div>
    );
}
