/** @type {import('next').NextConfig} */
const nextConfig = {
  
    typescript: {
        ignoreBuildErrors: true,  // Disables type checking on build
      },
      images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com']
    }
};

export default nextConfig;
