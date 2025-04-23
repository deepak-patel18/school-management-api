const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const schoolRoutes = require('./routes/schoolRoutes');

app.use(cors());
app.use(express.json());

app.use('/', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
