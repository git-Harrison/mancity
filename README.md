# Man City Hub

README.md 파일은 실시간으로 수정 중이며, 프로젝트의 최신 상태와 일치하지 않을 수 있습니다.

<a href="https://mancityhub.netlify.app" target="_blank"><strong>Man City Hub 프로젝트 보러가기</strong></a>

---

## 📌 프로젝트 개요

이 프로젝트는 **Manchester City Football Club**을 주제로 한 팬 사이트로, **React**와 **TypeScript**를 기반으로 제작되었습니다.

**MVVM (Model-View-ViewModel)** 아키텍처 패턴을 채택하여 설계되었으며, 스타일링은 **MUI**와 **SCSS**로 작업되었습니다.

---

## ⚙️ 주요 기능

### 1. 메인 페이지

- **유튜브 하이라이트 영상**: **YouTube Data API v3**를 활용하여 맨시티 경기 하이라이트 영상을 크롤링하고, 이를 **restfulAPI** 방식으로 데이터에 반영하였습니다.
- **뉴스 크롤링**: **Custom Search API**를 사용하여 구글에서 맨시티 관련 뉴스를 크롤링하고, **restfulAPI**로 데이터를 가져옵니다.
- **CORS 이슈 해결**: **Netlify**를 통해 CORS 문제를 해결하고, 빌드 및 배포를 진행하였습니다.

### 2. 24/25 시즌 선수 명단 페이지

- **데이터 관리**: `assets/data/current_season_player_info.json` 파일을 통해 현재 시즌의 선수 정보(나이, 신체 사이즈, 이적 정보 등)를 관리합니다.
- **슬라이더 구현**: **Swiper** 라이브러리를 사용하여 선수 명단을 슬라이드 방식으로 구현했습니다.

### 3. 스코어 페이지

- **실시간 경기 정보**: **football-data.org** API를 활용하여 실시간 맨시티 경기 데이터 및 스코어, 현재 EPL 팀 순위를 가져와 표시합니다.

### 4. 선수 이적 시장 페이지

- **선수 정보**: `assets/data/current_season_player_info.json`과 `previous_season_player_info.json` 데이터를 사용하여 선수 정보를 테이블 형식으로 표시합니다.
- **필터 및 정렬**: 선수 정보를 필터링하고 정렬할 수 있는 기능을 제공하며, **Redux**를 통해 가상의 **CITY** 화폐를 관리해 선수 영입 기능을 구현했습니다.
- **Excel 다운로드 기능**: 테이블에 표시된 선수 정보를 **Excel 파일**로 다운로드할 수 있는 기능을 제공합니다.

### 5. 강화 페이지

- **강화 시스템**: 이적 시장 페이지에서 구매한 선수를 **Redux** 상태로 관리하고, 해당 선수를 재료로 사용해 능력치를 강화하는 기능을 구현했습니다.
- **강화 단계 반영**: 강화 단계에 따른 능력치 변동을 반영하며, **Redux 상태**를 동기화합니다.

### 6. 스쿼드 메이커 페이지

- **스쿼드 구성**: 영입한 선수들을 기반으로 직접 스쿼드를 구성할 수 있으며, 여러 가지 포메이션 옵션을 제공합니다.
- **캡처 기능**: 완성된 스쿼드를 이미지로 캡처하고, 다운로드할 수 있는 기능을 구현했습니다.

---

## 📦 사용된 라이브러리

이 프로젝트에서는 다양한 라이브러리를 사용하여 성능 최적화와 편리한 기능 구현을 목표로 하였습니다. 주요 라이브러리와 그 역할은 다음과 같습니다.

### 주요 라이브러리

- **React**: 프론트엔드 사용자 인터페이스를 구성하는 데 사용된 핵심 라이브러리입니다.
- **TypeScript**: 정적 타입을 지원하여 코드의 안정성과 유지보수성을 극대화하는 데 기여하였습니다.
- **MUI (Material-UI)**: React 애플리케이션에서 손쉽게 스타일링을 할 수 있도록 도와주는 라이브러리로, 컴포넌트 기반 UI 요소를 제공합니다.
- **SCSS (Sass)**: CSS의 확장형 언어로, 스타일링을 보다 유연하고 유지보수하기 쉽게 도와줍니다.
- **Redux**: 전역 상태 관리를 위해 사용되었으며, 특히 선수 영입 및 강화 페이지에서 **CITY** 화폐와 선수 상태 관리를 위해 활용되었습니다.
- **Redux Persist**: **Redux** 상태를 유지하며, 페이지 새로고침 시에도 상태가 유지될 수 있도록 하였습니다.
- **Swiper**: 선수 명단 페이지에서 슬라이드 기능을 구현하는 데 사용되었습니다.
- **Axios**: API 호출을 간편하게 처리할 수 있는 HTTP 클라이언트로, 다양한 RESTful API와 통신하는 데 사용되었습니다.

### 애니메이션 라이브러리

- **Framer Motion**: React 기반 애니메이션을 간편하게 구현할 수 있는 라이브러리로, UI 전환과 요소 애니메이션에 사용되었습니다.
- **GSAP (GreenSock Animation Platform)**: 고급 애니메이션 효과를 구현하기 위해 사용되었습니다.

### 기타 라이브러리

- **react-icons**: 프로젝트에서 다양한 아이콘을 사용하기 위한 라이브러리입니다.
- **html2canvas**: 스쿼드 메이커 페이지에서 스쿼드 캡처 기능을 구현하기 위해 사용되었습니다.
- **xlsx**: 선수 데이터를 Excel로 다운로드할 수 있는 기능을 제공하기 위해 사용되었습니다.

---

## 📂 package.json

프로젝트에서 사용된 의존성 패키지 목록입니다.

```json
{
  "name": "mancity",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.13.3",
    "@emotion/styled": "^11.13.0",
    "@mui/icons-material": "^6.1.5",
    "@mui/material": "^6.1.1",
    "@reduxjs/toolkit": "^2.2.7",
    "axios": "^1.7.7",
    "dotenv": "^16.4.5",
    "framer-motion": "^11.5.4",
    "gsap": "^3.12.5",
    "html2canvas": "^1.4.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-redux": "^9.1.2",
    "react-router-dom": "^6.26.1",
    "react-slick": "^0.30.2",
    "redux": "^5.0.1",
    "redux-persist": "^6.0.0",
    "sass": "^1.78.0",
    "slick-carousel": "^1.8.1",
    "swiper": "^11.1.12",
    "typescript": "^4.9.5",
    "xlsx": "^0.18.5"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "postbuild": "cp build/index.html build/404.html"
  }
}
```

---

## 📸 이미지 출처 및 사용 제한 안내

본 프로젝트에서 사용된 이미지는 다음의 출처에서 가져왔습니다:

- [FIFA Online (fconline.nexon.com)](https://fconline.nexon.com)
- [EA Sports (ea.com)](https://www.ea.com)
- [NamuWiki (namu.wiki)](https://namu.wiki)

해당 이미지는 **비상업적** 목적으로만 사용되었으며, 맨체스터 시티 축구 클럽 관련 팬 프로젝트로서 제작되었습니다. 

**상업적 사용 금지**: 본 프로젝트에 포함된 이미지는 상업적 목적으로 사용할 수 없으며, 상업적 용도로의 재배포, 수정 또는 전시하는 행위는 허용되지 않습니다.

이미지 출처와 관련된 모든 저작권은 각각의 원 저작자에게 있으며, 이를 위반할 시 법적 문제가 발생할 수 있음을 알려드립니다.

Please note that all images used in this project are for non-commercial, fan-made purposes only. Unauthorized commercial use is strictly prohibited.

