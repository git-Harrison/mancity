import React from 'react';
import {FaInstagram, FaEnvelope} from 'react-icons/fa';
import {ApiLimitNoticeProps} from '../../viewmodels/useNoticeViewModel';

const ApiLimitNotice: React.FC<ApiLimitNoticeProps> = ({apiName, errorMessage}) => {
    return (
        <div className="error-container">
            <h1 className="error-title">API 할당량 초과</h1>
            <p className="error-message">{apiName} {errorMessage}</p>
            <p className="error-message">문제가 지속될 경우, 아래 인스타그램(DM) 또는 메일로 문의 주세요.</p>
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

export default ApiLimitNotice;
