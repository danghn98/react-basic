import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

AlbumItem.propTypes = {
    album: PropTypes.object.isRequired,
};

function AlbumItem({album}) {
    return (
        <div className="album">
            <div className="album__thumbnail">
                <img src={album.imgUrl} alt={album.title} />
            </div>
            <p className="album__name">{album.title}</p>
        </div>
    );
}

export default AlbumItem;