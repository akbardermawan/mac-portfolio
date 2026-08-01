import React, { useState } from "react";
import { visualStudioProject } from "../../../../common/constants";
import clsx from "clsx";

import { LuFiles, LuSearch } from "react-icons/lu";
import { FaCodeBranch, FaEllipsisH, FaAngleRight } from "react-icons/fa";
import { VscDebugAlt, VscExtensions, VscAccount } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setActiveLocation } from "../../../../common/store/state/locationVsSlice";
import EditorAreaVisualStudio from "./EditorAreaVisualStudio";

const ContainVisualStudio = () => {
  const [openFolder, setOpenFolder] = useState(false);
  const [openFolder2, setOpenFolder2] = useState(false);

  const dispatch = useDispatch();
  const activeLocation = useSelector(
    (state) => state.locationVs.activeLocation,
  );

  // Membuka / menutup folder utama
  const toggleFolderHandle = () => {
    setOpenFolder((prev) => !prev);
  };

  // Membuka / menutup folder anak
  const toggleFolder2Handle = () => {
    setOpenFolder2((prev) => !prev);
  };

  const openItem = (item) => {
    dispatch(setActiveLocation(item));
    console.log(activeLocation);
  };

  return (
    <div className="w-full h-full flex">
      {/* SIDEBAR */}
      <div className="w-[5%] flex justify-between items-center flex-col pb-8 bg-white/5 border border-r-gray-700">
        <ul className="flex flex-col justify-center items-center gap-1">
          <li className="my-1">
            <LuFiles className="w-6 h-6 text-gray-400" />
          </li>

          <li className="my-1">
            <LuSearch className="w-6 h-6 text-gray-400" />
          </li>

          <li className="my-1">
            <FaCodeBranch className="text-gray-400 w-5 h-5" />
          </li>

          <li className="my-1">
            <VscDebugAlt className="w-6 h-6 text-gray-400" />
          </li>

          <li className="my-1">
            <VscExtensions className="w-6 h-6 text-gray-400" />
          </li>
        </ul>

        <ul className="flex flex-col justify-center items-center gap-1">
          <li className="my-1">
            <VscAccount className="w-6 h-6 text-gray-400" />
          </li>

          <li className="my-1">
            <IoSettingsOutline className="w-6 h-6 text-gray-400" />
          </li>
        </ul>
      </div>

      {/* EXPLORER */}
      <div className="bg-white/5 w-[25%] border border-r-gray-700 relative pb-8">
        <div className="flex justify-between items-center mx-4 my-2">
          <p className="text-gray-600">EXPLORER</p>

          <FaEllipsisH className="w-4 h-4 text-gray-400" />
        </div>

        <div className="w-full">
          <ul className="w-full">
            {visualStudioProject.map((item) => (
              <li key={item.id} className="w-full">
                {/* ITEM BIASA */}
                {item.windowKey ? (
                  <button
                    type="button"
                    className={clsx(
                      item.id === activeLocation?.id ? "bg-white/10" : "",
                      "w-full text-gray-300 flex items-center gap-1 hover:bg-white/10 cursor-pointer",
                    )}
                    onClick={() => openItem(item)}
                  >
                    <img src={item.img} alt={item.name} className="w-5 h-5" />

                    <p>{item.name}</p>
                  </button>
                ) : (
                  /* FOLDER UTAMA */
                  <div>
                    <button
                      type="button"
                      className="w-full text-gray-300 flex items-center gap-1 hover:bg-white/10 cursor-pointer"
                      onClick={toggleFolderHandle}
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className={`w-5 h-5 transition-transform ${
                          openFolder ? "rotate-90" : ""
                        }`}
                      />

                      <p>{item.name}</p>
                    </button>

                    {/* CHILDREN */}
                    {openFolder && (
                      <ul className="w-full">
                        {item.children?.map((itemChild) => (
                          <li key={itemChild.id} className="w-full">
                            {itemChild.children ? (
                              /* FOLDER ANAK */
                              <>
                                <button
                                  type="button"
                                  className={clsx(
                                    itemChild.id === activeLocation?.id
                                      ? "bg-white/10"
                                      : "",
                                    "w-full text-gray-300 flex items-center gap-1 hover:bg-white/10 pl-4 cursor-pointer",
                                  )}
                                  onClick={toggleFolder2Handle}
                                >
                                  <img
                                    src={itemChild.img}
                                    alt={itemChild.name}
                                    className={`w-5 h-5 transition-transform ${
                                      openFolder2 ? "rotate-90" : ""
                                    }`}
                                  />

                                  <p>{itemChild.name}</p>
                                </button>

                                {/* CHILDREN DARI FOLDER ANAK */}
                                {openFolder2 && (
                                  <ul className="w-full">
                                    {itemChild.children.map((subItem) => (
                                      <li key={subItem.id} className="w-full">
                                        <button
                                          type="button"
                                          className={clsx(
                                            subItem.id === activeLocation?.id
                                              ? "bg-white/10"
                                              : "",
                                            "w-full text-gray-300 flex items-center gap-1 hover:bg-white/8 pl-8 cursor-pointer",
                                          )}
                                          onClick={() => openItem(subItem)}
                                        >
                                          <img
                                            src={subItem.img}
                                            alt={subItem.name}
                                            className="w-5 h-5"
                                          />

                                          <p>{subItem.name}</p>
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            ) : (
                              /* FILE / ITEM BIASA */
                              <button
                                type="button"
                                className={clsx(
                                  itemChild.id === activeLocation?.id
                                    ? "bg-white/10"
                                    : "",
                                  "w-full text-gray-300 flex items-center gap-1 hover:bg-white/10 pl-4 cursor-pointer",
                                )}
                                onClick={() => openItem(itemChild)}
                              >
                                <img
                                  src={itemChild.img}
                                  alt={itemChild.name}
                                  className="w-5 h-5"
                                />

                                <p>{itemChild.name}</p>
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* OUTLINE & TIMELINE */}
        <div className="w-full absolute bottom-8 right-0">
          <div className="flex items-center border border-t-gray-700">
            <FaAngleRight className="w-4 h-4 text-gray-400" />
            <p className="text-gray-400">OUTLINE</p>
          </div>

          <div className="flex items-center border border-t-gray-700">
            <FaAngleRight className="w-4 h-4 text-gray-400" />
            <p className="text-gray-400">TIMELINE</p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="bg-black w-[70%] h-[2.5rem]">
        <EditorAreaVisualStudio />
      </div>
    </div>
  );
};

export default ContainVisualStudio;
