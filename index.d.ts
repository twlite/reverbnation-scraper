declare module "reverbnation-scraper" {

    namespace ReverbnationScraper {

        interface Artist {
            id: number;
            name: string;
            profile: string;
            type: string;
            avatar: string;
            thumbnail: string;
            bio: string;
            genres: string[];
            location: {
                city: string;
                state: string | null;
                country: string;
            }
        }

        interface Song {
            title: string;
            id: number;
            image: string;
            thumbnail: string;
            duration: number;
            bitrate: number;
            lyrics: string;
            streamURL: string;
            public: boolean;
            url: string;
            contextImage: string | null;
        }

        interface Data extends Song {
            artist: Artist;
            songs: Song[];
        }

        function fetchData(link: string): Promise<Data | null>;

    }

    export = ReverbnationScraper;

}