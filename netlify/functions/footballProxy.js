const axios = require('axios');

exports.handler = async (event) => {
    const { path } = event;

    try {
        // API 서버로 요청 전달
        const response = await axios.get(`https://api.football-data.org/v4${path}`, {
            headers: {
                'X-Auth-Token': process.env.FOOTBALL_DATA_API_TOKEN,
            },
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            },
        };
    } catch (error) {
        return {
            statusCode: error.response?.status || 500,
            body: JSON.stringify({ error: error.message }),
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        };
    }
};
