const {createProxyMiddleware} = require('http-proxy-middleware');
require('dotenv').config();

module.exports = function (app) {
    app.use(
        '/api/football',
        createProxyMiddleware({
            target: 'https://api.football-data.org',
            changeOrigin: true,
            secure: false,
            pathRewrite: {
                '^/api/football': '',
            },
            headers: {
                'X-Auth-Token': process.env.FOOTBALL_DATA_API_TOKEN,
            },
        })
    );
};
