import React, { useEffect, useRef } from "react";

//component
import NavOffCode from "./NavOffCode";
import HomeOffCode from "./HomeOffCode";
import TravelerOffCode from "./TravelerOffCode";
import DailyOffCode from "./DailyOffCode";

//redux
import { useSelector, useDispatch } from "react-redux";

const OffCodeBody = () => {
  const scrollContainerRef = useRef(null);

  const dispatch = useDispatch();
  const activeLocation = useSelector(
    (state) => state.locationOffCd.activeLocation,
  );

  useEffect(() => {
    if (!activeLocation) return;
  }, [activeLocation]);

  const renderContent = () => {
    switch (activeLocation?.id) {
      case 1:
        return <HomeOffCode />;

      case 2:
        return <TravelerOffCode />;

      case 3:
        return <DailyOffCode />;

      default:
        return <HomeOffCode />;
    }
  };
  return (
    <div
      ref={scrollContainerRef}
      className="w-full h-full overflow-y-auto scroll-smooth bg-white rounded pb-5"
    >
      <div className="sticky top-0 z-50 w-full h-16">
        <NavOffCode scrollContainerRef={scrollContainerRef} />
      </div>

      <div className="w-full h-full ">{renderContent()}</div>
    </div>
  );
};

export default OffCodeBody;
