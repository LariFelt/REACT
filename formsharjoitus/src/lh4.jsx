import React, {useState} from "react";
function LH4() {
    const [formData, setFormData] = useState({
        name: "", email:"", role: ""});
        const [errors, setErrors] = useState({});

        const validateEmail = (email) => {
            if (!email.includes("@")) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: 'Email must include "@"',
                }));
                return false;
            }
            setErrors((prevErrors) => ({...prevErrors, email: null }));
            return true;
        };

        const handleChange = (event) => {
            const {name, value } = event.target;
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
            if (name ==="email") {
                validateEmail(value);
            }
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            if (validateEmail(formData.email)) {
                alert(
                    `Name: ${formData.name}, Email: ${formData.email}, Role: ${formData.role}`
                );
            }
        };

        return (
            <form onSubmit={handleSubmit}>
                <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            />
            
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            />
            
           {errors.email && <div style={{color: "red"}}>{errors.email}</div>}
           <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Other">Other</option>
           </select>
           <button type="submit">Submit</button>
            </form>
        )
}

export default LH4;