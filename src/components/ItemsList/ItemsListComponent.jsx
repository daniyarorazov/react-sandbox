import React from 'react';
import ItemsListElementComponent from "./ItemsListElementComponent";

const ItemsListComponent = ({className, listItemsData, classNameElements, searchQuery}) => {

    function searchElems(listItemsData, searchQuery) {

        if (!searchQuery) {
            return listItemsData;
        }

        return listItemsData.filter(({name}) => name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    const filteredList = searchElems(listItemsData, searchQuery);

    return (

        <div className={className}>
            {filteredList.map((item) =>
                <ItemsListElementComponent
                    className={classNameElements}
                    id={item.id}
                    title={item.name}
                    descr={item.descr}
                />
            )}
        </div>
    );
};

export default ItemsListComponent;