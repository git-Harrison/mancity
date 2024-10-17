const axios = require('axios');

exports.handler = async function (event) {
    const { path, queryStringParameters } = event;

    try {
        // Netlify Functions 경로를 제거하여 API 요청 경로 생성
        const apiPath = path.replace('/.netlify/functions/footballProxy', ''); // 불필요한 경로 제거
        const apiUrl = `https://api.football-data.org/v4${apiPath}`; // 올바른 경로로 설정

        const response = await axios.get(apiUrl, {
            headers: {
                'X-Auth-Token': process.env.FOOTBALL_DATA_API_TOKEN, // Netlify 환경 변수로 설정한 API 토큰 사용
            },
            params: queryStringParameters,
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
            headers: {
                'Access-Control-Allow-Origin': '*', // 모든 도메인에서 접근 가능
                'Content-Type': 'application/json',
            },
        };
    } catch (error) {
        console.error('API 요청 오류:', error); // 에러 로그 출력
        return {
            statusCode: error.response ? error.response.status : 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};