import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const LoginForm = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleLogin = () => {
    //based on userType and input fields

    // navigate
    switch (userType) {
      /*case 'customer':
        window.location.href = 'https://customfr-b38b.onrender.com/';
        break;
        */
      case 'inventoryManager':
        window.location.href = 'https://delivpar-0rgf.onrender.com';
        break;
      case 'deliveryAgent':
         window.location.href = 'https://invman-e88l.onrender.com';
        break;
      default:
        break;
    }
  };

  return (
    <div className="login-form">
      <label className='option'>
        User Type:
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="">Select User Type</option>
          <option value="customer">Customer</option>
          <option value="inventoryManager">Inventory Manager</option>
          <option value="deliveryAgent">Delivery Agent</option>
        </select>
      </label>

      {userType === 'customer' && (
        <div className='credentials'>
          <label>
            User Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
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
