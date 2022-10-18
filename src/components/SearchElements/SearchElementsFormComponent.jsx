import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const SearchElementsFormComponent = () => {
    let navigate = useNavigate();
    const [value, setValue] = useState("");



    function searchItemsHandler() {
        return navigate(`/?q=${value}`)
    }

    return (
        <div>
            <form method="GET" onSubmit={searchItemsHandler}>
                <input type="text" name="q" onChange={e => setValue(e.target.value)} value={value}/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchElementsFormComponent;

