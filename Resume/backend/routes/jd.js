// routes/jd.js
import express from 'express';
import { JDAnalyzerAgent } from '../agents/jdAnalyzerAgent.js';

const router = express.Router();
const agent = new JDAnalyzerAgent();

router.post('/analyze', async (req, res) => {
  const { title, description } = req.body;
  try {
    const result = await agent.analyze(title, description);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'JD analysis failed', details: err.message });
  }
});

export default router;
