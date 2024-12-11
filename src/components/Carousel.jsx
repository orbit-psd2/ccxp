import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../images/faculties.jpg'
import img2 from '../images/groupic1.jpg'
import img3 from '../images/pcdoc.jpg'
import img4 from '../images/winnners.jpg'
import img5 from '../images/pcdoc2.jpg'
import img6 from '../images/groupic3.jpg'
import img7 from '../images/gob.jpg'

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
];

export default function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="w-full mt-[80px] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl uppercase font-bold text-center mb-8 sm:mb-12 text-gray-800">
        <span className='font-audiowide'>CloudCon x Pulse</span> - Previous Year Highlights
      </h2>
      <div className="relative">
        <Slider {...settings} className="cloudcon-slider">
          {images.map((src, index) => (
            <div key={index} className="outline-none focus:outline-none">
              <div className="aspect-w-16 aspect-h-9 sm:aspect-h-7 lg:aspect-h-6">
                <img
                  src={src}
                  alt={`CloudCon x Pulse Event ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg max-h-[70vh]"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <p className="text-center mt-12 text-gray-600 italic text-[18px] sm:text-base">
        Swipe or use arrow keys to navigate through the images
      </p>
    </div>
  );
}