import React from "react";
import "../App.css";
import "./Home.css";
import "../bootstrap-grid.css";

function getQuote() {
  return (
    <>
      <section className="getQuote">
        <form>
          <h2>Contact Us</h2>
          <p>Message us to get a free quote today!</p>
          <label>Name: </label>
          <input id="custName" placeholder="Tiger Woods"></input>
          <br />
          <label>Email: </label>
          <input
            type="email"
            id="custName"
            placeholder="johndaley@longball.com"
          ></input>
          <br />
          <label style={{ marginLeft: "-250px" }}>Message:</label>
          <br />
          <textarea></textarea>
          <br />
          <button type="button" className="email-btn">
            Send
          </button>
        </form>
      </section>
    </>
  );
}

export default getQuote;
