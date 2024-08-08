const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/placeholder.svg" alt="John Doe" className="mx-auto object-cover rounded-full w-64 h-64" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Hi, I'm John Doe, a passionate Full Stack Developer with 5 years of experience in creating web applications.
              I love turning ideas into reality using code and am constantly learning new technologies to stay up-to-date in this fast-paced industry.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
