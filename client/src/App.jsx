import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [storeData, setStoreData] = useState([]);

  // adding data to database
  const handleSubmit = async () => {
    if (name.length === 0 || email.length === 0) {
      alert('All Fields Are Required');
    } else {
      try {
        const response = await fetch('http://localhost:8000/addData', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ name, email }),
        });
        const res = await response.text();
        setName('');
        setEmail('');
        fetchData();
        alert(res);
      } catch (error) {
        alert('An Error Has Occured');
        console.log(error);
      }
    }
  };

  //Getting updated data to usestate
  const updateData = (details) => {
    setName(details.name);
    setEmail(details.email);
    setId(details._id);
  };

  //Updating the data to database
  const handleUpdate = async () => {
    if(!id) return alert('Please select the data for update')
      const response = await fetch('http://localhost:8000/updateData', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: {
          
        }
      })
  }

  // fetching the data from database

  const fetchData = async () => {
    const response = await fetch('http://localhost:8000/getAllData');
    const res = await response.json();
    setStoreData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(storeData);

  return (
    <>
      <div className="container">
        <h2>User Management App</h2>
        <div className="form_grp">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="btn_grp">
            <button className="add_btn" onClick={handleSubmit}>
              Add
            </button>
            <button className="update_btn" onClick={handleUpdate}>Update</button>
          </div>
        </div>
        <div className="table_container">
          <table>
            <thead>
              <tr>
                <th>Sr no.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {storeData.length > 0 ? (
                <>
                  {storeData.map((curElm, index) => {
                    return (
                      <tr key={curElm._id}>
                        <td>{index + 1}</td>
                        <td>{curElm.name}</td>
                        <td>{curElm.email}</td>
                        <td className="action_btn">
                          <button className="update_action" onClick={() => updateData(curElm)}>
                            Update
                          </button>
                          <button className="del_action">Delete</button>
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <>
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center' }}>
                      No Record Found
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
