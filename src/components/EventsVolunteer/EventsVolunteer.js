import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './VolunteerEvents.css';

const VolunteerEvents = () => {

    const { _id } = useParams();
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('https://vast-anchorage-58744.herokuapp.com/allEvent')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div className="row">
            {
                events.map(event =>
                    <div className="col-md-3" key={event._id}>
                        <img src={event.image} className="card-img" alt="..." />
                        <Link to={`/eventRegistration/${event._id}`}><h3 className="bg-primary text-white p-3 rounded">{event.name}</h3></Link>
                    </div>
                )
            }
        </div>
    );
};

export default VolunteerEvents;