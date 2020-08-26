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
                    responseOne: `Ashen is a reverse image search engine for Anime developed and released by Animeshon.
                        Ashen can lookup images taken from Anime episodes such as screenshots and video frames.
                        The results are returned as a list of Anime and episodes ranked by similarity with frames found in our database.`,
                    questionTwo: 'Can Ashen only recognize Anime images?',
                    responseTwo: `At the moment Ashen can only recognize images taken directly from episodes of Anime.
                        There is currently a roadmap to implement additional support for video and audio format.
                        Animeshon is also researching technologies for Manga image recognition and indexing.`,
                    questionThree: 'Can I integrate Ashen with my Telegram or Discord bot?',
                    responseThree: `Yes. Documentation is available at the official
                        <a target="_blank" href="https://docs.animeshon.com">Animeshon Docs</a> and on
                        <a target="_blank" href="https://github.com/animeshon">Animeshon GitHub</a>.`,
                }
            };
    }
};
