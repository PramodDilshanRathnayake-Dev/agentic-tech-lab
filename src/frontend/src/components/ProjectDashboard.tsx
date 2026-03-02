'use client';

import React from 'react';
import { Home, LineChart, List, Users, Clock, Settings, Search, Bell } from 'lucide-react';
import { AgentCard } from '@/components/AgentCard';
import { ProjectTimeline } from '@/components/ProjectTimeline';
import { OrchestrationPanel } from '@/components/OrchestrationPanel';
import { BudgetTracking } from '@/components/BudgetTracking';
import { HITLApprovals } from '@/components/HITLApprovals';
import { ActivityFeed } from '@/components/ActivityFeed';

// Mock Data
const activeAgents = [
  { id: '1', name: 'Sarah L.', role: 'PM', handle: '@pm', status: '6pm / Learn' },
  { id: '2', name: 'David K.', role: 'Architect', handle: '@architect', status: 'architect / On Track', isActive: true },
  { id: '3', name: 'Maria G.', role: 'UIUX', handle: '@uiux', status: 'uiux / On Track' },
  { id: '4', name: 'Alex R.', role: 'Dev', handle: '@dev', status: 'dev / On Track' },
  { id: '5', name: 'Liam M.', role: 'QA', handle: '@qa', status: 'qa / On Track' },
];

export default function ProjectDashboardView() {
  return (
    <div className="w-full h-full text-slate-300 font-sans selection:bg-[#00D2FF]/30">
      {/* Header (Simplified for inner view) */}
      <header className="h-20 flex items-center justify-between px-8 border-b border-[#1E2D4A] bg-[#0B1221]/80 backdrop-blur-md sticky top-0 z-10 w-full mb-6">
        <div>
          <div className="text-[#00D2FF] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Project View</div>
          <h1 className="text-xl font-black text-white tracking-wide">Q4 PROJECT: ALPHA NEXUS</h1>
        </div>
      </header>

      {/* Dashboard Grid Content */}
      <main className="flex-1 p-6 w-full max-w-[1800px] mx-auto overflow-y-auto">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 pb-10">
          {/* Left Column (Main Charts/Stats) */}
          <div className="xl:col-span-8 flex flex-col gap-6">
            {/* Active Agents Row */}
            <div className="w-full bg-[#121E31]/80 rounded-xl border border-[#1E2D4A] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-[#64748B] text-[12px] font-bold uppercase tracking-[0.15em]">ACTIVE AGENTS STATUS</h3>
                <span className="text-[#64748B] tracking-widest leading-none">...</span>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {activeAgents.map(agent => (
                  <AgentCard key={agent.id} {...agent} />
                ))}
              </div>
            </div>

            {/* Project Health GANTT Panel */}
            <div className="flex-1 min-h-[350px]">
              <ProjectTimeline />
            </div>

            {/* Node Graph Panel */}
            <div className="min-h-[420px]">
              <OrchestrationPanel />
            </div>
          </div>

          {/* Right Column (Side Panels) */}
          <div className="xl:col-span-4 flex flex-col gap-6">
            <div className="min-h-[350px]">
              <BudgetTracking />
            </div>
            <div className="min-h-[420px]">
              <HITLApprovals />
            </div>
            <div className="flex-1 min-h-[200px]">
              <ActivityFeed />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
