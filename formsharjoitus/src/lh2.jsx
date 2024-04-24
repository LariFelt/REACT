import React, {useState} from "react";

function LH2() {
    const [state, setState] = useState({name: "", email:""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Name: " + state.name + ", Email: " + state.email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            placeholder="Name"></input>
            <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Email">
            </input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default LH2;