import React from 'react';
import {FaInstagram, FaEnvelope} from 'react-icons/fa';

const NotFoundYoutubeApi: React.FC = () => {
    return (
        <div className="error-container">
            <h1 className="error-title">API 할당량 초과</h1>
            <p className="error-message">YouTube Data API v3 할당량을 초과하여 현재 데이터를 불러올 수 없습니다.</p>
            <p className="error-message">문제가 지속될 경우, 아래 인스타그램 또는 메일로 문의 주세요.</p>
            <div className="contact-links">
                <a href="https://instagram.com/lj_hun" target="_blank" rel="noopener noreferrer"
                   className="contact-link">
                    <FaInstagram className="contact-icon"/> @lj_hun
                </a>
                <a href="mailto:wognsl305@naver.com" className="contact-link">
                    <FaEnvelope className="contact-icon"/> wognsl305@naver.com
                </a>
            </div>
        </div>
    );
};

export default NotFoundYoutubeApi;
