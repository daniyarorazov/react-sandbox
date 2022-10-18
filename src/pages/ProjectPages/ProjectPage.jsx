import React from 'react';
import {Link, useParams} from "react-router-dom";
import {datas} from "../../data";

const ProjectPage = () => {

    let { id } = useParams();
    let id_project = id;


    let data = datas.filter(({id}) => id == id_project);
    data = data[0];

    return (
        <div>
            <h2>Project: {data.name}</h2>
            <Link to={"./edit"}>Edit project</Link>
            <br/>
            <Link to={"./delete"}>Delete project</Link>
            <br/>
            <Link to={"/"}>All projects</Link>
        </div>
    );
};

export default ProjectPage;