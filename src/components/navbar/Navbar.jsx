import { navIcons, navLinks } from "../../common/constants/index.js";
import dayjs from "dayjs";

// redux
import { useDispatch } from "react-redux";
import { toggleWindow } from "../../common/store/state/windowSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="absolute top-0 w-full flex justify-between items-center bg-white/50 backdrop-blur-3xl p-2 px-5 select-none">
      <div className="flex items-center max-sm:w-full max-sm:justify-center gap-5">
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Akbar's Portfolio</p>

        <ul className="flex items-center gap-5 max-sm:hidden">
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              onClick={() => dispatch(toggleWindow(type))}
              className="cursor-pointer hover:underline"
            >
              <p className="font-roboto">{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center max-sm:w-full max-sm:justify-center gap-5">
        <ul className="flex items-center gap-5 max-sm:hidden">
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt="icon" />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")} </time>
      </div>
    </nav>
  );
};

export default Navbar;
