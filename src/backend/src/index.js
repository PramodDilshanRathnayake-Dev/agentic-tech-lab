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
        timeline: [
            { id: 1, label: "Kickoff", date: "Nov 15", status: "completed" },
            { id: 2, label: "Data Acquisition", date: "Nov 28", status: "completed" },
            { id: 3, label: "ML Model V1", date: "Dec 12", status: "active" },
            { id: 4, label: "API Integration", date: "Dec 21", status: "pending" },
            { id: 5, label: "Beta Release", date: "Jan 05", status: "pending" }
        ]
    });
});

app.listen(8080, () => console.log('Backend listening on 8080'));
