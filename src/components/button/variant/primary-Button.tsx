
import { Button } from "@/components/ui/button";
import { ButtonSchema } from "../type";
export const PrimaryButton = ({ button }: { button: ButtonSchema }) => (
  <Button
    style={{
      backgroundColor: button.style?.backgroundColor,
      color: button.style?.textColor,
      borderRadius: button.style?.borderRadius,
      padding: button.style?.padding,
      border: button.style?.border
      
    }}
    disabled={button.props.isDisabled}
  >
    {button.props.label}
  </Button>
);
