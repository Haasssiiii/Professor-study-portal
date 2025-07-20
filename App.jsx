import React, { useState, useEffect } from 'react';
import Login from './Login';
import StudentDashboard from './StudentDashboard';
import AdminDashboard from './AdminDashboard';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div style={{ padding: 20 }}>
      {user.role === 'admin' ? <AdminDashboard user={user} /> : <StudentDashboard user={user} />}
    </div>
  );
}