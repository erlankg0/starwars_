import {Person} from "../../../utils/network";
import styles from './PeopleList.module.css';
import React from "react";

interface PeopleListProps {
    persons: Person[]
}

const PeopleList: React.FC<PeopleListProps> = ({persons}) => {
    return (
        <ul className={styles.list__container}>
            {persons.map((person) =>
                <li key={person.id} className={styles.list__item}>
                    <a href="#">
                        <img src={person.img} alt={person.name} className={styles.person__photo}/>
                        <p>{person.name}</p>
                    </a>
                </li>
            )}
        </ul>
    )
}


export {PeopleList};