import React from 'react';

/**
 * SmileyLoader Component
 * Recreates the iconic morphing spinner-to-smiling-face loading animation
 * with a playful eye wink/blink at the end.
 *
 * @param {Object} props
 * @param {boolean} props.fullScreen - Whether to display full screen overlay
 * @param {string} props.bgColor - Background color (default deep navy blue #072B54)
 * @param {string} props.color - Color of eyes & smile (default #FFFFFF)
 * @param {string} props.text - Optional loading text below the smiley
 * @param {number} props.size - Size of the icon in pixels (default 80)
 */
export default function SmileyLoader({
  fullScreen = true,
  bgColor = '#082E59',
  color = '#FFFFFF',
  text = '',
  size = 90,
  onComplete
}) {
  return (
    <div
      className={`${
        fullScreen ? 'fixed inset-0 z-[999999]' : 'w-full h-full min-h-[220px]'
      } flex flex-col items-center justify-center select-none overflow-hidden`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Central Morphing Smiley Animation */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 
            =============================================================
            1. THE TWO EYES (Start as single center dot, split into 2, then right eye winks)
            =============================================================
          */}
          {/* Left Eye */}
          <circle
            cx="35"
            cy="42"
            r="7"
            fill={color}
            className="animate-left-eye"
            style={{ transformOrigin: '35px 42px' }}
          />

          {/* Right Eye (Splits to right, then winks/blinks) */}
          <ellipse
            cx="65"
            cy="42"
            rx="7"
            ry="7"
            fill={color}
            className="animate-right-eye-wink"
            style={{ transformOrigin: '65px 42px' }}
          />

          {/* 
            =============================================================
            2. THE ORBITING SPINNER ARC -> MORPHING TO SMILE
            =============================================================
          */}
          <path
            d="M 32 60 Q 50 82 68 60"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
            className="animate-smile-arc"
            style={{ transformOrigin: '50px 50px' }}
          />
        </svg>
      </div>

      {/* Optional Loading Caption */}
      {text && (
        <p
          className="mt-6 text-white/90 text-sm font-semibold tracking-[3px] uppercase font-sans animate-pulse"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}
        >
          {text}
        </p>
      )}

      {/* Keyframe Animations for Smooth Loop */}
      <style>{`
        /* LEFT EYE: starts centered at (50,50), expands & slides to left (35,42) */
        @keyframes leftEyeAnim {
          0% {
            transform: translate(15px, 8px) scale(0.5);
            opacity: 0.8;
          }
          20% {
            transform: translate(15px, 8px) scale(0.8);
            opacity: 1;
          }
          45% {
            transform: translate(0px, 0px) scale(1);
          }
          85% {
            transform: translate(0px, 0px) scale(1);
          }
          100% {
            transform: translate(15px, 8px) scale(0.5);
            opacity: 0.8;
          }
        }
        .animate-left-eye {
          animation: leftEyeAnim 2.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* RIGHT EYE: starts hidden/behind center, slides right (65,42), then WINKS (scaleY 0) */
        @keyframes rightEyeWinkAnim {
          0% {
            transform: translate(-15px, 8px) scale(0.2);
            opacity: 0;
          }
          20% {
            transform: translate(-15px, 8px) scale(0.6);
            opacity: 0.6;
          }
          45% {
            transform: translate(0px, 0px) scale(1) scaleY(1);
            opacity: 1;
          }
          62% {
            /* Full open */
            transform: translate(0px, 0px) scale(1) scaleY(1);
          }
          68% {
            /* Playful Wink (Blink to a thin slit) */
            transform: translate(0px, 0px) scale(1) scaleY(0.12);
          }
          74% {
            /* Pop back open */
            transform: translate(0px, 0px) scale(1.1) scaleY(1.1);
          }
          82% {
            transform: translate(0px, 0px) scale(1) scaleY(1);
          }
          100% {
            transform: translate(-15px, 8px) scale(0.2);
            opacity: 0;
          }
        }
        .animate-right-eye-wink {
          animation: rightEyeWinkAnim 2.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* SMILE ARC: starts as orbiting spinner arc around top/side, then curves down to smile */
        @keyframes smileArcAnim {
          0% {
            stroke-dasharray: 40 60;
            stroke-dashoffset: 0;
            transform: rotate(0deg) scale(0.85);
            opacity: 0.9;
          }
          30% {
            stroke-dasharray: 45 55;
            stroke-dashoffset: -120;
            transform: rotate(240deg) scale(0.95);
            opacity: 1;
          }
          50% {
            stroke-dasharray: 100 0;
            stroke-dashoffset: 0;
            transform: rotate(360deg) scale(1);
            opacity: 1;
          }
          85% {
            stroke-dasharray: 100 0;
            stroke-dashoffset: 0;
            transform: rotate(360deg) scale(1);
            opacity: 1;
          }
          100% {
            stroke-dasharray: 40 60;
            stroke-dashoffset: -200;
            transform: rotate(720deg) scale(0.85);
            opacity: 0.9;
          }
        }
        .animate-smile-arc {
          animation: smileArcAnim 2.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
