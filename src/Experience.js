import React from 'react';

function Experience() {
    return (
    <section className="Experience">
        <h2>
          <b><u>Employment History</u></b>
        </h2>
        <ol>
          <li><u>X-Men (current) - Duties</u></li>
        </ol>
        <ul>
          <li>Saving the world from danger</li>
          <li>Searching for a Cure for Professor X's brain deterioration</li>
          <li>Cleaning up after Beast(he's really messy)</li>
        </ul>
        <ol start="2">
          <li><u>Social worker at Stanford General Hospital(post grad) - Duties</u></li>
        </ol>
        <ul>
          <li>Helping people with illnesses/addictions who came in the ER</li>
          <li>Supporting ER staff when needed</li>
          <li>Light janitorial duties</li>
        </ul>
        <ol start="3">
          <li><u>Student Store Supervisor(Stanford) - Duties</u></li>
        </ol>
        <ul>
          <li>Customer service</li>
          <li>Running the register</li>
          <li>Stocking shelves</li>
        </ul>
      </section>
    );
}

export default Experience;