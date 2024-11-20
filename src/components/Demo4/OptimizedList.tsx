import React, { useState, useCallback, memo } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

const UserItem = memo(({ user, onRemove, onUpdate }: {
  user: User;
  onRemove: (id: string) => void;
  onUpdate: (id: string) => void;
}) => {
  console.log(`Rendering user: ${user.name}`);
  
  return (
    <li>
      <div className="user-info">
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>
      <div className="action-buttons">
        <button onClick={() => onUpdate(user.id)}>Update</button>
        <button onClick={() => onRemove(user.id)}>Remove</button>
      </div>
    </li>
  );
});

const OptimizedList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: '1', name: "John Doe", email: "john@example.com" },
    { id: '2', name: "Jane Smith", email: "jane@example.com" },
    { id: '3', name: "Bob Johnson", email: "bob@example.com" },
  ]);

  const addUser = useCallback(() => {
    console.log("\n=== Optimized - Adding new user ===");
    const id = Date.now().toString();
    const newUser = {
      id,
      name: `User ${Math.floor(Math.random() * 1000)}`,
      email: `user${Math.floor(Math.random() * 1000)}@example.com`,
    };
    setUsers(prev => [newUser, ...prev]);
  }, []);

  const removeUser = useCallback((id: string) => {
    console.log(`\n=== Optimized - Removing user: ${id} ===`);
    setUsers(prev => prev.filter(user => user.id !== id));
  }, []);

  const updateUserName = useCallback((id: string) => {
    console.log(`\n=== Optimized - Updating name: ${id} ===`);
    const newName = `Updated User ${Math.floor(Math.random() * 1000)}`;
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, name: newName } : user
    ));
  }, []);

  return (
    <div className="user-list">
      <button onClick={addUser}>Add Random User</button>
      <ul>
        {users.map(user => (
          <UserItem
            key={user.id}
            user={user}
            onRemove={removeUser}
            onUpdate={updateUserName}
          />
        ))}
      </ul>
    </div>
  );
};

export default OptimizedList;