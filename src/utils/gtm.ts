declare global {
    interface Window {
        dataLayer: Record<string, any>[];
        gtag?: (...args: any[]) => void;
    }
}

export const initializeGTM = (): void => {
    if (process.env.NODE_ENV === 'production') {
        // Initialize dataLayer if it doesn't exist
        window.dataLayer = window.dataLayer || [];

        // Define the gtag function for Google Analytics
        function gtag(...args: any[]) {
            window.dataLayer.push(args);
        }
        window.gtag = gtag;

        // Push initial page view event
        window.dataLayer.push({
            event: 'pageview',
            page: window.location.pathname + window.location.search,
        });

        // Add the Google Analytics (gtag.js) script dynamically
        const gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=G-35LPSE99BQ`;
        document.head.appendChild(gtagScript);

        // Add inline script to configure gtag
        gtag('js', new Date());
        gtag('config', 'G-35LPSE99BQ');
    }
};