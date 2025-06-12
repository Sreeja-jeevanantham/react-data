import React, { useEffect, useState } from 'react';

function DrugList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📋 User Details</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.username})<br />
            📧 {user.email}<br />
            📍 {user.address.city}, {user.address.street}<br />
            ☎ {user.phone} <br />🌐 {user.website}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DrugList
