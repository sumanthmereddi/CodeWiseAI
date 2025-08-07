import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiTest: React.FC = () => {
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const testBackendConnection = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await axios.get('http://localhost:8081/api/test1');
      setResponse(result.data);
    } catch (err) {
      setError('Failed to connect to backend: ' + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const testHealthEndpoint = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await axios.get('http://localhost:8081/api/health');
      setResponse(result.data);
    } catch (err) {
      setError('Failed to connect to health endpoint: ' + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>CodeWiseAI Backend Connection Test</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={testBackendConnection}
          disabled={loading}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Testing...' : 'Test /api/test1'}
        </button>
        
        <button 
          onClick={testHealthEndpoint}
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Testing...' : 'Test /api/health'}
        </button>
      </div>

      {response && (
        <div style={{
          padding: '15px',
          backgroundColor: '#d4edda',
          border: '1px solid #c3e6cb',
          borderRadius: '5px',
          marginBottom: '10px'
        }}>
          <strong>Response:</strong> {response}
        </div>
      )}

      {error && (
        <div style={{
          padding: '15px',
          backgroundColor: '#f8d7da',
          border: '1px solid #f5c6cb',
          borderRadius: '5px',
          color: '#721c24'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p><strong>Backend URL:</strong> http://localhost:8081</p>
        <p><strong>Frontend URL:</strong> http://localhost:3000</p>
      </div>
    </div>
  );
};

export default ApiTest;
