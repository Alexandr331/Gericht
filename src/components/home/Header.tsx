import images from '@/assets/index.js'
import Image from 'next/image'
import { Subtitle } from '../shared/Subtitle'
import { Button } from '../shared/Button'
import Link from 'next/link'

export const Header = (): JSX.Element => {
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header__inner-header">
          <div className="logo">
            <a href="#" className="logo__link">Gerícht</a>
          </div>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__list-item">
                <a href="#" className="list-item__link link-hover">Home</a>
              </li>
              <li className="nav__list-item">
                <Link href="#" className="list-item__link link-hover">Pages</Link>
              </li>
              <li className="nav__list-item">
                <a href="#" className="list-item__link link-hover">Contact Us</a>
              </li>
              <li className="nav__list-item">
                <a href="#" className="list-item__link link-hover">Blog</a>
              </li>
              <li className="nav__list-item">
                <a href="#" className="list-item__link link-hover">Landing</a>
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
        <div className="header__inner-content">
          <div className="hashtags">
            <span>#Bar</span>
            <span>#Gericht</span>
          </div>

          <div className="scroll">
            <Image src={images.lineGold} alt="scroll-line" />
            <span>scroll</span>
          </div>

          <div className="inner-content">
            <Subtitle>
              Chase the new Flavour
            </Subtitle>
            <h1 className="inner-content__title">
              The key to Fine dining
            </h1>
            <p className="inner-content__descr descr">
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
            </p>
            <Button>
              Explore Menu
            </Button>
          </div>
          <Image src={images.headerImg} alt="header"/>
          
        </div>
      </div>
    </header>
  )
}



