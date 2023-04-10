import Image from "next/image"
import { Button } from "../shared/Button"
import { Subtitle } from "../shared/Subtitle"
import { Title } from "../shared/Title"
import images from "@/assets/index"
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react"
import { Props } from "@/types"
import Autoplay from 'embla-carousel-autoplay'
import EmblaCarousel from "../shared/EmblaCarousel"


const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const Gallery = ({classProp}: Props): JSX.Element => {

  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <section className={classProp}>
      <div className="container">
        <div className="gallery__inner ">
          <div className="gallery__content">
            <Subtitle>Instagram</Subtitle>
            <Title classProp="gallery__title">Photo Gallery</Title>
            <p className="descr gallery__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            <Button>View More</Button>
          </div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </section>
  )
}