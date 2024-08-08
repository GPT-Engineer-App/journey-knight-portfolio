import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">John Doe</h1>
        <p className="text-xl mb-8">Full Stack Developer</p>
        <Button className="bg-blue-500 hover:bg-blue-600">View My Work</Button>
      </div>
    </div>
  );
};

export default Hero;
