import React, { useState, useEffect } from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../slides.css";
import "../globals.css";

const ImageSlider = ({slideshowImages}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
      initial: 0,
      slidesPerView: 1,
      loop: false,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    })

    const goToNextSlide = () => {
      if (slider && typeof slider.next === 'function') {
        slider.next();
      }
    };

    let slides = [
      { src: '/images/slideshow/frosh.jpg' },
      { src: '/images/slideshow/hackathon.jpg' },
      { src: '/images/slideshow/siliconvalley.jpg' },
      { src: '/images/slideshow/wics.jpg' },
      { src: '/images/slideshow/tap.jpg' },
      { src: '/images/slideshow/sfudance.jpg' },
      { src: '/images/slideshow/hike.jpg' },
    ];

    if (slideshowImages === "mum") {
      slides = [
        { src: '/images/projects/MUM-1.png' },
        { src: '/images/projects/MUM-2.png' },
      ]
    } else if (slideshowImages === "sfu-fit") {
      slides = [
        { src: '/images/projects/SFUFit-1.png'},
        { src: '/images/projects/SFUFit-2.png' },
        { src: '/images/projects/SFUFit-3.png' },
        { src: '/images/projects/SFUFit-4.png' },
        { src: '/images/projects/SFUFit-5.png' },
        { src: '/images/projects/SFUFit-6.png' },
      ]
    } else if (slideshowImages === "villain-report") {
      slides = [
        { src: '/images/projects/VillainMap-1.png'},
        { src: '/images/projects/VillainMap-2.png' },
        { src: '/images/projects/VillainMap-3.png' },
        { src: '/images/projects/VillainMap-4.png' },
      ]
    } else if (slideshowImages === "wellin5") {
      slides = [
        { src: '/images/projects/Wellin5-1.png'},
        { src: '/images/projects/Wellin5-2.png' },
        { src: '/images/projects/Wellin5-3.png' },
        { src: '/images/projects/Wellin5-4.png' },
      ]
    }

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide, index) => (
            <div key={index} className="keen-slider__slide">
              <img src={slide.src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }

export default ImageSlider;

