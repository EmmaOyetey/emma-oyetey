import { useState, useEffect } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//import "./Carousel.scss";

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T) => JSX.Element;
  itemsToShow: number;
  itemsToChange: number;
  className?: string;
};

const Carousel = <T,>({ items, renderItem, itemsToShow, itemsToChange, className }: CarouselProps<T>) => {
  const [counter, setCounter] = useState<number>(0);
  const [displayCount, setDisplayCount] = useState<number>(itemsToShow);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDisplayCount(1);
      } else {
        setDisplayCount(itemsToShow);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, [itemsToShow]);

  const handleIncrement = () => {
    setCounter((counter + itemsToChange) % items.length);
  };

  const handleDecrement = () => {
    setCounter((counter - itemsToChange + items.length) % items.length);
  };

  if (items.length === 0) {
    return <div>No items available. Please add some items.</div>;
  }

  const displayedItems = [];
  for (let i = 0; i < displayCount; i++) {
    const index = (counter + i) % items.length;
    displayedItems.push(items[index]);
  }

  return (
    <div className={`carousel ${className}`}>
      <button
        className={`carousel__arrow carousel__arrow--left ${className}__arrow ${className}__arrow--left`}
        aria-label="Navigate left"
        onClick={handleDecrement}
      >
        <ArrowBackIosIcon style={{ color: "white" }} />
      </button>
      <div className={`carousel__content ${className}__content`}>
        {displayedItems.map((item, index) => (
          <div key={index} className={`carousel__item ${className}__item`}>
            {renderItem(item)}
          </div>
        ))}
      </div>
      <button
        className={`carousel__arrow carousel__arrow--right ${className}__arrow ${className}__arrow--right`}
        aria-label="Navigate right"
        onClick={handleIncrement}
      >
        <ArrowForwardIosIcon style={{ color: "white" }} />
      </button>
    </div>
  );
};

export default Carousel;


// import { useState } from "react";
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import "./Carousel.scss";

// // Define a type for the props, making the component generic with <T>
// type CarouselProps<T> = {
//   items: T[]; // An array of items of type T
//   renderItem: (item: T) => JSX.Element; // A function that takes an item of type T and returns a JSX element
//   itemsToShow: number; // Number of items to display at once
//   itemsToChange: number; // Number of items to change on navigation
// };

// // Define the Carousel component, making it generic with <T>
// const Carousel = <T,>({ items, renderItem, itemsToShow, itemsToChange }: CarouselProps<T>) => {
//   const [counter, setCounter] = useState<number>(0);

//   // Increment the counter, wrapping around using modulus
//   const handleIncrement = () => {
//     setCounter((counter + itemsToChange) % items.length);
//   };

//   // Decrement the counter, wrapping around using modulus
//   const handleDecrement = () => {
//     setCounter((counter - itemsToChange + items.length) % items.length);
//   };

//   if (items.length === 0) {
//     return <div>No items available. Please add some items.</div>;
//   }

//   // Determine which items to display based on the current counter and itemsToShow
//   const displayedItems = [];
//   for (let i = 0; i < itemsToShow; i++) {
//     const index = (counter + i) % items.length;
//     displayedItems.push(items[index]);
//   }

//   return (
//     <div className="carousel">
//       <button
//         className="carousel__arrow carousel__arrow--left"
//         aria-label="Navigate left"
//         onClick={handleDecrement}
//       >
//         <ArrowBackIosIcon style={{ color: "white" }} />
//       </button>
//       <div className="carousel__content">
//         {displayedItems.map((item, index) => (
//           <div key={index} className="carousel__item">
//             {renderItem(item)}
//           </div>
//         ))}
//       </div>
//       <button
//         className="carousel__arrow carousel__arrow--right"
//         aria-label="Navigate right"
//         onClick={handleIncrement}
//       >
//         <ArrowForwardIosIcon style={{ color: "white" }} />
//       </button>
//     </div>
//   );
// };

// export default Carousel;