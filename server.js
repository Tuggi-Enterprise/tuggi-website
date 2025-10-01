import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Importar handlers da API
const { default: leadsHandler } = await import('./api/leads.js');
const { default: deletionRequestHandler } = await import('./api/deletion-request.js');

// Rotas
app.post('/api/leads', async (req, res) => {
  await leadsHandler(req, res);
});

app.post('/api/deletion-request', async (req, res) => {
  await deletionRequestHandler(req, res);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});