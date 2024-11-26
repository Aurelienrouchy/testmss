import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

export function FormPartnerButtons() {
  return (
    <div className="flex justify-end w-full">
      <Button variant="ghost" type="submit">
        Annuler
      </Button>

      <DialogClose>
        <Button className="bg-violet-500" type="submit">
          Submit
        </Button>
      </DialogClose>
    </div>
  );
}
