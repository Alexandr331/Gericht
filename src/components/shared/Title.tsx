import { Props } from "@/types"


export const Title = ({children, margin, classProp}: Props): JSX.Element => {
  return (
    <>
      <h1 className={`section__title ${classProp ? classProp : ''}`}>
        {children}
      </h1>
    </>
  )
}