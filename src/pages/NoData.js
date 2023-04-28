import { FaSadCry } from "react-icons/fa";

const NoData = () => {
  return (
    <div className="content">
      <FaSadCry className="svg_icons" />
      <h3 className="sad_icon">
        We couldn't find any movie matching your search!Please try again?
      </h3>
    </div>
  );
};

export default NoData;
