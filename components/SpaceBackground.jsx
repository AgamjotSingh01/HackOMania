"use client";
import { useEffect, useRef } from "react";
import "./SpaceBackground.css";

const SpaceBackground = () => {
  const canvasRef = useRef(null);
  const frameCount = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const updateCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = Math.max(document.documentElement.scrollHeight, window.innerHeight);
      }

    updateCanvasSize(); // Initial size

    let gradientHue1 = 230; // Deep blue
    let gradientHue3 = 220; // Night blue

    let hueChangeRate1 = 0.02;
    let hueChangeRate3 = 0.025;

    const numStars = window.innerWidth < 768 ? 200 : 300;

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 0.2 + Math.random() * 1;
        this.opacity = 0.3 + Math.random() * 0.5;
        this.speedY = 0.1 + Math.random() * 0.3;
        this.speedX = (Math.random() - 0.5) * 0.2;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
        if (this.x > canvas.width || this.x < 0) {
          this.x = Math.random() * canvas.width;
        }
      }
    }

    const stars = Array.from({ length: numStars }, () => new Star());

    const createBackground = () => {
      if (frameCount.current % 10 === 0) {
        gradientHue1 += hueChangeRate1;
        gradientHue3 += hueChangeRate3;
      }

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, `hsl(${gradientHue1}, 80%, 10%)`); // Deep blue
      gradient.addColorStop(1, `hsl(${gradientHue3}, 60%, 6%)`); // Night blue
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      frameCount.current += 1;
      createBackground();
      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResizeOrScroll = () => {
      updateCanvasSize();
    };

    window.addEventListener("resize", handleResizeOrScroll);
    window.addEventListener("scroll", handleResizeOrScroll);

    return () => {
      window.removeEventListener("resize", handleResizeOrScroll);
      window.removeEventListener("scroll", handleResizeOrScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="space-canvas" />;
};

export default SpaceBackground;
