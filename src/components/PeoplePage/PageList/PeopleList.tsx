import {Person} from "../../../utils/network";
import styles from './PeopleList.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

interface PeopleListProps {
    persons: Person[]
}

const PeopleList: React.FC<PeopleListProps> = ({persons}) => {
    return (
        <ul className={styles.list__container}>
            {persons.map((person) =>
                <li key={person.id} className={styles.list__item}>
                    <NavLink to="#">
                        <img src={person.img} alt={person.name} className={styles.person__photo}/>
                        <p>{person.name}</p>
                    </NavLink>
                </li>
            )}
        </ul>
    )
}


export {PeopleList};