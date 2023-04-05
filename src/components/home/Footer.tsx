import Image from "next/image"
import images from "@/assets/index"


export const Footer = ({}): JSX.Element => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <a href="#header">
            <div className="scroll">
              <Image src={images.lineGold} alt="scroll-line" />
              <span>top</span>
            </div>
          </a>
          <div className="footer__info-box">
            <div className="info__contact footer-info">
              <h3>Contact Us</h3>
              <span>9 W 53rd St, New York, NY 10019, USA</span>
              <a href="tel:+12123441230">+1 212-344-1230</a>
              <a href="tel:+12125551230">+1 212-555-1230</a>
            </div>
            <div className="info__main footer-info">
              <a className="footer-logo" href="#">Gerícht</a>

                <blockquote className="spoon spoon-center">
                  &quot;The best way to find yourself is to lose yourself in the service of others.&quot;
                </blockquote>

              <div className="socials">
                <a href="#" className="social-item">
                  <Image src={images.facebook} alt="facebook" />
                </a>
                <a href="#" className="social-item">
                  <Image src={images.twitter} alt="twitter" />
                </a>
                <a href="#" className="social-item">
                  <Image src={images.insta} alt="insta" />
                </a>
              </div>
            </div>
            <div className="info__hours footer-info">
              <h3>Working Hours</h3>
              <div className="hours">
                <span>Monday-Friday:</span>
                <span>08:00 am -12:00 am</span>
              </div>
              <div className="hours">
                <span>Saturday-Sunday:</span>
                <span>07:00 am -11:00 pm</span>
              </div>
            </div>
          </div>
          <span className="copy">2021 Gerícht. All Rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}