import React, {useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {datas} from "../../data";

const EditProjectPage = () => {

    const [value, setValue] = useState("");
    const [status, setStatus] = useState(false);
    let navigate = useNavigate();

    let {id} = useParams();
    let id_project = id;

    let data = datas.filter(({id}) => id == id_project);
    data = data[0];

    function editProjectHandler() {
        data.name = value;
        setStatus(true)
        setTimeout(() => {
            setStatus(false)
            return navigate(`/project/${id_project}`)
        }, 2000)

    }

    return (
        <>
            {!status ?
                <div>
                    Project {data.name}
                    <br/>
                    <input type="text" onChange={e => setValue(e.target.value)} value={value} placeholder="Edit name"/>
                    <button onClick={e => editProjectHandler()}>Edit project</button>
                    <br/>
                    <Link to={`/project/${id_project}`}>Back to project page</Link>
                </div>
                :
                <div>Loading</div>
            }

        </>

    );
};

export default EditProjectPage;