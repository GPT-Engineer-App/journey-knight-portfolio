import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "Express", "MongoDB", "Python",
    "Django", "PostgreSQL", "HTML5", "CSS3", "Git", "Docker"
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
