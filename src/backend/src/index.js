require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/health', (req,res) => res.json({status: 'ok'}));
app.listen(8080, () => console.log('Backend listening on 8080'));
