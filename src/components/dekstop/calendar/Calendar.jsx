import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// redux
import { useSelector, useDispatch } from "react-redux";

const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

const Calendar = () => {
  // =========================
  // WINDOW POSITION
  // =========================
  const [position, setPosition] = useState({
    x: 20,
    y: 60,
  });
  // =========================
  // REDUX
  // =========================
  const win = useSelector((state) => state.window.windows.calendar);

  //Calendar
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const startOfMonth = currentMonth.startOf("month");
  const endOfMonth = currentMonth.endOf("month");

  const startDate = startOfMonth.startOf("week").add(1, "day");
  const endDate = endOfMonth.endOf("week").add(1, "day");

  const days = [];
  let date = startDate;

  while (date.isBefore(endDate) || date.isSame(endDate, "day")) {
    days.push(date);
    date = date.add(1, "day");
  }

  const today = dayjs();

  // =========================
  // WINDOW CLOSED
  // =========================
  if (!win?.isOpen) return null;
  return (
    <div
      style={{
        position: "absolute",
        right: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: win?.zIndex || 1000,
      }}
      onMouseDown={() => dispatch(focusWindow("calendar"))}
      className="
            hidden md:flex md:flex-col
            w-[320px] lg:w-[350px]
            rounded-3xl
            overflow-hidden
            backdrop-blur-xl
            bg-white/20
            border border-white/20
            shadow-2xl
            select-none
          "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
            className="hover:bg-white/10 p-2 rounded-lg"
          >
            <FiChevronLeft />
          </button>

          <button
            onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
            className="hover:bg-white/10 p-2 rounded-lg"
          >
            <FiChevronRight />
          </button>
        </div>

        <h2 className="font-semibold text-lg">
          {currentMonth.format("MMMM YYYY")}
        </h2>

        <div className="w-8" />
      </div>

      {/* Week Header */}
      <div className="grid grid-cols-7 text-center text-xs text-white/50 mb-4">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMonth.format("YYYY-MM")}
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -15 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-7 gap-y-4"
        >
          {days.map((day) => {
            const isToday = day.isSame(today, "day");
            const isCurrentMonth = day.month() === currentMonth.month();

            return (
              <div
                key={day.format("YYYY-MM-DD")}
                className="flex justify-center"
              >
                <div
                  className={`
                    w-9 h-9
                    flex items-center justify-center
                    rounded-full
                    text-sm
                    transition-all
                    ${isToday ? "bg-sky-500 text-white shadow-lg" : ""}
                    ${!isCurrentMonth ? "text-white/25" : "text-white"}
                  `}
                >
                  {day.date()}
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Calendar;
