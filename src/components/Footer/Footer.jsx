import React from "react";
import { CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';

const Footer = () => {
  return (
    <footer className="fixed-bottom page-footer font-small blue pt-4">
      <div className="footer-copyright text-center py-3">
        © 2023 Copyright:
        <CDBContainer style={{display: 'flex',justifyContent: 'center'}}> 
            <CDBBtn color="primary">
            <CDBIcon fab icon="telegram" />
            <a href="https://t.me/MrPrezAtambaev" style={{ color: 'white'}}>MrPrezAtambaev</a>
            </CDBBtn>
        </CDBContainer> 
      </div>
    </footer>
  );
};
export default Footer;