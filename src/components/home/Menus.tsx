
import { useState } from "react";
import images from '@/assets/index.js'
import Image from "next/image";
import { Props } from '@/types';

export const Menus = ({classProp}: Props): JSX.Element => {
  const [imgBg, setImageBg] = useState(0)

  const slidesBg = [
    images.bg1,
    images.bg2,
    images.bg3,
  ]

  const menus = [
    "Bar Menu",
    "Food Menu",
    "Desserts Menu",
  ]
  
  return (
    <section className={classProp}>
      <Image className="bg" src={slidesBg[imgBg]} alt="bg" />
      <div className="container">
        <div className="menus__inner">
          <div className="menu__selection-box">
            {
              menus.map((el, index) => {
                return (
                  <button className={`btn-text link-hover ${imgBg === index ? "isActive" : ''}`} onClick={() => setImageBg(state => state = index)} key={index}>{el}</button>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}