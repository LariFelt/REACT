import React from "react";

const LH1 = () => {
    const [inputValue, setInputValue] = React.useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Submitted value: " + inputValue);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LH1;