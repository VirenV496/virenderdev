import React from 'react';
import { Highlighter } from "@/components/ui/highlighter";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: 'Aloha Technology',
    role: 'Senior Software Engineer',
    duration: 'Jan 2021 – Present',
    location: 'India',
    points: [
      'Led frontend development using React and Node.js for enterprise client integrations.',
      'Collaborated with cross-functional teams to deliver scalable SaaS solutions.',
      'Improved performance of client-facing dashboards by optimizing render cycles.',
    ],
  },
  {
    company: 'Self-Employed',
    role: 'Full Stack Developer',
    duration: '2019 – 2021',
    location: 'India',
    points: [
      'Built and deployed full stack web applications using React and Express.',
      'Worked with PostgreSQL, REST APIs, and cloud deployment pipelines.',
      'Delivered client projects across e-commerce, analytics, and internal tooling.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full text-black py-20 overflow-hidden bg-white"
    >
      <InteractiveGridPattern
        className={cn(
          "absolute inset-0 h-full w-full",
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="fill-gray-100"
      />

      <div className="relative z-10 px-2">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold inline-block">
            <Highlighter action="underline" color="#FFD700">
              Experience 💼
            </Highlighter>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto border-l border-gray-300 pl-8 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-yellow-400 border-2 border-white" />

              <div
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                style={{ border: '1px solid #e5e7eb' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-yellow-500 text-sm font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right text-xs text-gray-400 space-y-0.5">
                    <p>{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="mt-3 space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}