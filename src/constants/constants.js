export const PHONE_NUMBER = '+382 69 145 142';

export const SOCIAL_MEDIA_LINKS = {
    telegram: 'https://t.me/monteame',
    instagram: 'https://www.instagram.com/teahousebudva',
    facebook: 'https://www.facebook.com/TeaHouseBudva',
}

export const GOOGLE_MAPS_LOCATION = 'https://maps.app.goo.gl/Lrfx6cF8kiNGFMKL8';

export const CATEGORIES = [
    {
        name: 'chinese tea',
        serverName: 'chinese_tea',
        subcategories: [
            {
                name: 'puerh',
                serverName: 'puerh',
                subsubcategories: [
                    { name: "black", serverName: 'black' },
                    { name: "green", serverName: 'green' },
                ]
            },
            {
                name: 'oolong',
                serverName: 'oolong',
                subsubcategories: [
                    { name: "Tie guan yin", serverName: 'tie_guan_yin' },
                    { name: "Da Hong Pao", serverName: 'da_hong_pao' },
                ]
            },
            // {
            //     name: 'red tea'
            // },
            // {
            //     name: 'green tea'
            // },
        ]

    },
    {
        name: 'herbal tea',
        serverName: 'herbal_tea',
        subcategories: [
            {
                name: 'chamomile',
                serverName: 'chamomile',
            },
            {
                name: 'peppermint',
                serverName: 'peppermint',
            },
            {
                name: 'ivan chai',
                serverName: 'ivan_chai',
            },
            // {
            //     name: 'rooibus'
            // },
            // {
            //     name: 'ivan chai'
            // },
        ]
    },
    // {
    //     name: 'fruit tea'
    // },
    {
        name: 'coffee',
        serverName: 'coffee',
        subcategories: [
            {
                name: 'brazil',
                serverName: 'brazil',
            },
            {
                name: 'colombia',
                serverName: 'colombia',
            },
            // {
            //     name: 'peru'
            // },
            // {
            //     name: 'cuba'
            // },
        ]
    },
    {
        name: 'teaware',
        serverName: 'teaware',
        subcategories: [
            {
                name: 'teapots',
                serverName: 'teapots',
                subsubcategories: [
                    { name: "clay", serverName: 'clay' },
                    // { name: "glass", serverName: 'glass' },
                    { name: "porcelain", serverName: 'porcelain' },
                ]
            },
            {
                name: 'teacups',
                serverName: 'teacups',
            },
            // {
            //     name: 'gaiwans',
            //     serverName: 'gaiwans',
            // },

        ]
    },
    // {
    //     name: 'coffeeware',
    //     subcategories: [
    //         {
    //             name: 'french presses'
    //         },
    //         {
    //             name: 'drippers'
    //         },
    //         {
    //             name: 'grinders'
    //         },
    //         {
    //             name: 'paper filters'
    //         },
    //     ]
    // },

]