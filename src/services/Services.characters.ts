import axios from "axios";

export const ServicesCharacter = {
    getCharacters: async () => {
        const endpoint = '/v1/public/characters';
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}${endpoint}${import.meta.env.VITE_API_KEY}`)
            console.log(res)
            return res.data
        } catch (error) {
            console.log(error)
        }
    },
    getCharactersForId: async (id: string) => {
        const endpoint = `/v1/public/characters/${id}`;
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}${endpoint}${import.meta.env.VITE_API_KEY}`)
            console.log(res)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
}

export const ServicesSeries = {
    getAllSeries: async () => {
        const endpoint = '/v1/public/series';
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}${endpoint}${import.meta.env.VITE_API_KEY}`)
            return res
        } catch (error) {
            console.log(error)
        }
    },
    getSeriesDetails: async (id: string) => {
        const endpoint = `/v1/public/Series/${id}`
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}${endpoint}${import.meta.env.VITE_API_KEY}`)
            return res
        } catch (error) {
            console.log(error)
        }
    }

}


export const ServicesComics = {
    getAllComics: async () => {
        const endpoint = '/v1/public/comics'
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}${endpoint}${import.meta.env.VITE_API_KEY}`)
            return res
        } catch (error) {
            console.log(error)
        }
    },
    getComicDetails: async (id: string) => {
        const endpoint = `/v1/public/comics/${id}`
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}${endpoint}${import.meta.env.VITE_API_KEY}`)
            return res
        } catch (error) {
            console.log(error)
        }
    }
}