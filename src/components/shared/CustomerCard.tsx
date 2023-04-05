import { Card } from "@/types"
import Image from "next/image"

export const CustomerCard = ({img, name, review, position}: Card): JSX.Element => {
  return (
    <article className="customer-item">
      <div className="image-box">
        <Image src={img} alt="customer"/>
      </div>
      <div className="content">
        <p className="review descr">{ review }</p>
        <dl>
          <dt>{ name }</dt>
          <dd>{ position }</dd>
        </dl>
      </div>
    </article>
  )
}