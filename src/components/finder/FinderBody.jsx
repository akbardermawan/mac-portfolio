import clsx from "clsx";
import { locations } from "../../common/constants";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setActiveLocation } from "../../common/store/state/locationSlice";
import { openWindow } from "../../common/store/state/windowSlice";

const FinderBody = () => {
  const dispatch = useDispatch();

  const activeLocation = useSelector((state) => state.location.activeLocation);

  const openItem = (item) => {
    if (item.fileType === "pdf") {
      dispatch(openWindow({ windowKey: "resume" }));
    }
    if (item.kind === "folder") {
      dispatch(setActiveLocation(item));
    }
    if (["fig", "url"].includes(item.fileType) && item.href) {
      window.open(item.href, "_blank");
    }

    if (["txt", "img"].includes(item.fileType)) {
      return dispatch(openWindow({ windowKey: "textandphoto", data: item }));
    }
  };

  return (
    <div className="flex w-full h-full">
      <div className="w-[35%] h-full bg-gray-100  p-4">
        <div>
          <h3 className="font-robot font-semibold text-gray-400 text-sm">
            Favorite
          </h3>
          <ul>
            {Object.values(locations).map((item) => (
              <li
                key={item.id}
                className={clsx(
                  item.id === activeLocation?.id
                    ? "bg-blue-200 rounded-sm "
                    : "",
                  "flex cursor-pointer my-2",
                )}
                onClick={() => dispatch(setActiveLocation(item))}
              >
                <img src={item.icon} alt={item.name} className="w-4" />
                <p className="text-sm font-medium font-roboto mx-1">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-robot font-semibold text-gray-400 text-sm">
            Work
          </h3>
          <ul>
            {locations.work.children.map((item) => (
              <li
                key={item.id}
                className={clsx(
                  item.id === activeLocation?.id
                    ? "bg-blue-200 rounded-sm "
                    : "",
                  "flex cursor-pointer my-2",
                )}
                onClick={() => dispatch(setActiveLocation(item))}
              >
                <img src={item.icon} alt={item.name} className="w-4" />
                <p className="text-sm font-medium font-roboto mx-1 truncate">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* right */}
      <div className="w-[65%] bg-white p-4">
        {activeLocation?.children.map((item) => (
          <li
            key={item.id}
            className={`${item.position} list-none cursor-pointer`}
            onClick={() => openItem(item)}
          >
            <img src={item.icon} alt={item.name} className="size-14" />
            <p className="font-roboto text-xs truncate">{item.name}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default FinderBody;
