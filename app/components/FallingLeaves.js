"use client";
import { React, useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from "framer-motion";


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

const FallingLeaves = ({images, count}) => {
    const [leaves, setLeaves] = useState([]);
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };
    const prevMouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            prevMouse.x.set(mouse.x.get());
            prevMouse.y.set(mouse.y.get());
            mouse.x.set(e.clientX);
            mouse.y.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

  useEffect(() => {
    const generatedLeaves = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * -window.innerHeight,
      size: 20 + Math.random() * 40,
      speed: 1 + Math.random() * 1.05,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
      swayAmplitude: 10 + Math.random() * 20,
      liftFactor: 0.1 + Math.random() * 0.2,
      image: images[Math.floor(Math.random() * images.length)],
    }));

    setLeaves(generatedLeaves);
  }, [count]);

  return (
    <>
        {leaves.map((leaf) => (
            <Leaf key={leaf.id} {...leaf} mouse={mouse} prevMouse={prevMouse}></Leaf>
        ))}
    </>
  );
}

const Leaf = ({x: initialX, y: initialY, size, speed, delay, rotation, swayAmplitude, liftFactor, image, mouse, prevMouse}) => {
    const x = useMotionValue(initialX);
    const y = useMotionValue(initialY);
    const r = useMotionValue(rotation);

    let windVelo = useRef(0);


    const rotate = useTransform(x, [-100, 100], [-15, 15]);

    const getInfluence = (dx, dy, radius = 300) => {
        const distance = Math.sqrt(dx * dx + dy * dy);
        return Math.max(0, 1 - distance / radius);
    };

      useEffect(() => {
        let rafId;

        const start = () => {
        const fall = () => {
            y.set(y.get() + speed);

            if (y.get() > window.innerHeight + 100) {
            y.set(-Math.random() * 200 - 50); // clearly above screen
            x.set(Math.random() * window.innerWidth);
            }
            

            const mx = mouse.x.get();
            const my = mouse.y.get();

            const mdx = mouse.x.get() - prevMouse.x.get();
            const mdy = mouse.y.get() - prevMouse.y.get();

            const dx = x.get() - mx;
            const dy = y.get() - my;

            const influence = getInfluence(dx, dy);

            const mouseSpeed = Math.abs(mdx) + Math.abs(mdy);
            if (mouseSpeed < 0.5) {
            // Mouse is still → wind dies naturally
                windVelo.current *= (0 - windVelo.current) * 0.05;
            } else {
            // Mouse is moving → wind follows mouse smoothly
                windVelo.current += (mdx - windVelo.current) * 0.15;
            }
           
            const flutter = Math.sin(Date.now() / 200 + x.get() / 50) * 0.5; 
            const lift = Math.max(0, mouseSpeed * influence * liftFactor + flutter);
            const sway = Math.sin(Date.now() / 500 + x.get() / 50) * swayAmplitude;
            const dragRot = Math.sin(Date.now() / 200 + x.get() / 50) * 0.25; 
            x.set(x.get() + sway * 0.02 + windVelo.current * influence * 0.5);
            y.set(y.get() + speed * 0.3 - lift * 1.2);
            r.set(r.get() + sway * 0.1 + dragRot + windVelo.current * influence * 3);
            

            rafId = requestAnimationFrame(fall);
        };

      fall();
    };

    const timeout = setTimeout(start, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, []);
    
    return (
        <motion.img
        src={image}
        style={{ x, y, rotate: r, width: `${size}px`, height: `${size}px` }}
        className="absolute opacity-60 fixed w-12 h-12 pointer-events-none"
        />
    );

}

export default FallingLeaves