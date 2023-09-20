'use client'

import styles from './styles.module.css'
// import store from '../../../../public/images/store.jpg'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function HomepageSection({
    imgUrl,
    text,
    cardTopPos = 20,
    cardLeftPos = 10,
    imgTopPos = 0,
    imgLeftPos = 0,
    url,
}) {

    const [isHovered, setIsHovered] = useState(false);

    const handleCardHover = () => {
        setIsHovered(true);
    };

    const handleCardLeave = () => {
        setIsHovered(false);
    };

    let sectionClassName = `${styles.section} ${isHovered ? styles.hover : ''}`

    const router = useRouter()

    return (
        <div className={sectionClassName} >
            <Image alt={'homepage_section_cover_photo'} src={imgUrl} className={styles.image} priority={true} fill={true} style={{ objectFit: 'cover', zIndex: '0', objectPosition: `${imgLeftPos || 0}% ${imgTopPos || 0}%` }} />
            <Link className={styles.card} href={url}
                style={{top: `${cardTopPos}%`, left: `${cardLeftPos}%`}}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
            >
                <p className={styles.text}>
                    {text}
                </p>
            </Link>
        </div>
    )

}