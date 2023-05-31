import { ReactNode } from "react"
import { Text } from "../Text"
import { Number } from "../Number"


type ContentIconType = "ContentIcon"
interface ContentIconProps {
    type?: ContentIconType
    number?: number
    text?: string
    icon?: ReactNode
}

export const ContentIcon = ({ icon = "", text = "", number = 0, type = "ContentIcon" }: ContentIconProps) => {
    return (<>
        <div className={`ContentIcon ${type}`}>
            {icon}
            <Number
                number={number}
            />
            <Text>
                {text}
            </Text>
        </div>
    </>)

}