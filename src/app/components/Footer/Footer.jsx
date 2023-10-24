'use client'
import styles from './styles.module.css'
import { PHONE_NUMBER, SOCIAL_MEDIA_LINKS, GOOGLE_MAPS_LOCATION } from '@/constants/constants'
import { useState } from 'react';
import SvgLogo from '../icons/SvgLogo/SvgLogo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import SvgFacebook from '../icons/SvgFacebook/SvgFacebook';
import SvgInsta from '../icons/SvgInsta/SvgInsta';
import SvgTelegram from '../icons/SvgTelegram/SvgTelegram';
import dynamic from 'next/dynamic';



export default function Footer({

}) {

    const MediaQuery = dynamic(() => import("react-responsive"), {
        ssr: false
    })

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };

    let bottomClassName = `${styles.bottom} ${isHovered ? styles.bottomHover : ''}`;
    let bottomTextClassName = `${styles.bottomP} ${isHovered ? styles.bottomHoverP : ''}`;
    return (

        <div>
            <MediaQuery maxWidth={500}>
                <footer className={styles.footer}>
                    <div className={styles.top}>
                        <div className={styles.left}>
                            <a href={SOCIAL_MEDIA_LINKS.telegram} target='_blank'>
                                <SvgTelegram />
                            </a>
                            <a href={SOCIAL_MEDIA_LINKS.instagram} target='_blank'>
                                <SvgInsta />
                            </a>
                            <a href={SOCIAL_MEDIA_LINKS.facebook} target='_blank'>
                                <SvgFacebook />
                            </a>

                        </div>
                        <div className={styles.right}>
                            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>

                            <a href={GOOGLE_MAPS_LOCATION} target='_blank'>
                                Mediteranska, 65
                                <br />
                                Budva
                                <br />
                                Montenegro
                            </a>
                        </div>
                    </div>
                    {usePathname() === '/' && <div className={bottomClassName}>
                        <p className={bottomTextClassName}>DESIGNED AND DEVELOPED by </p>
                        <a href='https://www.instagram.com/timsxell/'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                            target='_blank'>@timshell</a>
                    </div>}

                </footer>
            </MediaQuery>
            <MediaQuery minWidth={500}>
                <footer className={styles.footer}>
                    <div className={styles.top}>
                        <div className={styles.left}>
                            {Object.keys(SOCIAL_MEDIA_LINKS).map((key) => (
                                <a href={SOCIAL_MEDIA_LINKS[key]} target='_blank' key={key}>{key}</a>
                            ))}
                        </div>
                        <div className={styles.mid}>
                            <Link href='/'>
                                <SvgLogo width={50} height={50} />
                            </Link>
                            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
                        </div>
                        <div className={styles.right}>
                            <a href={GOOGLE_MAPS_LOCATION} target='_blank'>
                                Mediteranska, 65
                                <br />
                                Budva
                                <br />
                                Montenegro
                            </a>
                        </div>
                    </div>
                    {usePathname() === '/' && <div className={bottomClassName}>
                        <p className={bottomTextClassName}>DESIGNED AND DEVELOPED by </p>
                        <a href='https://www.instagram.com/timsxell/'
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                            target='_blank'>@timshell</a>
                    </div>}

                </footer>
            </MediaQuery>
        </div>

    )

}

{/* <footer className={styles.footer}>
<div className={styles.top}>
    <div className={styles.left}>
        {isDesktopOrTablet && Object.keys(SOCIAL_MEDIA_LINKS).map((key) => (
            <a href={SOCIAL_MEDIA_LINKS[key]} target='_blank' key={key}>{key}</a>
        ))}
        {isMobile && <a href={SOCIAL_MEDIA_LINKS.facebook} target='_blank'>
            <SvgFacebook />
        </a>}
        {isMobile && <a href={SOCIAL_MEDIA_LINKS.instagram} target='_blank'>
            <SvgInsta />
        </a>}
        {isMobile && <a href={SOCIAL_MEDIA_LINKS.telegram} target='_blank'>
            <SvgTelegram />
        </a>}

    </div>
    {isDesktopOrTablet && <div className={styles.mid}>
        <Link href='/'>
            <SvgLogo width={50} height={50} />
        </Link>
        <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
    </div>}
    <div className={styles.right}>
        {isMobile && <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>}

        <a href={GOOGLE_MAPS_LOCATION} target='_blank'>
            Mediteranska, 65
            <br />
            Budva
            <br />
            Montenegro
        </a>
    </div>
</div>
{usePathname() === '/' && <div className={bottomClassName}>
    <p className={bottomTextClassName}>DESIGNED AND DEVELOPED by </p>
    <a href='https://www.instagram.com/timsxell/'
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        target='_blank'>@timshell</a>
</div>}

</footer> */}