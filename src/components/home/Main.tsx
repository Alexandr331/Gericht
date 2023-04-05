import { MainProps } from "@/types"


export const Main = ({ children }: MainProps): JSX.Element => {
  console.log(children)
  
  return (
    <main>
      {children}
    </main>
  )
}