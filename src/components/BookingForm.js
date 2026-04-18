import React, { useState } from "react";

function BookingForm({ onBook , isSoldOut}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dept: "",
    tickets: ""
  });
  const [errors, setErrors] = useState({});
  const validate = () => {
    let err = {};

    if (!form.name.trim()) {
      err.name = "Name is required";
    }

    if (!form.email.trim()) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email format";
    }

    if (!form.dept.trim()) {
      err.dept = "Department is required";
    }

    if (!form.tickets) {
      err.tickets = "Number of tickets required";
    } else if (Number(form.tickets) <= 0) {
      err.tickets = "Tickets must be greater than 0";
    }

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSoldOut) {
      alert("Tickets are sold out!");
      return;
    }
    const err = validate();

    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    onBook({
      ...form,
      tickets: Number(form.tickets)
    });

    setForm({ name: "", email: "", dept: "", tickets: "" });
    setErrors({});
  };

  const handleReset = () => {
    setForm({name: "", email: "", dept: "", tickets: ""});
    setErrors({});
  };

  return (
    <div className = "card">
      <h2>Book Tickets</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <p className="error">{errors.name}</p>

        {/* Email */}
        <input
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <p className="error">{errors.email}</p>

        {/* Department */}
        <input
          type="text"
          placeholder="Department"
          value={form.dept}
          onChange={(e) =>
            setForm({ ...form, dept: e.target.value })
          }
        />
        <p className="error">{errors.dept}</p>

        {/* Tickets */}
        <input
          type="number"
          placeholder="Tickets"
          value={form.tickets}
          onChange={(e) =>
            setForm({ ...form, tickets: e.target.value })
          }
        />
        <p className="error">{errors.tickets}</p>

        <button type="submit" disabled= {isSoldOut}>
          {isSoldOut ? "Sold Out" : "Book Now"}
        </button>
        <button type = "button" onClick = {handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default BookingForm;
