const express = require('express');
const router = express.Router();
const { Client } = require('@elastic/elasticsearch');

const esClient = new Client({ node: 'http://localhost:9200' });

router.get('/', async (req, res) => {
    const { query } = req.query;
    if (!query) return res.status(400).json({ error: 'Query is required' });

    try {
        const result = await esClient.search({
            index: 'docs',
            body: {
                query: {
                    match: { content: query }
                }
            }
        });

        // Basic AI-powered ranking: Sort by relevance
        const hits = result.hits.hits.map(hit => ({
            title: hit._source.title,
            content: hit._source.content,
            score: hit._score
        }));

        res.json({ results: hits });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
