import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../Images/Image';
import { ethers } from 'ethers';
import  './topbar.module.css';
import Web3Modal from "web3modal";
import logo from "./img/logo.png";
import iconLogout from "./img/icon-logout.svg";
import iconAppDownload from "./img/icon-app-download.svg";
import iconDollar from "./img/icon-dollar.svg";
import iconFlagUs from "./img/icon-flag-us.svg";



function Topbar() {


  let provider:ethers.providers.Web3Provider = null;
  const web3Modal = new Web3Modal();
  
  
  const [account, setAccount] = useState('')

  const isMetaMaskConnected = async () => {
    provider =  new ethers.providers.Web3Provider(window.ethereum);
    let signer = await provider.getSigner(); 
    setAccount(await signer.getAddress());  
  }



 useEffect(() => {
    isMetaMaskConnected();
   });

  
  
  async function connect() {  
    const connection = await web3Modal.connect()
    isMetaMaskConnected();
  }
    return (
        <header>
          <div className="row align-items-center g-0">
            <div className="col-auto d-flex">
            <span className="d-md-none menuToggle me-2">
              <img src={iconLogout} width={20} />
            </span>
            <Link to="#" className="logo">
              <Image src={logo} alt="Babbu Logo" />
              <span>1.0</span>
            </Link>
          </div>
          <div className="col d-flex align-items-center">
            <ul className="list-unstyled headerMenu me-auto d-md-flex align-items-center mb-0 d-none">
              <li>
                <Link to="#">
                  <Image src={iconAppDownload} alt="Babbu App download" /> App download
                </Link>
              </li>
              <li>
                <Link to="#">
                  Buy $BABU <Image src={iconDollar} alt="iconDollar" />
                </Link>
              </li>
            </ul>
            <div className="ms-auto d-flex">
            <button onClick={connect} className="btn bg-yellow connectWallet">
                { account.length > 0 ? `${ account.slice(0, 4)  }...${  account.slice( account.length - 4,  account.length)}` : "Connect Wallet"}
              </button>
              <div className="dropdown language">
                <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <Image src={iconFlagUs} alt="Flag Us" />
                </span>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
        
   
    )
}

export default Topbar