// Utility function to create URL-friendly slugs
export const createSlug = (text: string) => {
    return text
        .toLowerCase()
        .replace(/[ščćž]/g, (match) => {
            const replacements: { [key: string]: string } = {
                'š': 's',
                'č': 'c', 
                'ć': 'c',
                'ž': 'z'
            };
            return replacements[match] || match;
        })
        .replaceAll(' ', '-');
};