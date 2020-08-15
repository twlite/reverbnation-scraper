declare module "reverbnation-scraper" {

    namespace ReverbnationScraper {

        class Artist {
            public constructor(data?: object);
            private _patch(data?: object);
            public id: number;
            public name: string;
            public profile: string;
            public type: string;
            public avatar: string;
            public thumbnail: string;
            public bio: string;
            public genres: string[];
            public location: {
                city: string;
                state: string | null;
                country: string;
            }
            public toString(): string;
        }

        class Song {
            public constructor(data?: object);
            private _patch(data?: object);
            public title: string;
            public id: number;
            public image: string;
            public thumbnail: string;
            public duration: number;
            public bitrate: number;
            public lyrics: string;
            public streamURL: string;
            public public: boolean;
            public url: string;
            public contextImage: string | null;
            public toString(): string;
        }

    }
    function ReverbnationScraper(link: string): Promise<object | null>;
    export = ReverbnationScraper;

}