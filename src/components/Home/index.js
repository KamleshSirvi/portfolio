"use client";

import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background/50"
    >
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 mb-8 lg:mb-0"
        >
          <div className="relative w-64 h-64 mx-auto lg:w-96 lg:h-96">
            <img
              src="src\assets\kamlesh1.png"
              alt="profile Photo"
              className="rounded-full shadow-2xl w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-primary">
            Kamlesh Kumar
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-secondary">
            Software Developer
          </h2>
          <p className="text-lg mb-6 text-muted-foreground">
            Passionate about creating elegant solutions to complex problems.
            Experienced in full-stack development with a focus on modern web
            technologies and user experience.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-block bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-full hover:bg-primary/90 transition-colors duration-300"
            >
              Get in Touch
            </a>
            {/* <Button variant="outline" className="border-rose-200 dark:border-gray-700">
                  Download CV
                </Button> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;
