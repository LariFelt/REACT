import React, {useState} from "react";

function LH5() {
    const [hobbies, setHobbies] = useState ([]);

    const handleAddHobby = () => {
        setHobbies([...hobbies, ""]);
    };

    const handleHobbyChange = (index, event) => {
        const newHobbies = hobbies.map((hobby, i) => {
            if (i === index) {
                return event.target.value;
            }
            return hobby;
        });
        setHobbies(newHobbies);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Hobbies: " +hobbies.join(", "));
    };

    return (
        <form onSubmit={handleSubmit}>
        {hobbies.map((hobby, index) => (
            <input
            key={index}
            type="text"
            value={hobby}
            onChange={(event) => handleHobbyChange(index, event)}
            />
        ))}
        <button type="button" onClick={handleAddHobby}>Add Hobby</button>
        <button type="submit">Submit</button>
        </form>
    )
}

export default LH5;