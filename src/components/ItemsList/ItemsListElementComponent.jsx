import React from 'react';
import {Link} from "react-router-dom";

const ItemsListElementComponent = ({title, id, descr, className}) => {
    return (
        <div className={className} id={`list-item-${id}`}>
            <Link to={"/project/" + id}><h4>{title}</h4></Link>
            <p>{descr}</p>
        </div>
    );
};

export default ItemsListElementComponent;