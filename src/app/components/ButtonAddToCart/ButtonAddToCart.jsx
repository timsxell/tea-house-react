'use client'

import { useState } from "react"
import styles from './styles.module.css'
import { formular } from "@/app/fonts/fonts";
import Link from "next/link";


export default function ButtonAddToCart({
    isAdded,
    handleClick,
}){

    const [isHovered, setIsHovered] = useState(false);

    if(isAdded){
        return(
            <Link 
            href={'/cart'}
            style={formular.style}
            className={`${styles.btn} ${isAdded ? styles.added : styles.notAdded}`} >
                {'GO TO CART'}
            </Link>
        )
    }
    else{
        return(
            <div 
            style={formular.style}
            onClick={handleClick} 
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`${styles.btn} ${isAdded ? styles.added : styles.notAdded}`} >
                {isAdded ? 'ADDED' : 'ADD TO CART'}
            </div>
        )
    }
    
}