import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A React-based task manager with drag-and-drop functionality.",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A weather app using OpenWeatherMap API and React.",
      image: "/placeholder.svg",
      link: "#"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={project.image} alt={project.title} className="mx-auto object-cover w-full h-48 mb-4" />
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
