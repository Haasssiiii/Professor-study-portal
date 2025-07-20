import React, { useState } from "react";
import Quiz from "./Quiz";
import Login from "./Login";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>📝 Online Exam Portal</h1>
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <Quiz username={user} />
      )}
    </div>
  );
}