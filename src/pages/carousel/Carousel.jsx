import { useState } from 'react' 

import styles from './carousel.module.css'

import { FaArrowCircleLeft, FaArrowCircleRight  } from 'react-icons/fa'
import { RxDotFilled, RxDot } from 'react-icons/rx'

export default function Carousel() {
const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ];

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  }

  return (
    <div className={styles.container}>
        <h2>Image Carousel</h2>
        <div className={styles.carouselContainer}>
            <div className={styles.leftArrow} onClick={prevSlide}>
                <FaArrowCircleLeft />
            </div>
            <div className={styles.rightArrow} onClick={nextSlide}>
                <FaArrowCircleRight />
            </div>
            {images.map((image, index) => current === index && (
                <div key={`image_${index}`} className={styles.imageContainer}>
                    <img className={styles.image} src={image} alt="image" />
                </div>
            ))}
        </div>
        <div className={styles.imageIndicator}>
            {images.map((image, index) => (
              current === index ? 
              (
                <RxDotFilled />
              )
              :
              (
                <RxDot />
              )
            ))}
            
          </div>
    </div>
  )
}