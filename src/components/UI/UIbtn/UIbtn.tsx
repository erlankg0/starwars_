import styles from './UIbtn.module.css';
import classNames from "classnames";

interface IUIbtn {
    text: string,
    disabled: boolean,
}

const UIbtn = ({text, disabled}: IUIbtn) => {

    const btnClasses = classNames(styles.btn, {
        [styles.btnDisabled]: disabled
    })
    return (
        <button
            disabled={disabled}
            className={btnClasses}
        >
            {text}
        </button>
    )
}

export {UIbtn}