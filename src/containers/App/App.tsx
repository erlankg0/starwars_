import React from 'react';
import './App.module.css';
import {PeoplePage} from "../PeoplePage/PeoplePage";
import {HomePage} from "../HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import {Header} from "../../components/Header/Header";
import styles from './App.module.css';
import {NotFoundPage} from "../NotFoundPAge/NotFoundPage";
const App = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <Routes>
                <Route element={<PeoplePage/>} path={'/people'}/>
                <Route element={<HomePage/>} path={'/'}/>
                <Route element={<NotFoundPage/>} path={'*'}/>
                <Route element={<NotFoundPage/>} path={'/notfound'}/>
            </Routes>
        </div>
    )
}
export default App;
