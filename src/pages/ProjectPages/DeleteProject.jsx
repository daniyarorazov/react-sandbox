import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {datas} from "../../data";

const DeleteProject = () => {
    let { id } = useParams();
    let id_project = id;
    let navigate = useNavigate();
    let data = datas.filter(({id}) => id == id_project);
    data = data[0];

    const index = datas.indexOf(data);
    if (index > -1) { // only splice array when item is found
        datas.splice(index, 1); // 2nd parameter means remove one item only
    }

    setTimeout(() => navigate('/'), 1000)

    return (
        <div>
            Deleting
        </div>
    );
};

export default DeleteProject;