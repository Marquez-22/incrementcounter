import { ReactNode } from "react"

type TextType = "text" | "text1"
interface TextProps {
    type?: TextType
    children: ReactNode
}

export const Text = ({ children, type = "text" }: TextProps) => {
    return (<>
        <div className={`text ${type}`}>
            {children}
            
        </div>
    </>)

}