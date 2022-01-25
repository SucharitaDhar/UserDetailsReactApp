import React, {useState} from 'react';
import LoginPage from './components/LoginPage';
import UserTable from './components/UserTable';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [user,setUser] = useState({firstName:"", lastName:""});
  const [error,setError] =useState("");

  const Login = details =>{
    
    setUser({
      firstName:details.firstName,
      lastName:details.lastName
    });
  }

  const Logout = () => {
    setUser({firstName: "", lastName: "" });

  }

return (
    <div className="App">
      {(user.firstName !== "")? (
        <div className="welcome">
          <h2> Welcome {user.firstName + " " + user.lastName}</h2>
          <UserTable />
          <Button className = "btn btn-warning" onClick={Logout}> LOGOUT </Button>
        </div>
      ): (<LoginPage Login={Login} error={error}/>)}
    </div>
  );
}

export default App;
