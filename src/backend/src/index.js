require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Project Health Analytics
app.get('/api/stats/project-health', (req, res) => {
    res.json({
        completionPercentage: 78,
        sprint: {
            id: 14,
            name: "Model Tuning",
            startDate: "2023-11-15",
            endDate: "2023-12-25",
            status: "Active",
            velocity: "48 SP"
        },
        milestones: [
            { id: 1, label: "Kickoff", percentage: 0, date: "Nov 15", status: "completed" },
            { id: 2, label: "Alpha", percentage: 25, date: "Dec 05", status: "completed" },
            { id: 3, label: "Beta", percentage: 60, date: "Dec 20", status: "active" },
            { id: 4, label: "Launch", percentage: 100, date: "Jan 15", status: "pending" }
        ],
        timeline: [
            { id: 1, label: "Kickoff", date: "Nov 15", status: "completed" },
            { id: 2, label: "Data Acquisition", date: "Nov 28", status: "completed" },
            { id: 3, label: "ML Model V1", date: "Dec 12", status: "active" },
            { id: 4, label: "API Integration", date: "Dec 21", status: "pending" },
            { id: 5, label: "Beta Release", date: "Jan 05", status: "pending" }
        ]
    });
});

// AI Agent Orchestration
app.get('/api/stats/agent-orchestration', (req, res) => {
    res.json({
        agents: [
            { id: 'pm', name: 'Sarah L.', role: 'PM', status: 'active', position: { x: 50, y: 15 } },
            { id: 'architect', name: 'David K.', role: 'Architect', status: 'active', position: { x: 20, y: 45 } },
            { id: 'uiux', name: 'Maria G.', role: 'UI/UX', status: 'working', position: { x: 80, y: 45 } },
            { id: 'dev', name: 'Alec R.', role: 'Dev', status: 'blocked', position: { x: 35, y: 80 } },
            { id: 'qa', name: 'Cam M.', role: 'QA', status: 'idle', position: { x: 65, y: 80 } }
        ],
        relationships: [
            { from: 'pm', to: 'architect', label: 'Requirements' },
            { from: 'architect', to: 'uiux', label: 'SAD Specs' },
            { from: 'uiux', to: 'dev', label: 'Design Tokens' },
            { from: 'architect', to: 'dev', label: 'Architecture' },
            { from: 'dev', to: 'qa', label: 'Code PR' }
        ],
        activityFeed: [
            { id: 1, agent: '@pm', action: 'defined milestone Alpha', time: '5m ago' },
            { id: 2, agent: '@architect', action: 'updated system SAD', time: '15m ago' },
            { id: 3, agent: '@uiux', action: 'pushed design tokens', time: '1h ago' }
        ]
    });
});

app.listen(8080, () => console.log('Backend listening on 8080'));
