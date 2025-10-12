import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const builder = imageUrlBuilder({
    projectId: 'xy5z0niy',
    dataset: 'production',
})

export const useSanityImageUrl = () => {
    const urlFor = (source: SanityImageSource) => {
      return builder.image(source);
    };
  
    return {
      urlFor,
    };
  };