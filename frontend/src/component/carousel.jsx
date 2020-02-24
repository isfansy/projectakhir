// import React, { useState } from 'react';
// import image1 from '../img/kopi1.jpeg'
// import image2 from '../img/kopi2.jpeg'
// import image3 from '../img/kopi3.jpeg'

// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';

// const items = [
//   {
//     src: image2
//   }
// ];

// const CarouselHome = (props) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   }

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   }

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   }

//   const slides = items.map((item) => {
//     return (
//       <CarouselItem
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//         key={item.src}
//       >
//         <img src={item.src} alt={item.altText} height='600px' />
//         <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
//       </CarouselItem>
//     );
//   });

//   return (
//       <div >
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//     >
//       <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
//       {slides}
      
//     </Carousel>
//     </div>
//   );
// }

// export default CarouselHome;

