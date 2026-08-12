import { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const initParticles = (w, h) => {
      const count = Math.min(120, Math.floor((w * h) / 13000));
      const list = [];
      for (let i = 0; i < count; i++) {
        list.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 1.1,
          vy: (Math.random() - 0.5) * 1.1,
          radius: Math.random() * 2.8 + 1.2,
          baseAlpha: Math.random() * 0.45 + 0.35,
          alpha: Math.random() * 0.45 + 0.35,
          pulseSpeed: Math.random() * 0.03 + 0.015,
          angle: Math.random() * Math.PI * 2,
        });
      }
      return list;
    };

    let particles = initParticles(width, height);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
      particles = initParticles(width, height);
    };

    const handleMouseMove = (e) => {
      if (e && typeof e.clientX === "number") {
        mouse.targetX = e.clientX;
        mouse.targetY = e.clientY;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Light orbs
    const lightOrbs = [
      { x: width * 0.2, y: height * 0.25, radius: 450, color: "rgba(215, 192, 145, 0.16)", vx: 0.4, vy: 0.3 },
      { x: width * 0.8, y: height * 0.65, radius: 480, color: "rgba(185, 155, 105, 0.14)", vx: -0.35, vy: -0.35 },
    ];

    const render = () => {
      if (isNaN(mouse.x)) mouse.x = width / 2;
      if (isNaN(mouse.y)) mouse.y = height / 2;

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Light orbs
      lightOrbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -150 || orb.x > width + 150) orb.vx *= -1;
        if (orb.y < -150 || orb.y > height + 150) orb.vy *= -1;

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "rgba(8, 8, 6, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Constellation lines
      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 32400) { // 180^2
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / 180) * 0.4;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(225, 202, 155, ${lineAlpha})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      }

      // Mouse interactive links
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < 44100) { // 210^2
          const dist = Math.sqrt(distSq);
          const lineAlpha = (1 - dist / 210) * 0.6;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = `rgba(245, 224, 177, ${lineAlpha})`;
          ctx.lineWidth = 1.3;
          ctx.stroke();
        }
      }

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        p.angle += p.pulseSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.angle) * 0.25;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(235, 212, 165, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-canvas" aria-hidden="true" />;
}
