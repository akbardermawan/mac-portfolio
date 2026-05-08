import clsx from "clsx";
import { imagesGalry } from "../../common/constants/index.js";
import { useDispatch } from "react-redux";
import { openWindow } from "../../common/store/state/windowSlice";

const galeryMenu = ["Library", "Memories", "Places", "People", "Favorite"];

const PhotosBody = () => {
  const dispatch = useDispatch();

  const openItem = (item) => {
    if (["fig", "url"].includes(item.fileType) && item.href) {
      window.open(item.href, "_blank");
    }

    if (["txt", "img"].includes(item.fileType)) {
      return dispatch(openWindow({ windowKey: "textandphoto", data: item }));
    }
  };

  return (
    <div className="flex w-full h-full">
      {/* LEFT */}
      <div className="w-[35%] h-full p-4">
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
