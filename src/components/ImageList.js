/**
 * Created by Михаил on 23.03.2018.
 */
import React, {Component} from 'react';
import ImageCard from './ImageCard';
import '../styles/ImageList.css';
import PropTypes from 'prop-types';
import LoadingIndicator from 'react-loading-indicator';
import ReactLoading from 'react-loading';

export default class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {cards: []};
    }

    componentDidMount() {
        this.getApiData('https://api.cliqueinc.com/content/posts');
    }

    getApiData(url) {
        fetch(url)
            .then(res => {
                    if (res.status !== 200) {
                        console.log('error');
                        return;
                    }
                    return res.json();
                }
            ).then(
            data => {
                let cards = [];
                data.docs.forEach((item) => {
                    cards.push({
                        header: item['headline'],
                        src:  item['main_image'],
                        link: item['canonical']
                    });
                });
                this.setState({cards});
            }
        )
    }

    render() {
        if (this.state.cards.length)
        return  (
            <div className="imageListContainer">
                {
                    this.state.cards.map((card) =>
                        <ImageCard {...card}/>
                    )
                }
            </div>
                );
        else return <div className="imageListContainer">
                        <ReactLoading width={200} height={200} type="spin" color="#6495ED"/>
                    </div>
    }
}
