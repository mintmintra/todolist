import React from 'react';
import { useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState("")
  const submitData = (e) => {
    e.preventDefault()
    console.log("ข้อมูลรายการ = ", name)
  }
  return (
    <section className="container">
      <h1>TodoList App</h1>
      <form className="form-group" onSubmit={submitData}>
        <div className="form-control">
          <input type="text" className="text-input" onChange={(e)=>setName(e.target.value)} value={name} />
          <button type="submit" className="submit-btn">เพิ่มข้อมูล</button>
        </div>
      </form>
    </section>
  );
}

export default App;
