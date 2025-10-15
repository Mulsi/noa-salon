export const TESTIMONIALS_QUERY = groq`*[_type == "testimonials"]{name, title, description}`;
export const GALLERY_QUERY = groq`*[_type == "gallery"][0]{images, title}`;

export const HOMEPAGE_QUERY = groq`*[_type == "homepage"][0]{
    heroImageDesktop, 
    heroImageMobile, 
    introduction,
    aboutImage, 
    aboutHeading, 
    aboutSubheading, 
    aboutDescription, 
    testimonialsTitle, 
    testimonials[]->{
        name,
        title,
        description
    },
    servicesTitle,
    salonServices[]->{
        title,
        image,
        buttonText,
        buttonLink
    },
    academyServiceTitle,
    academyServices[]->{
        title,
        image,
        buttonText,
        buttonLink
    }
    }`;

export const PRICELIST_QUERY = groq`*[_type == "priceList"][0]{
    title,
    categories[]{
        categoryName,
        services[]{
            serviceName,
            price
        },
        subcategoryName,
        subcategoryServices[]{
            subcategoryServiceName,
            subcategoryServicePrice
        }
    },
    ctaTitle,
    ctaDescription,
    buttonText,
    buttonLink
}`;

export const SERVICEDETAIL_QUERY = groq`*[_type == "servicesDetail"][0]{
    title,
    description,
    services[]{
        serviceTypeTitle,
        serviceItems[]{
            serviceName,
            serviceDescription,
            buttonText,
            buttonLink
        },
        additionalInfoTitle,
        additionalInfo
    }
}`;

export const SERVICEDETAIL_HEADER_QUERY = groq`*[_type == "servicesDetail"][0]{
    services[]{
        serviceTypeTitle
    }
}`;

export const ACADEMYDETAIL_QUERY = groq`*[_type == "academyDetail"][0]{
    title,
    description,
    services[]{
        serviceTypeTitle,
        serviceItems[]{
            serviceName,
            serviceDescription,
            buttonText,
            buttonLink
        }
    }
}`;

export const ACADEMYDETAIL_HEADER_QUERY = groq`*[_type == "academyDetail"][0]{
    services[]{
        serviceTypeTitle
    }
}`;

export const SKINTHERAPY_QUERY = groq`*[_type == "skinTherapy"][0]{
    title,
    description,
    treatments[]{
        treatmentName,
        treatmentDescription
    },
    ctaTitle,
    ctaDescription,
    buttonText,
    buttonLink
}`;

export const GENERALCONDITIONS_QUERY = groq`*[_type == "generalConditions"][0]{
    title,
    description
}`;

export const COOKIES_QUERY = groq`*[_type == "cookies"][0]{
    title,
    description
}`;

export const ABOUT_QUERY = groq`*[_type == "about"][0]{
    title,
    description,
    image,
    signature
}`;

export const TOPBAR_QUERY = groq`*[_type == "topBar"][0]{
    showTopBar,
    text
}`;

export const GALLERYDETAIL_QUERY = groq`*[_type == "galleryDetail"][0]{
    title,
    images
}`;