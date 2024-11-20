import React, { useState } from 'react';

interface User {
  name: string;
  email: string;
}

const UnoptimizedList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
    { name: "Bob Johnson", email: "bob@example.com" },
  ]);

  const addUser = () => {
    console.log("\n=== Unoptimized - Adding new user ===");
    const newUser = {
      name: `User ${Math.floor(Math.random() * 1000)}`,
      email: `user${Math.floor(Math.random() * 1000)}@example.com`,
    };
    setUsers([newUser, ...users]);
  };

  const removeUser = (index: number) => {
    console.log(`\n=== Unoptimized - Removing user at index: ${index} ===`);
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
  };

  const updateUserName = (index: number) => {
    console.log(`\n=== Unoptimized - Updating name at index: ${index} ===`);
    const newName = `Updated User ${Math.floor(Math.random() * 1000)}`;
    const newUsers = users.map((user, i) => 
      i === index ? { ...user, name: newName } : user
    );
    setUsers(newUsers);
  };

  return (
    <div className="user-list">
      <button onClick={addUser}>Add Random User</button>
      <ul>
        {users.map((user, index) => {
          console.log(`Rendering user: ${user.name}`);
          return (
            <li key={index}>
              <div className="user-info">
                <div>{user.name}</div>
                <div>{user.email}</div>
              </div>
              <div className="action-buttons">
                <button onClick={() => updateUserName(index)}>Update</button>
                <button onClick={() => removeUser(index)}>Remove</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UnoptimizedList;