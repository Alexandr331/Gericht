import { Button } from "../shared/Button";
import { FormBox } from "../shared/FormBox";
import {personCount} from "@/data/index.js"
import { Props } from '@/types';

export const Reserve = ({ classProp }: Props): JSX.Element => {
  return (
    <section className={classProp}> 
      <div className="container">
        <div className="reserve__inner inner">
          <FormBox
            subtitle="Reservations"
            title="Book A Table"
          >
            <form className="form-control">
              <div className="inputs-box">
                <select id="persons" name="persons" className="form__input">
                  {personCount.map((el, index) => {
                    return (
                        <option key={index} className="option-item" value={el.value}>{el.content}</option>
                      )
                    })}
                </select>
                <input className="form__input" type="date" name="date" id="date" />
                <input className="form__input" type="time" name="date" id="date" min="10:00" max="22:00"/>
              </div>
              <Button type="submit">Book Now</Button>
            </form>
          </FormBox>
        </div>
      </div>
    </section>
  )
} 