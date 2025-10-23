const path = require('path');
// dotenv를 가능한 가장 먼저 로드 (backend/.env 경로 명시)
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// 디버그 출력(임시로 확인 후 제거 가능)
console.log('CWD:', process.cwd());
console.log('Resolved .env path:', path.resolve(__dirname, '.env'));
console.log('SUPABASE_URL set?', !!process.env.SUPABASE_URL);
console.log('SUPABASE_KEY set?', !!process.env.SUPABASE_KEY);

const express = require('express');
const cors = require('cors');
const categoryRouter = require('./routes/category'); // dotenv 로드 후 require 하도록 유지

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/categories', categoryRouter);

// static serve 설정 등...
const clientDist = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(clientDist));
app.get('/', (req, res) => res.sendFile(path.join(clientDist, 'index.html')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});