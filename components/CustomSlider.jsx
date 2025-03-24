'use client'
import React, { useState, useEffect } from "react";

import "./custom.slider.css";

function CustomSlider({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % children.length);
        }, 5000);

        return () => clearInterval(interval); // Clean up
    }, [children.length]);

    return (
        <div className="container__slider">
            {children.map((item, index) => (
                <div
                    className="slider__item"
                    key={index}
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {item}
                </div>
            ))}

            <div className="container__slider__links">
                {children.map((_, index) => (
                    <button
                        key={index}
                        className={`container__slider__links-small ${
                            activeIndex === index ? "container__slider__links-small-active" : ""
                        }`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>

            <button
                className="slider__btn-next"
                onClick={() => setActiveIndex((activeIndex + 1) % children.length)}
            >
                {">"}
            </button>
            <button
                className="slider__btn-prev"
                onClick={() => setActiveIndex((activeIndex - 1 + children.length) % children.length)}
            >
                {"<"}
            </button>
        </div>
    );
}

export default CustomSlider;
