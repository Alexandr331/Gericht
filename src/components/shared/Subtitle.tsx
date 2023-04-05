import { Props } from "@/types"


export const Subtitle = ({children, margin, classProp}: Props): JSX.Element => {
  return (
    <div style={{ textAlign: "center", display: "inline-block", position: "relative", marginBottom: "20px" }} className={`spoon ${classProp ? classProp : ''} `}>
      <h3 className="subtitle">
        {children}
      </h3>
    </div>
  )
}