interface Produk {
  id: number;
  title: string;
  price: number;
  stock: number;
  category: string;
  thumbnail: string;
}

export default async function ProdukPage() {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=12");
    if (!res.ok) {
      throw new Error("Gagal mengambil data dari server");
    }
    const data = await res.json();
    const listProduk: Produk[] = data.products;

    return (
      <div className="space-y-6 p-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-5">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider ">
              Manajemen Inventaris
            </span>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
              Katalog Produk Toko
            </h1>
          </div>
          <span className="text-xs font-bold text-slate-600">
            12 Barang Tersedia
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listProduk.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-400 transition-colors"
            >
              <div className="w-full h-48 bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-slate-50 rounded-xl overflow-hidden flex items-center justify-center mb-4 border border-blue-100/60">
                <img
                  className="w-full h-full object-contain p-2"
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
              <div className="flex items-center justify-between mb-2 gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {item.category}
                </span>
                <div className="gap-0.5 flex items-center justify-center">
                  <span className="text-[11px] font-mono text-slate-600">
                    Stok
                  </span>
                  <span className="text-[11px] font-mono text-slate-600">
                    {item.stock}
                  </span>
                </div>
              </div>
              <h2 className="text-[14px] font-bold text-slate-900 tracking-tight truncate mb-2">
                {item.title}
              </h2>
              <div className="flex items-center justify-between border-t pt-3 mt-auto">
                <span className="text-[12px] text-slate-400 font-medium">
                  Harga Satuan
                </span>
                <span className="text-[16px] font-black text-slate-900">
                  Rp {(item.price * 16000).toLocaleString("id-ID")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (err) {
    return (
      <div className="p-8">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-12 text-center max-w-md mx-auto flex flex-col items-center justify-center shadow-sm">
          <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-5 text-slate-400">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>

          <span className="text-[10px] font-mono font-bold text-rose-600 uppercase tracking-widest mb-3">
            Koneksi Gagal
          </span>

          <h2 className="text-lg font-black text-slate-900 tracking-tight">
            Katalog Belum Dapat Dimuat
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-1.5 leading-relaxed max-w-xs">
            Gagal menyinkronkan data produk dari server eksternal. Silakan
            periksa koneksi internet atau coba beberapa saat lagi.
          </p>
        </div>
      </div>
    );
  }
}
