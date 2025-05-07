import React from 'react'
import tutor from './Images/tutor1.jpg'
// import tutor from './Images/tutor.jpg'
// import tutorvideo from './Images/tutorvideo.mp4'
import './Css/Tutor.css'
import 'animate.css';


export default function Tutor() {
  return (
    <div>
      <section id="tutor-home">
        <div className="tutor-hero">
          <img src={tutor}/>
        {/* <video autoPlay muted loop><source src={tutorvideo} type="video/mp4" /></video> */}
        </div>
        <div className="tutor-welcome">
          <h2 className='animate__animated animate__shakeY'
          >Welcome to MINDGURU Tutor</h2>
          <p>Here I am logged in as Tutor</p>
        </div>
      </section>
      <section className="tutor-section">
        <h1>Meet Our Tutors</h1>
        <h2>Experienced and Dedicated Educators</h2>
        <p>
          At <strong>MINDGuru</strong>, we pride ourselves on having a team of
          highly qualified and dedicated tutors. Our tutors are experts in their
          respective fields and are committed to helping you succeed.
        </p>
        <div className="tutor-names">
          <div id="tutor" className='animate__animated animate__swing'>
            <h2>Mr. John Doe</h2>
            <p><em>MSc in Physics, MIT</em></p>
            <p>
              Mr. Doe brings a wealth of knowledge and a deep understanding of
              physics. With over a decade of teaching experience, he has a
              unique ability to break down complex concepts into easily
              digestible lessons.
            </p>
          </div>

          <div id="tutor" className='animate__animated animate__swing'>
            <h2>Ms. Sarah Lee</h2>
            <p><em>MA in English Literature, Harvard University</em></p>
            <p>
              Ms. Lee is an accomplished educator with a focus on English
              literature and language. Her engaging teaching style and in-depth
              knowledge make her an invaluable resource for students preparing
              for exams in English.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
