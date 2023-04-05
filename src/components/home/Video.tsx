import Image from "next/image"
import images from "@/assets/index"
import { Props } from '@/types';

export const Video = ({ classProp }: Props): JSX.Element => {
  return (
    <section className={classProp}>
      <div className="video__inner">
        <Image src={images.videoBg} alt="video"/>
      </div>
      <button id="play" className="play__btn">
        <Image src={images.play} alt="play" />
      </button>
    </section>
  )
}