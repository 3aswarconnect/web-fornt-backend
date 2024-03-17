import React, { useState } from 'react';
import axios from 'axios';

function Home() {

    const [msg, setMsg] = useState('');
    const [name, setName] = useState(''); // State for the 'name' input

    const submit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/", {
                msg: msg,
                name: name // Include the 'name' field in the request payload
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='cont'>
            <form onSubmit={(e) => submit(e)}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Update the 'name' state
                />
                <textarea
                    name="text"
                    onChange={(e) => setMsg(e.target.value)}
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    value={msg}
                ></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Home;
