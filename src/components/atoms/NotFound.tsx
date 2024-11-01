import React from 'react';
import {FaEnvelope, FaInstagram} from "react-icons/fa";

const NotFound: React.FC = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">현재 API 호출 빈도가 증가하여 서버에 부하가 발생하고 있습니다.</p>
            <p className="not-found-message">데이터를 다시 불러오려면 페이지를 새로고침해 주시기 바랍니다.</p>
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

export default NotFound;
