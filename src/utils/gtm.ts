declare global {
    interface Window {
        dataLayer: Record<string, any>[];
        gtag?: (...args: any[]) => void;
    }
}

export const initializeGTM = (): void => {
    window.dataLayer = window.dataLayer || [];

    window.gtag = (...args: any[]) => {
        window.dataLayer.push(args);
        console.log("gtag 이벤트가 dataLayer에 추가됨:", args);
    };

    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=G-35LPSE99BQ`;
    document.head.appendChild(gtagScript);

    // 스크립트가 로드된 후 설정 코드 실행
    gtagScript.onload = () => {
        window.gtag?.('js', new Date());
        window.gtag?.('config', 'G-35LPSE99BQ');
        console.log("gtag 설정 완료");
    };

    // 페이지 뷰 이벤트 추가
    window.dataLayer.push({
        event: 'pageview',
        page: window.location.pathname + window.location.search,
    });
    console.log("페이지 뷰 이벤트 추가 완료");
};
