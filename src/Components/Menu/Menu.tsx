import React from 'react';
import { Link } from 'react-router-dom'
import { Image } from '../Images/Image'
import iconCommunity from "../../public/img/icon-community.svg"
import shoppingBasket from "../../public/img/icon-shopping-basket.svg"
import menucss from "./menu.css"

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
                    <Image src="public/img/icon-pool.svg" className="icon" /><span className="text">NFT Mining</span>
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
                    <Image src="public/img/icon-farms.svg" className="icon" /><span className="text">Farms</span><span className="badge arrow bg-pink text-white">HOT</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Image src="public/img/icon-market.svg" className="icon" /><span className="text">NFT Market</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Image src="public/img/icon-gamebase.svg" className="icon" /><span className="text">Gamebase</span><span className="badge arrow bg-yellow">NEW</span>
                  </Link>
                </li>
                <li className="parentMenu">
                  <Link to="#babbuNftSubmenu" data-bs-toggle="collapse">
                    <Image src="public/img/icon-logo.svg" className="icon" /><span className="text">Babbu NFT</span>
                  </Link>
                  <ul className="subMenu collapse list-unstyled" id="babbuNftSubmenu">
                    <li><Link to="#">Babbu NFT Box</Link></li>
                    <li><Link to="#">NFT Mint</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="#">
                    <Image src="public/img/icon-bounty.svg" className="icon" /><span className="text">Bounty</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Image src="public/img/icon-knight.svg" className="icon" /><span className="text">Guide</span><span className="badge arrow bg-grey">COMING SOON</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Image src="public/img/icon-thumbs-up.svg" className="icon" /><span className="text">Community</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Image src="public/img/icon-help.svg" className="icon" /><span className="text">Help Center</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Image src="public/img/icon-house-heart.svg" className="icon" /><span className="text">About BABBU</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <Image src="public/img/icon-app-download.svg" className="icon" /><span className="text">App Download</span>
                  </Link>
                </li>
              </ul>
              <div className="iAmBabu">
                <Image src="public/img/i-am-babu.png" alt="" />
              </div>
            </aside>
          </div>
        </>
    )
}

export default Menu

