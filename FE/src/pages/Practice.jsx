import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Practice = () => {

    const [users, setUser] = useState([
        { id: 1, name: "Sarthak Joshi", age: 20, city: "Pune", isActive: true, points: 120 },
        { id: 2, name: "Aman Verma", age: 25, city: "Delhi", isActive: false, points: 80 },
        { id: 3, name: "Riya Sharma", age: 22, city: "Mumbai", isActive: true, points: 150 },
        { id: 4, name: "Neha Patel", age: 19, city: "Ahmedabad", isActive: true, points: 95 },
        { id: 5, name: "Karan Mehta", age: 28, city: "Bangalore", isActive: false, points: 70 },
        { id: 6, name: "Priya Singh", age: 24, city: "Chennai", isActive: true, points: 200 },
        { id: 7, name: "Rohan Das", age: 30, city: "Kolkata", isActive: false, points: 50 },
        { id: 8, name: "Sneha Kapoor", age: 23, city: "Hyderabad", isActive: true, points: 180 },
        { id: 9, name: "Vikas Yadav", age: 21, city: "Jaipur", isActive: true, points: 110 },
        { id: 10, name: "Anjali Nair", age: 26, city: "Kochi", isActive: false, points: 60 }
    ]);
    const [ inputValue , setInputValue] = useState('');
    const [filterUser] = useState(users);
    return (
        <div>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button type="search" ></button>
        </div>
    )
}

export default Practice
