import { Card } from "@/types"
import Image from "next/image"

export const LaurelCard = ({img, name, descr}: Card): JSX.Element => {
  return (
    <article className="laurel-item">
      <Image src={img} alt="laurel"/>
      <div className="content laurel-item__content">
        <dl>
          <dt>{ name }</dt>
          <dd>{ descr }</dd>
        </dl>
      </div>
    </article>
  )
}