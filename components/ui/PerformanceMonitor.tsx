"use client";
import React, { useEffect, useState } from "react";
import { usePerformanceMonitor } from "../../hooks/usePerformanceMonitor";

export default function PerformanceMonitor() {
  const { fps, memory } = usePerformanceMonitor();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sys-monitor">
      <div className="dial-container">
        {/* FPS DIAL */}
        <div className="dial-block">
          <div className="dial">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="tick"
                style={{ transform: `rotate(${i * 300}deg)` }}
              />
            ))}
            <div className="dial-inner">
              <div className="dial-value">{fps}</div>
              <div className="dial-label">FPS</div>
            </div>
          </div>
        </div>

        {/* MEMORY DIAL */}
        <div className="dial-block">
          <div className="dial">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="tick"
                style={{ transform: `rotate(${i * 300}deg)` }}
              />
            ))}
            <div className="dial-inner">
              <div className="dial-value">{memory ?? "—"}</div>
              <div className="dial-label">MEMORY</div>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Clock */}
      <div className="sys-clock">⏱ {time}</div>

      <div className="reflection" />

      <style>{`
        /* =============================
           SYSTEM MONITOR BASE (no card)
        ============================= */
        .sys-monitor {
          position: relative;
          background: transparent;
          padding: 28px 0;
          font-family: "JetBrains Mono", monospace;
          color: #e3e3f0;
          text-align: center;
          overflow: hidden;
          margin-top: 80px;
        }

        .sys-title {
          letter-spacing: 3px;
          font-size: 1rem;
          color: #a8a9b3;
          margin-bottom: 25px;
        }

        /* =============================
           DIALS GRID
        ============================= */
        .dial-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 50px;
          position: relative;
          z-index: 2;
        }

        .dial-block {
          position: relative;
          width: 200px;
          height: 200px;
        }

        /* =============================
           DIAL
        ============================= */
        .dial {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1.5px solid  rgba(88, 17, 17, 0.06);
          background: radial-gradient(circle at 40% 35%, #1a1a25 0%, #0c0c14 100%);
          box-shadow: inset 0 0 10px rgba(35, 135, 47, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .tick {
          position: absolute;
          top: 20px;
          left: 50%;
          width: 2px;
          height: 7px;
          background: rgba(150, 11, 11, 0.4);
          transform-origin: center 80px;
        }

        .dial-inner {
          position: absolute;
          text-align: center;
          animation: pulse 2.4s ease-in-out infinite;
        }

        .dial-value {
          font-size: 2.3rem;
          font-weight: 700;
          color: #f7f6f4a9;
        }

        .dial-label {
          font-size: 0.8rem;
          color: #aaa;
          letter-spacing: 1px;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.85; }
        }

        /* =============================
           REFLECTION OVERLAY
        ============================= */
        // .reflection {
        //   position: absolute;
        //   top: 0;
        //   left: -50%;
        //   width: 200%;
        //   height: 100%;
        //   background: linear-gradient(
        //     120deg,
        //     rgba(255, 255, 255, 0.05) 0%,
        //     rgba(255, 255, 255, 0.015) 40%,
        //     rgba(255, 255, 255, 0) 60%
        //   );
        //   animation: reflect 6s ease-in-out infinite;
        //   pointer-events: none;
        // }

        // @keyframes reflect {
        //   0% { transform: translateX(-100%); }
        //   100% { transform: translateX(100%); }
        // }

        /* =============================
           CLOCK
        ============================= */
        .sys-clock {
          margin-top: 25px;
          font-size: 0.9rem;
          letter-spacing: 1px;
          color: #9b9ca8;
          opacity: 0.9;
        }

        /* =============================
           RESPONSIVE
        ============================= */
        @media (max-width: 640px) {
          .dial-container {
            flex-direction: column;
            gap: 24px;
          }
          .dial-block {
            width: 130px;
            height: 130px;
          }
        }
      `}</style>
    </div>
  );
}
