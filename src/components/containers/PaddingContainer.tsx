import type { ContainerBaseProps } from "../../@types/container.types";

type PaddingContainerProps = ContainerBaseProps;

const PaddingContainer = ({ className, children }: PaddingContainerProps) => {
  return (
    <div className={`w-full h-full p-2.5 md:p-5 lg:px-7 ${className}`}>
      {children}
    </div>
  );
};

export default PaddingContainer;
