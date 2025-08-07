import React, { useState } from 'react';
import axios from 'axios';

interface User {
  id?: string;
  username: string;
  email: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
}

const UserTest: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<User>({ username: '', email: '' });
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const createUser = async () => {
    if (!newUser.username || !newUser.email) {
      setMessage('Please fill in both username and email');
      return;
    }

    setLoading(true);
    try {
      const result = await axios.post('http://localhost:8081/api/users', newUser);
      setMessage(`User created successfully! ID: ${result.data.id}`);
      setNewUser({ username: '', email: '' });
      fetchUsers(); // Refresh the list
    } catch (err) {
      setMessage('Failed to create user: ' + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const result = await axios.get('http://localhost:8081/api/users');
      setUsers(result.data);
      setMessage(`Found ${result.data.length} users`);
    } catch (err) {
      setMessage('Failed to fetch users: ' + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const getUserCount = async () => {
    setLoading(true);
    try {
      const result = await axios.get('http://localhost:8081/api/users/count');
      setMessage(`Total users in database: ${result.data}`);
    } catch (err) {
      setMessage('Failed to get user count: ' + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>MongoDB Atlas User Management Test</h2>
      
      {/* Create User Form */}
      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
        <h3>Create New User</h3>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Username"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            style={{ padding: '8px', marginRight: '10px', width: '200px' }}
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            style={{ padding: '8px', marginRight: '10px', width: '200px' }}
          />
          <button 
            onClick={createUser}
            disabled={loading}
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Creating...' : 'Create User'}
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={fetchUsers}
          disabled={loading}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Loading...' : 'Fetch All Users'}
        </button>
        
        <button 
          onClick={getUserCount}
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ffc107',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Loading...' : 'Get User Count'}
        </button>
      </div>

      {/* Message Display */}
      {message && (
        <div style={{
          padding: '15px',
          backgroundColor: message.includes('Failed') ? '#f8d7da' : '#d4edda',
          border: `1px solid ${message.includes('Failed') ? '#f5c6cb' : '#c3e6cb'}`,
          borderRadius: '5px',
          marginBottom: '20px',
          color: message.includes('Failed') ? '#721c24' : '#155724'
        }}>
          {message}
        </div>
      )}

      {/* Users List */}
      {users.length > 0 && (
        <div>
          <h3>Users in Database</h3>
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {users.map((user) => (
              <div key={user.id} style={{
                padding: '10px',
                border: '1px solid #ddd',
                marginBottom: '5px',
                borderRadius: '3px',
                backgroundColor: '#f8f9fa'
              }}>
                <strong>ID:</strong> {user.id} | 
                <strong> Username:</strong> {user.username} | 
                <strong> Email:</strong> {user.email} | 
                <strong> Role:</strong> {user.role || 'DEVELOPER'}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTest;
