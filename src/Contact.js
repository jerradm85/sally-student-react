import React from 'react';

function Contact() {
return (
<section className="Contact">
      <h3>
          <u><b>Contact Info</b></u>
        </h3>
        <img height="200" width="135" alt="Sally Jean Ran" src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg"/>
        <p>
          <i>"You need to be a part of the world to save it."</i>
          - Sally Jean Ran
        </p>
        <p>
          Feel free to contact me at any of the following:
        </p>
        <address>
          Home: 206-555-1212
          Work: 206-222-1515
          Email:
          <a href="mailto:none@none.com">Sallyran@gmail.com</a>
        </address>
      </section>
);

}

export default Contact;