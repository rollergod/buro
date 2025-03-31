export interface Popular {
    title: string;
    content: string;
}

export interface Root {
    services: Service[];
    popular: Popular[];
    carouselImages: Service[];
    aboutUsImages: Service[];
    schedule: string;
    number: string;
}

export interface Service {
    title: string;
    imageUrl: string;
}

export interface ServiceRoot {
    subTitle: string;
    items: Service[]
}
