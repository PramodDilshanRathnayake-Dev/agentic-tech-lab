'use client';

import { useState, useEffect } from 'react';
import { AgentCard } from '@/components/AgentCard';
import { GlassPanel } from '@/components/GlassPanel';
import { StatusBadge } from '@/components/StatusBadge';
import { ProjectHealth } from '@/components/ProjectHealth';

export default function Home() {
  const [healthData, setHealthData] = useState<any>(null);

  useEffect(() => {
    // In a real monorepo with Docker, we'd use an env var for the API URL
    // For now, we'll fetch from localhost:8080 during manual development
    fetch('http://localhost:8080/api/stats/project-health')
      .then(res => res.json())
      .then(data => setHealthData(data))
      .catch(err => console.error('Failed to fetch health data:', err));
  }, []);

  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto flex flex-col gap-8 text-white">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center text-2xl font-black shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            A
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              AGENTIC ORCHESTRA MISSION CONTROL
            </h1>
            <div className="text-sm text-slate-400 uppercase tracking-widest font-medium mt-1">
              CEO Dashboard | G4 Project: Alpha Nexus
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
            Mission Log
          </button>
          <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
            CEO
          </div>
        </div>
      </header>

      {/* Project Health Section */}
      {healthData && (
        <ProjectHealth
          percentage={healthData.completionPercentage}
          sprint={healthData.sprint}
          timeline={healthData.timeline}
        />
      )}

      {/* Agents Section */}
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00D2FF]" />
          Active Agents Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AgentCard handle="@pm" name="Sarah L." role="Project Lead, Defining Milestones" status="active" avatarColor="bg-emerald-500/20 text-emerald-400 border border-emerald-500/50" />
          <AgentCard handle="@architect" name="David K." role="System Architect, Designing Infrastructure" status="active" avatarColor="bg-blue-500/20 text-blue-400 border border-blue-500/50" />
          <AgentCard handle="@uiux" name="Maria G." role="Lead UI/UX, High-Fidelity Mockups" status="working" avatarColor="bg-amber-500/20 text-amber-400 border border-amber-500/50" />
          <AgentCard handle="@dev" name="Alec R." role="Backend Dev, Codebase Setup" status="blocked" avatarColor="bg-rose-500/20 text-rose-400 border border-rose-500/50" />
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Budget & Token Tracking */}
        <GlassPanel className="p-6 col-span-1 flex flex-col gap-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Budget & Token Tracking</h3>

          <div className="text-center py-6">
            <div className="relative inline-block">
              {/* Fake semi-circle chart */}
              <svg className="w-48 h-24" viewBox="0 0 100 50">
                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" strokeLinecap="round" />
                <path d="M 10 50 A 40 40 0 0 1 70 20" fill="none" stroke="#FFD600" strokeWidth="6" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(255,214,0,0.5)]" />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 text-center">
                <div className="text-3xl font-bold">$1,250,000</div>
                <div className="text-xs text-slate-400 mt-1">/ $885K spent (70.8%)</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Current Token Usage</span>
                <span className="font-medium text-cyan-400">8.2M <span className="text-slate-500">/ 15M</span></span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 w-[55%] shadow-[0_0_10px_#00D2FF]" />
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/5">
              {[
                { label: '@dev', width: '70%', color: 'bg-blue-400', val: '3.8M' },
                { label: '@uiux', width: '30%', color: 'bg-amber-400', val: '1.5M' },
                { label: '@architect', width: '25%', color: 'bg-emerald-400', val: '1.1M' },
              ].map(stat => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-16 text-xs text-slate-400">{stat.label}</div>
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${stat.color} shadow-[0_0_8px_currentColor]`} style={{ width: stat.width }} />
                  </div>
                  <div className="text-xs font-semibold">{stat.val}</div>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>

        {/* HITL Approvals */}
        <GlassPanel className="p-6 col-span-2 flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Human-In-The-Loop Approvals</h3>
            <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold border border-rose-500/30">3 Pending</span>
          </div>

          <div className="space-y-3">
            {[
              { id: 1, title: 'Project Milestone: Stage 2 Completion', agent: 'Sarah L. (@pm)' },
              { id: 2, title: 'Architectural Design V3', agent: 'David K. (@architect)' },
              { id: 3, title: 'UI/UX Prototype Sign-off', agent: 'Maria G. (@uiux)' },
            ].map(approval => (
              <GlassPanel key={approval.id} className="p-4 flex items-center justify-between border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600">
                    {approval.agent.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{approval.title}</div>
                    <div className="text-sm text-slate-400 flex items-center gap-2">
                      {approval.agent} <span className="text-amber-400">| Pending CEO Review</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-500/30 text-sm font-semibold transition-colors">
                    Approve
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/50 hover:bg-rose-500/30 text-sm font-semibold transition-colors">
                    Deny
                  </button>
                </div>
              </GlassPanel>
            ))}
          </div>
        </GlassPanel>
      </div>
    </main>
  );
}
