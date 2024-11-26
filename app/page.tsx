import { PartnerCard } from "@/components/PartnerCard";
import { Separator } from "@/components/ui/separator";

// n'a rien a faire ici !
const sections = [
  {
    title: "Acquisition",
    partners: [
      {
        id: 1,
        name: "Facebook",
        logo: "images/facebook.svg",
        description: "Réserve avec google et fais plein de trucs trop bien",
        url: "",
      },
      {
        id: 2,
        name: "Reserve with Google",
        logo: "images/google.svg",
        description: "Réserve avec google et fais plein de trucs trop bien",
        url: "",
      },
    ],
  },
  {
    title: "Gestion club",
    partners: [
      {
        id: 3,
        name: "Heitz",
        logo: "images/heitz.svg",
        description: "Réserve avec google et fais plein de trucs trop bien",
        url: "",
      },
      {
        id: 4,
        name: "Résamania V2",
        logo: "/images/resamania.svg",
        description: "Réserve avec google et fais plein de trucs trop bien",
        url: "",
      },
      {
        id: 5,
        name: "Deciplus",
        logo: "images/deciplus.svg",
        description: "Réserve avec google et fais plein de trucs trop bien",
        url: "",
      },
    ],
  },
  {
    title: "Agence marketing",
    partners: [
      {
        id: 6,
        name: "Click Funnels",
        logo: "images/click.svg",
        description: "Réserve avec google et fais plein de trucs trop bien",
        url: "",
      },
      {
        id: 7,
        name: "Funnelo",
        logo: "images/funnelo.svg",
        description: "Réserve avec google et fais plein de trucs trop bien",
        url: "",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="rounded-xl bg-white w-full flex justify-center items-center flex-col py-16">
      <div className="w-[36rem] flex-col">
        <div className=" text-left">
          <h2 className="text-2xl font-medium">API partenaires</h2>
          <p className="text-sm font-normal text-zinc-500">
            Manage you automatisation
          </p>
        </div>
        <Separator className="my-6" />
        <div className="w-full flex flex-col">
          {sections.map((section) => {
            return (
              <div key={section.title} className="w-full mb-6">
                <p className="text-xs text-zinc-500 mb-4 uppercase">
                  {section.title}
                </p>
                <div className="gap-4	grid grid-cols-3">
                  {section.partners.map((partner) => {
                    return <PartnerCard key={partner.id} {...partner} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
