import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Milk } from "lucide-react";
import { FormPartner } from "./form/FormPartner";

export function DialogPartner() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-violet-500">
          <Milk /> Prende rendez vous
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-fit">
        <div>
          <p className="text-m font-medium">Prendre rendez vous</p>
          <p className="text-xs text-zinc-500">
            Selectionnez la tâche que vous avez effectué
          </p>
        </div>
        <FormPartner />
      </DialogContent>
    </Dialog>
  );
}
