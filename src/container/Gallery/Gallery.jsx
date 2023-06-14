import React from 'react';
import { images } from '../../constants/'
import { SubHeading } from '../../components';
import { BsInstagram, BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import './Gallery.css';

const myimages = [images.pizza1, images.pizza2, images.pizza3, images.pizza4, images.pizza5, images.pizza6, images.pizza7, images.pizza8, images.pizza9, images.pizza10, images.pizza11, images.pizza12]
function Gallery() {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    }
    else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instgram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {myimages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <a href='https://www.instagram.com/pizza_rilla/'>
                <img src={image} alt='galleryimg' />
              </a>
              <BsInstagram className='gallery__image-icon' />

            </div>
          ))}
        </div>

        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>

      </div>
    </div>
  );
}

export default Gallery;
