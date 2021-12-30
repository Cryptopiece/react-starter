import React from 'react';
import { Link } from 'react-router-dom'
import { Image } from '../Images/Image'
import  "./menu.module.css"
import iconCommunity from "./img/icon-community.svg";
import shoppingBasket from "./img/icon-shopping-basket.svg"
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
function Menu():JSX.Element  {
    return (
        <>
            <div className="col-auto">
            <aside>
              <ul id="mainmenu" className="list-unstyled">
                <li>
                  <Link to="#" className="active">
                    <img src={iconCommunity} className="icon" /><span className="text">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src={shoppingBasket} className="icon" /><span className="text">Buy $BABU</span>
                  </Link>
                </li>
                <li className="parentMenu">
                  <Link to="#nftSubmenu" data-bs-toggle="collapse">
                    <Image src={iconPool} className="icon" /><span className="text">NFT Mining</span>
                  </Link>
                  <ul className="subMenu collapse list-unstyled" id="nftSubmenu">
                    <li><Link to="#">Babbu Family NFT</Link></li>
                    <li><Link to="#">Babbu Friends Card</Link></li>
                    <li><Link to="#">Crystal Stone</Link></li>
                    <li><Link to="#">Bounty</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="#">
                    <Image src={iconFarms} className="icon" /><span className="text">Farms</span><span className="badge arrow bg-pink text-white">HOT</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Image src={iconMarket} className="icon" /><span className="text">NFT Market</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Image src={iconGamebase} className="icon" /><span className="text">Gamebase</span><span className="badge arrow bg-yellow">NEW</span>
                  </Link>
                </li>
                <li className="parentMenu">
                  <Link to="#babbuNftSubmenu" data-bs-toggle="collapse">
                    <Image src={iconLogo} className="icon" /><span className="text">Babbu NFT</span>
                  </Link>
                  <ul className="subMenu collapse list-unstyled" id="babbuNftSubmenu">
                    <li><Link to="#">Babbu NFT Box</Link></li>
                    <li><Link to="#">NFT Mint</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="#">
                    <Image src={iconBounty} className="icon" /><span className="text">Bounty</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Image src={iconKnight} className="icon" /><span className="text">Guide</span><span className="badge arrow bg-grey">COMING SOON</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Image src={iconThumbsUp} className="icon" /><span className="text">Community</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Image src={iconHelp} className="icon" /><span className="text">Help Center</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Image src={iconHouseHeart} className="icon" /><span className="text">About BABBU</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Image src={iconAppDownload} className="icon" /><span className="text">App Download</span>
                  </Link>
                </li>
              </ul>
              <div className="iAmBabu">
                <Image src={iAmBabu} alt="" />
              </div>
            </aside>
          </div>
        </>
    )
}

export default Menu

