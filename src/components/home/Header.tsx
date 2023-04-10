import images from '@/assets/index.js'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const Header = (): JSX.Element => {

  const [nav, setNav] = useState(false)

  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header__inner-header">
          <div onClick={() => setNav(false)} className="logo">
            <a href="#home" className="logo__link">Gerícht</a>
          </div>
          <div className="nav-container">
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__list-item">
                  <Link href="#" className="list-item__link link-hover">Home</Link>
                </li>
                <li className="nav__list-item">
                  <Link href="#" className="list-item__link link-hover">Pages</Link>
                </li>
                <li className="nav__list-item">
                  <Link href="#" className="list-item__link link-hover">Contact Us</Link>
                </li>
                <li className="nav__list-item">
                  <Link href="#" className="list-item__link link-hover">Blog</Link>
                </li>
                <li className="nav__list-item">
                  <Link href="#" className="list-item__link link-hover">Landing</Link>
                </li>
              </ul>
            </nav>
            <div className="header__logs">
              <a href="#" className="login log-text link-hover">log in</a>
              <span>&nbsp;/&nbsp;</span>
              <a href="#" className="reg log-text link-hover">registration</a>
            </div>
            <Image src={images.line} alt="line" />
            <div className="header__book">
              <a className="link-hover" href="#">Book Table</a>
            </div>
          </div>
          {
            nav && (
              <div className="nav-container-mob">
              <nav className="nav">
                <ul className="nav__list">
                  <li className="nav__list-item">
                    <Link href="#home" className="list-item__link link-hover">Home</Link>
                  </li>
                  <li className="nav__list-item">
                    <Link href="#" className="list-item__link link-hover">Pages</Link>
                  </li>
                  <li className="nav__list-item">
                    <Link onClick={() => setNav(false)} href="#contact" className="list-item__link link-hover">Contact Us</Link>
                  </li>
                  <li className="nav__list-item">
                    <Link onClick={() => setNav(false)} href="#blog" className="list-item__link link-hover">Blog</Link>
                  </li>
                  <li className="nav__list-item">
                    <Link href="#" className="list-item__link link-hover">Landing</Link>
                  </li>
                </ul>
              </nav>
              <div className="header__logs">
                <a href="#" className="login log-text link-hover">log in</a>
                <span>&nbsp;/&nbsp;</span>
                <a href="#" className="reg log-text link-hover">registration</a>
              </div>
              <Image src={images.line} alt="line" />
              <div className="header__book">
                <a className="link-hover" href="#">Book Table</a>
              </div>
            </div>
            )
          }
          <div id="toggler" className="btn-box"  onClick={() => setNav(state => !state)}>
            <Image  src={nav ? images.close : images.open} alt="close" />
          </div>

        </div>
      </div>
    </header>
  )
}



