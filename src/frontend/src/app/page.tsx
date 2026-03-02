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

export default function CEODashboardV2() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0A111F] text-slate-300 font-sans selection:bg-[#00D2FF]/30">
      {/* Left Sidebar */}
      <aside className="w-16 flex flex-col items-center py-6 border-r border-[#1E2D4A] bg-[#0A111F] z-20">
        <div className="w-10 h-10 bg-[#00D2FF] text-[#0A111F] font-black italic flex items-center justify-center rounded-xl mb-10 text-xl shadow-[0_0_15px_rgba(0,210,255,0.6)]">
          AO
        </div>

        <nav className="flex flex-col gap-6 items-center flex-1">
          <button className="text-[#64748B] hover:text-white transition-colors p-2"><Home size={20} /></button>
          <button className="text-[#00D2FF] bg-[#121E31] p-3 rounded-lg border border-[#00D2FF]/30 shadow-[0_0_15px_rgba(0,210,255,0.15)]"><LineChart size={20} /></button>
          <button className="text-[#64748B] hover:text-white transition-colors p-2"><List size={20} /></button>
          <button className="text-[#64748B] hover:text-white transition-colors p-2"><Users size={20} /></button>
          <button className="text-[#64748B] hover:text-white transition-colors p-2"><Clock size={20} /></button>
          <div className="flex-1" />
          <button className="text-[#64748B] hover:text-white transition-colors p-2"><Settings size={20} /></button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto overflow-x-hidden relative">
        {/* Header */}
        <header className="h-20 flex items-center justify-between px-8 border-b border-[#1E2D4A] bg-[#0B1221]/80 backdrop-blur-md sticky top-0 z-10 w-full">
          <div>
            <div className="text-[#00D2FF] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Agentic Orchestra Mission Control</div>
            <h1 className="text-xl font-black text-white tracking-wide">CEO DASHBOARD | Q4 PROJECT: ALPHA NEXUS</h1>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-[#64748B] hover:text-white transition-colors">
              <Bell size={18} />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FB7185] rounded-full border border-[#0B1221]" />
            </button>
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]" />
              <input
                type="text"
                placeholder="Search"
                className="bg-[#121E31] border border-[#1E2D4A] rounded-full py-1.5 pl-9 pr-4 text-sm w-64 text-white focus:outline-none focus:border-[#00D2FF]/50 transition-colors"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00D2FF] to-purple-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-[#0B1221] flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                {/* Placeholder for user image */}
                <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=CEO&backgroundColor=0B1221`} alt="Avatar" />
              </div>
            </div>
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
    </div>
  );
}
