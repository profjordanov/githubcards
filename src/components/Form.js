import React, {useState} from "react";
import axios from "axios";

const Form = ({onSubmit}) => {
    const [userName, setUserName] = useState("");

    const handleChange = (e) => {
        setUserName(e.currentTarget.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${userName}`);
        onSubmit(resp.data);
        setUserName("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">User name</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={handleChange}
                        placeholder="GitHub username"
                        className="form-control"
                        id="userName"
                        required
                    />
                </div>
                <br/>
                <button className="btn btn-primary">Add card</button>
            </form>
            <br/>
        </>
    );
}
export default Form;