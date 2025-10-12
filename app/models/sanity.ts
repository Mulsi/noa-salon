import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Homepage {
    heroImageDesktop: SanityImageSource;
    heroImageMobile: SanityImageSource;
    aboutImage: SanityImageSource;
    aboutHeading: string;
    aboutSubheading: string;
    aboutDescription: any[];
    testimonialsTitle: string;
    testimonials: Testimonial[];
    servicesTitle: string;
    salonServiceTitle: string;
    salonServices: Service[];
    academyServiceTitle: string;
    academyServices: Service[];
}

export interface Testimonial {
    name: string;
    title: string;
    description: string;
}

export interface Service {
    title: string;
    image: SanityImageSource;
    buttonText: string;
    buttonLink: string;
}

export interface Gallery {
    title: string;
    images: SanityImageSource[];
}

export interface PriceList {
    title: string;
    categories: PriceCategory[];
}

export interface PriceCategory {
    categoryName: string;
    services?: PriceService[];
    subcategoryName?: string;
    subcategoryServices?: PriceSubcategoryService[];
}

export interface PriceService {
    serviceName: string;
    price: string;
}

export interface PriceSubcategoryService {
    subcategoryServiceName: string;
    subcategoryServicePrice: string;
}

export interface ServiceDetail {
    title: string;
    description: any[];
    services: ServiceType[];
}

export interface AcademyDetail {
    title: string;
    description: any[];
    services: ServiceType[];
}

export interface ServiceType {
    serviceTypeTitle: string;
    serviceItems: ServiceItem[];
    additionalInfoTitle?: string;
    additionalInfo?: any[];
}

export interface ServiceItem {
    serviceName: string;
    serviceDescription: any[];
    buttonText: string;
    buttonLink: string;
}

export interface SkinTherapy {
    title: string;
    description: any[];
    treatments: Treatment[];
}

export interface Treatment {
    treatmentName: string;
    treatmentDescription: any[];
}

export interface GeneralConditions {
    title: string;
    description: any[];
}

export interface Cookies {
    title: string;
    description: any[];
}

export interface About {
    title: string;
    description: any[];
}