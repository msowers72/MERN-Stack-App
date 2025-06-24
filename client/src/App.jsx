import React from 'react';
import './App.css'

const App = () => {
  return (
    <>
      <div className="container">
        <h2>User Management App</h2>
        <div className="form_grp">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Address" />
          <div className="btn_grp">
            <button className='add_btn'>Add</button>
            <button className='update_btn'>Update</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
