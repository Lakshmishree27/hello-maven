npx create-react-app issue-tracker 
cd issue-tracker 
3. Replace App.js with the code below. 
4. Start the React app: 
npm star
import React, { useState, useEffect } from "react";

const Counter = () => {

    // State variable
    const [count, setCount] = useState(0);

    // Simulate fetching initial data
    useEffect(() => {

        setTimeout(() => {

            setCount(10);

        }, 1000);

    }, []);

    return (

        <div
            style={{
                textAlign: "center",
                marginTop: "40px"
            }}
        >

            <h2>Counter: {count}</h2>

            <button
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>

            <button
                onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>

            <button
                onClick={() => setCount(count * 2)}
            >
                Double
            </button>

            <button
                onClick={() => setCount(0)}
            >
                Reset
            </button>

        </div>
    );
};

export default Counter;