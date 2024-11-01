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
    };

    window.dataLayer.push({
        event: 'pageview',
        page: window.location.pathname + window.location.search,
    });

    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=G-35LPSE99BQ`;
    document.head.appendChild(gtagScript);

    // Add inline script to configure gtag
    window.gtag('js', new Date());
    window.gtag('config', 'G-35LPSE99BQ');

};