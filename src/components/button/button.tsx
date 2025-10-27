import { dangerbutton, defaultButton, ghostButton, outlinedButton, primaryButton, secondaryButton } from "./defaults";
import { ButtonSchema } from "./type";
import { ButtonVariantRenderer } from "./variant/variant-Renderer";


const buttons: ButtonSchema[] = [
  defaultButton,
  outlinedButton,
  primaryButton,
  secondaryButton,
  ghostButton,
  dangerbutton
];


export const ButtonGallery = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {buttons.map(button =>
      <ButtonVariantRenderer
        key={button.id}
        variant={button.props.variant.value}
        button={button}
      />
    )}
  </div>
);

