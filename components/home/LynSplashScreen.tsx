"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SPLASH_VIDEO = "/assets/splash.mp4";
const EXIT_MS = 420;

type LynSplashScreenProps = {
  onComplete: () => void;
};

export default function LynSplashScreen({ onComplete }: LynSplashScreenProps) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [exiting, setExiting] = useState(false);
  const finishedRef = useRef(false);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    onComplete();
  }, [onComplete]);

  const startExit = useCallback(() => {
    if (finishedRef.current) return;
    setExiting(true);
    window.setTimeout(finish, EXIT_MS);
  }, [finish]);

  useEffect(() => {
    if (reduceMotion) {
      const t = window.setTimeout(finish, 400);
      return () => window.clearTimeout(t);
    }

    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      void video.play().catch(() => startExit());
    };

    if (video.readyState >= 2) play();
    else video.addEventListener("canplay", play, { once: true });

    return () => video.removeEventListener("canplay", play);
  }, [reduceMotion, finish, startExit]);

  if (reduceMotion) {
    return (
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Image
          src="/assets/logo.svg"
          alt="Lynco"
          width={325}
          height={70}
          priority
          className="h-14 w-auto max-w-[min(300px,78vw)]"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: EXIT_MS / 1000, ease: "easeInOut" }}
    >
      <video
        ref={videoRef}
        src={SPLASH_VIDEO}
        autoPlay
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        controls={false}
        controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
        onEnded={startExit}
        onError={startExit}
        aria-hidden
        tabIndex={-1}
        className="pointer-events-none max-h-[min(80vh,100%)] max-w-[min(92vw,100%)] select-none border-0 bg-transparent object-contain outline-none [-webkit-tap-highlight-color:transparent] [appearance:none] [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-enclosure]:hidden"
      />
    </motion.div>
  );
}
