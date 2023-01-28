class SiteHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="nav-container">
                <div class="nav-row">
                    <div class="nav-logo">
                        <a href="index.html" title="IBA GROUP">
                            <img src="img/logo-ibagroup.png" alt="IBA Group">
                        </a>
                        <div class="nav-burger-menu">
                            <div class="menu-bar" id="barOne"></div>
                            <div class="menu-bar" id="barTwo"></div>
                            <div class="menu-bar" id="barThree"></div>
                        </div>
                    </div>
                    <div class="menu-links">
                        <nav>
                            <ul>
                                <li><a href="index.html" title="Home">Home</a></li>
                                <li><a href="solar.html" title="Solar">Solar</a></li>
                                <li><a href="electrical.html" title="Electrical">Electrical</a></li>
                                <li><a href="about.html" title="About Us">About</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        `;
    };
}
customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="footer-container">
                <footer>
                    <div class="footer-row">
                        <div class="footer-content">
                            <div class="footer-header">
                                <span>Innovation Business Access</span>
                            </div>
                            <div class="footer-excerpt">
                                <p>A leading provider of Solar PV Turnkey and Electrical Engineering solutions for the African market.</p>
                            </div>
                        </div>
                        <div class="footer-sitemap">
                            <ul>
                                <li><a href="index.html" title="Home">Home</a></li>
                                <li><a href="solar.html" title="Solar">Solar</a></li>
                                <li><a href="electrical.html" title="Electrical">Electrical</a></li>
                            </ul>
                            <ul>
                                <li><a href="#" title="Electrical">Terms And Conditions</a></li>
                                <li><a href="#" title="Electrical">Disclaimer</a></li>
                                <li><a href="#" title="Electrical">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="footer-social">
                            <div class="social-icons">
                                <a href=""><img src="/img/icons/icon-whatsapp.svg" alt="Whatsapp"></a>
                                <a href=""><img src="/img/icons/icon-facebook.svg" alt="Facebook"></a>
                                <a href=""><img src="/img/icons/icon-instagram.svg" alt="Instagram"></a>
                                <a href=""><img src="/img/icons/icon-twitter.svg" alt="Twitter"></a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-privacy"></div>
                    <div class="footer-copyright">
                        <span></span>
                    </div>
                </footer>
            </div>
        `;
    };
}
customElements.define('site-footer', SiteFooter);