'use client';

import React from 'react';
import { Home, LineChart, List, Users, Clock, Settings, Search, Bell } from 'lucide-react';
import { AgentCard } from '@/components/AgentCard';
import { ProjectTimeline } from '@/components/ProjectTimeline';
import { OrchestrationPanel } from '@/components/OrchestrationPanel';
import { BudgetTracking } from '@/components/BudgetTracking';
import { HITLApprovals } from '@/components/HITLApprovals';
import { ActivityFeed } from '@/components/ActivityFeed';
import { RequirementGroomingModal } from '@/components/RequirementGroomingModal';
import ProjectDashboard from '@/components/ProjectDashboard';

// Mock Data for Home Page Overview
const overviewStats = {
  totalProjects: 14,
  newProjects: 2,
  aiPerformance: '94.8%',
  avgResponse: '2.1s',
  projectHealth: '91%',
  atRisk: 3,
  revenue: '$385.2K',
  revenueGrowth: '+11.4%'
};

export default function CEODashboardV2() {
  const [isGroomingOpen, setIsGroomingOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'home' | 'project'>('home');

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0A111F] text-slate-300 font-sans selection:bg-[#00D2FF]/30">
      {/* Left Sidebar */}
      <aside className="w-16 flex flex-col items-center py-6 border-r border-[#1E2D4A] bg-[#0A111F] z-20">
        <div className="w-10 h-10 bg-[#00D2FF] text-[#0A111F] font-black italic flex items-center justify-center rounded-xl mb-10 text-xl shadow-[0_0_15px_rgba(0,210,255,0.6)]">
          AO
        </div>

        <nav className="flex flex-col gap-6 items-center flex-1">
          <button onClick={() => setActiveTab('home')} className={`p-3 rounded-lg border transition-colors ${activeTab === 'home' ? 'text-[#00D2FF] bg-[#121E31] border-[#00D2FF]/30 shadow-[0_0_15px_rgba(0,210,255,0.15)]' : 'text-[#64748B] hover:text-white border-transparent'}`}><Home size={20} /></button>
          <button onClick={() => setActiveTab('project')} className={`p-3 rounded-lg border transition-colors ${activeTab === 'project' ? 'text-[#00D2FF] bg-[#121E31] border-[#00D2FF]/30 shadow-[0_0_15px_rgba(0,210,255,0.15)]' : 'text-[#64748B] hover:text-white border-transparent'}`}><LineChart size={20} /></button>
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
            <h1 className="text-xl font-black text-white tracking-wide">CEO HOME PAGE | OVERALL SUMMARY</h1>
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
        {activeTab === 'home' ? (
          <main className="flex-1 p-6 w-full max-w-[1800px] mx-auto overflow-y-auto">
            {/* Top Actions Row */}
            <div className="w-full flex justify-center mb-10">
              <button
                onClick={() => setIsGroomingOpen(true)}
                className="bg-gradient-to-r from-[#00D2FF] to-[#B026FF] text-white font-bold tracking-widest uppercase py-4 px-12 rounded-full shadow-[0_0_30px_rgba(0,210,255,0.4)] hover:shadow-[0_0_40px_rgba(176,38,255,0.6)] transition-all duration-300 border border-white/20 relative overflow-hidden group">
                <span className="relative z-10">Initiate AI Requirements Grooming</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* KPI Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-[#121E31]/80 rounded-xl border border-[#1E2D4A] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between">
                <h3 className="text-[#64748B] text-[11px] font-bold uppercase tracking-[0.1em] mb-2">Total Active Projects</h3>
                <div className="flex items-end gap-3"><span className="text-3xl font-black text-white">{overviewStats.totalProjects}</span><span className="text-[#00D2FF] font-bold text-sm mb-1">+{overviewStats.newProjects} this month</span></div>
              </div>
              <div className="bg-[#121E31]/80 rounded-xl border border-[#1E2D4A] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between">
                <h3 className="text-[#64748B] text-[11px] font-bold uppercase tracking-[0.1em] mb-2">AI Performance</h3>
                <div className="flex items-end gap-3"><span className="text-3xl font-black text-white">{overviewStats.aiPerformance}</span><span className="text-[#cbd5e1] text-xs mb-1">eff &nbsp;|&nbsp; {overviewStats.avgResponse} avg response</span></div>
              </div>
              <div className="bg-[#121E31]/80 rounded-xl border border-[#1E2D4A] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between">
                <h3 className="text-[#64748B] text-[11px] font-bold uppercase tracking-[0.1em] mb-2">Overall Project Health</h3>
                <div className="flex items-end gap-3"><span className="text-3xl font-black text-white">{overviewStats.projectHealth}</span><span className="text-rose-400 font-bold text-sm mb-1">{overviewStats.atRisk} at risk</span></div>
              </div>
              <div className="bg-[#121E31]/80 rounded-xl border border-[#1E2D4A] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between">
                <h3 className="text-[#64748B] text-[11px] font-bold uppercase tracking-[0.1em] mb-2">Revenue (MTD)</h3>
                <div className="flex items-end gap-3"><span className="text-3xl font-black text-white">{overviewStats.revenue}</span><span className="text-[#00D2FF] font-bold text-sm mb-1">{overviewStats.revenueGrowth}</span></div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 pb-10">
              {/* Left Column (Main Stats Placeholder) */}
              <div className="xl:col-span-8 flex flex-col gap-6">
                <div className="w-full h-[400px] bg-[#121E31]/80 rounded-xl border border-[#1E2D4A] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center justify-center text-[#64748B]">
                  [Overall Project Progress Chart Placeholder]
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
        ) : (
          <div className="flex-1 w-full max-w-[1800px] mx-auto overflow-y-auto">
            <ProjectDashboard />
          </div>
        )}
        <RequirementGroomingModal isOpen={isGroomingOpen} onClose={() => setIsGroomingOpen(false)} />
      </div>
    </div>
  );
}
