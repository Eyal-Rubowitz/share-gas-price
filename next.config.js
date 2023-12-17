/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'x-genery-header',
                        value: 'this is an app custom header!'
                    }
                ]
            },
            {
                source: '/cookie',
                headers: [
                    {
                        key: 'x-custom-header',
                        value: 'my first custom header value :)',
                    }
                ]
            }
        ]
    }
}

module.exports = nextConfig
