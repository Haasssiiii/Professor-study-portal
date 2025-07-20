import React from 'react';

export default function StudentDashboard({ user }) {
  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h2>Welcome, {user.email}</h2>
      <p>Your exam will appear here.</p>
    </div>
  );
}