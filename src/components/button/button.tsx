import { defaultButton } from './defaults';
import { ButtonSchema, ButtonVariantType } from './type';

interface ButtonComponentProps {
  data?: ButtonSchema;
  onClick?: () => void;
  
}
export default function Buttoncomp({ data,onClick }: ButtonComponentProps) {
  
  const buttonData: ButtonSchema = data || defaultButton;

  const handleClick = () => {
    if (buttonData.props.isDisabled) {
      return;
    }
    if (onClick) {
      onClick();
    } else if (buttonData.props.url) {
      window.location.href = buttonData.props.url;
    }
  };

  const variant: ButtonVariantType = buttonData.props.variant.value;

  if (variant === "rounded-full") {
    return (
      <div className='mt-6'>
        <button
          onClick={handleClick}
          disabled={buttonData.props.isDisabled}
          className="bg-white text-black font-semibold text-lg px-10 py-3.5 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          {buttonData.props.label}
        </button>
      </div>
    );
  }

  if (variant === "outlined") {
    return (
      <div className='mt-6'>
        <button
          onClick={handleClick}
          disabled={buttonData.props.isDisabled}
          className="bg-transparent border-2 border-blue-600 text-blue-600 font-semibold text-base px-8 py-3 rounded-full hover:bg-blue-50 transition-all duration-300"
        >
          {buttonData.props.label}
        </button>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className='mt-6'>
        <button
          onClick={handleClick}
          disabled={buttonData.props.isDisabled}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg px-12 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-2xl"
        >
          {buttonData.props.label}
        </button>
      </div>
    );
  }

  if (variant === "icon-left") {
    return (
      <div className='mt-6'>
        <button
          onClick={handleClick}
          disabled={buttonData.props.isDisabled}
          className="bg-blue-600 text-white font-semibold text-base px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md flex items-center gap-2"
        >
          {buttonData.props.icon && (
            <span className="text-xl">{buttonData.props.icon}</span>
          )}
          {buttonData.props.label}
        </button>
      </div>
    );
  }

  if (variant === "icon-right") {
    return (
      <div className='mt-6'>
        <button
          onClick={handleClick}
          disabled={buttonData.props.isDisabled}
          className="bg-blue-600 text-white font-semibold text-base px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md flex items-center gap-2"
        >
          {buttonData.props.label}
          {buttonData.props.icon && (
            <span className="text-xl">{buttonData.props.icon}</span>
          )}
        </button>
      </div>
    );
  }


  return (
    <div className='mt-6'>
      <button
        onClick={handleClick}
        disabled={buttonData.props.isDisabled}
        className="bg-blue-600 text-white font-semibold text-base px-5 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        {buttonData.props.label}
      </button>
    </div>
  );
}
