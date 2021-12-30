import React from "react";
import { Link } from "react-router-dom";
import { Image } from "../Images/Image";
import "./menu.module.css";
import iconCommunity from "./img/icon-community.svg";
import shoppingBasket from "./img/icon-shopping-basket.svg";
import iconPool from "./img/icon-pool.svg";
import iconFarms from "./img/icon-farms.svg";
import iconMarket from "./img/icon-market.svg";
import iconLogo from "./img/icon-logo.svg";
import iconGamebase from "./img/icon-gamebase.svg";
import iconBounty from "./img/icon-bounty.svg";
import iconKnight from "./img/icon-knight.svg";
import iconThumbsUp from "./img/icon-thumbs-up.svg";
import iconHelp from "./img/icon-help.svg";
import iconHouseHeart from "./img/icon-house-heart.svg";
import iconAppDownload from "./img/icon-app-download.svg";
import iAmBabu from "./img/i-am-babu.png";

const submenuData = [
  {
    title: "Home",
    icon: iconCommunity,
    path: "/",
  },
  {
    title: "Buy $BABU",
    icon: shoppingBasket,
    path: "#",
  },
  {
    title: "NFT Mining",
    icon: iconPool,
    path: "#",
    subNav: [
      {
        title: "Babbu Family NFT",
        path: "#",
      },
      {
        title: "Babbu Friends Card",
        path: "#",
      },
      {
        title: "Crystal Stone",
        path: "#",
      },
      {
        title: "Bounty",
        path: "#",
      },
    ],
  },
  {
    title: "Farm",
    icon: iconFarms,
    path: "#",
  },
  {
    title: "NFT Market",
    icon: iconMarket,
    path: "#",
  },
  {
    title: "Gamebase",
    icon: iconGamebase,
    path: "#",

    new: true,
  },
  {
    title: "Babbu NFT",
    icon: iconLogo,
    path: "#",
    subNav: [
      {
        title: "Babbu NFT Box",
        path: "#",
      },
      {
        title: "NFT Mint",
        path: "#",
      },
    ],
  },
  {
    title: "Bounty",
    icon: iconBounty,
    path: "#",
  },
  {
    title: "Guide",
    icon: iconKnight,
    path: "#",

    comingsoon: true,
  },
  {
    title: "Community",
    icon: iconThumbsUp,
    path: "#",
  },
  {
    title: "Help Center",
    icon: iconHelp,
    path: "#",
  },
  {
    title: "About BABU",
    icon: iconHouseHeart,
    path: "#",
  },
  {
    title: "App Dowload",
    icon: iconAppDownload,
    path: "#",
  },
];

function SubMenu(data: any): JSX.Element {
  const { item } = data;
  const [subnav, setSubnav] = React.useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <li className={item.subNav ? "parentMenu" : ""}>
      <Link to={item.path} onClick={item.subNav && showSubnav}>
        <img src={item.icon} className="icon" />
        <span className="text">{item.title}</span>
      </Link>
      {item.subNav ? (
        <ul
          className={
            subnav
              ? "subMenu collapse list-unstyled show"
              : "subMenu collapse list-unstyled"
          }
          id="nftSubmenu"
        >
          {item.subNav.map((subItem: any, subIndex: any) => (
            <li key={subIndex}>
              <Link to={subItem.path}>{subItem.title}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

function Menu(): JSX.Element {
  return (
    <>
      <div className="col-auto">
        <aside>
          <ul id="mainmenu" className="list-unstyled">
            {submenuData.map((item: any, index: any) => (
              <SubMenu item={item} key={index} />
            ))}
          </ul>
          <div className="iAmBabu">
            <Image src={iAmBabu} alt="" />
          </div>
        </aside>
      </div>
    </>
  );
}

export default Menu;
