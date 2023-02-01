class SiteHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="nav-container">
                <div class="nav-row">
                    <div class="nav-logo">
                        <a href="index.html" title="IBA GROUP">
                            <img src="/img/logo-ibagroup.png" alt="IBA Group">
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
                            <div class="footer-excerpt">
                                <p>A leading provider of Solar PV Turnkey and Electrical Engineering solutions for the African market.</p>
                            </div>
                        </div>
                        <div class="footer-social">
                            <div class="social-icons">
                                <a href="#" data-social-name="Whatsapp" title="Whatsapp"><img src="/img/icons/icon-whatsapp.png" alt="Whatsapp"></a>
                                <a href="#" data-social-name="Facebook" title="Facebook"><img src="/img/icons/icon-facebook.png" alt="Facebook"></a>
                                <a href="#" data-social-name="Instagram" title="Instagram"><img src="/img/icons/icon-instagram.png" alt="Instagram"></a>
                                <a href="#" data-social-name="Twitter" title="Twitter"><img src="/img/icons/icon-twitter.png" alt="Twitter"></a>
                            </div>
                        </div>
                        <div class="footer-logos">
                            <img src="/img/logo-ibagroup.png" title="IBA Group">
                            <img src="/img/logo-izubasolution.png" title="Izuba Solution">
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

class MotionBlur extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <svg class="filters">
                <filter id="motionBlur">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0 0" />
                </filter>
                <filter id="motionBlur2">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5 0" />
                </filter>
                <filter id="motionBlur3">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="20 0" />
                </filter>
                <filter id="motionBlur4">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="35 1" />
                </filter>
            </svg>
        `;
    };
}
customElements.define('motion-blur', MotionBlur);