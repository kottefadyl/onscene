import Image, { StaticImageData } from "next/image";

type ArtistCardProps = {
  name: string;
  email: string;
  profilePicture: StaticImageData;
  backgroundPicture: StaticImageData;
  artType: string;
};

export default function ArtistCard({
  name,
  email,
  profilePicture,
  backgroundPicture,
  artType,
}: ArtistCardProps) {
  return (
    <div className="w-74 rounded-2xl overflow-hidden shadow-lg bg-neutral-100 border border-neutral-400 ">
      
      {/* Background */}
      <div className="relative h-20 w-full">
        <Image
          src={backgroundPicture}
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative px-4 pb-2 pt-6">
        
        {/* Profile picture */}
        <div className="absolute -top-8 left-4">
          <Image
            src={profilePicture}
            alt={name}
            className=" h-16 w-16 rounded-full border-4 border-white object-cover"
          />
        </div>

        {/* Text */}
        <h2 className="font-bold text-lg text-gray-900">{name}</h2>
        <p className="text-sm text-gray-500">{email}</p>

        {/* Tag */}
        <span className="inline-block mt-1 px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700">
          {artType}
        </span>
      </div>
    </div>
  );
}