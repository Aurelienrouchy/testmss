import { Button } from "@/components/ui/button";
import { Milk } from "lucide-react";
import { DialogPartner } from "./DialogPartner";

interface HeaderPartnerProps {
  website: string;
  docs: string;
  buildby: string;
  onClick: () => void;
}

export function HeaderPartner({
  website,
  docs,
  buildby,
  onClick,
}: HeaderPartnerProps) {
  return (
    <div className="flex w-full justify-between">
      <div>
        <p className="text-xs text-zinc-500">WEBSITE</p>
        <p className="text-sm ">{website}</p>
      </div>
      <div>
        <p className="text-xs text-zinc-500">DOCS</p>
        <p className="text-sm ">{docs}</p>
      </div>
      <div>
        <p className="text-xs text-zinc-500">BUILT BY</p>
        <p className="text-sm ">{buildby}</p>
      </div>

      <DialogPartner />
    </div>
  );
}
