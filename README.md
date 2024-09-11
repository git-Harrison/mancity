# Manchester City Football Club Player Management

[**포트폴리오 보러가기**](https://git-harrison.github.io/mancity/)

## 📌 프로젝트 개요

이 프로젝트는 **Manchester City Football Club**의 선수 데이터를 관리하는 웹 애플리케이션으로, **MVVM (Model-View-ViewModel)** 패턴을 기반으로 설계되었습니다.
**React**와 **TypeScript**를 사용하여 작성되었으며, 성능 최적화를 위해 다양한 라이브러리를 도입했습니다.

### 주요 특징
- **모던 아키텍처 패턴**: MVVM 패턴을 채택하여 컴포넌트 구조를 깔끔하게 유지하고, 데이터와 UI 간의 상호작용을 효율적으로 관리합니다.
- **애니메이션**: **GSAP** 및 **Framer Motion**을 사용하여 인터랙티브한 UI 애니메이션을 구현했습니다.
- **슬라이더 구현**: **react-slick** 및 **Swiper**를 사용해 선수 카드와 영상을 보여주는 슬라이더를 제작했습니다.
- **HTTP 통신**: **Axios**를 통해 서버로부터 데이터를 받아와 처리합니다.
- **SCSS**: **Sass**를 사용하여 스타일링을 보다 유연하게 적용합니다.
- **타입 안정성**: **TypeScript**를 적용하여 코드의 안정성과 유지보수성을 극대화했습니다.

## 📁 프로젝트 구조

```plaintext
📂 mancity
├── 📂 api                    # API 호출을 위한 서비스 폴더
│   ├── 📂 interceptors        # Axios 인터셉터 설정
│   └── 📂 services            # API 서비스 정의
│       └── playerService.ts   # 플레이어 관련 API 호출 서비스
├── 📂 assets                  # 정적 파일들 (이미지, 폰트 등)
├── 📂 components              # 재사용 가능한 UI 컴포넌트들
│   ├── 📂 atoms               # 가장 작은 단위의 UI 요소 (버튼, 인풋 등)
│   ├── 📂 molecules           # 기본 컴포넌트들의 집합 (카드, 리스트 등)
│   └── 📂 organisms           # 복합적인 컴포넌트 (헤더, 푸터 등)
│       ├── Footer.tsx         # 푸터 컴포넌트
│       ├── Header.tsx         # 헤더 컴포넌트
│       ├── LoadingScreen.tsx  # 로딩 스크린 컴포넌트
│       ├── MainSlider.tsx     # 메인 페이지에서 사용되는 슬라이더
│       ├── MainVideoPlayer.tsx # 메인 비디오 플레이어 컴포넌트
│       ├── PlayersCardSlider.tsx # 선수 카드 슬라이더
│       └── PlayersInfo.tsx    # 선수 정보 표시 컴포넌트
├── 📂 hooks                   # 커스텀 훅
├── 📂 models                  # 데이터 모델 정의 및 타입 인터페이스
│   ├── 📂 interfaces          # TypeScript 인터페이스 정의
│       ├── LoadingScreen.interface.ts
│       ├── player.interface.ts
│       ├── Slider.interface.ts
│       └── VideoPlayer.interface.ts
├── 📂 routes                  # 라우트 설정 폴더
│   └── AppRoutes.tsx          # 라우트 설정 컴포넌트
├── 📂 store                   # 상태 관리 (예: Redux 등)
├── 📂 utils                   # 유틸리티 함수
├── 📂 viewmodels              # MVVM 패턴에서의 ViewModel 계층
│   ├── useCenterLogoViewModel.ts # 로고 관련 ViewModel
│   ├── useMainPageViewModel.ts   # 메인 페이지 ViewModel
│   ├── useMainSliderViewModel.ts # 메인 슬라이더 ViewModel
│   └── usePlayerViewModel.ts     # 선수 페이지 ViewModel
└── 📂 views                   # 화면을 구성하는 페이지 컴포넌트들
    ├── MainPage.tsx           # 메인 페이지
    └── PlayerPage.tsx         # 선수 페이지

```

### 주요 폴더 설명

- **api/services**: 서버와의 통신을 담당하며, `playerService.ts`는 백엔드 API 엔드포인트가 없어 더미 데이터(`JSON`)를 사용하여 `Axios`를 통해 데이터를 관리합니다.
- **components**: `atoms`, `molecules`, `organisms`로 분리된 컴포넌트 구조로 UI의 재사용성을 극대화합니다.
    - **atoms**: 가장 작은 단위의 UI 컴포넌트.
    - **molecules**: 기본 UI 컴포넌트들의 집합.
    - **organisms**: 보다 복잡한 UI 컴포넌트로, 로직과 상태를 관리합니다.
- **hooks**: 커스텀 훅들을 정의하여 로직을 재사용할 수 있도록 합니다.
- **models/interfaces**: TypeScript의 인터페이스를 정의하여 데이터 모델을 명확하게 표현합니다.
- **viewmodels**: MVVM 패턴에서 View와 Model 사이의 상호작용을 관리하고, 데이터를 포맷하여 View에 전달하는 역할을 합니다.
- **views**: 사용자가 보는 메인 페이지와 세부 페이지를 정의한 UI 컴포넌트입니다.

---

## 📦 사용된 라이브러리

### 주요 라이브러리

- **React**: 사용자 인터페이스를 작성하기 위한 주요 프레임워크입니다.
- **TypeScript**: 코드의 가독성과 유지보수성을 향상시키기 위해 사용된 정적 타입을 지원하는 JavaScript 상위 언어입니다.
- **Framer Motion**: 애니메이션 구현을 위해 사용된 라이브러리로, React에 적합한 간결한 API를 제공합니다.
- **GSAP**: 고급 애니메이션 효과를 구현할 수 있는 라이브러리입니다.
- **Axios**: HTTP 요청을 간편하게 처리할 수 있도록 도와주는 라이브러리입니다.
- **react-router-dom**: 여러 페이지를 관리하기 위한 라우팅 라이브러리입니다.
- **Sass (SCSS)**: CSS의 확장 언어로, 중첩, 변수 및 믹스인을 통해 스타일링을 보다 효율적으로 관리할 수 있습니다.

### 기타 라이브러리
- **React Slick**: 슬라이더 컴포넌트를 쉽게 구현할 수 있도록 도와주는 라이브러리입니다.
- **Swiper**: 고성능 슬라이더 라이브러리로, 다양한 커스터마이징이 가능합니다.
- **react-icons**: 다양한 아이콘을 사용할 수 있도록 도와주는 라이브러리입니다.

---