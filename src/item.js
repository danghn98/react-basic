import React from "react";

function Item(props) {
    const { title, img, date } = props;

    return (
        <div className="item">
            <p className="title">{title}</p>
            <img src={img} alt=""/>
            <p className="date">{date}</p>
        </div>
    );
};

export default Item;