const axios = require('axios');

exports.handler = async function (event) {
    const { url } = event.queryStringParameters; // 요청에서 URL을 가져옵니다.

    try {
        const response = await axios.get(url, { maxRedirects: 5 }); // 최대 5번의 리디렉션 추적
        return {
            statusCode: 200,
            body: JSON.stringify({ finalUrl: response.request.res.responseUrl }),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};