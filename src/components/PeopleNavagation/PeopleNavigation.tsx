import {NavLink} from "react-router-dom";
import styles from './PeopleNavigation.module.css';

interface IPeopleNavigation{
    next: null | string,
    previous: null | string,
    currentPage: number;
}

const PeopleNavigation = ({next, previous, currentPage}: IPeopleNavigation) => {
    return (
        <div className={styles.container}>
            {previous && <NavLink to={`/people/?page=${currentPage - 1}`} className={styles.btn}>Previous</NavLink> }
            {next && <NavLink to={`/people/?page=${currentPage + 1}`} className={styles.btn}>Next</NavLink> }
        </div>
    )
}


export {PeopleNavigation}