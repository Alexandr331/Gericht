import { CardType } from "@/types"
import Image from "next/image"

export const ContentCard = ({img, name, review, descr, classProp, quotes}: CardType): JSX.Element => {
  return (
    <article className="card-item">
      <div className={`image-box ${quotes ? 'quotes' : ''}`}>
        <Image src={img} alt="customer"/>
      </div>
      <div className={`content ${classProp ? classProp : ''}`}>
        {review && <p className="review descr">{ review }</p>}
        <dl>
          <dt>{ name }</dt>
          <dd>{ descr }</dd>
        </dl>
      </div>
    </article>
  )
}