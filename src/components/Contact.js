// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css'

const Contact = ({data}) => {
  return (
    <div className='card'>
      <img src={data.photo} alt="contactPhoto"/>
      <div className='contact'>
      <h3>{data.name}</h3>
      <p>{data.phone}</p>
      <p>{data.email}</p>
      </div>
    </div>
  )
}

export default Contact;