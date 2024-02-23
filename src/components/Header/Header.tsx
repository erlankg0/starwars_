import {NavLink} from "react-router-dom";
import React from "react";
import styles from './Header.module.css';
import cn from "classnames";

const Header = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <NavLink
                    to={'/'}
                    className={(
                        {
                            isActive,
                            isPending
                        }) => isActive ? cn(styles.link, styles.active) : styles.link}>Home</NavLink>
                <NavLink
                    to={'/people/?page=1'}
                    className={({
                                    isActive,
                                    isPending
                                }) => isActive ? cn(styles.link, styles.active) : styles.link}>People</NavLink>
                <NavLink
                    to={'/notfound'}
                    className={(
                        {
                            isActive,
                            isPending
                        }) => isActive ? cn(styles.link, styles.active) : styles.link}
                >Not Found</NavLink>
            </nav>
        </div>)
}


export {Header}