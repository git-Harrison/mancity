const axios = require('axios');

exports.handler = async function (event) {
    const { path, queryStringParameters } = event;

    try {
        // 요청할 API URL 생성
        const apiUrl = `https://api.football-data.org/v4${path}?${new URLSearchParams(queryStringParameters).toString()}`;

        // API 요청 설정
        const response = await axios.get(apiUrl, {
            headers: {
                'X-Auth-Token': process.env.FOOTBALL_DATA_API_TOKEN, // Netlify 환경 변수로 설정한 API 토큰 사용
            },
        });

        // API 응답 전송
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
            headers: {
                'Access-Control-Allow-Origin': '*', // 모든 도메인에서 접근 가능
                'Content-Type': 'application/json',
            },
        };
    } catch (error) {
        return {
            statusCode: error.response ? error.response.status : 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
