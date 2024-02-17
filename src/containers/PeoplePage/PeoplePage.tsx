import {getPeopleID, getPeopleImg} from "../../services/getPeopleData";
import {getApiPersonList, Person} from "../../utils/network";
import {useEffect, useState} from "react";
import {PeopleList} from "../../components/PeoplePage/PageList/PeopleList";
import {IWithErrorAPI, withErrorAPI} from "../../hoc/withErrorAPI";

const PeoplePage = () => {
    const [personList, setPerson] = useState<Person[]>([])
    const [status, setStatus] = useState(false);
    const getPersonList = async () => {
        const res = await getApiPersonList('people');
        if (typeof res === 'boolean') {
            setStatus((value) => false);
        } else {
            getPeopleID(res);
            getPeopleImg(res);
            setPerson(res);
            setStatus((value) => true);
        }
    }
    useEffect(() => {
        getPersonList().then(r => r) // без then работает но для чистого кода чему то надо писать then
    }, [])
    const PeopleListWithErrorAPI = withErrorAPI<IWithErrorAPI>(PeopleList);
    return (
        <>
            {personList && <PeopleListWithErrorAPI status={status} persons={personList}/>}
        </>
    )
}

export {PeoplePage}