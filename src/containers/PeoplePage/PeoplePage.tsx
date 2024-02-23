import {getPeopleID, getPeopleImg} from "../../services/getPeopleData";
import {getApiPersonList, Person} from "../../utils/network";
import {useCallback, useEffect, useState} from "react";
import {PeopleList} from "../../components/PeoplePage/PageList/PeopleList";
import {IWithErrorAPI, withErrorAPI} from "../../hoc/withErrorAPI";
import {useQueryParams} from "../../hoc/useQueryParams";
import {PeopleNavigation} from "../../components/PeopleNavagation/PeopleNavigation";

const PeoplePage = () => {
    const [personList, setPerson] = useState<Person[]>([]);
    const [status, setStatus] = useState(false);
    const [next, setNext] = useState<string | null>(null);
    const [previous, setPrevious] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const query = useQueryParams();
    const params: string | null = query.get('page');

    const getPersonList = useCallback(async (url: string) => {
        try {
            const res = await getApiPersonList(url, params);
            if (typeof res === 'boolean') {
                setStatus(false);
            } else {
                setNext(res.next);
                setPrevious(res.previous);
                getPeopleID(res.results);
                getPeopleImg(res.results);
                setPerson(res.results);
                if (params) setCurrentPage(+params);
                setStatus(true);
            }
        } catch (error) {
            setStatus(false);
        }
    }, [params]);

    useEffect(() => {
        getPersonList('people');
    }, [getPersonList]);

    // const PeopleListWithErrorAPI = withErrorAPI<IWithErrorAPI>(PeopleList);

    return (
        <div>
            <PeopleNavigation next={next} previous={previous} currentPage={currentPage}/>
            {personList && <PeopleList persons={personList} />}
        </div>
    );
}

export {PeoplePage};
