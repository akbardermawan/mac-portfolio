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
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                My daily routine lately
              </span>
            </div>
            <div>
              {/* Travel List */}
              <ul className="mx-auto max-w-6xl">
                {myDaily.map((item, index) => (
                  <li
                    key={item.id}
                    className={`my-2 group flex flex-col overflow-hidden border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl md:flex-row ${
                      index % 2 !== 0 ? "" : ""
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
                    </div>

                    {/* Content */}
                    <div
                      className={clsx(
                        isFullscreen ? " md:p-5 lg:p-8 w-[60%]" : "p-7 w-[50%]",
                        "flex  flex-col justify-center",
                      )}
                    >
                      <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 ">
                        {item.title}
                      </h2>
                      <p
                        className={clsx(
                          isFullscreen ? "hidden xl:flex" : "hidden",
                          "mt-3 text-base leading-7 text-gray-600 md:text-lg md:leading-8",
                        )}
                      >
                        {item.description}
                      </p>
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
