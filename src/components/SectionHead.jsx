import { MdOutlineEast } from "react-icons/md";
import { Link } from "react-router-dom";

function SectionHead({ title, showLink = true, to }) {
  return (
    <div className="relative mb-[30px] flex items-center justify-between py-[10px]">
      <h2 className="text-2xl">{title}</h2>
      {showLink && (
        <Link
          to={to}
          className="flex items-center gap-[8px] text-sm hover:text-yellow"
        >
          See All
          <MdOutlineEast className="text-xl font-bold" />
        </Link>
      )}
      {/* Line */}
      <div className="absolute bottom-[-5px] left-0 h-[7px] w-[5%] rounded-xl bg-yellow"></div>
    </div>
  );
}

export default SectionHead;
