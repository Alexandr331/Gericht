import { ButtonProps } from "@/types"

export const Button = ({children, type}: ButtonProps): JSX.Element => {
  return (
    <button type={type ? type : 'button'} className="btn">
      {children}
    </button>
  )
}