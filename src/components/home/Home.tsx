import images from '@/assets/index.js'
import Image from 'next/image'
import { Subtitle } from '../shared/Subtitle'
import { Button } from '../shared/Button'
import { Props } from '@/types'

export const Home = ({classProp}:Props): JSX.Element => {
  return (
    <section className={classProp} id="home">
      <div className="container">
        <div className="home__inner inner">
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
    </section>
  )
}