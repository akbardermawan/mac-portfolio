import React from "react";

// redux
import { useDispatch } from "react-redux";
import { toggleWindow } from "../../../../common/store/state/windowSlice";

const ReadmeVs = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-[40rem] px-4 pt-5 text-white">
      <div className="mx-auto max-w-3xl space-y-6">
        <h2 className="text-center text-2xl font-semibold">
          Welcome to My Portfolio Website
        </h2>

        <p className=" leading-relaxed">
          I apologize for any shortcomings on my website. I am continuously
          working to improve and develop it, and I hope to make it even better
          in the future. Thank you for your understanding and support.
        </p>

        <p className=" leading-relaxed">
          Visit the Safari section to learn more about me, or simply click
          <button
            type="button"
            onClick={() => dispatch(toggleWindow("safari"))}
            className="font-semibold underline transition-opacity cursor-pointer hover:opacity-70"
          >
            "Me"
          </button>
          to get to know me better.
        </p>
        <p className="leading-relaxed">
          Visit my GitHub profile (akbardermawan) to explore my other projects,
          or simply click{" "}
          <a
            href="https://github.com/akbardermawan"
            target="_blank"
            className="font-semibold underline transition-opacity cursor-pointer hover:opacity-70"
          >
            "My GitHub"
          </a>
          .
        </p>

        <p className="leading-relaxed">
          Want to check out the repository for this website? Just click{" "}
          <a
            href="https://github.com/akbardermawan/mac-portfolio"
            target="_blank"
            className="font-semibold underline transition-opacity cursor-pointer hover:opacity-70"
          >
            "My Repository"
          </a>
          . And don't forget to give it a star too. Hehe :)
        </p>
      </div>
    </div>
  );
};

export default ReadmeVs;
