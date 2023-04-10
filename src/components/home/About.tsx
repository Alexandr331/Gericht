import images from '@/assets/index.js'
import Image from 'next/image'
import { Button } from '../shared/Button';
import { Title } from '../shared/Title';
import { Props } from '@/types';


export const About = ({ classProp }: Props) => {
  return (
    <section className={classProp}>
      <div className="container">
        <div className="about__inner inner">
            <Image className="g" src={images.g} alt="g" />
            <div className="box__about">
              <Title classProp="spoon spoon-left">About Us</Title>
              <p className="descr">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
              </p>

                <Button>
                  Know More
                </Button>

            </div>
            <Image className="knife" src={images.knife} alt="knife" />
            <div className="box__history">
              <Title classProp="spoon">Our History</Title>
              <p className="descr">
                Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
              </p>
              <Button>Know More</Button>
            </div>
        </div>
      </div>
    </section>
  )
}