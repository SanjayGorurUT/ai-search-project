const { Client } = require('@elastic/elasticsearch');

const esClient = new Client({ node: 'http://localhost:9200' });

// Sample documentation for elasticsearch

async function ingestData() {
    const docs = [
        { title: 'JavaScript Guide', content: 'JavaScript is a versatile language used for web development.' },
        { title: 'Python Basics', content: 'Python is an easy-to-learn programming language with many applications.' }
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
