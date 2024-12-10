"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "An interactive weather app with location-based forecasts and historical data visualization.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "D3.js", "OpenWeatherMap API"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "A collaborative project management tool with real-time updates and team analytics.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Firebase", "Material-UI"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description:
      "A mobile-responsive web app for tracking workouts and nutrition with progress visualization.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React Native", "Express.js", "Chart.js"],
    githubLink: "#",
    liveLink: "#",
  },
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-rose-500 to-teal-500 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-rose-500/10"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
                />
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
