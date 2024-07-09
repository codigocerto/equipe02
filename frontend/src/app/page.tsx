"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import styles from "./page.module.css";

// import audio from "../../public/audio/Marion.Barfs-Clint.Mansell.mp3";

import playAudioIcon from "../../public/images/volume-high-solid.svg";
import stopAudioIcon from "../../public/images/volume-xmark-solid.svg";
import VolumeHigh from "@/components/VolumeHigh";
import VolumeXMark from "@/components/VolumeXMark";

export default function Home() {
  const [playAudio, setPlayAudio] = useState(false);
  const audioElement = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (playAudio && audioElement.current) {
      // alert("play");
      audioElement.current.play();
    } else {
      audioElement.current?.pause();
    }
  }, [playAudio]);

  return (
    <main className={styles.site}>
      <div className={styles.Homehero}>
        <div className={styles.HomeheroCta}>
          <h1>Código Certo</h1>
          <p>Contruindo o amanhã, hoje!</p>
        </div>
        <div className={styles.Video}>
          <video
            src="https://eubzkoywhckxuyrjsrje.supabase.co/storage/v1/object/public/website/line-waves.webm?t=2024-03-19T22%3A09%3A07.266Z"
            autoPlay
            muted
            loop
          />
        </div>

        <div className={styles.MouseScroll}>
          <div className={styles.MouseBall}></div>
        </div>
      </div>

      <div className={styles.Audio} onClick={() => setPlayAudio(!playAudio)}>
        <audio
          ref={audioElement}
          src="/Marion.Barfs-Clint.Mansell.mp3"
          preload="auto"
          loop
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>

        {playAudio ? (
          <div className={styles.icon}>
            <VolumeHigh />
          </div>
        ) : (
          <div className={styles.icon}>
            <VolumeXMark />
          </div>
        )}
      </div>

      <div className={styles.Servicos}></div>
    </main>
  );
}
