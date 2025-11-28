import { ParagraphSchema } from "@/types/type" 


export const CaptionParagraph = ({ paragraph }: { paragraph: ParagraphSchema }) => (
    <div>
        <p
            style={{
                backgroundColor: paragraph.style?.backgroundColor,
                color: paragraph.style?.textColor,
                fontFamily: paragraph.style?.fontFamily,
                fontStyle: paragraph.style?.fontStyle,
                lineHeight: paragraph.style?.lineHeight,
                letterSpacing: paragraph.style?.letterSpacing,
                margin: paragraph.style?.margin,
                padding: paragraph.style?.padding,
            }}
        >{paragraph.props.content}</p>

    </div>
)
