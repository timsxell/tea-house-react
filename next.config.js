/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
                port: '',
                pathname: '**'
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5000',
                pathname: '**'
            },
        ]
    }
}

module.exports = nextConfig
