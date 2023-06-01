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
      
      const response = await axios.post(apiUrl, { /*email,*/ password });
      const { success } = response.data;
      
      if (success) {
        // Credentials are valid, navigate to the appropriate URL
        window.location.href = navigateUrl;
      } else {
        // Credentials are invalid, handle error (e.g., display an error message)
        console.log('Invalid credentials');
      }
    } catch (error) {
      // Handle API call error (e.g., display an error message)
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
            Company Name:
            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          </label>
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
