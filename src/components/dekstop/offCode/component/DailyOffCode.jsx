import React from "react";
import clsx from "clsx";

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
                Slow life My Daily
              </span>

              <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
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
                When I'm not in front of my computer or traveling, I enjoy
                spending my time gardening, fishing, and raising goats. For me,
                these simple activities are a way to take a break from my daily
                routine, enjoy the peaceful atmosphere of the countryside, and
                recharge my energy.
              </p>

              <p>
                Gardening teaches me to appreciate the process and the value of
                patience. Fishing gives me a chance to slow down and enjoy
                moments of tranquility, while raising goats brings a simple yet
                rewarding routine to my everyday life.
              </p>

              <p>
                I believe life doesn't always have to be about work, technology,
                or traveling to faraway places. Sometimes, happiness can be
                found in the simplest things: watering plants in the morning,
                sitting quietly while waiting for a fish to bite, or taking care
                of the goats in my spare time.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 px-5 py-4">
              <p className="text-sm font-medium italic leading-6 text-emerald-800">
                "simpler, more relaxed, and closer to nature."
              </p>
            </div>
          </article>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside
          className={clsx(
            isFullscreen ? "md:block md:w-[40%]" : "",
            "hidden shrink-0",
          )}
        >
          <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                My daily routine lately
              </span>
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
