import images from "@/assets/index"
import { StaticImageData } from "next/image"

export const image: StaticImageData[] = [images.slider1, images.slider2, images.slider3, images.slider1]

const imageByIndex = (index: number): any => image[index % image.length]


export default imageByIndex
