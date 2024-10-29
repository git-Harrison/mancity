declare global {
    interface Window {
        dataLayer: Record<string, any>[];
    }
}

export const initializeGTM = (): void => {
    if (process.env.NODE_ENV === 'production') {
        // Initialize dataLayer if it doesn't exist
        window.dataLayer = window.dataLayer || [];

        // Push initial page view event
        window.dataLayer.push({
            event: 'pageview',
            page: window.location.pathname + window.location.search,
        });

        // Dynamically create and add GTM script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-KPXC8F6S`;
        document.head.appendChild(script);
    }
};