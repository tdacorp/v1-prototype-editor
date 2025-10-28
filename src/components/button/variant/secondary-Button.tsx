import { ButtonSchema } from "../type";

export const SecondaryButton = ({ button }: { button: ButtonSchema }) => (
    <button
          style={{
      backgroundColor: button.style?.backgroundColor,
      color: button.style?.textColor,
      borderRadius: button.style?.borderRadius,
      padding: button.style?.padding,
      
    }}
    disabled={button.props.isDisabled}
  >
    {button.props.label}
        </button>
)