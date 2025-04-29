import express from 'express';
import jdRoutes from './routes/jd.js';

const app = express();
app.use(express.json());

app.use('/api/jd', jdRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
