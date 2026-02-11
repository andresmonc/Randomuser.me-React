import React, { useState, useEffect } from 'react';
import './UserGenerator.css';
import { generateRandomUser } from '../utils/generator';

const UserGenerator = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState({
    results: 10,
    gender: '',
    nat: '',
    seed: '',
  });

  const nationalities = [
    { code: 'AU', name: 'Australia' },
    { code: 'BR', name: 'Brazil' },
    { code: 'CA', name: 'Canada' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'DE', name: 'Germany' },
    { code: 'DK', name: 'Denmark' },
    { code: 'ES', name: 'Spain' },
    { code: 'FI', name: 'Finland' },
    { code: 'FR', name: 'France' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'IE', name: 'Ireland' },
    { code: 'IN', name: 'India' },
    { code: 'IR', name: 'Iran' },
    { code: 'MX', name: 'Mexico' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'NO', name: 'Norway' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'RS', name: 'Serbia' },
    { code: 'TR', name: 'Turkey' },
    { code: 'UA', name: 'Ukraine' },
    { code: 'US', name: 'United States' },
  ];

  const generateUsers = async () => {
    setLoading(true);
    try {
      const generatedUsers = await generateRandomUser(options);
      setUsers(generatedUsers);
    } catch (error) {
      console.error('Error generating users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateUsers();
  }, []);

  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    setOptions(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateUsers();
  };

  return (
    <div className="user-generator">
      <h1>Random User Generator</h1>
      
      <form onSubmit={handleSubmit} className="generator-form">
        <div className="form-group">
          <label>Number of Results:</label>
          <input
            type="number"
            name="results"
            min="1"
            max="5000"
            value={options.results}
            onChange={handleOptionChange}
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={options.gender} onChange={handleOptionChange}>
            <option value="">Both</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label>Nationality:</label>
          <select name="nat" value={options.nat} onChange={handleOptionChange}>
            <option value="">All</option>
            {nationalities.map(nat => (
              <option key={nat.code} value={nat.code}>{nat.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Seed (for reproducible results):</label>
          <input
            type="text"
            name="seed"
            value={options.seed}
            onChange={handleOptionChange}
            placeholder="Optional seed value"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Users'}
        </button>
      </form>

      <div className="users-container">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="users-grid">
            {users.map((user, index) => (
              <div key={index} className="user-card">
                <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
                <div className="user-info">
                  <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                  <p><strong>Location:</strong> {user.location.city}, {user.location.country}</p>
                  <p><strong>Age:</strong> {user.dob.age}</p>
                  <p><strong>Nationality:</strong> {user.nat}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserGenerator;
