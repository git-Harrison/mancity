export interface NewsItem {
    title: string;
    link: string;
    snippet: string;
    pagemap: {
        cse_image?: [{ src: string }];
    };
}

export interface Article {
    title: string;
    link: string;
    thumbnail: string;
    date: Date;
}