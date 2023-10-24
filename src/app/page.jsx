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

import dynamic from "next/dynamic"

export default function HomePage({ }) {

  const MediaQuery = dynamic(() => import("react-responsive"), {
    ssr: false
  })

  const prefetch = usePrefetch('getItems');

  useEffect(() => {
    const timer = setTimeout(() => {
      prefetch('');
    }, 3500);

    return () => clearTimeout(timer);
  }, [prefetch]);

  return (
    <div>
      <MediaQuery maxWidth={800}>
        <HomepageSection text={'store'} url={'/catalog'} imgUrl={storeMobile} cardTopPos={55} cardLeftPos={10} imgTopPos={30} />
        <HomepageSection text={'catering'} url={'/catalog'} imgUrl={cateringMobile} cardTopPos={55} cardLeftPos={10} imgTopPos={70} />
        <HomepageSection text={'tea walks'} url={'/catalog'} imgUrl={walksMobile} cardTopPos={55} cardLeftPos={10} imgLeftPos={40} />
        <HomepageSection text={'history'} url={'/catalog'} imgUrl={historyMobile} cardTopPos={55} cardLeftPos={10} imgTopPos={60} />
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <HomepageSection text={'store'} url={'/catalog'} imgUrl={store} cardTopPos={20} cardLeftPos={10} imgTopPos={30} />
        <HomepageSection text={'catering'} url={'/catalog'} imgUrl={catering} cardTopPos={60} cardLeftPos={60} imgTopPos={0} />
        <HomepageSection text={'tea walks'} url={'/catalog'} imgUrl={walks} cardTopPos={20} cardLeftPos={56} imgLeftPos={0} />
        <HomepageSection text={'history'} url={'/catalog'} imgUrl={history} cardTopPos={60} cardLeftPos={10} imgTopPos={40} />
      </MediaQuery>
    </div>

  )
}


