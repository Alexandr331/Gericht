import { Data } from "@/types"
import Image from "next/image"

export const BlogItem = ({image, userName, title, text, date}: Data): JSX.Element => {
  return (
    <a className="blog-item" href="#">
      <article>
        <Image src={image} alt="blog-img" />
        <div className="info">
          <span>{date}</span>
          <span>{userName}</span>
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
        <span>Read More</span>
      </article>
    </a>
  )
}