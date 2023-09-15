import { XMarkIcon } from "@heroicons/react/24/outline";

type ConfirmationModalProps = {
  visible: boolean;
  title: string | React.ReactNode;
  message: string | React.ReactNode;
  primaryButton?: React.ReactNode;
  secondaryButton?: React.ReactNode;
  onClose: () => void;
};

export const ConfirmationModal = ({
  visible,
  title,
  primaryButton,
  onClose,
  secondaryButton,
  message,
}: ConfirmationModalProps) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="top-0 left-0 absolute w-full h-full bg-gray-800 opacity-90 z-10" />
      <div className="w-4/6 h-4/6 md:w-6/12 md:h-2/6 bg-white z-50 shadow-lg rounded p-8 flex flex-col  justify-between">
        <div className="w-full flex justify-between items-center">
          <div className="text-2xl font-bold">{title}</div>
          <div>
            <XMarkIcon
              className="w-9 h-9 text-gray-400 cursor-pointer"
              onClick={onClose}
            />
          </div>
        </div>
        <div>{message}</div>
        <div className="w-full flex justify-end items-center">
          {secondaryButton && secondaryButton}
          {primaryButton && primaryButton}
        </div>
      </div>
    </div>
  );
};
