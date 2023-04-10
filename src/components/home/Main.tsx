import { MainProps } from "@/types"


export const Main = ({ children }: MainProps): JSX.Element => {
  return (
    <main>
      {children}
    </main>
  )
}