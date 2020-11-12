import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
function Footer() {
    return( 
        
    <div className="footer">
       <footer className="page-footer font-small pt-3">
            <div className="container-fluid">
                <div className="footer-copyright text-center py-3">© 2020 Copyright:    
                    <Link className="footer-link" to="https://www.linkedin.com/in/yordanchristoff/">    Yordan Christoff</Link>
                </div>
            </div>
       </footer>
    </div>
           
    );
}

export default Footer;