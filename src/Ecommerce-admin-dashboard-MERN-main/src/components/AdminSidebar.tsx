import { IconType } from "react-icons";
import { Link, Location, useLocation } from "react-router-dom";

import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine, 
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";

import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";

const AdminSidebar = () => {

  //linksText
  const dashboardlinksText = [
    "Dashboard",
    "Product",
    "Customer",
    "Transaction",
  ];
  const chartslinksText = ["Bar", "Pie", "Line"];
  const appslinksText = ["Stopwatch", "Coupon", "Toss"];

  //links icons
  const dashboardIcons = [
    RiDashboardFill,
    RiShoppingBag3Fill,
    IoIosPeople,
    AiFillFileText,
  ];
  const chartsIcons = [FaChartBar, FaChartPie, FaChartLine];
  const appsIcons = [FaStopwatch, RiCoupon3Fill, FaGamepad];

  //links URLs
  const dashboardlinksUrl = [
    "/admin/dashboard",
    "/admin/product",
    "/admin/customer",
    "/admin/transaction",
  ];
  const appslinksUrl = [
    "/admin/chart/bar",
    "/admin/chart/pie",
    "/admin/chart/line",
  ];
  const chartslinksUrl = [
    "/admin/app/stopwatch",
    "/admin/app/coupon",
    "/admin/app/toss",
  ];

  const location = useLocation();

  // console.log(location);

  return (
    <aside>
      <h2 style={{ color: '#ffffff' }}>Scrapify</h2>
      <Div
        divTitle={"Dashboard"}
        location={location}
        text={dashboardlinksText}
        url={dashboardlinksUrl}
        Icon={dashboardIcons}
      />

      <Div
        divTitle={"Apps"}
        location={location}
        text={appslinksText}
        url={appslinksUrl}
        Icon={appsIcons}
      />

      <Div
        divTitle={"Charts"}
        location={location}
        text={chartslinksText}
        url={chartslinksUrl}
        Icon={chartsIcons}
      />
    </aside>
  );
};

interface divContent {
  divTitle: string;
  location: Location;
  text: string[];
  url: string[];
  Icon: IconType[];
}

const Div = ({ divTitle, location, text, url, Icon }: divContent) => {

  return (
    <div>
      <h5>{divTitle}</h5>
      <ul>
        {text.map((element, index) => {
          return (
            <Li
              text={element}
              url={url[index]}
              Icon={Icon[index]}
              location={location}
              key={element}
            />
          );
        })}
      </ul>
    </div>
  );
};

interface LiProps {
  text: string;
  url: string;
  Icon: IconType;
  location: Location;
}
const Li = ({ text, url, Icon, location }: LiProps) => {
  return (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "#c7a36f"
          : "#FFF",
      }}
    >
      <Link to={url}>
        <Icon /> {text}
      </Link>
    </li>
  );
};

export default AdminSidebar;
