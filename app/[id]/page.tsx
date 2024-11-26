"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import { HeaderPartner } from "./components/HeaderPartner";
import { ImagesPartner } from "./components/ImagesPartner";
import Image from "next/image";

const partners = [
  {
    id: 3,
    name: "Heitz",
    logo: "images/heitz.svg",
    subTitle: "Fais plein de trucs trop bien avec cette API partenaire",
    website: "heitz.com",
    docs: "Docs",
    buildBy: "Lead",
    images: [
      {
        url: "/images/sapin.avif",
      },
      {
        url: "/images/sapin.avif",
      },
    ],
    summary:
      "Index pricing is straightforward. The page supports monthly and yearly plans, three different pricing tiers, and an additional enterprise solution for big corporations and large teams.",
  },
];

export default function Page() {
  const { id } = useParams();
  const partner = partners.find((pt) => pt.id === Number(id));

  if (!partner) {
    return <h1>Not Found</h1>;
  }

  function handleClick() {}

  return (
    <div>
      <div className="flex h-12 gap-3">
        <Image src={partner.logo} alt={partner.name} width="40" height="40" />
        <div>
          <p className="text-xl font-medium">{partner.name}</p>
          <p className="text-sm font-normal text-zinc-600">
            {partner.subTitle}
          </p>
        </div>
      </div>
      <Separator className="my-6" />
      <Card className="flex flex-col p-6 gap-6">
        <HeaderPartner
          website={partner.website}
          docs={partner.docs}
          buildby={partner.buildBy}
          onClick={handleClick}
        />
        <ImagesPartner photos={partner.images} />
        <div>
          <h3 className="text-sl font-normal">Résumé</h3>
          <h3 className="text-sm font-normal text-zinc-600 mt-1.5">
            {partner.summary}
          </h3>
        </div>
      </Card>
    </div>
  );
}
