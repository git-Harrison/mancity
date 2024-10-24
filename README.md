# Manchester City Football Club Management

README.md 파일은 실시간으로 수정 중이며, 프로젝트의 최신 상태와 일치하지 않을 수 있습니다.

<a href="https://mancityhub.netlify.app/" target="_blank"><strong>프로젝트 보러가기</strong></a>

---

## 📌 프로젝트 개요

이 프로젝트는 **Manchester City Football Club**을 주제로 한 팬 사이트로, **React**와 **TypeScript**를 기반으로 제작되었습니다. **MVVM (Model-View-ViewModel)** 아키텍처 패턴을 채택하여 설계되었으며, 스타일링은 **MUI**와 **SCSS**로 작업되었습니다.

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

## 📁 프로젝트 구조

📂 public
├── node_modules                # 라이브러리 파일

📂 src
├── 📂 api                      # API 호출을 위한 서비스 폴더
│   └── 📂 services             # API 서비스 정의
│       ├── footballService.ts  # 축구 관련 API 호출 서비스
│       ├── googleNewsService.ts # 구글 뉴스 API 호출 서비스
│       ├── googleYoutubeService.ts # 유튜브 관련 API 호출 서비스
│       └── playerService.ts    # 선수 관련 API 호출 서비스

📂 assets                       # 정적 파일들 (이미지, 폰트, JSON 데이터 등)
├── 📂 data                     # JSON 형식의 선수 정보 파일
│   ├── current_season_player_info.json  # 현재 시즌 선수 데이터
│   └── previous_season_player_info.json # 이전 시즌 선수 데이터
├── 📂 fonts                    # 프로젝트에서 사용하는 폰트 파일
│   ├── EA_SANS.woff            # EA Sans 폰트 파일
│   ├── FCOAllSans-Bold.woff2   # FCOAllSans 볼드 폰트
│   ├── FCOAllSans-Light.woff2  # FCOAllSans 라이트 폰트
│   ├── FCOAllSans-Medium.woff2 # FCOAllSans 미디엄 폰트
│   ├── FCOAllSans-Regular.woff2 # FCOAllSans 레귤러 폰트
│   ├── Pretendard-Bold.woff2   # Pretendard 볼드 폰트
│   ├── Pretendard-Medium.woff2 # Pretendard 미디엄 폰트
│   ├── Pretendard-Regular.woff2 # Pretendard 레귤러 폰트
│   └── Pretendard-SemiBold.woff2 # Pretendard 세미볼드 폰트
├── 📂 images                   # 이미지 폴더 (아직 이미지 없음)

📂 styles                       # 스타일 파일 폴더 (SCSS)
├── _common.scss                # 공통 스타일
├── _dialog.scss                # 다이얼로그 스타일
├── _header.scss                # 헤더 스타일
├── _keyframes.scss             # 애니메이션 키프레임 스타일
├── _loading.scss               # 로딩 스타일
├── _loadingBar.scss            # 로딩 바 스타일
├── _main.scss                  # 메인 페이지 스타일
├── _notFound.scss              # 404 Not Found 스타일
├── _playerCard.scss            # 선수 카드 스타일
├── _playerEnhancement.scss     # 선수 강화 스타일
├── _playersInfo.scss           # 선수 정보 스타일
├── _reset.scss                 # 스타일 초기화
├── _scores.scss                # 스코어 페이지 스타일
├── _sideMenuNav.scss           # 사이드 메뉴 스타일
├── _slickSlider.scss           # 슬릭 슬라이더 스타일
├── _squadmaker.scss            # 스쿼드 메이커 스타일
├── _swiperSlider.scss          # 스와이퍼 슬라이더 스타일
└── _transferMarket.scss        # 이적 시장 스타일

📂 components                   # 재사용 가능한 UI 컴포넌트들
├── 📂 atoms                    # 가장 작은 단위의 UI 요소
│   ├── ApiLimitNotice.tsx      # API 제한 알림 컴포넌트
│   ├── CommonDialog.tsx        # 공통 다이얼로그 컴포넌트
│   ├── LoadingComponents.tsx   # 로딩 컴포넌트
│   ├── LoadingSpinner.tsx      # 로딩 스피너 컴포넌트
│   ├── NotFound.tsx            # 404 Not Found 페이지 컴포넌트
│   ├── PlayerCard.tsx          # 선수 카드 컴포넌트
│   ├── PlayerMiniCard.tsx      # 소형 선수 카드 컴포넌트
│   ├── TransferMarketTableBody.tsx # 이적 시장 테이블 바디 컴포넌트
│   ├── TransferMarketTableHeader.tsx # 이적 시장 테이블 헤더 컴포넌트
│   └── TransferPlayerInfo.tsx  # 이적 선수 정보 컴포넌트
├── 📂 molecules                # 기본 UI 컴포넌트 집합
│   ├── EnhancementTable.tsx    # 강화 테이블 컴포넌트
│   ├── FormationSelection.tsx  # 포메이션 선택 컴포넌트
│   ├── News.tsx                # 뉴스 컴포넌트
│   ├── PlayerEnhancementList.tsx # 선수 강화 리스트 컴포넌트
│   └── SquadMaker.tsx          # 스쿼드 메이커 컴포넌트
└── 📂 organisms                # 복합적인 UI 컴포넌트 (헤더, 푸터 등)
    └── 📂 scores               # 경기 정보 관련 컴포넌트
        ├── MatchCard.tsx       # 경기 카드 컴포넌트
        ├── Scores.tsx          # 스코어 컴포넌트
        ├── StandingItem.tsx    # 순위 아이템 컴포넌트
        └── StandingsList.tsx   # 순위 리스트 컴포넌트
    ├── Footer.tsx              # 푸터 컴포넌트
    ├── Header.tsx              # 헤더 컴포넌트
    ├── LoadingScreen.tsx       # 로딩 화면 컴포넌트
    ├── PlayersCardSlider.tsx   # 선수 카드 슬라이더 컴포넌트
    ├── PlayersInfo.tsx         # 선수 정보 표시 컴포넌트
    └── TransferMarketTable.tsx # 이적 시장 테이블 컴포넌트

📂 models                       # 데이터 모델 정의 및 타입 인터페이스
├── 📂 interfaces               # TypeScript 인터페이스 정의
│   ├── TransferMarketTable.interface.ts     # 이적 시장 테이블 인터페이스
│   ├── TransferMarketTableBody.interface.ts # 이적 시장 테이블 바디 인터페이스
│   ├── TransferMarketTableHeader.interface.ts # 이적 시장 테이블 헤더 인터페이스
│   ├── Dialog.interface.ts     # 다이얼로그 인터페이스
│   ├── FootballTypes.interface.ts # 축구 관련 데이터 타입 인터페이스
│   ├── Formation.interface.ts  # 포메이션 인터페이스
│   ├── Header.interface.ts     # 헤더 인터페이스
│   ├── Loading.interface.ts    # 로딩 상태 인터페이스
│   ├── LoadingScreen.interface.ts # 로딩 화면 인터페이스
│   ├── News.interface.ts       # 뉴스 인터페이스
│   ├── Player.interface.ts     # 선수 데이터 인터페이스
│   ├── ScoresType.interface.ts # 경기 스코어 타입 인터페이스
│   └── VideoPlayer.interface.ts # 비디오 플레이어 인터페이스

📂 routes                       # 라우트 설정 폴더
└── AppRoutes.tsx               # 라우트 설정 컴포넌트

📂 store                        # Redux 상태 관리 및 슬라이스 폴더
├── citySlice.ts                # City 상태 관리 슬라이스
├── playerSlice.ts              # Player 상태 관리 슬라이스
└── store.ts                    # Redux 스토어 설정 파일

📂 utils                        # 유틸리티 함수
├── flagUtils.ts                # 국기 이미지 관련 유틸리티 함수
├── formatCurrency.ts           # 화폐 형식 관련 유틸리티 함수
├── getCardImages.ts            # 선수 카드 이미지 가져오기 유틸리티 함수
└── transferFeeUtils.ts         # 이적료 계산 유틸리티 함수

📂 viewmodels                   # MVVM 패턴에서의 ViewModel 계층
├── 📂 transferMarket           # 이적 시장 관련 ViewModel
│   ├── useExcelExportViewModel.ts           # 엑셀 내보내기 ViewModel
│   ├── useTransferMarketDetailViewModel.ts  # 이적 시장 상세 정보 ViewModel
│   ├── useTransferMarketTableBodyViewModel.ts # 이적 시장 테이블 바디 ViewModel
│   ├── useTransferMarketTableHeaderViewModel.ts # 이적 시장 테이블 헤더 ViewModel
│   ├── useTransferMarketTableViewModel.ts   # 이적 시장 테이블 ViewModel
│   ├── useCenterLogoViewModel.ts            # 센터 로고 ViewModel
│   ├── useCityViewModel.ts                  # City 관련 ViewModel
│   ├── useFormationSelectionViewModel.ts    # 포메이션 선택 ViewModel
│   ├── useFormationStyleViewModel.ts        # 포메이션 스타일 ViewModel
│   ├── useHeaderViewModel.ts                # 헤더 ViewModel
│   ├── useNewsViewModel.ts                  # 뉴스 ViewModel
│   ├── useNoticeViewModel.ts                # 공지사항 ViewModel
│   ├── usePlayerEnhancementViewModel.ts     # 선수 강화 ViewModel
│   ├── usePlayerViewModel.ts                # 선수 정보 ViewModel
│   ├── useScoresViewModel.ts                # 경기 정보 ViewModel
│   ├── useSquadMakerViewModel.ts            # 스쿼드 메이커 ViewModel
│   ├── useThemeViewModel.ts                 # 테마 ViewModel
│   └── useYouTubeViewModel.ts               # 유튜브 관련 ViewModel

📂 views                        # 화면을 구성하는 페이지 컴포넌트들
├── MainPage.tsx                # 메인 페이지
├── PlayerEnhancement.tsx       # 선수 강화 페이지
├── PlayerInfoPage.tsx          # 선수 정보 페이지
├── ScoresPage.tsx              # 스코어 페이지
├── SquadSetup.tsx              # 스쿼드 설정 페이지
└── TransferMarket.tsx          # 선수 이적 시장 페이지

App.scss                        # 앱 스타일 파일
App.css                         # 앱 CSS 파일
App.css.map                     # CSS 맵 파일
App.tsx                         # 앱 엔트리 포인트


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
