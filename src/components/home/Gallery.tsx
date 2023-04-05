import Image from "next/image"
import { Button } from "../shared/Button"
import { Subtitle } from "../shared/Subtitle"
import { Title } from "../shared/Title"
import images from "@/assets/index"
import useEmblaCarousel from "embla-carousel-react"
import { Props } from "@/types"

export const Gallery = ({classProp}: Props): JSX.Element => {

  const [emblaRef] = useEmblaCarousel({ loop: false })

  return (
    <section className={classProp}>
      <div className="container">
        <div className="gallery__inner">
          <div className="gallery__content">
            <Subtitle>Instagram</Subtitle>
            <Title classProp="gallery__title">Photo Gallery</Title>
            <p className="descr gallery__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            <Button>View More</Button>
          </div>
        </div>
          <div className="slider-box embla" ref={emblaRef}>
            <div className="slider embla__container">
              <div className="embla__slide">
                <Image src={images.slider1} alt="slider" />
              </div>
              <div className="embla__slide">
                <Image src={images.slider1} alt="slider" />
              </div>
              <div className="embla__slide">
                <Image src={images.slider1} alt="slider" />
              </div>
              <div className="embla__slide">
                <Image src={images.slider1} alt="slider" />
              </div>
              <div className="embla__slide">
                <Image src={images.slider1} alt="slider" />
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}