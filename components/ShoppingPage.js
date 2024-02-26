import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Adjust the path based on your file structure


function ShoppingPage() {
  const navigate = useNavigate();
  const [showTextArea, setShowTextArea] = useState(false);
  const [password, setPassword] = useState('');
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);
  

  const handleCheckUsersClick = () => {
    setShowTextArea(true);
  };
  const handleSubmit = () => {
    if (password === "paroj123" && !(3-count <= 0) ) {
        alert("Correct Password")
        navigate('/contact')
    } else {
        if ( !(password === "paroj123" && (3-count <= 0) )) {
            alert("Limit exceeded")
            setShowTextArea(false);
            
        } else {
            alert(`Wrong passowrd: Attems left ${3- count}` )
        }
    }
    setCount(count + 1);      
  };

  return (
    <div>
      <h1>Welcome to the Shopping Page</h1>
      <button 
        onClick={() => navigate('/add')}
        className='buttons-container'>
            Go to Signup
      </button>

      <button 
        onClick={handleCheckUsersClick} 
        className='class2'>
        Check Users
        </button>
      
      {showTextArea && (
        <div className='class3'>
          <textarea
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></textarea>
          <button onClick={handleSubmit} >Submit</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingPage;
