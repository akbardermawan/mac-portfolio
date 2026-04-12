import { useDispatch } from "react-redux";
import { openWindow } from "../../common/store/state/windowSlice";
import { imagesGalry } from "../../common/constants/index.js";

const PhotosBodyAndroid = () => {
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
    <div className="p-4">
      <ul className="grid grid-cols-4 gap-2">
        {imagesGalry.map((item) => (
          <li
            key={item.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => openItem(item)}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-30 h-30 object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotosBodyAndroid;
