import {Person} from "../utils/network"

const getPeopleID = (persons: Person[]): Person[] => {

    return persons.map((person) => {
        person.id = person.url.replace('https://swapi.dev/api/people/', '').replace('/', '');
        return person;
    })
}

const getPeopleImg = (persons: Person[]): Person[] => {
    return persons.map((person) => {
        person.img = `https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`;
        return person;
    })
}

export {getPeopleID, getPeopleImg}