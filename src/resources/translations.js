export const stringsLang = lang => {
    switch (lang) {
        // ------------------------
        // ------------------------
        // JAPANESE
        // ------------------------
        // ------------------------
        case 'ja':
            return {};
        // ------------------------
        // ------------------------
        // ENGLISH
        // ------------------------
        // ------------------------
        default:
            return {
                header: {
                    headerTitle: 'Source?',
                    headerUnderline: 'Ask Animeshon.',
                    headerFormPlaceholder: 'Filename',
                    headerFormButton: 'Upload Image',
                    headerFormDisclaimer: `This service is in alpha preview and might not be stable.`,
                },
                feature_00: {
                    headline: 'The Anime Image Search Engine',
                    featureOne: 'Subtitles in the screenshot?',
                    featureTwo: 'No problem.',
                    priceFeature: 'Subtitles tolerance is built-in',
                    imageOneAltText: 'Example of image with subtitles',
                },
                feature_01: {
                    featureOne: 'Looking for more information?',
                    featureTwo: `We've got you covered.`,
                    priceFeature: 'Results link to popular websites',
                    imageOneAltText: 'Example of website with additional information',
                },
                feature_02: {
                    featureOne: 'Worried about your privacy?',
                    featureTwo: `We won't track you.`,
                    priceFeature: 'Our policies keep you anonymous',
                    imageOneAltText: 'Protected privacy logo',
                },
                faq: {
                    headline: 'FAQ',
                    questionOne: 'What is Ashen?',
                    responseOne: `TODO.`,
                    questionTwo: 'Can Ashen only recognize Anime images?',
                    responseTwo: `TODO. `,
                    questionThree: 'Can I integrate Ashen with my Telegram or Discord bot?',
                    responseThree: `TODO.`,
                    questionFour: 'Do you have public API documentation?',
                    responseFour: `TODO.`,
                }
            };
    }
};
