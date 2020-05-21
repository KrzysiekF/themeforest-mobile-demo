interface SiteConfig {
    [alias: string]: {
        name: string;
        demoURL: string;
        mainFeatures: String[];
        shopURL: string;
        qrCode: string;
    };
}

interface Config {
    templates: SiteConfig;
};

const defaults: Config = {
    templates: {
        malpha2: {
            name: 'mAlpha2 - Mobile Responsive Template',
            mainFeatures: [
                'Created on Framework7 base',
                'Fully responsive layout created in the convention of “Mobile First”',
                'More than 10 examples of edited webpages',
                'Standard HTML 5 and CSS 3',
            ], 
            demoURL: 'https://malpha2-demo.netlify.app/',
            shopURL: 'https://themeforest.net/item/malpha2-mobile-responsive-template/11114871',
            qrCode: '',
        },
    },
};

export default defaults;