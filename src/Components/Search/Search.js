import React, { useState } from 'react';
import axios from 'axios';

// Components
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

// Styles
require('./Search.scss');

function Search() {
    const [photo, setPhoto] = useState('');
    const [clientId, setClientId] = useState('846158b19e3c8378109201e17ee9e4af71ae321f5d8d0ed7204dfccc294a18f6');
    const [result, setResult] = useState([]);

    function handleChange(event) {
        setPhoto(event.target.value);
    }
    function handleSubmit(event) {
        const URL = 'https://api.unsplash.com/search/photos?page=1&query=' + photo + '&client_id=' + clientId;

        axios
            .get(URL)
            .then(response => {
                setResult(response.data.results);
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <div className="SECTION SEARCH">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <h1>Unsplash Photo search</h1>
                        <Input onchange={handleChange} type="text" name="photo" placeholder="Search for Photos..." />
                        <Button clicked={handleSubmit} type="submit">
                            Search
                        </Button>
                        <div className="row">
                            {result.map(photo => (
                                <img src={photo.urls.small} alt="" />
                            ))}
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <aside>Aside Component</aside>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
