import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleLogin = async () => {
    try {
      let apiUrl = '';
      let navigateUrl = '';
  
      switch (userType) {
        case 'inventoryManager':
          apiUrl = 'https://adminz.onrender.com/api/invman/';
          navigateUrl = 'https://invman-e88l.onrender.com';
          break;
        case 'deliveryAgent':
          apiUrl = 'https://adminz.onrender.com/api/delivpar/';
          navigateUrl = 'https://delivpar-0rgf.onrender.com';
          break;
        default:
          return;
      }
  
      const response = await axios.post(apiUrl);
      const { success, email } = response.data;
  
      if (success) {
        //email from API
        setEmail(email);

        //default password
        setPassword('test1234');
  
        // Navigate to the appropriate URL
        window.location.href = navigateUrl;
      } else {
        // Credentials are invalid
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.log('An error occurred during API call');
      console.error(error);
    }
  };

  return (
    <div className="login-form">
      <div className='head'><h2>LOGIN</h2></div>
      <label className='option'>
        User Type:
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="">Select User Type</option>
          <option value="inventoryManager">Inventory Manager</option>
          <option value="deliveryAgent">Delivery Agent</option>
        </select>
      </label>

      {userType === 'inventoryManager' && (
        <div className='credentials'>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
      )}

      {userType === 'deliveryAgent' && (
        <div className='credentials'>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
      )}

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
