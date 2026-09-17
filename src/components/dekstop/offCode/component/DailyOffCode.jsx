import React from "react";
import clsx from "clsx";
import { myDaily } from "../../../../common/constants";

// redux
import { useSelector, useDispatch } from "react-redux";
import FooterOffCode from "./FooterOffCode";

const DailyOffCode = () => {
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
        {/* MAIN CONTENT */}
        <main className={clsx("min-w-0", isFullscreen ? "" : "", "w-[60%]")}>
          <article className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8 lg:px-10">
            <div className="mb-5">
              <span className="text-xl font-semibold uppercase tracking-wider text-amber-600">
                My daily routine lately
              </span>
            </div>
            <div>
              {/* Travel List */}
              <ul className="mx-auto max-w-6xl space-y-10">
                {myDaily.map((item) => (
                  <li key={item.id} className="group relative">
                    {/* Image */}
                    <div className="relative h-[420px] overflow-hidden rounded-3xl md:h-[520px]">
                      <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Floating Content */}
                    <div className="relative mx-4 -mt-24 rounded-2xl bg-white p-6 shadow-xl md:mx-10 md:p-8">
                      <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                        {item.title}
                      </h2>

                      <p className="mt-3 text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className={clsx(isFullscreen ? "" : "", "w-[40%] shrink-0")}>
          <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {/* Article Header */}
            <header className="mb-8 border-b border-slate-100 pb-6">
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                Slow life My Daily
              </span>

              <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 ">
                Behind the Scenes
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
                Beyond my work as a web developer and my journeys exploring
                different places, I enjoy living a simpler life and staying
                close to nature.
              </p>
            </header>

            {/* Article Content */}
            <div className="space-y-6 text-[15px] leading-8 text-slate-600">
              <p>
                When I’m not working or traveling, I enjoy gardening, fishing,
                and raising goats. These simple activities help me slow down,
                enjoy the peaceful countryside, and recharge.
              </p>

              <p>
                Gardening teaches me patience, fishing gives me moments of
                tranquility, and raising goats brings a rewarding routine to my
                life.
              </p>

              <p>
                I believe happiness can often be found in simple things—watering
                plants, waiting for a fish to bite, or caring for the goats.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 px-5 py-4">
              <p className="text-sm font-medium italic leading-6 text-emerald-800">
                "simpler, more relaxed, and closer to nature."
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* FOOTER */}
      <FooterOffCode />
    </div>
  );
};

export default DailyOffCode;
