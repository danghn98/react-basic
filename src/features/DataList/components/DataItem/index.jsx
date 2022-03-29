import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';

DataItem.propTypes = {};

function DataItem(props) {
    const { title, img, date } = props;

    return (
        <div className="item">
            <p className="title">{title}</p>
            <img src={img} alt="" />
            <p className="date">{date}</p>
        </div>
    );
}

export default DataItem;
