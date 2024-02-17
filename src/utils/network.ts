import axios from "axios";

interface Person {
    id?: number | string;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
    img: string;
}

const instanceSWAPI = axios.create({
    baseURL: 'https://swapi.dev/api/'
})
const getApiPersonList = async (url: string): Promise<Person[] | boolean> => {
    try {
        const response = await instanceSWAPI.get(url)
        return response.data.results;
    } catch (error) {
        return false;
    }
}


export {getApiPersonList};
export type { Person };
