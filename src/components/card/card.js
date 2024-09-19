import React from "react"
import './card.css'
const Card=({
    image ='https://placehold.co/600x400/png',
    footphoto,
    title,
    description


})=>{
    return(
        <>
        <div className='cardexamen'>
            <figure>
                <img src={image}/>
                <figcaption>{footphoto}</figcaption>
            </figure>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        </>

    )
}
export default Card