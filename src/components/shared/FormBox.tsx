import { Form } from "@/types"
import { Subtitle } from "./Subtitle"
import { Title } from "./Title"

export const FormBox = ({ children, subtitle, title }: Form): JSX.Element => {
  return (
    <div className="reserve-box">
    <Subtitle classProp="spoon-center">
      {subtitle}
    </Subtitle>
    <Title>{title}</Title>
    {children}
  </div>
  )
}