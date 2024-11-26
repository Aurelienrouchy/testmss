"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <main className="rounded-xl bg-white w-full flex justify-center items-center flex-col py-16">
      <div className="w-[36rem] flex-col">
        <div
          onClick={() => router.back()}
          className="flex items-center gap-1 cursor-pointer mb-3"
        >
          <ArrowLeft width={16} height={16} />
          <h3 className="text-sm font-medium">API partenaires</h3>
        </div>
        {children}
      </div>
    </main>
  );
}
