import React, {useState} from "react";
import Form from "./Form";
import CardList from "./CardList";

export default function App({title}) {
    const [profiles, setProfiles] = useState([]);

    const addNewProfile = (profileData) => {
        setProfiles((profiles) => [profileData, ...profiles])
    };

    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                {title}
            </header>
            <Form onSubmit={addNewProfile}/>
            <CardList profiles={profiles}/>
        </div>
    );
}