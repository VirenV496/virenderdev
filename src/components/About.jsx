import React from "react";
import ScrollReveal from "./ScrollReveal";
import { Highlighter } from "@/components/ui/highlighter";

export default function About({ scrollContainerRef }) {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-white text-black p-8 sm:p-16 md:p-24 flex items-center justify-center"
    >
      <div className="max-w-4xl">
        <div className="mb-12 flex justify-center">
          <h2 className="text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
            <Highlighter action="underline" color="#FFD700">
              About Me 😊
            </Highlighter>
          </h2>
        </div>

        <ScrollReveal
          scrollContainerRef={scrollContainerRef}
          baseOpacity={0}
          enableBlur={true}
          baseRotation={1.2}
          blurStrength={10}
          containerClassName="space-y-8"
          textClassName="font-sans text-base sm:text-lg md:text-xl leading-relaxed"
        >
          {`
I'm a Senior Software Developer with 5+ years of experience building scalable web, mobile, and desktop applications using React, Next.js, React Native, Node.js, and .NET technologies. Over the years, I've worked on creating products that balance performance, usability, and maintainability.

My focus is on crafting intuitive user experiences through modern UI development, seamless interactions, performance optimization, and clean architecture. I enjoy transforming complex ideas into polished digital experiences that are both functional and easy to use.

Beyond development, I'm passionate about motion, interaction design, and web aesthetics. I love experimenting with layouts, animations, and micro-interactions to create interfaces that feel smooth, engaging, and purposeful. From early concepts to production-ready applications, my goal is always to build experiences that leave a lasting impression.
          `}
        </ScrollReveal>
      </div>
    </section>
  );
}