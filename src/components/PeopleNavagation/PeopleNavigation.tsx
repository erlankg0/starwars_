import {NavLink} from "react-router-dom";
import styles from './PeopleNavigation.module.css';
import {UIbtn} from "../UI/UIbtn/UIbtn";
import {useEffect, useState} from "react";

interface IPeopleNavigation {
    next: null | string,
    previous: null | string,
    currentPage: number;
}

const PeopleNavigation = ({next, previous, currentPage}: IPeopleNavigation) => {

    const [prevStatus, setPrevStatus] = useState(false)
    const [nextStatus, setNextStatus] = useState(false)

    const checkPrev = (url: string | null) => {
        if (typeof url == 'string' && url !== "") {
            setPrevStatus(false);
        } else {
            setPrevStatus(true);
        }
    }

    const checkNext = (url: string | null) => {
        if (typeof url == 'string' && url !== "") {
            setNextStatus(false);
        } else {
            setNextStatus(true);
        }
    }

    useEffect(() => {
        // каждый раз проверяем если
        checkPrev(previous);
        checkNext(next);
    }, [next, previous])


    return (
        <div className={styles.container}>
            <NavLink to={`/people/?page=${currentPage - 1}`}>
                <UIbtn text={'Previous'} disabled={prevStatus}/>
            </NavLink>
            <NavLink to={`/people/?page=${currentPage + 1}`}>
                <UIbtn text={'Next'} disabled={nextStatus}/>
            </NavLink>
        </div>
    )
}


export {PeopleNavigation}