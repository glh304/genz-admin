export default function LoadingProduk() {
  return (
    <div className="space-y-6 p-8 animate-pulse">
      <div className="flex items-center justify-between border-b border-slate-200 pb-5">
        <div className="space-y-2">
          <div className="h-3 w-28 bg-slate-200 rounded"></div>
          <div className="h-6 w-48 bg-slate-300 rounded"></div>
        </div>
        <div className="h-4 w-24 bg-slate-200 rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <div
            key={item}
            className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-4"
          >
            <div className="w-full h-48 bg-slate-100 rounded-xl"></div>

            <div className="flex justify-between items-center">
              <div className="h-2.5 w-16 bg-slate-100 rounded"></div>
              <div className="h-2.5 w-10 bg-slate-100 rounded"></div>
            </div>

            <div className="h-4 w-3/4 bg-slate-200 rounded"></div>

            <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
              <div className="h-3 w-16 bg-slate-100 rounded"></div>
              <div className="h-4 w-20 bg-slate-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
