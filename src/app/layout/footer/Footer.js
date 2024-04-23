import React from 'react';
// import gitHub from "";
import Image from "next/image";
const docs = [
  {}
]
const admins = [
  {}
]
const social_media = [
  {}
]

const Footer = () => {
  return (
    <section className='footer w-4/5 m-auto flex gap-20'>
      <div className='titleAndEnfo'>
        <h1 className='title text-5xl capitalize mb-2' style={{color: "var(--text_color)"}}>front end assistant</h1>
        <div className='socialMedia'>

        </div>
        <button className="btn btn-primary">site src</button>
        <button className="btn btn-primary">are you programming click here</button>
      </div>
      <div className='inforamtion flex gap-20 flex-wrap'>
        <ul>
          <li className='title mb-1 text-2xl' style={{color: "var(--text_color)"}}>conection</li>
          <li className='description' style={{color: "var(--description_color)"}}>face book</li>
          <li className='description' style={{color: "var(--description_color)"}}>instagram</li>
          <li className='description' style={{color: "var(--description_color)"}}>telgram</li>
          <li className='description' style={{color: "var(--description_color)"}}>linkedin</li>
          <li className='description' style={{color: "var(--description_color)"}}>github</li>
          <li className='description' style={{color: "var(--description_color)"}}>whatsapp</li>
        </ul>
        <ul>
          <li className='title mb-1 text-2xl' style={{color: "var(--text_color)"}}>Services</li>
          <li className='description' style={{color: "var(--description_color)"}}>styling css</li>
          <li className='description' style={{color: "var(--description_color)"}}>learn programming</li>
          <li className='description' style={{color: "var(--description_color)"}}>problem solving</li>
          <li className='description' style={{color: "var(--description_color)"}}>vs extintions</li>
          <li className='description' style={{color: "var(--description_color)"}}>ai tools</li>
          <li className='description' style={{color: "var(--description_color)"}}>cv sites</li>
          <li className='description' style={{color: "var(--description_color)"}}>face apis</li>
        </ul>
        <ul>
          <li className='title mb-1 text-2xl' style={{color: "var(--text_color)"}}>location</li>
          <li className='description' style={{color: "var(--description_color)"}}>dmitta egypt</li>
          <li className='description' style={{color: "var(--description_color)"}}>mansora egypt</li>
        </ul>
        <ul>
          <li className='title mb-1 text-2xl' style={{color: "var(--text_color)"}}>location</li>
          <li className='description' style={{color: "var(--description_color)"}}>dmitta egypt</li>
          <li className='description' style={{color: "var(--description_color)"}}>mansora egypt</li>
        </ul>
      </div>
    </section>
  )
}

export default Footer;