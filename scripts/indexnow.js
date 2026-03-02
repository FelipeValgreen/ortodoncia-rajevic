import fetch from 'node-fetch';

const INDEXNOW_KEY = 'DBI86kwVdNcogLbmcQAtvyFyjXJoEZrT';
const HOST = 'www.ortodonciarajevic.cl';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

async function submitToIndexNow(urlList) {
    const payload = {
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urlList
    };

    try {
        const response = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            console.log(`Successfully submitted ${urlList.length} URLs to IndexNow.`);
        } else {
            console.error(`Failed to submit URLs. Status: ${response.status} ${response.statusText}`);
            const text = await response.text();
            console.error('Response:', text);
        }
    } catch (error) {
        console.error('Error submitting to IndexNow:', error);
    }
}

// Get URLs from command line arguments or provide defaults
const urls = process.argv.slice(2);
if (urls.length > 0) {
    submitToIndexNow(urls);
} else {
    console.log('Usage: node scripts/indexnow.js <url1> <url2> ...');
}
