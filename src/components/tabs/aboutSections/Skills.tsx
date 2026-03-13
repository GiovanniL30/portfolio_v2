import { skills } from "../../../data/content";
import ScrollableContainer from "../../containers/ScrollableContainer";
import JSONContent from "../../ui/JSONContent";

const Skills = () => {
  return (
    <div className="h-full  w-full">
      <ScrollableContainer
        className="w-full"
        scrollable={true}
        scrollLeft={true}
      >
        <JSONContent className="text-sm" value={skills} />
      </ScrollableContainer>
    </div>
  );
};

export default Skills;
