import { ButtonSchema, ButtonVariantType } from "../type";

import { PrimaryButton } from "./primary-Button";
import { DefalutButton } from "./default-Button";
import { OutlinedButton } from "./outlined-Button";
import { SecondaryButton } from "./secondary-Button";
import { GhostButton } from "./ghost-Button ";
import { DangerButton } from "./danger-Button";


interface ButtonVariantRendererProps {
  variant: ButtonVariantType;
  button: ButtonSchema;
}

export const ButtonVariantRenderer = ({ variant, button }: ButtonVariantRendererProps) => {
  switch (variant) {
    case "primary":
      return <PrimaryButton button={button} />;
    case "secondary":
      return <SecondaryButton button={button} />;
    case "outlined":
      return <OutlinedButton button={button} />;
    case "ghost":
      return <GhostButton button={button} />;
    case "default":
      return <DefalutButton button={button} />;
    case "danger":
      return <DangerButton button={button} />;

    default:
      return null;
  }
};
