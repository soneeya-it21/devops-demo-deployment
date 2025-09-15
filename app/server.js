const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => res.json({ status: 'ok' }));

const DEMO_USER = process.env.DEMO_USER || 'hire-me@anshumat.org';
const DEMO_PASS = process.env.DEMO_PASS || 'HireMe@2025!';

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === DEMO_USER && password === DEMO_PASS) {
    return res.json({ ok: true, message: 'Login successful' });
  }
  return res.status(401).json({ ok: false, message: 'Invalid credentials' });
});

app.get('/', (req, res) => res.send('Hello from DevOps Demo app!'));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
