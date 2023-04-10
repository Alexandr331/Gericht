import Image from "next/image"
import images from '@/assets/index.js'
import { Subtitle } from "../shared/Subtitle"
import { Title } from "../shared/Title"
import { Props } from "@/types"

export const Chef = ({classProp}: Props) => {
  return (
    <section className={classProp}>
      <div className="container">
        <div className="chef__inner inner">
          <Image src={images.chef} alt="chef"/>
          <div className="chef__content">
            <Subtitle>Chef’s Word</Subtitle>
            <Title>What we believe in</Title>
            <p className="descr chef-content__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. 
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
            </p>
            <dl>
              <dt>Kevin Luo</dt>
              <dd>Chef & Founder</dd>
            </dl>

            <Image src={images.kevin} alt="kevin" />

          </div>
        </div>
      </div>
    </section>
  )
}