"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-x-hidden">
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 w-72 max-w-[85vw] bg-white z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigasi Menu Mobile"
      >
        <div>
          <div className="flex items-center justify-between">
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
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
              aria-label="Tutup menu navigasi"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="mt-8 space-y-2">
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm transition-all min-h-[44px] ${
                pathname === "/dashboard"
                  ? "font-bold bg-slate-900 text-white shadow-sm"
                  : "font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/produk"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm transition-all min-h-[44px] ${
                pathname === "/dashboard/produk"
                  ? "font-bold bg-slate-900 text-white shadow-sm"
                  : "font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
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
      </div>

      <aside className="w-64 bg-white border-r border-slate-200/80 p-6 flex flex-col justify-between hidden md:flex shrink-0">
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
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-all min-h-[44px] ${
                pathname === "/dashboard"
                  ? "font-bold bg-slate-900 text-white shadow-sm"
                  : "font-semibold text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/produk"
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-all min-h-[44px] ${
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

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 px-4 sm:px-6 md:px-8 bg-white border-b border-slate-200/80 flex items-center justify-between gap-3 sticky top-0 z-30">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2.5 -ml-1 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors shrink-0"
              aria-label="Buka menu navigasi"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-none truncate">
              {pathname === "/dashboard/produk"
                ? "Katalog Produk"
                : "Dashboard"}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2.5 bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-xl text-xs text-slate-400 w-48 md:w-72 hover:border-slate-300 transition-colors">
              <input
                placeholder="Cari transaksi, produk, ID..."
                className="bg-transparent outline-none w-full text-xs text-slate-900 placeholder:text-slate-400 font-medium"
              />
              <kbd className="ml-auto text-[10px] shrink-0 bg-white border border-slate-200/80 px-1.5 py-0.5 rounded-md text-slate-400 font-mono font-bold shadow-sm">
                Ctrl K
              </kbd>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
