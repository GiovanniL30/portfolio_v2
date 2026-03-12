import type { ContainerBaseProps } from "../../@types/container.types";

type SectionContainerProps = ContainerBaseProps;

const SectionContainer = ({ children, className }: SectionContainerProps) => {
  return (
    <section className={`w-full h-full max-w-420 mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default SectionContainer;
