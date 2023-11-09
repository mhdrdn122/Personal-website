import React from 'react'
import './Card.css'
import '../../globals.css'
import {FaLink , FaGithub , FaLongArrowAltRight} from 'react-icons/fa'
export default function Card({img, title,disc ,demo, code}) {
  return (
    <div className='card'>
        <img src={img}/>
        <div className='card-body'>
            <h3> {title}</h3>
            <p>{disc} </p>
            <div className='icons-card d-flex justify-content-between items-center'>
                    <span><a target='_blank' href={demo}><FaLink size={20}/></a></span>
                    <span><a target='_blank' href={code}><FaGithub size={20} /></a></span>   
            </div>
        </div>
    </div>
  )
}
