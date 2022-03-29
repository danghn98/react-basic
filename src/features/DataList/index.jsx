import React from 'react';
import DataItem from './components/DataItem';
import data from './data';

DataList.propTypes = {
    
};

function DataList(props) {
    const date = new Date().toString();

    return (
        <div className="list-item">
            {data.map((item, index) => (
                <DataItem 
                    key={index} 
                    title={item.title} 
                    img={item.thumbnailUrl} 
                    date={date} 
                />
            ))}
        </div>
    );
}

export default DataList;