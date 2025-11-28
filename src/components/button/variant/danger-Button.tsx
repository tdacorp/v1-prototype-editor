import { Button } from "@/components/ui/button";
import { ButtonSchema } from "@/types/type";

export const DangerButton  = ({ button }: { button:ButtonSchema }) => (

     <Button
        style={{
      backgroundColor: button.style?.backgroundColor,
      color: button.style?.textColor,
      borderRadius: button.style?.borderRadius,
      padding: button.style?.padding,
      
      
    }}
    disabled={button.props.isDisabled}
  >
    {button.props.label}
     </Button>
)