import Image from "next/image"
import images from '@/assets/index.js'
import { Subtitle } from "../shared/Subtitle"
import { Title } from "../shared/Title"
import { Button } from "../shared/Button"
import { MenuCard } from "../shared/MenuCard"
import { Props } from "@/types"


export const CocktailMenu = ({classProp}: Props): JSX.Element => {

  const wine = [
    {price: '$56', title: 'Chapel Hill Shiraz', descr: 'AU | Bottle'},
    {price: '$59', title: 'Catena Malbec', descr: 'AR | Bottle'},
    {price: '$44', title: 'La Vieille Rosé', descr: 'FR | 750 ml'},
    {price: '$31', title: 'Rhino Pale Ale', descr: 'CA | 750 ml'},
    {price: '$26', title: 'Irish Guinness', descr: 'IE | 750 ml'},
  ]

  const cocktails = [
    {price: '$20 ', title: 'Aperol Spritz', descr: 'Aperol | Villa Marchesi prosecco | soda | 30ml'},
    {price: '$16', title: 'Dark \'N\' Stormy', descr: 'Dark rum | Ginger beer | Slice of lime. '},
    {price: '$10', title: 'Daiquiri', descr: 'Rum | Citrus juice | Sugar'},
    {price: '$31', title: 'Old Fashioned', descr: 'Bourbon | Brown sugar | Angostura Bitters'},
    {price: '$26', title: 'Negroni', descr: 'Gin | Sweet Vermouth | Campari | Orange garnish'},
  ]

  return (
    <section className={classProp}>
      <div className="container">
        <div className="cocktail-menu__inner inner">
          <Subtitle classProp="spoon-center">Menu that fits you palatte</Subtitle>
          <Title>Today’s Special</Title>
          <div className="cocktail-menu__content">
            <MenuCard data={wine} title="Wine & Beer" />
              <Image src={images.shaker} alt="shaker"
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"/>
            <MenuCard data={cocktails} title="Cocktails" />
          </div>
          <Button>View More</Button>
        </div>
      </div>
    </section>
  )
}