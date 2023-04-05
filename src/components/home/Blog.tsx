import { StaticImageData } from "next/image"
import { Button } from "../shared/Button"
import { Subtitle } from "../shared/Subtitle"
import { Title } from "../shared/Title"
import images from "@/assets/index"
import { BlogItem } from "../shared/BlogItem"
import { Data, Props } from "@/types"


export const Blog = ({classProp}: Props) => {

  const data: Data[] = [
    {image: images.updatesImg1, date: '16 Apr 2021', userName: 'Annalisa L', title: 'tips for prepping and caring for your grill', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.'},
    {image: images.updatesImg2, date: '23 May 2021', userName: 'John Micheal', title: 'summer cocktails and mocktails', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.'},
    {image: images.updatesImg3, date: '06 Aug 2021', userName: 'Fred W', title: 'easy cooking for college students', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.'},
  ]

  return (
    <section className={classProp}>
      <div className="container">
        <div className="blog__inner">
          <Subtitle classProp="spoon-center">Blogs</Subtitle>
          <Title>Gerícht updates</Title>
          <div className="blog-box">
            {
              data.map((el, index) => {
                return (
                  <BlogItem 
                    key={index}
                    image={el.image}
                    date={el.date}
                    userName={el.userName}
                    title={el.title}
                    text={el.text}
                  />
                )
              })
            }
          </div>
          <Button>View More</Button>
        </div>
      </div>
    </section>
  )
}