"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  driftX: number;
  driftY: number;
  type: "dot" | "cross" | "glow";
  color: "gold" | "blue" | "white";
}

interface ShootingStar {
  x: number;
  y: number;
  angle: number;
  speed: number;
  length: number;
  life: number;
  maxLife: number;
  opacity: number;
}

const GOLD = { r: 201, g: 168, b: 76 };
const BLUE = { r: 123, g: 156, b: 199 };
const WHITE = { r: 255, g: 255, b: 255 };

function getColor(c: "gold" | "blue" | "white") {
  return c === "gold" ? GOLD : c === "blue" ? BLUE : WHITE;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let lastShootingStarTime = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initStars();
    };

    const initStars = () => {
      const area = window.innerWidth * window.innerHeight;
      const count = Math.min(Math.floor(area / 2800), 350);
      stars = [];

      for (let i = 0; i < count; i++) {
        const rand = Math.random();
        const type: Star["type"] =
          rand < 0.06 ? "cross" : rand < 0.15 ? "glow" : "dot";
        const colorRand = Math.random();
        const color: Star["color"] =
          colorRand < 0.35 ? "gold" : colorRand < 0.5 ? "blue" : "white";

        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius:
            type === "cross"
              ? Math.random() * 2 + 1.5
              : type === "glow"
              ? Math.random() * 2.5 + 1
              : Math.random() * 1.2 + 0.2,
          baseOpacity:
            type === "cross"
              ? Math.random() * 0.4 + 0.5
              : type === "glow"
              ? Math.random() * 0.3 + 0.3
              : Math.random() * 0.5 + 0.15,
          twinkleSpeed: Math.random() * 0.006 + 0.001,
          twinklePhase: Math.random() * Math.PI * 2,
          driftX: (Math.random() - 0.5) * 0.08,
          driftY: (Math.random() - 0.5) * 0.04,
          type,
          color,
        });
      }
    };

    const spawnShootingStar = () => {
      const side = Math.random();
      let x: number, y: number, angle: number;
      if (side < 0.5) {
        x = Math.random() * window.innerWidth;
        y = -10;
        angle = Math.PI / 4 + Math.random() * 0.4 - 0.2;
      } else {
        x = -10;
        y = Math.random() * window.innerHeight * 0.5;
        angle = Math.PI / 6 + Math.random() * 0.3;
      }
      shootingStars.push({
        x,
        y,
        angle,
        speed: Math.random() * 4 + 6,
        length: Math.random() * 80 + 60,
        life: 0,
        maxLife: Math.random() * 40 + 30,
        opacity: Math.random() * 0.4 + 0.4,
      });
    };

    const drawCrossStar = (
      x: number,
      y: number,
      size: number,
      opacity: number,
      rgb: { r: number; g: number; b: number }
    ) => {
      // Vertical spike
      ctx.beginPath();
      ctx.moveTo(x, y - size * 3);
      ctx.lineTo(x + size * 0.3, y);
      ctx.lineTo(x, y + size * 3);
      ctx.lineTo(x - size * 0.3, y);
      ctx.closePath();
      ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${opacity * 0.7})`;
      ctx.fill();

      // Horizontal spike
      ctx.beginPath();
      ctx.moveTo(x - size * 3, y);
      ctx.lineTo(x, y - size * 0.3);
      ctx.lineTo(x + size * 3, y);
      ctx.lineTo(x, y + size * 0.3);
      ctx.closePath();
      ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${opacity * 0.7})`;
      ctx.fill();

      // Diagonal spikes (shorter)
      ctx.beginPath();
      const d = size * 1.8;
      const dd = size * 0.2;
      ctx.moveTo(x - d, y - d);
      ctx.lineTo(x + dd, y - dd);
      ctx.lineTo(x + d, y + d);
      ctx.lineTo(x - dd, y + dd);
      ctx.closePath();
      ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${opacity * 0.3})`;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(x + d, y - d);
      ctx.lineTo(x + dd, y + dd);
      ctx.lineTo(x - d, y + d);
      ctx.lineTo(x - dd, y - dd);
      ctx.closePath();
      ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${opacity * 0.3})`;
      ctx.fill();

      // Center dot
      ctx.beginPath();
      ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${opacity})`;
      ctx.fill();
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Spawn shooting stars
      if (time - lastShootingStarTime > 4000 + Math.random() * 6000) {
        spawnShootingStar();
        lastShootingStarTime = time;
      }

      // Draw stars
      for (const star of stars) {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase);
        const currentOpacity = star.baseOpacity * (0.4 + 0.6 * ((twinkle + 1) / 2));
        const rgb = getColor(star.color);

        // Drift
        star.x += star.driftX;
        star.y += star.driftY;
        if (star.x < -10) star.x = window.innerWidth + 10;
        if (star.x > window.innerWidth + 10) star.x = -10;
        if (star.y < -10) star.y = window.innerHeight + 10;
        if (star.y > window.innerHeight + 10) star.y = -10;

        if (star.type === "cross") {
          drawCrossStar(star.x, star.y, star.radius, currentOpacity, rgb);
        } else if (star.type === "glow") {
          // Soft glow
          const gradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.radius * 5
          );
          gradient.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},${currentOpacity})`);
          gradient.addColorStop(0.3, `rgba(${rgb.r},${rgb.g},${rgb.b},${currentOpacity * 0.4})`);
          gradient.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`);
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 5, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Center
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${currentOpacity})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${currentOpacity})`;
          ctx.fill();
        }
      }

      // Draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.life++;

        const fadeIn = Math.min(ss.life / 8, 1);
        const fadeOut = Math.max(1 - (ss.life - ss.maxLife * 0.6) / (ss.maxLife * 0.4), 0);
        const alpha = ss.opacity * fadeIn * fadeOut;

        if (alpha > 0) {
          const tailX = ss.x - Math.cos(ss.angle) * ss.length;
          const tailY = ss.y - Math.sin(ss.angle) * ss.length;

          const gradient = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
          gradient.addColorStop(0, `rgba(201,168,76,0)`);
          gradient.addColorStop(0.7, `rgba(201,168,76,${alpha * 0.5})`);
          gradient.addColorStop(1, `rgba(255,255,255,${alpha})`);

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(ss.x, ss.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Head glow
          ctx.beginPath();
          ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.fill();
        }

        if (ss.life > ss.maxLife) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    animationFrameId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      aria-hidden="true"
    />
  );
}
