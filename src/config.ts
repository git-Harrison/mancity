// src/config.ts
const isDevelopment = process.env.NODE_ENV === 'development';

export const API_BASE_URL = isDevelopment
    ? '/api/football' // 로컬 개발 환경: 프록시 사용
    : 'https://api.football-data.org/v4'; // 배포 환경: 실제 API 서버 사용
