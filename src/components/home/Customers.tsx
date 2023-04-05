import { Props } from "@/types"
import { CustomerCard } from "../shared/CustomerCard"
import { Subtitle } from "../shared/Subtitle"
import { Title } from "../shared/Title"
import images from "@/assets/index"

export const Customers = ({ classProp }: Props): JSX.Element => {
  return (
    <section className={classProp}>
      <div className="container">
        <div className="customers__inner">
          <Subtitle classProp="spoon-center">Testimony</Subtitle>
          <Title>Happy customers</Title>
          <div className="customers__reviews-box">
            <CustomerCard 
              img={images.customer1} 
              name="Wade Warren"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue."
              position="Sommelier"
              />
            <CustomerCard 
              img={images.customer2} 
              name="Jane Cooper"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue."
              position="Chef"
              />
            <CustomerCard 
              img={images.customer3} 
              name="Robert Fox"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue."
              position="Chef"
              />
            <CustomerCard 
              img={images.customer4} 
              name="Brooklyn Simmons"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue."
              position="Caterer"
              />
          </div>
        </div>
      </div>
    </section>
  )
}