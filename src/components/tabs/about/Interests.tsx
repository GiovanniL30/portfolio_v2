import aws from "../../../assets/icons/icons8-aws.svg";
import cloud from "../../../assets/icons/icons8-cloud-48.png";
import docker from "../../../assets/icons/icons8-docker.svg";
import lock from "../../../assets/icons/icons8-lock.svg";
import CardContainer from "../../containers/CardContainer";

const Interests = () => {
  return (
    <div>
      <div className="text-sm text-text-muted w-full">
        <p>
          Areas, technologies, and services I'm eager to explore further. Includes emerging frameworks, cloud platforms, and tools that inspire
          curiosity. Always open to learning and expanding my skill set beyond my current stack.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 mt-6 w-full">
        <CardContainer className=" flex flex-col items-center gap-2 ">
          <div className="bg-text-main w-fit flex items-center justify-center rounded-full p-2">
            <img className="w-7 h-7 object-cover aspect-square" src={aws} alt="AWS" />
          </div>
          <p className="font-semibold  text-center">AWS Services</p>
          <p className="text-xs text-text-muted text-center max-w-48">Learning to deploy and manage scalable cloud infrastructure.</p>
        </CardContainer>
        <CardContainer className=" flex flex-col items-center gap-2">
          <div className="bg-text-main w-fit flex items-center justify-center rounded-full p-2">
            <img className="w-7 h-7 object-cover aspect-square" src={docker} alt="Docker" />
          </div>
          <p className="font-semibold  text-center">Docker</p>
          <p className="text-xs text-text-muted text-center max-w-48">Exploring containerization for efficient app development and deployment.</p>
        </CardContainer>
        <CardContainer className=" flex flex-col items-center gap-2">
          <div className="bg-text-main w-fit flex items-center justify-center rounded-full p-2">
            <img className="w-7 h-7 object-cover aspect-square" src={lock} alt="Cybersecurity" />
          </div>
          <p className="font-semibold  text-center">Cybersecurity</p>
          <p className="text-xs text-text-muted text-center max-w-48">Gaining knowledge in securing applications and data.</p>
        </CardContainer>
        <CardContainer className=" flex flex-col items-center gap-2">
          <div className="bg-text-main w-fit flex items-center justify-center rounded-full p-2">
            <img className="w-7 h-7 object-cover aspect-square" src={cloud} alt="Cloud & DevOps" />
          </div>
          <p className="font-semibold text-center">Cloud & DevOps</p>
          <p className="text-xs text-text-muted text-center max-w-48">Building skills in automation, CI/CD, and modern cloud workflows.</p>
        </CardContainer>
      </div>
    </div>
  );
};

export default Interests;
