/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com']
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoicnRvdGhhb3NzIiwiYSI6ImNsMTU1MnpveDBwOWEzY3J0cHNoN3hzdm8ifQ.CxHELLHSHlhuVykwru_Thg'
  }
}

module.exports = nextConfig
