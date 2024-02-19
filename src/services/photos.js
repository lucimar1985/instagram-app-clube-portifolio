import { createClient } from 'pexels';

const apiKey = import.meta.env.VITE_KEY_API_PEXELS;
const client = createClient(apiKey);

export const getPhotos = async (photosPerPage, callback) => {


    
    try {
        const response = await client.photos.curated({
            page: 1,
            per_page: photosPerPage,
        });
        return response.photos;
    } catch (error) {
        console.error('Erro ao buscar fotos:', error);
        return null; // Retornar null ou tratar o erro de acordo com a necessidade
    } finally {
        if (callback) {
            callback(); // Chamar a função de callback se fornecida
        }
    }
    
};


