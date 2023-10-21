import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { headerLinks } from "../../data/staticData";

function HeaderLinksMobile({ showLinks, setShowLinks }) {
  return (
    <>
      <motion.ul
        initial={{ opacity: 0, x: 200, y: 200 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 200, y: 200 }}
        className={`transition-right fixed z-50 flex flex-col items-center gap-[20px] duration-300 ${
          showLinks ? "left-[5%]" : "left-[-200%]"
        } top-[70px] w-[90%] bg-white p-[20px]`}
      >
        {headerLinks.map((l) => {
          return (
            <li key={l.id} className="text-base font-bold hover:text-yellow">
              <NavLink to={l.to}>{l.title}</NavLink>
            </li>
          );
        })}
      </motion.ul>

      {/* Overlay */}
      <div
        onClick={() => setShowLinks(false)}
        className={`fixed left-0 top-[60px] ${
          showLinks ? "h-full" : "h-0"
        } w-full bg-[#00000080]`}
      ></div>
    </>
  );
}

export default HeaderLinksMobile;
