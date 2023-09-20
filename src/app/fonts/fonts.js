import { Martel_Sans, Space_Grotesk } from "next/font/google";
import localFont from 'next/font/local';

// export const martel_sans = Martel_Sans({
//     subsets: ["latin"],
//     display: "swap",
//     weight: ['200', '300', '400', '600', '700', '800', '900'],
//     style: ['normal']
// })
export const space_grotesk = Space_Grotesk({
    subsets: ["latin"],
    display: "swap",
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal']
})

export const formular = localFont({
    subsets: ["latin"],
    src: [
    //   {
    //     path: './formular/formular-extralight-trial.otf',
    //     weight: '250',
    //     style: 'normal',
    //   },
    //   {
    //     path: './formular/formular-extralightitalic-trial.otf',
    //     weight: '250',
    //     style: 'italic',
    //   },

    //   {
    //     path: './formular/formular-light-trial.otf',
    //     weight: '300',
    //     style: 'normal',
    //   },
    //   {
    //     path: './formular/formular-lightitalic-trial.otf',
    //     weight: '300',
    //     style: 'italic',
    //   },
      {
        path: './formular/formular-regular-trial.otf',
        weight: '400',//
        style: 'normal',
      },
    //   {
    //     path: './formular/formular-regularitalic-trial.otf',
    //     weight: '400',
    //     style: 'italic',
    //   },
    //   {
    //     path: './formular/formular-medium-trial.otf',
    //     weight: '500',
    //     style: 'normal',
    //   },
    //   {
    //     path: './formular/formular-mediumitalic-trial.otf',
    //     weight: '500',
    //     style: 'italic',
    //   },
      {
        path: './formular/formular-bold-trial.otf',
        weight: '700',//
        style: 'normal',
      },
    //   {
    //     path: './formular/formular-bolditalic-trial.otf',
    //     weight: '700',
    //     style: 'italic',
    //   },
    //   {
    //     path: './formular/formular-black-trial.otf',
    //     weight: '900',
    //     style: 'normal',
    //   },
    //   {
    //     path: './formular/formular-blackitalic-trial.otf',
    //     weight: '900',
    //     style: 'italic',
    //   },
    //   {
    //     path: './formular/formular-ultra-trial.otf',
    //     weight: '910',
    //     style: 'normal',
    //   },
    //   {
    //     path: './formular/formular-ultraitalic-trial.otf',
    //     weight: '910',
    //     style: 'italic',
    //   },
      
    ],
  })