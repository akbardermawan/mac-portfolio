import React, { useState, useEffect } from "react";
import clsx from "clsx";

import { IoMdClose } from "react-icons/io";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setActiveLocation } from "../../../../common/store/state/locationVsSlice";

import HomeVs from "./HomeVs";
import AboutVs from "./AboutVs";
import ResumeVs from "./ResumeVs";
import ContactVs from "./ContactVs";
import AppVs from "./AppVs";
import ReadmeVs from "./ReadmeVs";
import DefaultVs from "./DefaultVs";
import AboutVsFull from "./AboutVsFull";

const EditorAreaVisualStudio = () => {
  const dispatch = useDispatch();
  const activeLocation = useSelector(
    (state) => state.locationVs.activeLocation,
  );
  //Window Fullscrenn -> state redux
  const isFullscreen = useSelector((state) => state.visualStudio.isFullscreen);
  //variabel penampung active location
  const [openLocations, setOpenLocations] = useState([]);
  //mantau perubahan active location
  useEffect(() => {
    if (!activeLocation) return;

    setOpenLocations((prev) => {
      // Jangan masukkan jika sudah ada
      const alreadyOpen = prev.some(
        (location) => location.id === activeLocation.id,
      );

      if (alreadyOpen) {
        return prev;
      }

      // Tambahkan lokasi baru
      return [...prev, activeLocation];
    });
  }, [activeLocation]);

  const deleteActiveLocation = (id) => {
    const nextLocations = openLocations.filter(
      (location) => location.id !== id,
    );

    setOpenLocations(nextLocations);

    if (id === activeLocation?.id) {
      const lastLocation = nextLocations[nextLocations.length - 1] ?? null;

      dispatch(setActiveLocation(lastLocation));
    }
  };

  const renderContent = () => {
    switch (activeLocation?.id) {
      case 31:
        return <HomeVs />;

      case 32:
        return isFullscreen ? <AboutVsFull /> : <AboutVs />;

      case 33:
        return <ResumeVs />;

      case 34:
        return <ContactVs />;

      case 11:
        return <AppVs />;

      case 2:
        return <ReadmeVs />;

      default:
        return <DefaultVs />;
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-9">
        <ul className="flex">
          {openLocations?.map((item) => (
            <li
              key={item.id}
              className={clsx(
                item.id === activeLocation?.id ? "" : "bg-white/5",
                "px-2 border border-r-white/10  flex items-center",
              )}
            >
              <button
                className="flex items-center justify-center cursor-pointer"
                onClick={() => {
                  dispatch(setActiveLocation(item));
                }}
              >
                <img src={item.img} alt="" className="w-4 h-4" />
                <p className="text-gray-200 m-1">{item.name}</p>
              </button>
              <button
                onClick={() => deleteActiveLocation(item.id)}
                className="w-6 h-6 rounded-md flex items-center justify-center ml-1 hover:bg-gray-400/30 cursor-pointer"
              >
                <IoMdClose className="w-4 h-4 text-gray-300" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-full border border-t-gray-500">
        {renderContent()}
      </div>
    </div>
  );
};

export default EditorAreaVisualStudio;
