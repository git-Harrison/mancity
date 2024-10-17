const axios = require('axios');

exports.handler = async function (event) {
    const {url} = event.queryStringParameters;

    try {
        return {
            statusCode: 200,
            body: JSON.stringify({finalUrl: url}),  // 원본 URL을 반환
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        };
    } catch (error) {
        console.error('Error in resolve-link function:', error);  // 에러 로그 출력

        return {
            statusCode: 500,
            body: JSON.stringify({error: error.message}),
        };
    }
};
