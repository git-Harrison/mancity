const axios = require('axios');

exports.handler = async function (event) {
    console.log('Request event:', event); // 요청 이벤트를 기록
    const { path, queryStringParameters } = event;

    try {
        // Netlify Functions로 전달된 경로가 올바른지 확인합니다.
        // 예를 들어, event.path가 "/.netlify/functions/footballProxy/api/competitions/PL/standings"로 오는 경우 이를 처리하도록 변경합니다.
        const apiPath = path.replace('/.netlify/functions/footballProxy', ''); // 불필요한 부분 제거
        const apiUrl = `https://api.football-data.org/v4${apiPath}`;
        console.log('API URL:', apiUrl); // API URL 확인

        // API 요청 설정
        const response = await axios.get(apiUrl, {
            headers: {
                'X-Auth-Token': process.env.FOOTBALL_DATA_API_TOKEN, // Netlify 환경 변수로 설정한 API 토큰 사용
            },
            params: queryStringParameters,
        });

        console.log('API Response:', response.data); // 응답 데이터 기록

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
        console.error('API Request Error:', error); // 에러 기록
        return {
            statusCode: error.response ? error.response.status : 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
