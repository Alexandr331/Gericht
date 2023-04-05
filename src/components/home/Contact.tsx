import { FormBox } from "../shared/FormBox"
import { Button } from "../shared/Button"
import { Props } from "@/types"


export const Contact = ({ classProp }: Props): JSX.Element => {
  return (
    <section className={classProp}>
      <div className="container">
        <div className="contact__inner">
          <FormBox
            subtitle="Newsletter"
            title="Subscribe to Our Newsletter"
          >
            <form className="form-control contact__from">
              <input className="form__input" type="email" name="email" placeholder="Email Address"/>
              <Button type="submit">Subscribe</Button>
            </form>
          </FormBox>
        </div>
      </div>
    </section>
  )
}