
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './componente/CoffeeCard'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './style/style.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';



function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees);


  return (
    <>
      <div>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            <h1 className="text-3xl absolute top-0">this is my first slider</h1>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            <h1 className="text-3xl absolute top-0">this is my second slider</h1>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            <h1 className="text-3xl absolute top-0">this is my thead slider</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>
        </Swiper>
        <Swiper></Swiper>
    </div>



      <div className='grid grid-cols-2'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
