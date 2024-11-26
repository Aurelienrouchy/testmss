import Image from "next/image";
import { Card, CardDescription } from "./ui/card";
import Link from "next/link";
import { Partner } from "@/app/types";

export function PartnerCard({ logo, name, description, id }: Partner) {
  return (
    <Link href={`/${id}`}>
      <Card className="flex flex-col p-4 gap-4 cursor-pointer">
        <div className="flex flex-row gap-2 items-center h-10">
          <Image src={logo} alt={name} width="40" height="40" />
          <p className="text-sm">{name}</p>
        </div>
        <CardDescription className="text-zinc-500 text-sm">
          {description}
        </CardDescription>
      </Card>
    </Link>
  );
}
