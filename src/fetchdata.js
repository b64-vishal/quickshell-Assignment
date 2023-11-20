// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function FetchData(){
//       const [tickets, setTickets] = useState([]);
//       const [users, setUsers] = useState([]);
//         useEffect(()=>{
//             axios.get("https://api.quicksell.co/v1/internal/frontend-assignment")
//             .then((response) =>{
//                 console.log(response)
//                 setdata(response.data.tickets)
                
//             })
//         }, [])

//     return (
//         <div>
//             FetchData with Api
//             {userData.map((data) =>{
//                 return(
//                     <div>
//                     <div>{data.id}</div>
//                     <div>{data.priority}</div>
//                     <div>{data.status}</div>
//                     <div>{data.tag}</div>
//                     <div>{data.title}</div>
//                     <div>{data.userId}</div>
//                     </div>
//                 )
//             })}

           
//         </div>
//     )

// }

// export default FetchData;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ticketsResponse = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        const { tickets, users } = ticketsResponse.data;
        setTickets(tickets);
        setUsers(users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Tickets</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <p>ID: {ticket.id}</p>
            <p>Title: {ticket.title}</p>
            <p>userID: {ticket.tag}</p>
            <p>Status: {ticket.status}</p>
            <p>Prirority: {ticket.priority}</p>
            {/* Add other ticket details as needed */}
          </li>
        ))}
      </ul>

      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Availability: {user.available ? 'True' : 'False'}</p>
            {/* Add other user details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
