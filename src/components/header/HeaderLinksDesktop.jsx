import { motion } from "framer-motion";
import { headerLinks } from "../../data/staticData";
import { NavLink } from "react-router-dom";

function HeaderLinksDesktop() {
  return (
    <motion.ul
      initial={{ opacity: 0, x: 200, y: 200 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 200, y: 200 }}
      className={"flex items-center justify-between gap-[50px]"}
    >
      {headerLinks.map((l) => {
        return (
          <li key={l.id} className="text-base font-bold hover:text-yellow">
            <NavLink to={l.to}>{l.title}</NavLink>
          </li>
        );
      })}
    </motion.ul>
  );
}

export default HeaderLinksDesktop;
