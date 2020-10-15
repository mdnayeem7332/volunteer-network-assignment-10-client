import React from 'react';
import Header from '../Header/Header';
import VolunteerEvents from '../EventsVolunteer/EventsVolunteer';
import './Home.css';

const Home = () => {
    return (
        <main>
            <Header/>
            <div className="container mt-5 text-center">
                <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
                <form className="form-inline d-flex justify-content-center mt-4">
                    <input className="form-control mr-sm-2 w-50" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            <div className="volunteer-events container">
                <VolunteerEvents/>
            </div>
        </main>
    );
};

export default Home;