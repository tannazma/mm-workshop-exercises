import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  // Check if current page is the home page
  const router = useRouter();
  const isHome = router.pathname === "/";
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <nav className="p-4 border-white border-b backdrop-blur-md bg-slate-900/10 fixed top-0 w-full z-[100]">
        <ul className="flex justify-center container mx-auto">
          <li>
            <Link
              href="/"
              className="text-3xl bg-slate-900/25 hover:bg-slate-900/50 transition-colors ease-in duration-150 border border-white rounded-full w-14 h-14 flex items-center justify-center"
            >
              ⚒️
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex-grow px-4 container mx-auto mt-[calc(81px+4rem)] mb-16">
        {!isHome && (
          <Link
            className="py-2 underline text-white inline-block mb-2 absolute z-[60] ml-5 mt-2"
            href="/"
          >
            <ArrowLeft />
          </Link>
        )}
        <div className="bg-white rounded-xl shadow-2xl">{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
