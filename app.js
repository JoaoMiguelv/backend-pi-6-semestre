import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import setupRoutes from './src/routes/index.js';
import cron from 'node-cron'; // Importe o node-cron

import { startListening } from './src/utils/Sub.js';
import { publishMessage } from './src/utils/Pub.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(bodyParser.json());
setupRoutes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Iniciar a escuta de mensagens (SUB)
startListening().catch(console.error);

// Configurar o cronjob para publicar uma mensagem a cada 12 horas
cron.schedule(process.env.CRON_SCHEDULE, async () => {
  await publishMessage();
});
