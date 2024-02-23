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

interface IResponse {
    results: Person[],
    next: string | null,
    previous: string | null,
}

const instanceSWAPI = axios.create({
    baseURL: 'https://swapi.dev/api/'
})
const getApiPersonList = async (url: string, page: string | null): Promise<IResponse| boolean> => {
    try {
        if(page){
            const response = await instanceSWAPI.get(`${url}/?page=${page}`)
            return response.data;
        }
        const response = await instanceSWAPI.get(`${url}/?page=${1}`)
        return response.data;
    } catch (error) {
        return false;
    }
}


export {getApiPersonList};
export type { Person };
