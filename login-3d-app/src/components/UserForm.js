import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "../styles/Form.css";

const UserForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), {
        name,
        age: Number(age),
        gender
      });
      setMsg("User added successfully ✅");
      setName("");
      setAge("");
      setGender("Male");
    } catch (error) {
      setMsg("Error adding user ❌");
      console.error("Firebase Error:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>User Info Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder="Name" onChange={e => setName(e.target.value)} required />
        <input type="number" value={age} placeholder="Age" onChange={e => setAge(e.target.value)} required />
        <select value={gender} onChange={e => setGender(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit form">Submit</button>
      </form>
      <p>{msg}</p>
    </div>
  );
};

export default UserForm;
