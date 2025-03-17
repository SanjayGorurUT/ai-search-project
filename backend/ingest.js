const { Client } = require('@elastic/elasticsearch');

const esClient = new Client({ node: 'http://localhost:9201' });

// Sample documentation for elasticsearch

async function ingestData() {
    const docs = [
        { title: 'JavaScript Guide', content: 'javascript' },
        { title: 'Python Basics', content: 'python' }
    ];

    for (const doc of docs) {
        await esClient.index({
            index: 'docs',
            body: doc
        });
    }

    console.log('Data ingestion complete!');
}

ingestData();
