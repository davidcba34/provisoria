import React from 'react'
import './Item.css'
import {Link}from 'react-router-dom'
export const Item = ({ nombre , img, precio,description }) =>{

    return(
        <div className='col'>
            <div className='card cardStyle text-center bg-dark'>
                <img src ={img} alt = {nombre} className ='card-img-top'/>
                <div className='card-body text-light'>
                    <h5 className='card-title'>{nombre}</h5>
                    <p>{description}</p>
                    <p>{precio}</p>
                    <Link to= "/detalle" > 
                    <button className='btn btn-outline-secundary rounded-0' target ="_blank">Ver más</button>
                    </Link>
                </div>
                
            </div>

        </div>
    )
}

export default Item;