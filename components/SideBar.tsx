import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronDown, Home, ServerIcon } from "lucide-react";

const items = [
  {
    title: "Tableau de bord",
    items: [
      {
        title: "Prospects",
        icon: Home,
        url: "",
      },
      {
        title: "Activités",
        icon: ServerIcon,
        url: "",
      },
    ],
  },
  {
    title: "Paramètres",
    items: [
      {
        title: "SMS",
        icon: null,
        url: "",
      },
      {
        title: "Activités",
        icon: null,
        url: "",
      },
      {
        title: "Statistiques",
        icon: null,
        url: "",
      },
    ],
  },
];

export function SideBar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu>
          {items.map((menu) => (
            <Collapsible
              key={menu.title}
              defaultOpen
              className="group/collapsible"
            >
              <SidebarGroup>
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger>
                    {menu.title}
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  {menu.items.map((item) => {
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            {item.icon && <item.icon />}
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
