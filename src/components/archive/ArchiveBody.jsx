import React from "react";
import { Archive } from "../../common/constants";
import { useDispatch } from "react-redux";
import { openWindow } from "../../common/store/state/windowSlice";

const ArchiveBody = () => {
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
    <div className="w-full p-5">
      <ul className="grid grid-cols-3 gap-4">
        {Archive.map((item) => (
          <li
            key={item.id}
            className="list-none cursor-pointer text-center"
            onClick={() => openItem(item)}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-15 h-15 object-cover mx-auto rounded-md"
            />
            <p className="text-xs truncate mt-1">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArchiveBody;
