// models/interfaces/News.interface.ts

export interface NewsItem {
    title: string;
    link: string;
    snippet: string;
    pagemap?: {
        cse_thumbnail?: Array<{ src: string }>;
        cse_image?: Array<{ src: string }>;
    };
}

export interface Article {
    title: string;
    link: string;
    thumbnail: string;
    date: string;
}