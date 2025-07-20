import React, { useState } from 'react';

export default function AdminDashboard({ user }) {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  const addQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, newQuestion]);
      setNewQuestion('');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', marginTop: 30 }}>
      <h2 style={{ textAlign: 'center' }}>Admin Dashboard</h2>
      <input
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        placeholder="Enter MCQ"
        style={{ width: '100%', padding: 8 }}
      />
      <button onClick={addQuestion} style={{ width: '100%', padding: 10, marginTop: 10 }}>Add Question</button>

      <ul>
        {questions.map((q, i) => <li key={i}>{q}</li>)}
      </ul>
    </div>
  );
}