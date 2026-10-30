"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="w-64 bg-white border-r border-slate-200/80 p-6 flex flex-col justify-between hidden md:flex">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-sm tracking-tighter">
              GZ
            </div>

            <div className="flex flex-col">
              <span className="font-black text-slate-900 tracking-tight text-base leading-none">
                GENZ-ADMIN
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                B2B Operations
              </span>
            </div>
          </div>
          <nav className="mt-8 space-y-1.5">
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-all ${pathname === "/dashboard" ? "font-bold bg-slate-900 text-white shadow-sm" : "font-semibold text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}
            >
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/produk"
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-all ${
                pathname === "/dashboard/produk"
                  ? "font-bold bg-slate-900 text-white shadow-sm"
                  : "font-semibold text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <span>Katalog Produk</span>
            </Link>
          </nav>
        </div>
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center font-bold text-xs text-slate-700">
              GW
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-900 leading-none">
                Galuh Wibowo
              </span>
              <span className="text-[10px] text-slate-400 font-medium mt-1">
                Admin Store
              </span>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 px-8 bg-white border-b border-slate-200/80 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 leading-none">
              {pathname === "/dashboard/produk"
                ? "Katalog Produk"
                : "Dashboard"}
            </h1>
          </div>
          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-xl text-xs text-slate-400 w-72 hover:border-slate-300 transition-colors">
            <input
              placeholder="Cari transaksi, produk, ID..."
              className="bg-transparent outline-none w-full text-xs text-slate-900 placeholder:text-slate-400 font-medium"
            />
            <kbd className="ml-auto text-[10px] shrink-0 bg-white border border-slate-200/80 px-1.5 py-0.5 rounded-md text-slate-400 font-mono font-bold shadow-sm">
              Ctrl K
            </kbd>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
