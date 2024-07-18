import React from 'react';
import './Donate.css'

function Donate() {
  return (
    <>
        <section className="donation-div">
          <h1>Donate Us</h1>
          <p>Your donation helps us to continue our work.</p>
          <form action="/submit-donation" method="post">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="amount">Donation Amount:</label>
            <input type="number" id="amount" name="amount" required />
            
            <button type="submit">Donate</button>
          </form>
        </section>
    </>
  );
}

export default Donate;