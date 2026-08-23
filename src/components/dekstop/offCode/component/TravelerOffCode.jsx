import React from "react";
import clsx from "clsx";

// redux
import { useSelector, useDispatch } from "react-redux";
import FooterOffCode from "./FooterOffCode";

const TravelerOffCode = () => {
  //Window Fullscrenn -> state redux
  const isFullscreen = useSelector((state) => state.offCode.isFullscreen);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div
        className={clsx(
          "mx-auto flex w-full gap-6 px-4 py-6 sm:px-6 lg:px-8",
          isFullscreen ? "max-w-[1800px]" : "max-w-7xl",
        )}
      >
        {/* LEFT SIDEBAR */}
        <aside
          className={clsx(
            isFullscreen ? "xl:block xl:w-[20%]" : "",
            "hidden shrink-0",
          )}
        >
          <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                Travel Guide
              </span>

              <h2 className="mt-2 text-lg font-bold leading-snug text-slate-900">
                Recommended Destinations
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Beberapa destinasi menarik yang bisa kamu kunjungi di Jawa
                Timur.
              </p>
            </div>

            <div className="space-y-3">
              <div className="group cursor-pointer rounded-xl border border-slate-100 p-4 transition hover:border-emerald-200 hover:bg-emerald-50">
                <p className="text-xs font-medium text-slate-400">Jember</p>
                <h3 className="mt-1 font-semibold text-slate-800 group-hover:text-emerald-700">
                  Papuma
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Pantai dengan pemandangan alam yang indah.
                </p>
              </div>

              <div className="group cursor-pointer rounded-xl border border-slate-100 p-4 transition hover:border-emerald-200 hover:bg-emerald-50">
                <p className="text-xs font-medium text-slate-400">Lumajang</p>
                <h3 className="mt-1 font-semibold text-slate-800 group-hover:text-emerald-700">
                  Tumpak Sewu
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Air terjun spektakuler di kaki Gunung Semeru.
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main
          className={clsx(
            "min-w-0",
            isFullscreen ? "md:w-[60%] xl:w-[60%]" : "w-full",
          )}
        >
          <article className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8 lg:px-10">
            {/* Article Header */}
            <header className="mb-8 border-b border-slate-100 pb-6">
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                My Travel Story
              </span>

              <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Why I Started Traveling
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
                Traveling gives me an opportunity to step away from my daily
                routine, explore nature, and discover new experiences.
              </p>
            </header>

            {/* Article Content */}
            <div className="space-y-6 text-[15px] leading-8 text-slate-600">
              <p>
                I started traveling to different places because I often felt
                bored and exhausted with my daily routine. As a website
                developer, I spend most of my day sitting in front of a computer
                screen.
              </p>

              <p>
                Over time, I began to feel that I needed to take a break from my
                daily activities, step away from my monitor, and experience the
                world beyond my workspace. That was when I developed the desire
                to travel and explore new places.
              </p>

              <p>
                For me, exploring nature has become one of the best ways to
                refresh my mind after spending days working in front of a
                computer. When I am surrounded by nature, I can temporarily
                forget about work, pressure, and other problems.
              </p>

              <p>
                The sound of the wind, the green trees, the atmosphere of the
                mountains, and the beauty of the beach give me a sense of peace
                that I cannot find while sitting in front of a computer screen.
              </p>

              <p>
                I gradually began to realize that every journey has its own
                story, challenges, and unique experiences. Some places bring a
                sense of peace, while some journeys are full of challenges.
              </p>

              <p>
                There are also unexpected moments that eventually become the
                most memorable parts of the trip.
              </p>

              <p>
                Since then, traveling has become more than just a way to escape
                boredom. Exploring different places has become part of how I
                enjoy life, discover new experiences, and take a break from my
                daily routine as a website developer.
              </p>

              <p>
                Every journey leaves behind a story, and through this blog, I
                would like to share my experiences and the stories from the
                places I have visited.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 px-5 py-4">
              <p className="text-sm font-medium italic leading-6 text-emerald-800">
                "Every journey leaves behind a story."
              </p>
            </div>
          </article>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside
          className={clsx(
            isFullscreen ? "md:block md:w-[40%] xl:w-[20%]" : "",
            "hidden shrink-0",
          )}
        >
          <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                Travel Checklist
              </span>

              <h2 className="mt-2 text-lg font-bold text-slate-900">
                Before You Travel
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Beberapa hal penting yang sebaiknya dipersiapkan sebelum
                perjalanan.
              </p>
            </div>

            <div className="space-y-5">
              {/* Travel Plan */}
              <div>
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-slate-800">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-sm text-emerald-700">
                    1
                  </span>
                  Travel Plan
                </h3>

                <ul className="space-y-1.5 pl-9 text-sm leading-6 text-slate-500">
                  <li>• Tentukan tujuan dan rute</li>
                  <li>• Tentukan tanggal perjalanan</li>
                  <li>• Tentukan transportasi</li>
                  <li>• Pesan penginapan jika diperlukan</li>
                  <li>• Periksa cuaca dan kondisi jalan</li>
                </ul>
              </div>

              {/* Documents */}
              <div>
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-slate-800">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-sm text-blue-700">
                    2
                  </span>
                  Documents
                </h3>

                <ul className="space-y-1.5 pl-9 text-sm leading-6 text-slate-500">
                  <li>• KTP / identitas diri</li>
                  <li>• SIM jika membawa kendaraan</li>
                  <li>• Tiket atau booking</li>
                  <li>• Paspor dan visa jika diperlukan</li>
                </ul>
              </div>

              {/* Finance */}
              <div>
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-slate-800">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-100 text-sm text-yellow-700">
                    3
                  </span>
                  Finance
                </h3>

                <ul className="space-y-1.5 pl-9 text-sm leading-6 text-slate-500">
                  <li>• Uang tunai secukupnya</li>
                  <li>• Kartu debit / kredit</li>
                  <li>• Pastikan saldo mencukupi</li>
                  <li>• Siapkan dana darurat</li>
                </ul>
              </div>

              {/* Luggage */}
              <div>
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-slate-800">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100 text-sm text-purple-700">
                    4
                  </span>
                  Luggage
                </h3>

                <ul className="space-y-1.5 pl-9 text-sm leading-6 text-slate-500">
                  <li>• Pakaian sesuai cuaca</li>
                  <li>• Perlengkapan mandi</li>
                  <li>• Obat pribadi</li>
                  <li>• Charger dan power bank</li>
                  <li>• Payung / jas hujan</li>
                </ul>
              </div>

              {/* Safety */}
              <div>
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-slate-800">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-100 text-sm text-red-700">
                    5
                  </span>
                  Safety
                </h3>

                <ul className="space-y-1.5 pl-9 text-sm leading-6 text-slate-500">
                  <li>• Beri tahu keluarga tentang perjalanan</li>
                  <li>• Simpan dokumen dengan aman</li>
                  <li>• Simpan nomor darurat</li>
                  <li>• Jangan berkendara saat mengantuk</li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* FOOTER */}
      <FooterOffCode />
    </div>
  );
};

export default TravelerOffCode;
