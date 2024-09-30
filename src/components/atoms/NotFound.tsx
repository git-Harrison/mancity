import React from 'react';
import {Link} from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">현재 API 호출 빈도가 증가하여 서버에 부하가 발생하고 있습니다.</p>
            <p className="not-found-message">데이터를 다시 불러오려면 페이지를 새로고침해 주시기 바랍니다.</p>
            <Link to="/" className="back-home-link">메인 페이지로 이동</Link>
        </div>
    );
};

export default NotFound;
