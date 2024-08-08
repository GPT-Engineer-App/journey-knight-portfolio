import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <Input type="text" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <Textarea placeholder="Your Message" rows={4} />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
