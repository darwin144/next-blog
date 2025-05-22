'use client'
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState, useEffect } from 'react';


const TypingEffect = ({ text }: { text: string }) => {
  const steps = text.length;

  return (
    <h1
      className="text-3xl font-bold text-gray-900 dark:text-white typewriter repeat"
      style={{ '--steps': steps } as React.CSSProperties} // Menambahkan variabel CSS dinamis
    >
      {steps}{text}
    </h1>
  );
};


export default function Home() {

  const [text, setText] = useState("Selamat datang!");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText === "Selamat datang!" ? "Terima kasih telah mengunjungi blog kami!" : "Selamat datang!"
      );
    }, 5000); // Ganti teks setiap 5 detik

    return () => clearInterval(interval);
  }, []);


  return (
     <section className="p-6 space-y-4">
       <div>
          <TypingEffect text={text} />
      </div>
      <p className="text-gray-700 dark:text-gray-300">
        Di sini kamu bisa membaca artikel tentang pemrograman, web development, dan latihan Next.js.
      </p>
    </section>
  );
}
