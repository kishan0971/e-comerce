import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCroselData } from './HomeCarousel/MainCroselData';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };


// const items = [
  // <div className="item" data-value="1">1</div>,
  // <div className="item" data-value="2">2</div>,
  // <div className="item" data-value="3">3</div>,
  // <div className="item" data-value="4">4</div>,
  // <div className="item" data-value="5">5</div>,
  // ];
  
  // const MainCrosel = () => (
    //     <AliceCarousel
    //         mouseTracking
    //         items={items}
    //         // responsive={responsive}
    //         controlsStrategy="alternate"
    //     />
    // );
    
    // export default MainCrosel
    
    
    // import React from 'react'
    
    const MainCrosel = () => {
      // const navigate = useNavigate
      const items = mainCroselData.map((item)=><img className='cursor-pointer' role='presentation' src={item.image} alt=''></img> )
      return (
        
        <AliceCarousel
        // mouseTracking
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
    // responsive={responsive}
    // controlsStrategy="alternate"
    />
    
  )
}

export default MainCrosel