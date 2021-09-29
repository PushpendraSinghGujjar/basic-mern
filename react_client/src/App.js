import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  function callAPI() {
    axios.post('http://localhost:3000/name', {
      name: name,
      email: email
    }).then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    const getUsers = () => {
      axios.get('http://localhost:3000/name')
        .then((response) => {
          setUsers(response.data)
        })
    }
    getUsers();
  }, [])

  return (
    <div className="App">
      running successfully
      <form>
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name}></input>
        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
        <input type="submit" onClick={callAPI} value="submit"></input>
      </form>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {users.map((user) => {
          return <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        })}
      </table>
    </div>
  );
}

export default App;
