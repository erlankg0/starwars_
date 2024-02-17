import {ComponentType, useEffect, useState} from "react";
import {Person} from "../utils/network";
import {ErrorMessage} from "../components/ErrorMessage/ErrorMessage";

interface IWithErrorAPI {
    status: boolean;
    persons: Person[];
}

const withErrorAPI = <BaseProps extends IWithErrorAPI>(View: ComponentType<BaseProps>) => {
    return (props: BaseProps) => {
        const [statusError, setErrorStatus] = useState(false);
        useEffect(() => {
            setErrorStatus(props.status);
        }, [props.status])
        return (
            <>
                {statusError ? <View setErrorAPI={statusError} {...props}/> : <ErrorMessage/>}
            </>
        )
    }
}

export {withErrorAPI}
export type {IWithErrorAPI};
