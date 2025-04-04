import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './src/routes/authRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import evidenceRoutes from './src/routes/evidenceRoutes.js';
import reportRoutes from './src/routes/reportRoutes.js';
import caseRoutes from './src/routes/caseRoutes.js';


const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/evidences', evidenceRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/cases', caseRoutes);

export default app;