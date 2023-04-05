import { MenuCardType } from "@/types"

export const MenuCard = ({data, title}: MenuCardType): JSX.Element => {
  return (
    <article className="menu-card">
    <div className="menu-card__title">{title}</div>
    <div className="menu-card__content">
      {
        data.map((el, index) => {
          return (
            <div className="menu-item" key={index}>
              <div className="menu-item__content">
                <span className="content-title">{el.title}</span>
                <span className="content-price">{el.price}</span>
              </div>
              <span className="content-descr">{el.descr}</span>
            </div>
          )
        })
      }
    </div>
  </article>
  )
}