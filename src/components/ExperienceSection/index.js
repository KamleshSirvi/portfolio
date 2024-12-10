"use client";

import { motion } from "framer-motion";

const experienceData = [
  {
    companyName: "HashKraft Technologies",
    position: "Software Engineer",
    description:
      "Developed and maintained scalable web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    skills: ["React", "Node.js", "Express.js", "MySQL", "AWS"],
    years: "Aug 2024 - Present",
    type: "Full-time",
  },
  {
    companyName: "HashKraft Technologies",
    position: "Sofware Developer Intern",
    description:
      "Assisted in developing machine learning models for predictive analytics. Conducted data cleaning and preprocessing tasks.",
    skills: ["React", "Node.js", "Express.js", "MySQL", "AWS"],
    years: "Mar 2024 - Jul 2024",
    type: "Internship",
  },
  {
    companyName: "Gamayas Pvt. LTD.",
    position: "Technical Executive Intern",
    description:
      "Contributed to the development of responsive web designs. Gained hands-on experience with modern frontend technologies.",
    skills: ["React", "Node.js", "Express.js", "mongoDB", "Figma"],
    years: "May 2023 - Jul 2023",
    type: "Internship",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {exp.companyName}
                    </h3>
                    <p className="text-lg text-secondary-foreground">
                      {exp.position}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">{exp.years}</p>
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground mt-1">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <p className="text-card-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.2 + skillIndex * 0.1,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <motion.div
                className="h-1 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
