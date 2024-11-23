import React, { useState } from 'react';
import ClickMeButton from './ClickMeButton';
import ToggleButton from './ToggleButton';
import Counter from './Counter';
import DisplayTab from './DisplayTab';
import AuthForm from './AuthForm';
import AddDivForm from './AddDivForm';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (username, password) => {
    const newUser = { username, password };
    setUsers([...users, newUser]);
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const tab = ["hello", "world", "from", "react"];

  return (
    <div>
      <h1>Lab 5</h1>

      {/* Exercise 1 */}
      <ClickMeButton />
      <ToggleButton />
      <Counter />

      {/* Exercise 2 */}
      <DisplayTab tab={tab} />

      {/* Exercise 3 */}
      <AuthForm onSubmit={addUser} />
      <h2>Users List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} - {user.password}
            <button onClick={() => deleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Exercise 4 */}
      <AddDivForm />
    </div>
  );
}

export default App;
