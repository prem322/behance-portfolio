import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl font-bold mb-4">
          Prem Debnath
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl text-gray-400 mb-6">
          Visual Artist | Editor | Designer | AI Content Specialist
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <Button className="text-lg">Let’s Connect</Button>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-10">
        <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Cinematic Video Edits",
              description: "Reels and montages using Premiere Pro & After Effects."
            },
            {
              title: "Social Media Design",
              description: "Instagram & LinkedIn content strategy and visual design."
            },
            {
              title: "Graphic & Logo Design",
              description: "Logos, branding kits, and promotional creatives."
            },
            {
              title: "AI + Creativity",
              description: "AI-generated visuals using Midjourney and creative tools."
            },
            {
              title: "Content Writing",
              description: "Scripts, blogs, captions for engaging brand content."
            }
          ].map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.03 }}>
              <Card className="bg-gray-900">
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-10 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-6">Skills & Tools</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          <li>Premiere Pro</li>
          <li>After Effects</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Canva</li>
          <li>Midjourney</li>
          <li>ChatGPT</li>
        </ul>
      </section>

      {/* About Section */}
      <section className="px-6 py-10">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400 max-w-3xl">
          I’m Prem Debnath, a visual creator with 6+ years of experience in video editing,
          graphic design, AI content, and social media strategy. I combine creativity and tech to
          produce content that resonates and converts. I love telling stories through visuals and helping brands find their voice.
        </p>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-10 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Work Together</h2>
        <p className="text-gray-400 mb-2">📩 prem200103@gmail.com</p>
        <p className="text-gray-400">🔗 LinkedIn: linkedin.com/in/prem-debnath-64865b222</p>
      </section>
    </div>
  );
}
