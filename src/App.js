import './App.css';
import React from "react";
import ItemsListComponent from "./components/ItemsList/ItemsListComponent";
import SearchElementsFormComponent from "./components/SearchElements/SearchElementsFormComponent";
import {datas} from "./data";
import {Link} from "react-router-dom";

function App() {

    const search_query = new URLSearchParams(window.location.search);
    let q = search_query.get('q');

    console.log(datas)

    return (
        <div className="App">
            <Link to="/add-project">Add projects</Link>
            <SearchElementsFormComponent linkListId={"cardsList"} />

            <ItemsListComponent
                className="list"
                id="cardsList"
                classNameElements="list-item"
                listItemsData={datas}
                searchQuery={q}
            />
            {"Data is: " + q}
        </div>
    );
}

export default App;
