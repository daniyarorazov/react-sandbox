import React, {useState} from 'react';
import {datas} from "../../data";
import {Link} from "react-router-dom";
import { v4 as uuid } from 'uuid';

const AddProject = () => {

    const [value, setValue] = useState("");
    const [status, setStatus] = useState("")
    const [statusStyle, setStatusStyle] = useState();


    const styles = {
        statuses: {
            statusIsSuccessful: {
                color: "green"
            },
            statusIsError: {
                color: "red"
            }
        }
    }

    function addProjectHandler() {
        const unique_id = uuid();
        if (value != "") {
            datas.push({
                id: unique_id,
                name: value,
                descr: "Some text of description"
            })

            setValue("")
            setStatus("Added successful")
            setStatusStyle(styles.statuses.statusIsSuccessful)
            setTimeout(() => setStatus(""), 1000)
        } else {
            setStatus("Field is empty!")
            setStatusStyle(styles.statuses.statusIsError)
            setTimeout(() => setStatus(""), 1000)
        }


    }

    return (
        <div>
            <input type="text" onChange={e => setValue(e.target.value)} value={value} />
            <button onClick={e => addProjectHandler()}>Add project</button>
            <br/>
            <span style={statusStyle}>{status}</span>
            <br/>
            <Link to="/">Go to projects</Link>
        </div>
    );
};

export default AddProject;