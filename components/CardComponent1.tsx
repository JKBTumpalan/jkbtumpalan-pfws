import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface skillCardProps {
  icon?: any;
  title: string;
  description: string;
}

export const CardComponent1: React.FC<skillCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
            <FontAwesomeIcon
              className="w-4 cursor-pointer text-blue-400 hover:text-teal-700 transition duration-125 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              size="lg"
              icon={icon}
            />
          </div>
          <h2 className="text-gray-900 text-lg title-font font-medium">
            {title}
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent1;
