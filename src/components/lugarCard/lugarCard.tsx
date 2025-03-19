import Image from "next/image";

interface LugarCardProps {
  title: string;
  imageSrc: string;
  description: string;
}

const LugarCard = ({ title, imageSrc, description }: LugarCardProps) => {
  return (
    <div className="bg-teal w-full flex flex-col items-center justify-center p-2 gap-1 min-h-[350px]">
      <div className="lg:w-full flex flex-col justify-center items-center">
        <h2 className="w-full lg:w-[500px] bg-blue-600 text-white flex justify-center p-4 text-2xl rounded-t-md">
          {title}
        </h2>

        <Image
          className="w-full h-48 object-cover lg:w-[500px] lg:h-72"
          src={imageSrc}
          alt={title}
          width={500}
          height={200}
        />

        <h2 className="w-full lg:w-[500px] bg-blue-600 text-white flex justify-center p-4 text-xl rounded-b-md">
          {description}
        </h2>
      </div>
    </div>
  );
};

export default LugarCard;
