import React from 'react';
import PropTypes from 'prop-types';

// Styles
require('./ImageCard.scss');

const imageCard = props => {
    return (
        <div className="IMAGE-CARD">
            <div className="IMAGE-CARD__imageContainer">
                <a href={props.imageDownloadUrl} target="_blank" rel="noopener noreferrer">
                    <div className="IMAGE-CARD__imageContainer-image" style={{ backgroundImage: 'url(' + props.imageUrl + ')' }}>
                    </div>
                </a>
            </div>
            <div className="IMAGE-CARD__textContainer">
                <div className="creator">
                    Created by: <span>{props.imageCreated}</span>
                </div>
                <div className="like-count">Likes: {props.imageLikes}</div>
                <div className="description" style={{ display: props.imageDescription ? '' : 'none' }}>
                    Description: {props.imageDescription}{' '}
                </div>
            </div>
        </div>
    );
};

imageCard.propTypes = {
    imageDownloadUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    imageCreated: PropTypes.string,
    imageLikes: PropTypes.number,
    imageDescription: PropTypes.string
};

export default imageCard;
