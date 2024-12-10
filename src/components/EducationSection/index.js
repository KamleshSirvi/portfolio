"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    collegeName: "Indian Institute of Information Technology, Vadodara",
    year: "2020 - 2024",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/45/Indian_Institute_of_Information_Technology_Vadodara_Logo.svg",
    stream: "Computer Science",
  },
  {
    collegeName: "Disha Delphi Global Sr Sec School, Kota",
    year: "2019 - 2020",
    logo: "/placeholder.svg?height=80&width=80",
    stream: "Science Maths",
  },
];

const EducationSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-6 flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={edu.logo}
                    alt={`${edu.collegeName} logo`}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {edu.collegeName}
                  </h3>
                  <p className="text-muted-foreground mb-2">{edu.year}</p>
                  <p className="text-secondary-foreground">{edu.stream}</p>
                </div>
              </div>
              <div className="bg-accent px-6 py-4">
                <motion.div
                  className="h-1 bg-primary rounded"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
