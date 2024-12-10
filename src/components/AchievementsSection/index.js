"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    id: 1,
    title: "Best Web App of the Year",
    description: "Awarded for developing an innovative e-learning platform",
    year: 2023,
    icon: Trophy,
  },
  {
    id: 2,
    title: "Certified Cloud Architect",
    description: "Achieved advanced certification in cloud architecture",
    year: 2022,
    icon: Award,
  },
  {
    id: 3,
    title: "Open Source Contributor",
    description: "Recognized as a top contributor to React.js community",
    year: 2021,
    icon: Star,
  },
  {
    id: 4,
    title: "Hackathon Winner",
    description: "First place in national AI-powered web app competition",
    year: 2020,
    icon: TrendingUp,
  },
];

const AchievementsSection = () => {
  const [hoveredAchievement, setHoveredAchievement] = useState(null);

  return (
    <section
      id="achievements"
      className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Achievements & Milestones
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-rose-500/10"
              onMouseEnter={() => setHoveredAchievement(achievement.id)}
              onMouseLeave={() => setHoveredAchievement(null)}
            >
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div
                  className={`p-2 rounded-full ${
                    hoveredAchievement === achievement.id
                      ? "bg-gradient-to-r from-rose-500 to-teal-500"
                      : "bg-gray-100 dark:bg-gray-800"
                  } transition-colors duration-300`}
                >
                  <achievement.icon
                    className={`h-6 w-6 ${
                      hoveredAchievement === achievement.id
                        ? "text-white"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  />
                </div>
                <div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  <CardDescription>{achievement.year}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Badge variant="outline" className="text-lg py-2 px-4">
            Always striving for excellence
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
