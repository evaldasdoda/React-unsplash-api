import React from 'react';
import axios from 'axios';
import _ from 'lodash';

// Components
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import ImageCard from '../ImageCard/ImageCard';
import Sidebar from './Sidebar/Sidebar';

// Styles
require('./Search.scss');

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: '',
            clientId: '846158b19e3c8378109201e17ee9e4af71ae321f5d8d0ed7204dfccc294a18f6',
            result: [],
            loading: false,
            showBtn: false,
            disabledBtn: true,
            page: 1
        };
    }
    handlePagination(type) {
        let nextPage;
        if (type === 'next') {
            nextPage = _.clone(this.state.page) + 1;
            this.handleSubmit(nextPage);
            if (nextPage > 1) {
                this.setState({ disabledBtn: false });
            }
            return;
        }
        if (type === 'prev') {
            nextPage = _.clone(this.state.page) - 1;
            this.handleSubmit(nextPage);
            if (nextPage === 1) {
                this.setState({ disabledBtn: true });
            }
            return;
        }
    }

    handleChange(event) {
        this.setState({ photo: event.target.value });
    }

    handleSubmit(pageNumber) {
        const URL =
            'https://api.unsplash.com/search/photos?page=' +
            pageNumber +
            '&query=' +
            this.state.photo +
            '&client_id=' +
            this.state.clientId;

        this.setState({ loading: true });

        axios
            .get(URL)
            .then(response => {
                this.setState({ result: response.data.results, loading: false, showBtn: true, page: pageNumber });
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <section className="SECTION">
                <div className="SEARCH">
                    <div className="container">
                        <div className="row">
                            <h1>Unsplash Photo search</h1>
                        </div>
                        <div className="SEARCH__container">
                            <div className="row">
                                <div className="col-sm-8">
                                    <Input
                                        onchange={this.handleChange.bind(this)}
                                        type="text"
                                        name="photo"
                                        placeholder="Search for Photos..."
                                    />
                                    <div className="row">
                                        {this.state.result.map(photo => (
                                            <div className="col" key={photo.id}>
                                                <ImageCard
                                                    imageUrl={photo.urls.small}
                                                    imageAlt={photo.alt_description}
                                                    imageCreated={photo.user.name}
                                                    imageLikes={photo.likes}
                                                    imageDescription={photo.description}
                                                    imageDownloadUrl={photo.links.download}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="row" style={{ display: this.state.showBtn ? '' : 'none' }}>
                                        <div className="SEARCH__container-pagination">
                                            <Button
                                                disabled={this.state.disabledBtn}
                                                clicked={() => this.handlePagination('prev')}
                                            >
                                                Prev
                                            </Button>
                                            <Button clicked={() => this.handlePagination('next')}>Next</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <Sidebar search={() => this.handleSubmit(this.state.page)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Search;