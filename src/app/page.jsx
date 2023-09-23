'use client'

import store from '../../public/images/store.jpg'
import catering from '../../public/images/catering.jpg'
import walks from '../../public/images/walks.jpg'
import history from '../../public/images/history.jpg'

import storeMobile from '@/../public/images/mobile/store.jpg'
import cateringMobile from '@/../public/images/mobile/catering.jpg'
import walksMobile from '@/../public/images/mobile/walks.jpg'
import historyMobile from '@/../public/images/mobile/history.jpg'

import HomepageSection from "./components/HomepageSection/HomepageSection";
import { useGetItemsQuery, usePrefetch } from "@/store/services/itemsApi";
import { useEffect } from "react";




export default function HomePage({ }) {

  const isMobile = window.innerWidth < 500;
  const isDesktopOrTablet = window.innerWidth >= 500;


  const prefetch = usePrefetch('getItems');

  useEffect(() => {
    const timer = setTimeout(() => {
      prefetch('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [prefetch]);

  return (
    <div >
      <HomepageSection id='firstSection' text={'store'} url={'/catalog'} imgUrl={(isMobile && !isDesktopOrTablet) ? storeMobile : store} cardTopPos={isMobile ? 55 : 20} cardLeftPos={isMobile ? 10 : 10} imgTopPos={30} />
      <HomepageSection text={'catering'} url={'/catalog'} imgUrl={(isMobile && !isDesktopOrTablet) ? cateringMobile : catering} cardTopPos={isMobile ? 55 : 60} cardLeftPos={isMobile ? 10 : 60} imgTopPos={isMobile ? 70 : 0}/>
      <HomepageSection text={'tea walks'} url={'/catalog'} imgUrl={(isMobile && !isDesktopOrTablet) ? walksMobile : walks} cardTopPos={isMobile ? 55 : 20} cardLeftPos={isMobile ? 10 : 56} imgLeftPos={isMobile ? 40 : 0} />
      <HomepageSection text={'history'} url={'/catalog'} imgUrl={(isMobile && !isDesktopOrTablet) ? historyMobile : history} cardTopPos={isMobile ? 55 : 60} cardLeftPos={isMobile ? 10 : 10} imgTopPos={isMobile ? 60 : 40} />
    </div>
  )
}


