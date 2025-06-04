import React, {useState} from "react";
import '../css/Shop.css'
import banner1 from '../photos/banner1.png'
import banner2 from '../photos/banner2.png'
import banner3 from '../photos/banner3.png'



const Shop = () => {
  const [index, setIndex] = useState(0);
  const slides = [banner1, banner2, banner3];
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };
  //// try

  const [activeIndex, setActiveIndex] = useState(0);
  const buttons = ["Кавомашини", "Смартфони", "Зарядні пристрої", "Телевізори", "Акції"];
  const contents = [
    <div className="proposes">
        <div className="propose1"> 1 </div>
        <div className="propose2"> 2 </div>
        <div className="propose3"> 3 </div>
        <div className="propose4"> 4 </div>
        <div className="propose5"> 5 </div>
    </div>,
    <div className="proposes">
    <div className="propose1"> 1.2 </div>
    <div className="propose2"> 2.2 </div>
    <div className="propose3"> 3.2 </div>
    <div className="propose4"> 4.2 </div>
    <div className="propose5"> 5.2 </div>
</div>,
<div className="proposes">
        <div className="propose1"> 1 </div>
        <div className="propose2"> 2 </div>
        <div className="propose3"> 3 </div>
        <div className="propose4"> 4 </div>
        <div className="propose5"> 5 </div>
    </div>,
    <div className="proposes">
        <div className="propose1"> 1 </div>
        <div className="propose2"> 2 </div>
        <div className="propose3"> 3 </div>
        <div className="propose4"> 4 </div>
        <div className="propose5"> 5 </div>
    </div>,
    <div className="proposes">
    <div className="propose1"> 1 </div>
    <div className="propose2"> 2 </div>
    <div className="propose3"> 3 </div>
    <div className="propose4"> 4 </div>
    <div className="propose5"> 5 </div>
</div>
  ];


  return (
    <div>
    <div className="slider">
      
      <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          <img src={slide} className="slide" key={i} alt={`Slide ${i + 1}`} />
        ))}
      </div>
      <button className="prev slide-button" onClick={prevSlide}>&#10094;</button>
      <button className="next slide-button" onClick={nextSlide}>&#10095;</button>
    </div>
    <h1 className="header1">Найактуальніші пропозиції</h1>

    <div className="shop-container">
      <div className="cat-propose">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={`tab-button ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="content-container">
        <div className="content">{contents[activeIndex]}</div>
      </div>
    </div>
    </div>
  );
}

export default Shop;