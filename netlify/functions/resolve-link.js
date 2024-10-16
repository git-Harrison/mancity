const axios = require('axios');

exports.handler = async function (event) {
    const { url } = event.queryStringParameters;

    try {
        // Google News URL을 그대로 반환 (추가적인 처리 없이 원본 URL 사용)
        return {
            statusCode: 200,
            body: JSON.stringify({ finalUrl: url }),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        };
    } catch (error) {
        console.error('Error in resolve-link function:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};