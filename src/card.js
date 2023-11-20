// import React from 'react';
// import './App.css'; // You might need to adjust the CSS for your specific styles

// const data = [
//   {
//     id: 1,
//     columnName: 'Column 1',
//     cards: [
//       { id: 1, icon: 'icon1.jpg' },
//       { id: 2, icon: 'icon2.jpg' },
//       { id: 3, icon: 'icon3.jpg' },
//       { id: 4, icon: 'icon4.jpg' },
//     ],
//   },
//   {
//     id: 2,
//     columnName: 'Column 1',
//     cards: [
//       { id: 1, icon: 'icon1.jpg' },
//       { id: 2, icon: 'icon2.jpg' },
//       { id: 3, icon: 'icon3.jpg' },
//       { id: 4, icon: 'icon4.jpg' },
//     ],
//   },
//   {
//     id: 3,
//     columnName: 'Column 1',
//     cards: [
//       { id: 1, icon: 'icon1.jpg' },
//       { id: 2, icon: 'icon2.jpg' },
//       { id: 3, icon: 'icon3.jpg' },
//       { id: 4, icon: 'icon4.jpg' },
//     ],
//   },
//   {
//     id: 4,
//     columnName: 'Column 1',
//     cards: [
//       { id: 1, icon: 'icon1.jpg' },
//       { id: 2, icon: 'icon2.jpg' },
//       { id: 3, icon: 'icon3.jpg' },
//       { id: 4, icon: 'icon4.jpg' },
//     ],
//   },
//   {
//     id: 5,
//     columnName: 'Column 1',
//     cards: [
//       { id: 1, icon: 'icon1.jpg' },
//       { id: 2, icon: 'icon2.jpg' },
//       { id: 3, icon: 'icon3.jpg' },
//       { id: 4, icon: 'icon4.jpg' },
//     ],
//   },
  
//   // ... similar data for other columns
// ];

// const App = () => {
//   return (
//     <div className="App">
//       {data.map(column => (
//         <div key={column.id} className="column">
//           <h2>{column.columnName}</h2>
//           <div className="card-container">
//             {column.cards.map(card => (
//               <div key={card.id} className="card">
//                 <img src={card.icon} alt={`Icon ${card.id}`} />
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const YourDynamicPage = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const ticketsResponse = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
//         const { tickets, users } = ticketsResponse.data;
//         setTickets(tickets);
//         setUsers(users);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to get user name by userId
//   const getUserName = (userId) => {
//     const user = users.find((user) => user.id === userId);
//     return user ? user.name : 'Unknown';
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//       {[1, 2, 3, 4, 5].map((column, index) => (
//         <div key={index} style={{ flex: 1, margin: '0 10px' }}>
//           <h2>Column {column}</h2>
//           {tickets.slice(index * 2, index * 2 + 2).map((ticket) => (
//             <div key={ticket.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
//               <h3>Ticket ID: {ticket.id}</h3>
//               <p>Title: {ticket.title}</p>
//               <p>Tag: {ticket.tag.join(', ')}</p>
//               <p>User: {getUserName(ticket.userId)}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default YourDynamicPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const YourDynamicPage = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const ticketsResponse = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
//         const { tickets, users } = ticketsResponse.data;
//         setTickets(tickets);
//         setUsers(users);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to get user name by userId
//   const getUserName = (userId) => {
//     const user = users.find((user) => user.id === userId);
//     return user ? user.name : 'Unknown';
//   };

//   const columns = {
//     "In Progress": tickets.filter((ticket) => ticket.status === 'In progress'),
//     "Done": tickets.filter((ticket) => ticket.status === 'Done'),
//     "Todo": tickets.filter((ticket) => ticket.status === 'Todo'),
//     "Cancelled": tickets.filter((ticket) => ticket.status === 'Cancelled'),
//     "Complete": tickets.filter((ticket) => ticket.status === 'Complete')
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//       {Object.entries(columns).map(([columnName, columnTickets], index) => (
//         <div key={index} style={{ flex: 1, margin: '0 25px' }}>
//           <h2>{columnName}</h2>
//           {columnTickets.map((ticket) => (
//             <div key={ticket.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
//               <h3>Ticket ID: {ticket.id}</h3>
//               <p>Title: {ticket.title}</p>
//               <p>Tag: {ticket.tag.join(', ')}</p>
//               <p>User: {getUserName(ticket.userId)}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default YourDynamicPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const YourDynamicPage = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const ticketsResponse = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
//         const { tickets, users } = ticketsResponse.data;
//         setTickets(tickets);
//         setUsers(users);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to get user name by userId
//   const getUserName = (userId) => {
//     const user = users.find((user) => user.id === userId);
//     return user ? user.name : 'Unknown';
//   };

//   const columns = {
//     "In Progress": tickets.filter((ticket) => ticket.status === 'In progress'),
//     "Done": tickets.filter((ticket) => ticket.status === 'Done'),
//     "Todo": tickets.filter((ticket) => ticket.status === 'Todo'),
//     "Cancelled": tickets.filter((ticket) => ticket.status === 'Cancelled'),
//     "Complete": tickets.filter((ticket) => ticket.status === 'Complete')
//   };

//   const columnCounts = {};

//   Object.entries(columns).forEach(([columnName, columnTickets]) => {
//     columnCounts[columnName] = columnTickets.length;
//   });

//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//       {Object.entries(columns).map(([columnName, columnTickets], index) => (
//         <div key={index} style={{ flex: 1, margin: '0 10px' }}>
//           <h2>{columnName}</h2>
//           <p>Total Tickets: {columnCounts[columnName]}</p>
//           {columnTickets.map((ticket) => (
//             <div key={ticket.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
//               <h3>Ticket ID: {ticket.id}</h3>
//               <p>Title: {ticket.title}</p>
//               <p>Tag: {ticket.tag.join(', ')}</p>
//               <p>User: {getUserName(ticket.userId)}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default YourDynamicPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YourDynamicPage = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

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

  // Function to get user name by userId
  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown';
  };

  const columns = {
    "In Progress": tickets.filter((ticket) => ticket.status === 'In progress'),
    "Done": tickets.filter((ticket) => ticket.status === 'Done'),
    "Todo": tickets.filter((ticket) => ticket.status === 'Todo'),
    "Cancelled": tickets.filter((ticket) => ticket.status === 'Cancelled'),
    "Complete": tickets.filter((ticket) => ticket.status === 'Complete')
  };

  const columnCounts = {};

  Object.entries(columns).forEach(([columnName, columnTickets]) => {
    columnCounts[columnName] = columnTickets.length;
  });

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
    // You can perform actions based on the selected option here
    // For example: grouping or ordering functionality
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flex: '0 0 auto', margin: '0 10px' }}>
        <select value={selectedOption} onChange={handleDropdownChange}>
          
          <option disabled hidden value="">Display</option>
          <option value="grouping">Grouping</option>
          <option value="ordering">Ordering</option>
        </select>
      </div>
      {Object.entries(columns).map(([columnName, columnTickets], index) => (
        <div key={index} style={{ flex: 1, margin: '0 10px' }}>
          <h2>{columnName}</h2>
          <p>Total Tickets: {columnCounts[columnName]}</p>
          {columnTickets.map((ticket) => (
            <div key={ticket.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
              <h3>Ticket ID: {ticket.id}</h3>
              <p>Title: {ticket.title}</p>
              <p>Tag: {ticket.tag.join(', ')}</p>
              <p>User: {getUserName(ticket.userId)}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default YourDynamicPage;




