import Link from 'next/link';

export default function Hero({ title, subtitle, ctaText, ctaLink, videoSrc }) {
  return (
    <div className="hero-container">
      {/* Video Background - This would ideally be a video of the Rio Teles Pires */}
      <video 
        className="hero-video"
        autoPlay 
        loop 
        muted 
        playsInline
        poster="https://pixabay.com/get/ge8a2b0c5d961eed554c21a1ce57a7bb5a6e340d184f62fdf3a98835aa716aff06bf3e217170c609399588c35399a7206bde56c2c9cb786bc9506fdcb66477001_1280.jpg"
      >
        {/* Fallback to an image if video isn't available */}
        <source src={videoSrc} type="video/mp4" />
        {/* Using a static image as fallback */}
      </video>
      
      {/* Dark Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Hero Content */}
      <div className="hero-content">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Link 
            href={ctaLink} 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md text-lg shadow-lg transition-colors duration-300"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
}
