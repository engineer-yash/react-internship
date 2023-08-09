import React, { useState, useEffect } from 'react';

function Pincode() {
    const [mydata, setData] = useState([]);
    const [pincode, setPincode] = useState('');

    const fetchApi = () => {
        fetch("https://api.postalpincode.in/pincode/" + pincode)
        .then((response) => response.json())
        .then((data) => {
            setData(data[0].PostOffice);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setData([]);
        });
    }

    useEffect(() => {
        if (pincode) {
            fetchApi();
            const interval = setInterval(() => {
                fetchApi();
            }, 10000);

            return () => clearInterval(interval);
        }
    },);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchApi();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='pincode'
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
            <div>
                {
                    mydata.map((office, index) => (
                    <div key={index}>
                        <p>{office.Name}</p>
                        {/* Display other information about the post office */}
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default Pincode;
