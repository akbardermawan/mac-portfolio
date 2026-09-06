import React from "react";
import clsx from "clsx";
import { myTravel } from "../../../../common/constants";

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
                I started traveling because I often felt bored and exhausted by
                my daily routine as a website developer. Spending most of my
                time in front of a computer made me realize that I needed a
                break and wanted to experience the world beyond my workspace.
              </p>

              <p>
                Exploring nature has become one of the best ways for me to
                refresh my mind. The sound of the wind, green trees, mountains,
                and beaches give me a sense of peace and help me forget about
                work and daily pressures.
              </p>

              <p>
                Over time, I realized that every journey has its own story,
                challenges, and unexpected moments. Some trips bring peace,
                while others create unforgettable experiences.
              </p>

              <p>
                Traveling is now more than just an escape from boredom. It is a
                way for me to enjoy life, discover new experiences, and take a
                break from my routine as a website developer.
              </p>

              <p>
                Through this blog, I would like to share the stories,
                experiences, and memories from the places I have visited.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 px-5 py-4">
              <p className="text-sm font-medium italic leading-6 text-emerald-800">
                "Every journey leaves behind a story."
              </p>
            </div>
          </article>
          {/* My Travler */}
          <div className="mt-16 px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                Travel Journal
              </span>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                My Travel Story
              </h1>

              <p className="mt-4 text-base leading-relaxed text-gray-500 md:text-lg">
                A collection of places I have visited, stories I have
                experienced, and moments I will always remember.
              </p>
            </div>

            {/* Travel List */}
            <ul className="mx-auto max-w-6xl space-y-10 md:space-y-16">
              {myTravel.map((item, index) => (
                <li
                  key={item.id}
                  className={`group flex flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl md:flex-row ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative  w-full overflow-hidden  md:w-1/2">
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Dark Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Number */}
                    <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-gray-900 shadow-lg backdrop-blur-sm">
                      {String(item.id).padStart(2, "0")}
                    </div>

                    {/* Image Bottom Label */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-sm font-medium text-white/80">
                        Destination {String(item.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={clsx(
                      isFullscreen ? " md:p-5 lg:p-8 w-[60%]" : "p-7 w-[50%]",
                      "flex  flex-col justify-center",
                    )}
                  >
                    <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 ">
                      {item.title}
                    </h2>

                    <div className="my-6 h-px w-12 bg-gray-300" />

                    <p className="text-base leading-7 text-gray-600 md:text-lg md:leading-8">
                      {item.description}
                    </p>

                    {/* Button */}
                    <div className="mt-8 flex justify-between items-center">
                      <div
                        className=" relative inline-block cursor-pointer font-semibold text-gray-700 after:absolute font-noto hover:text-green-700
                after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-green-700 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 "
                      >
                        <span>Detail Story</span>
                      </div>
                      <div>
                        <a
                          href={item.map}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/button inline-flex items-center gap-3 rounded-full bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                        >
                          <span> Map</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
