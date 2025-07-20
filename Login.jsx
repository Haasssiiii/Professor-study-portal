import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('student');

  const handleLogin = () => {
    localStorage.setItem('user', JSON.stringify({ email, role }));
    onLogin({ email, role });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 300, margin: 'auto', marginTop: 50 }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}