interface MetrikBisnis {
  judul: string;
  nilai: string;
  tren: string;
  keterangan: string;
}
interface PenjualanHarian {
  hari: string;
  persenTinggi: number;
  nominal: string;
  isPeak?: boolean;
}
interface TransaksiTerakhir {
  id: string;
  pelanggan: string;
  email: string;
  total: string;
  status: "Sukses" | "Pending" | "Batal";
  tanggal: string;
}
const dataTransaksi: TransaksiTerakhir[] = [
  {
    id: "#TRX-101",
    pelanggan: "Rian Aditya",
    email: "rian.adit@gmail.com",
    total: "Rp 498.000",
    status: "Sukses",
    tanggal: "29 Okt 2026",
  },
  {
    id: "#TRX-102",
    pelanggan: "Sarah Nabila",
    email: "sarah.nab@gmail.com",
    total: "Rp 249.000",
    status: "Pending",
    tanggal: "29 Okt 2026",
  },
  {
    id: "#TRX-103",
    pelanggan: "Budi Santoso",
    email: "budi.santoso@yahoo.com",
    total: "Rp 750.000",
    status: "Sukses",
    tanggal: "28 Okt 2026",
  },
  {
    id: "#TRX-104",
    pelanggan: "Dewi Lestari",
    email: "dewi.lestari@gmail.com",
    total: "Rp 120.000",
    status: "Batal",
    tanggal: "28 Okt 2026",
  },
];
const warnaStatus = {
  Sukses: "bg-emerald-50 text-emerald-700",
  Pending: "bg-amber-50 text-amber-700",
  Batal: "bg-rose-50 text-rose-600",
};

const dataGrafik: PenjualanHarian[] = [
  {
    hari: "Senin",
    persenTinggi: 40,
    nominal: "Rp 4.2jt",
  },
  {
    hari: "Selasa",
    persenTinggi: 65,
    nominal: "Rp 6.8jt",
  },
  {
    hari: "Rabu",
    persenTinggi: 50,
    nominal: "Rp 5.1jt",
  },
  {
    hari: "Kamis",
    persenTinggi: 75,
    nominal: "7.9jt",
  },
  {
    hari: "Jumat",
    persenTinggi: 100,
    nominal: "Rp 10.5jt",
    isPeak: true,
  },
  {
    hari: "Sabtu",
    persenTinggi: 85,
    nominal: "8.9jt",
  },
  {
    hari: "Minggu",
    persenTinggi: 60,
    nominal: "6.3jt",
  },
];
const dataMetrik: MetrikBisnis[] = [
  {
    judul: "Total Pendapatan",
    nilai: "Rp 48.500.000",
    tren: "+12.42",
    keterangan: "Bulan berjalan naik dari Rp 43.1jt bulan lalu",
  },
  {
    judul: "Total Transaksi",
    nilai: "142 Pesanan",
    tren: "8 Menunggu",
    keterangan: "134 transaksi berhasil diselesaikan",
  },
  {
    judul: "Produk Aktif",
    nilai: "12 Item",
    tren: "Katalog Live",
    keterangan: "12 produk siap jual di etalase toko",
  },
];

export default function DashboardPage() {
  return (
    <div className="bg-slate-50 min-h-screen p-8 text-slate-900 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dataMetrik.map((item) => (
          <div
            key={item.judul}
            className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {item.judul}
              </span>
              <span className="text-xs font-bold text-emerald-500 leading-none">
                {item.tren}
              </span>
            </div>
            <div className="text-3xl font-black text-slate-900 tracking-tight">
              {item.nilai}
            </div>
            <div className="text-xs text-slate-500 mt-2 font-medium">
              {item.keterangan}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Aktivitas Penjualan
            </h2>
            <p className="text-xs font-medium text-slate-500">
              Performa transaksi 7 hari terakhir
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-500 leading-none">
            Minggu Ini
          </span>
        </div>
        <div className="h-44 flex items-end justify-between gap-2 md:gap-4 pt-6">
          {dataGrafik.map((item) => (
            <div
              key={item.hari}
              className="flex-1 flex flex-col items-center gap-2 h-full justify-end group"
            >
              <div
                style={{ height: `${item.persenTinggi}%` }}
                className={`w-full rounded-lg transition-all duration-300 ${
                  item.isPeak
                    ? "bg-slate-900 shadow-sm"
                    : "bg-slate-100 group-hover:bg-slate-200"
                }`}
              ></div>
              <span
                className={`text-xs font-semibold ${
                  item.isPeak ? "text-slate-900 font-bold" : "text-slate-400"
                }`}
              >
                {item.hari.slice(0, 3)}
              </span>
              <span
                className={`text-[10px] font-bold transition-opacity duration-200 ${
                  item.isPeak
                    ? "text-slate-900 opacity-100"
                    : "text-slate-500 opacity-100 md:opacity-0 group-hover:opacity-100"
                }`}
              >
                {item.nominal}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Transaksi Terkini
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Aktivitas pesanan masuk secara real-time
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-500 leading-none">
            4 Pesanan Baru
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200/80 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <th className="pb-3 pr-4">Pelanggan</th>
                <th className="pb-3 px-4">Tanggal</th>
                <th className="pb-3 px-4 text-right">Total Belanja</th>
                <th className="pb-3 pl-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {dataTransaksi.map((trx) => (
                <tr
                  key={trx.id}
                  className="hover:bg-slate-50/80 transition-colors group"
                >
                  <td className="py-4 pr-4">
                    <div className="text-sm font-bold text-slate-900">
                      {trx.pelanggan}
                    </div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">
                      {trx.email}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-xs font-medium text-slate-500">
                    {trx.tanggal}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className="text-sm font-bold text-slate-900 tracking-tight">
                      {trx.total}
                    </span>
                  </td>
                  <td className="py-4 pl-4 text-center">
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-700">
                      <span
                        className={`px-1.5 py-1.5 rounded-sm flex items-center justify-center ${warnaStatus[trx.status]}`}
                      >
                        {trx.status}
                      </span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
