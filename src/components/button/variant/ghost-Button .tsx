import { ButtonSchema } from "@/types/type";

export const GhostButton = ({ button }: { button: ButtonSchema }) => (
    <button
         style={{
      backgroundColor: button.style?.backgroundColor,
      color: button.style?.textColor,
      borderRadius: button.style?.borderRadius,
      padding: button.style?.padding,
       border: button.style?.border,
      
    }}
    disabled={button.props.isDisabled}
  >
    {button.props.label}
        </button>
)