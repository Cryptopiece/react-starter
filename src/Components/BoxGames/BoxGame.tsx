/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useState, useEffect} from "react";
import styled from "styled-components";
import  { Image,Box }  from "../Images/Image";
import { ethers } from "ethers";
import Web3Modal from 'web3modal'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Wrapper = styled.div`
width: 100%;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Buybox = styled.div`
width: 100%;
display: flex;
background: #F7F7F7;
border-radius: 16px;
`; 
const BoxImg = styled.div`
flex: 50%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
gap: 3px;
`;



function BoxGame() {
   
}

export default BoxGame;
