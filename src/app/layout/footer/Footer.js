import React from 'react';
import gitHub from "../../../../public/assets/socialmedia/github.png";
import facebook from "../../../../public/assets/socialmedia/facebook.png";
import instagram from "../../../../public/assets/socialmedia/instagram.png";
import linkedin from "../../../../public/assets/socialmedia/linkedin.png";
import whatsapp from "../../../../public/assets/socialmedia/whatsapp.png";
import Image from "next/image";
import Link from "next/link";
import "./globlas.css";

const conection = [
  {title: "face book"},
  {title: "instagram"},
  {title: "telgram"},
  {title: "linkedin"},
  {title: "github"},
  {title: "whatsapp"},
];
const Services = [
  {title:  "styling css"},
  {title :"learn programming"},
  {title :"problem solving"},
  {title :"vs extintions"},
  {title :"ai tools"},
  {title :"cv sites"},
  {title :"face apis"},
];

const socialMedia = [
  {image: linkedin},
  {image: facebook},
  {image: gitHub},
  {image: instagram},
  {image: whatsapp},
]

const Footer = () => {
  return (
    <section className='footer w-4/5 m-auto p-2'>
      <div className='flex gap-20'>
      <div className='titleAndEnfo'>
        <Link href='/' className='title text-5xl capitalize mb-2 font-bold' style={{color: "var(--text_color)"}}>front end assistant</Link>
        <div className='socialMedia flex gap-2 mt-3 mb-5'>
          {socialMedia.map((socialMedia) => (
            <Image src={socialMedia.image} width={30} height={30} alt='' />
          ))}
        </div>
        <div className='btns flex flex-col justify-start items-start gap-3'>
          <button className="btn btn-primary border w-40 h-9 text-2xl capitalize rounded flex justify-center items-center" style={{color: "var(--text_color)", borderColor: "var(--text_color)"}}>site src</button>
        </div>
      </div>
      <div className='inforamtion flex gap-10 flex-wrap'>
        <ul>
          <li className='title mb-1 text-2xl' style={{color: "var(--text_color)"}}>conection</li>
          {conection.map((conect) => (
              <li className='description cursor-pointer' style={{color: "var(--description_color)"}}>{conect.title}</li>
          ))}
        </ul>
        <ul>
          <li className='title mb-1 text-2xl' style={{color: "var(--text_color)"}}>Services</li>
          {Services.map((SERV) => (
              <li className='description cursor-pointer' style={{color: "var(--description_color)"}}>{SERV.title}</li>
          ))}
        </ul>
        <ul>
          <li className='title mb-1 text-2xl' style={{color: "var(--text_color)"}}>location</li>
          <li className='description cursor-pointer' style={{color: "var(--description_color)"}}>dmitta egypt</li>
          <li className='description cursor-pointer' style={{color: "var(--description_color)"}}>mansora egypt</li>
        </ul>
        <ul>
          <li className='title mb-1 text-2xl' style={{color: "var(--text_color)"}}>location</li>
          <li className='description cursor-pointer' style={{color: "var(--description_color)"}}>dmitta egypt</li>
          <li className='description cursor-pointer' style={{color: "var(--description_color)"}}>mansora egypt</li>
        </ul>
      </div>
      </div>
      <p className='copyRight text-center mt-4 text-3xl' style={{color: "var(--text_color)"}}>© 2024 Front-End Assistant. All rights reserved.</p>
    </section>
  )
}

export default Footer;