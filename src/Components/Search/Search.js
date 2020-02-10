import React from 'react';
import axios from 'axios';
import _ from 'lodash';

// Redux
import { connect } from 'react-redux';
import { addSearch } from '../../Actions/index';

// Components
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import ImageCard from '../ImageCard/ImageCard';
import Sidebar from './Sidebar/Sidebar';
import Loader from '../UI/Loader/Loader';

// Styles
require('./Search.scss');

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            clientId: '846158b19e3c8378109201e17ee9e4af71ae321f5d8d0ed7204dfccc294a18f6',
            result: [],
            loading: false,
            showBtn: false,
            disabledBtn: true,
            page: 1,
            totalPage: 1,
            err: '',
            showSidebar: false
        };
    }

    handlePagination(type) {
        let nextPage = _.clone(this.state.page);

        if (type === 'next') {
            console.log('working')
            nextPage += 1;
            this.handleSubmit(nextPage, this.state.keyword);
            if (nextPage > 0) {
                this.setState({ disabledBtn: false });
            }
            return;
        }

        if (type === 'prev') {
            nextPage -= 1;
            this.setState({ err: '' });
            this.handleSubmit(nextPage, this.state.keyword);
            if (nextPage === 1) {
                this.setState(prevState => ({
                    disabledBtn: !prevState.disabledBtn
                }));
            }
            return;
        }
    }

    handleChange(event) {
        this.setState({ keyword: event.target.value });
    }

    handleSubmit(pageNumber, keyword) {
        if (keyword === '') {
            this.setState({ err: 'Please type keywords' });
            return;
        }

        const URL =
            'https://api.unsplash.com/search/photos?page=' +
            pageNumber +
            '&query=' +
            keyword +
            '&client_id=' +
            this.state.clientId;

        this.setState(prevState => ({
            loading: !prevState.loading
        }));

        axios
            .get(URL)
            .then(response => {
                if (response.data.results.length === 0) {
                    this.setState({ err: 'Sorry, there is no images :(', loading: false });
                    return;
                }
                this.setState({
                    result: response.data.results,
                    loading: false,
                    showBtn: true,
                    page: pageNumber,
                    totalPage: response.data.total_pages
                });
            })
            .catch(error => {
                this.setState({ loading: false, err: error });
            });
    }

    closeErr() {
        this.setState({ err: '' });
    }

    handleShow() {
        this.setState(prevState => ({
            showSidebar: !prevState.showSidebar
        }));
    }

    addToRedux() {
        if (this.state.keyword === '') {
            this.setState({ err: 'There is nothing to save :(' });
            return;
        }
        const { addSearch } = this.props;
        addSearch(this.state.keyword);

        if (this.state.showSidebar === true) {
            return;
        }

        this.handleShow();
        setTimeout(() => {
            this.handleShow()
        }, 2000)
    }

    getSaveClick(item) {
        this.handleSubmit(1, item);
        this.setState({ keyword: item })
    }



    render() {
        return (
            <section className="SECTION-FIRST">
                <div className="loader" style={{ display: this.state.loading ? '' : 'none' }}>
                    <Loader />
                </div>
                <Sidebar trigger={this.getSaveClick.bind(this)} show={this.state.showSidebar} search={() => this.handleSubmit(this.state.page)} />
                <div className="SEARCH">
                    <div className="SEARCH__background d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="SEARCH__header">
                                    <div className="SEARCH__header-title">
                                        <h1>Unsplash Photo search</h1>
                                    </div>
                                    <div className="SEARCH__header-input">
                                        <Input
                                            onchange={this.handleChange.bind(this)}
                                            type="text"
                                            value={this.state.keyword}
                                            name="keyword"
                                            placeholder="Search for Photos..."
                                        />
                                    </div>
                                    <div className="SEARCH__header-err" style={{ display: this.state.err ? '' : 'none' }}>
                                        {this.state.err}
                                        <span className="closeErr" onClick={() => this.closeErr()}>
                                            X
                                        </span>
                                    </div>
                                    <div className="SEARCH__header-buttons">
                                        <Button clicked={() => this.handleShow()}> Saved </Button>
                                        <Button clicked={() => this.handleSubmit(1, this.state.keyword)} type="submit" class="search">
                                            Search
                                        </Button>
                                        <Button disabled={this.state.disableSaveBtn} clicked={() => this.addToRedux()}> Save </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
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
                        <div className="row">
                            <div className="SEARCH__container-pagination" style={{ display: this.state.showBtn ? '' : 'none' }}>
                                <Button
                                    class="rev"
                                    disabled={this.state.disabledBtn}
                                    clicked={() => this.handlePagination('prev')}
                                >
                                    Prev
                                </Button>
                                <span>
                                    {this.state.page} of {this.state.totalPage}
                                </span>
                                <Button class="rev" clicked={() => this.handlePagination('next')}>
                                    Next
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(null, { addSearch })(Search);
