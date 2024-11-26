import Image from "next/image";

interface ImagesPartnerProps {
  photos: { url: string }[];
}

export function ImagesPartner({ photos }: ImagesPartnerProps) {
  return (
    <div className="grid grid-cols-2 w-full gap-2 h-46">
      {photos.map(({ url }) => (
        <Image
          key={url}
          src={url}
          alt={url}
          width={500}
          height={500}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
      ))}
    </div>
  );
}
