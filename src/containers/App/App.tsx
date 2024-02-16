import React from 'react';
import './App.module.css';
import cn from 'classnames';
import styles from './App.module.css';
import {PeoplePage} from "../PeoplePage/PeoplePage";

const App = () => {
    return (
        <div className={'App'}>
            <p className={cn(styles.header, styles.underlines)}>Hello World</p>
            <PeoplePage/>
        </div>
    )
}
export default App;
