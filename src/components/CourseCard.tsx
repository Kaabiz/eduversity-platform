import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  students: number;
  price: number;
  category: string;
  image: string;
}

const CourseCard = ({
  title,
  instructor,
  rating,
  students,
  price,
  category,
  image,
}: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <Badge variant="secondary" className="mb-2">
          {category}
        </Badge>
        <h3 className="font-semibold text-lg mb-2 text-dark">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">by {instructor}</p>
        <div className="flex items-center mb-3">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium">{rating}</span>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-sm text-gray-600">{students} students</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-primary">${price}</span>
          <button className="text-accent hover:text-accent-light font-medium text-sm">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;