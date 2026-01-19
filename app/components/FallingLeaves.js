"use client";
import { React, useState, useEffect } from 'react'
import Image from 'next/image';

const leafImages = [
    "/leaf1.png",
    "/leaf2.png",
    "/leaf3.png",
    "/leaf4.png",
    "/leaf5.png",
    "/leaf6.png"
];
/*
type Leaf = {
    id: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
    rotation: number;
    image: string;
};*/

const FallingLeaves = ({count = 30}) => {
      const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const generatedLeaves = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 20 + Math.random() * 30,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
      image: leafImages[Math.floor(Math.random() * leafImages.length)],
    }));

    setLeaves(generatedLeaves);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute top-5 animate-leaf-fall"
          style={{
            left: `${leaf.left}%`,
            width: leaf.size,
            height: leaf.size,
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
          }}
        >
          <Image
            src={leaf.image}
            alt="leaf falling"
            width={leaf.size}
            height={leaf.size}
            style={{
              transform: `rotate(${leaf.rotation}deg)`,
            }}
            priority={false}
          />
        </div>
      ))}
    </div>
  );
}

export default FallingLeaves