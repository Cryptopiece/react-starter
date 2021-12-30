import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../Images/Image';
import topbarcss from './topbar.css';
function Topbar() {
  
  
    return (
        <header>
          <div className="row align-items-center g-0">
            <div className="col-auto d-flex">
            <span className="d-md-none menuToggle me-2">
              <Image src="public/img/icon-logout.svg" width={20} />
            </span>
            <Link to="#" className="logo">
              <Image src="public/img/logo.png" alt="" />
              <span>1.0</span>
            </Link>
          </div>
          <div className="col d-flex align-items-center">
            <ul className="list-unstyled headerMenu me-auto d-md-flex align-items-center mb-0 d-none">
              <li>
                <Link to="#">
                  <Image src="public/img/icon-app-download.svg" alt="" /> App download
                </Link>
              </li>
              <li>
                <Link to="#">
                  Buy $BABU <Image src="img/icon-dollar.svg" alt="" />
                </Link>
              </li>
            </ul>
            <div className="ms-auto d-flex">
              <button className="btn bg-yellow connectWallet">
                 "Connect Wallet"
              </button>
              <div className="dropdown language">
                <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <Image src="public/img/icon-flag-us.svg" alt="" />
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