import { BookOpen, Users, Trophy, Clock } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Expert-Led Courses",
    description: "Learn from industry professionals and experienced instructors",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Interactive Learning",
    description: "Engage with peers and instructors in collaborative sessions",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Certificates",
    description: "Earn recognized certificates upon course completion",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Flexible Schedule",
    description: "Learn at your own pace with lifetime access to courses",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Why Choose EduNext?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide the tools and resources you need to succeed in your learning
            journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;