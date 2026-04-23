import Image, { StaticImageData } from "next/image";
import { GoDotFill } from "react-icons/go";

type Artistminicard = {
  name: string;
  profilePicture: StaticImageData;
};

export default function Followed({
  name,
  profilePicture,

}: Artistminicard) {
  return (
    <div className="flex text-center items-center ">        
        {/* Profile picture */}
        <div className="">
          <Image
            src={profilePicture}
            alt={name}
            className="h-12 w-12 rounded-full border-4 border-white object-cover"
          />
        </div>

        {/* Text */}
        <div className="mx-2">
            <h2 className="font-bold text-gray-900">{name}</h2>
        </div>

        <GoDotFill className="text-blue-800"/>  

      </div>
  );
}