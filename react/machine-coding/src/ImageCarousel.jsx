import React, { useEffect, useState } from 'react'

const images = [
  {
    src: 'https://picsum.photos/id/600/600/400',
    title: 'Forest',
    description: 'Forest - description!!',
    id: 1
    
  },
  {
    src: 'https://picsum.photos/id/100/600/400',
    title: 'Beach',
    description: 'Beach - description!!',
    id: 2
    
  },
  {
    src: 'https://picsum.photos/id/200/600/400',
    title: 'Yak',
    description: 'Yak - description!!',
    id: 3
    
  },
  {
    src: 'https://picsum.photos/id/300/600/400',
    title: 'Hay',
    description: 'Hay - description!!',
    id: 4
    
  },
  {
    src: 'https://picsum.photos/id/400/600/400',
    title: 'Plants',
    description: 'Plants - description!!',
    id: 5
    
  },
];

const ImageCarousel = () => {
    const [currentItem, setCurrentItem] = useState(0);

    const handleNextItem = () => {
         if(currentItem === images.length-1){
            setCurrentItem(0)
        } else {
            setCurrentItem((curr) => curr+1)
        }
    }

    const handlePrevItem = () => {
        if(currentItem === 0){
            setCurrentItem(images.length-1)
        } else {
            setCurrentItem((curr) => curr-1)
        }
    }

    useEffect(() => {
        const timerId = setInterval(() => {
            handleNextItem();
        }, 2000)

        return () => clearInterval(timerId);
    }, [currentItem])

  return (
    <div>
      <h2>Image Carousel</h2>
      <div className='carousel'>
            <button onClick={handlePrevItem}>Prev</button>
            <div className='carousel-item'>
                <img
                    height={250}
                    width={250}
                    src={images[currentItem].src}
                />
                <h4>{images[currentItem].title}</h4>
                <p>{images[currentItem].description}</p>

            </div>
            <button onClick={handleNextItem}>Next</button>

      </div>
    </div>
  )
}

export default ImageCarousel
