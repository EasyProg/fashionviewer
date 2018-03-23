/**
 * Created by Михаил on 23.03.2018.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/ImageCard.css';
import no_image from '../img/no_Image.jpg';
export default class ImageCard extends Component {
    render() {
        return (
            <a href={this.props.link}
                 className="imageCardContainerLink">
            <div className="imageCardContainer">
                <img src={this.props.src?this.props.src:no_image}/>
                <div>{this.props.header}</div>
            </div>
            </a>
               );
    }

}
ImageCard.propTypes = {
     src:PropTypes.string,
     link:PropTypes.string,
     header:PropTypes.string
};