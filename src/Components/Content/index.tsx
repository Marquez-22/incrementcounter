import { ReactNode } from "react"
import { ContentIcon } from "../ContentIcon"
import { SVGTwitter } from "@/svg/twitter"
import { SVGYoutube } from "@/svg/youtube"
import { SVGFacebook } from "@/svg/facebook"

type ContentType = "Content" | "Content1"
interface ContentProps {
    type?: ContentType

}

export const Content = ({ type = "Content" }: ContentProps) => {
    return (<>
        <div className={`Content ${type}`}>
            <ContentIcon
                icon={<><SVGTwitter /></>}
                number= {12000}
                text=" Twitter Followers"

            />
            <ContentIcon
                icon={<><SVGYoutube /></>}
                number={5000}
                text=" Youtube Subscribers"

            />
            <ContentIcon
                icon={<><SVGFacebook /></>}
                number={7500}
                text=" Facebook Fans"


            />


        </div>
    </>)

}