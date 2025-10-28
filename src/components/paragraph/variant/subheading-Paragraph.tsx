import { ParagraphSchema } from "../types";


export const SubheadingParagraph = ({ paragraph }: { paragraph: ParagraphSchema }) => (
    <div style={{ marginTop: "150px" }}>

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
