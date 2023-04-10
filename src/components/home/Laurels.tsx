import Image from "next/image"
import images from "@/assets/index"
import { Subtitle } from "../shared/Subtitle"
import { Title } from "../shared/Title"
import { ContentCard } from "../shared/ContentCard"
import { Props } from "@/types"

export const Laurels = ({ classProp }: Props): JSX.Element => {
  return (
    <section className={classProp}>
      <div className="container">
        <div className="laurels__inner inner">
          <div className="laurels__content">
            <Subtitle>Awards & recognition</Subtitle>
            <Title>Our Laurels</Title>
            <div className="laurels-box">
              <ContentCard
                img={images.laurel2}
                name="Bib Gourmond"
                descr="Lorem ipsum dolor sit amet, consectetur."
                classProp="laurel-item__content"
              />
              <ContentCard
                img={images.laurel1}
                name="Rising Star"
                descr="Lorem ipsum dolor sit amet, consectetur."
                classProp="laurel-item__content"
              />
              <ContentCard
                img={images.laurel5}
                name="AA Hospitality"
                descr="Lorem ipsum dolor sit amet, consectetur."
                classProp="laurel-item__content"
              />
              <ContentCard
                img={images.laurel3}
                name="Outstanding Chef"
                descr="Lorem ipsum dolor sit amet, consectetur."
                classProp="laurel-item__content"
              />
            </div>
          </div>
          <div className="laurels__image">
            <Image src={images.laurels} alt="laurels" />
          </div>
        </div>
      </div>
    </section>
  )
}