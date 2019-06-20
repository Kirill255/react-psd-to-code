import React, { useState, useEffect } from "react";

import Slide_1 from "./img/slide-1.png";
import Slide_2 from "./img/slide-2.png";
import Slide_3 from "./img/slide-3.png";
import Slide_4 from "./img/slide-4.png";

const initialSlides = [
  { slideUrl: `url(${Slide_1})` },
  { slideUrl: `url(${Slide_2})` },
  { slideUrl: `url(${Slide_3})` },
  { slideUrl: `url(${Slide_4})` }
];

function Slider() {
  const [slides, setSlides] = useState(initialSlides);
  const [autoplay, setAutoplay] = useState(false);
  const [active, setActive] = useState(0);
  const [max, setMax] = useState(0);

  // макс всегда равно кол-ву слайдов, если мы захотим добавить/убрать несколько слайдов в initialSlides, длина гибко подстроится
  useEffect(() => {
    setMax(slides.length);
  }, [slides]);

  // при загрузке компонента вызывается вспомогательная ф-ция intervalBetweenSlides
  useEffect(() => {
    function intervalBetweenSlides() {
      if (autoplay) {
        if (active === max - 1) {
          setActive(0); // если слайд последний, то active-слайд снова равен 0 (index)
        } else {
          setActive((prevActive) => prevActive + 1); // листаем слайды
        }
      }
    }

    const intervalId = setInterval(() => {
      intervalBetweenSlides();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [autoplay, active, max]);

  const toggleAutoplay = () => setAutoplay((prevAutoplay) => !prevAutoplay);

  const nextOne = () => {
    if (active < max - 1) {
      setActive((prevActive) => prevActive + 1); // листаем вперёд
    } else {
      setActive(0); // когда слайд стал последним, то active-слайд снова первый
    }
  };

  const prevOne = () => {
    if (active > 0) {
      setActive((prevActive) => prevActive - 1); // листаем назад
    } else {
      setActive(max - 1); // когда слайд стал первым, то active-слайд становится последним
    }
  };

  const clickOnDots = (index) => {
    setActive(index);
  };

  const isActive = (index) => {
    if (active === index) {
      return "active";
    } else {
      return "";
    }
  };

  const setSliderStyles = () => {
    // например у нас 4 слайда и сейчас активный 2
    const transition = (active * -100) / slides.length; // значит нужно сместить на -50%

    // вся ширина слайдера получается 400%
    return {
      width: slides.length * 100 + "%",
      transform: `translateX(${transition}%)`
    };
  };

  const renderSlides = () => {
    // сколько места занимает один слайд? возьмём всю ширину за 100% и делим на кол-во слайдов(4), получается один слайд занимает 25%
    const transition = 100 / slides.length + "%";

    // получаем массив слайдов с background'ом и шириной
    return slides.map((item, index) => (
      <div
        key={index}
        className="each-slide"
        style={{ backgroundImage: item.slideUrl, width: transition }}
      />
    ));
  };

  const renderDots = () => {
    // prettier-ignore
    return slides.map((item, index) => (
      <li
        key={index}
        className={isActive(index) +  " dots"}
        onClick={() => clickOnDots(index)}
      >
        <i>&#9679;</i>
      </li>
    ));
  };

  // кнопка Autoplay
  const renderPlayStop = () => {
    let playStop;

    if (autoplay) {
      playStop = (
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
        </svg>
      );
    } else {
      playStop = (
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
        </svg>
      );
    }
    return playStop;
  };

  const renderArrows = () => {
    return (
      <div>
        <button type="button" className="arrows prev" onClick={prevOne}>
          <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>

        <button type="button" className="arrows next" onClick={nextOne}>
          <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div className="slider">
      <div className="wrapper" style={setSliderStyles()}>
        {renderSlides()}
      </div>

      {renderArrows()}

      <ul className="dots-container">{renderDots()}</ul>

      <i className="toggle-play" onClick={toggleAutoplay}>
        {renderPlayStop()}
      </i>
    </div>
  );
}

export default Slider;
