import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            title: 'V-Pop: 100 Hits Thập Niên',
            imgUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/0/a/9/e/0a9e43f3bc9346957f2750d2f1c0fb32.jpg'
        },
        {
            id: 2,
            title: 'V-Pop: Hits Quốc Dân',
            imgUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/3/4/e/9/34e997492621abb23a753de0d8ebd0d9.jpg'
        },
        {
            id: 3,
            title: 'Giai Điệu V-Pop Tươi Vui',
            imgUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/c/6/c/6/c6c6b0d34a2264f76fca6462b142a99d.jpg'
        },
    ]

    return (
        <div>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;