import Image from "next/image";

const TourAreaItem = ({ index, title, description, imageSrc, imageAlt }: LugarItem) => {
  return (
    <div className="decoration-none">
      <h3 className=" bg-blue-600 text-md text-white flex justify-center items-center p-4 text-md rounded-t-md text-sm lg:text-lg w-full lg:w-full h-4 lg:h-auto font-lilita">
        {title}
      </h3>
      <figure className={`flex h-auto md:block ${index ? (index % 2 === 0 ? "flex-row-reverse" : "flex-row") : ''}`}>
      <Image
          className="w-32 h-32 md:w-full md:h-72 object-cover"
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={500}
        />
        <figcaption>
          <p className="lg:hidden text-white py-2 bg-gray-700 rounded-b-md font-lilita px-4 h-full sm:flex sm:items-center">
            {description}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default TourAreaItem;
