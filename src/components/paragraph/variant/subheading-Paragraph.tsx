import { ParagraphSchema } from "../types";


export const SubheadingParagraph = ({ paragraph }: { paragraph: ParagraphSchema }) => (
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
                fontSize: paragraph.style?.fontsize
            }}
        >{paragraph.props.content}</p>

    </div>
)
