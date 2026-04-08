import clsx from "clsx";
import React from "react";

const galeryMenu = ["Library", "Memories", "Places", "People", "Favorite"];

const imagesGalry = [
  { id: 1, name: "akbar.jpg", src: "/images/akbar.JPG" },
  { id: 2, name: "blog1.png", src: "/images/blog1.png" },
];

const PhotosBody = () => {
  const openItem = (item) => {
    console.log("Open:", item);
  };

  return (
    <div className="flex w-full h-full">
      {/* LEFT */}
      <div className="w-[35%] h-full bg-gray-100 p-4">
        <h3 className="font-semibold text-gray-400 text-sm font-georama">
          Photos
        </h3>

        <ul>
          {galeryMenu.map((item, index) => (
            <li
              key={index}
              className={clsx(
                index == 0 ? "bg-blue-200 rounded-sm" : "",
                "flex my-2 p-1",
              )}
            >
              <p className="text-sm font-medium font-georama mx-1">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="w-[65%] bg-white p-4">
        <ul className="grid grid-cols-3 gap-4">
          {imagesGalry.map((item) => (
            <li
              key={item.id}
              className="list-none cursor-pointer text-center"
              onClick={() => openItem(item)}
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-20 h-20 object-cover mx-auto rounded-md"
              />
              <p className="text-xs truncate mt-1">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhotosBody;
