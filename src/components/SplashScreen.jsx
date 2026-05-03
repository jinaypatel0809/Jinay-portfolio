import React, { useEffect, useState, useRef } from "react";

const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState("intro"); // intro -> name -> glow -> fade
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("name"), 600);
    const t2 = setTimeout(() => setPhase("glow"), 2500);
    const t3 = setTimeout(() => setPhase("fade"), 7500);
    const t4 = setTimeout(() => onComplete(), 9500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let particles = [];

    const spawnBurst = (x, y, count, color) => {
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
        const speed = 1.5 + Math.random() * 3.5;
        const size = 1.5 + Math.random() * 3;
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          size,
          color,
          decay: 0.012 + Math.random() * 0.015,
        });
      }
    };

    const colors = ["#8245ec", "#a970ff", "#ffffff", "#c4a0ff", "#6b21d6"];
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Initial big burst
    spawnBurst(cx, cy, 60, "#8245ec");
    setTimeout(() => spawnBurst(cx - 80, cy, 25, "#a970ff"), 400);
    setTimeout(() => spawnBurst(cx + 80, cy, 25, "#ffffff"), 600);
    setTimeout(() => spawnBurst(cx, cy - 40, 30, "#c4a0ff"), 900);

    // Continuous ambient particles
    const ambientInterval = setInterval(() => {
      const x = cx + (Math.random() - 0.5) * 200;
      const y = cy + (Math.random() - 0.5) * 100;
      spawnBurst(x, y, 8, colors[Math.floor(Math.random() * colors.length)]);
    }, 350);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter(p => p.alpha > 0.01);
      particles.forEach(p => {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.vx *= 0.98;
        p.alpha -= p.decay;
        p.size *= 0.995;
      });
      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      clearInterval(ambientInterval);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "#050414",
      display: "flex", alignItems: "center", justifyContent: "center",
      transition: "opacity 2s ease",
      opacity: phase === "fade" ? 0 : 1,
      pointerEvents: phase === "fade" ? "none" : "all",
    }}>

      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
      }} />

      {/* Background radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(130,69,236,0.18) 0%, transparent 70%)",
        animation: "breathe 3s ease-in-out infinite",
      }} />

      {/* Main content */}
      <div style={{
        position: "relative", textAlign: "center", zIndex: 2,
        opacity: phase === "intro" ? 0 : 1,
        transform: phase === "intro" ? "scale(0.7)" : "scale(1)",
        transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)",
      }}>

        {/* Top line */}
        <div style={{
          width: phase === "name" || phase === "glow" ? "120px" : "0px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #8245ec, transparent)",
          margin: "0 auto 24px",
          transition: "width 1s ease 0.3s",
        }} />

        {/* Name */}
        <div style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(36px, 8vw, 64px)",
          fontWeight: 700,
          letterSpacing: "10px",
          color: "#ffffff",
          textShadow: phase === "glow"
            ? "0 0 20px #8245ec, 0 0 50px #8245ec88, 0 0 100px #8245ec44"
            : "0 0 30px rgba(130,69,236,0.4)",
          transition: "text-shadow 1s ease",
          lineHeight: 1.1,
        }}>
          JINAY
        </div>

        {/* Surname */}
        <div style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(28px, 6vw, 48px)",
          fontWeight: 700,
          letterSpacing: "14px",
          color: "#8245ec",
          textShadow: phase === "glow"
            ? "0 0 15px #8245ec, 0 0 40px #8245ec66"
            : "none",
          transition: "text-shadow 1s ease",
          marginTop: "4px",
        }}>
          PATEL
        </div>

        {/* Divider dots */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "8px", margin: "18px auto",
          opacity: phase === "glow" ? 1 : 0,
          transition: "opacity 1s ease 0.5s",
        }}>
          <div style={{ width: "30px", height: "1px", background: "#8245ec55" }} />
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#8245ec" }} />
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#8245ec" }} />
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#8245ec" }} />
          <div style={{ width: "30px", height: "1px", background: "#8245ec55" }} />
        </div>

        {/* Full name */}
        <div style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(8px, 1.5vw, 12px)",
          fontWeight: 300,
          letterSpacing: "6px",
          color: "#ffffff55",
          opacity: phase === "glow" ? 1 : 0,
          transform: phase === "glow" ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 1s ease 0.8s, transform 1s ease 0.8s",
        }}>
        </div>

        {/* Bottom line */}
        <div style={{
          width: phase === "name" || phase === "glow" ? "120px" : "0px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #8245ec, transparent)",
          margin: "24px auto 0",
          transition: "width 1s ease 0.3s",
        }} />
      </div>

      <style>{`
        @keyframes breathe {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;