require('dotenv').config();
const express = require('express');
const { Client } = require('@elastic/elasticsearch');

const app = express();
app.use(express.json());

const esClient = new Client({ node: process.env.ELASTICSEARCH_URL || 'http://localhost:9200' });

app.get('/', (req, res) => res.send('AI-Powered Search API is Running!'));

app.use('/search', require('./search'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    
// In the  backend/search.js  file, we will define the search API.