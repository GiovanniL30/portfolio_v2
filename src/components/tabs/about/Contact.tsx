import { linkedInLink, personalGithubLink } from "../../../data/content";
import ScrollableContainer from "../../containers/ScrollableContainer";
import { TextToken } from "../../text/TextTokens";
import JSONContent from "../../ui/JSONContent";

const Contact = () => {
  return (
    <div className="w-full flex items-center mx-auto justify-center mt-10">
      <ScrollableContainer className="p-5" scrollable={false}>
        <TextToken variant="comment">// Feel free to reach out via any of the methods below!</TextToken>

        <JSONContent
          className="mt-5"
          value={{
            name: "Giovanni M. Leo",
            email: "giovannileo100@gmail.com",
            location: "Baguio City",
            website: "https://giovannileo.com",
            github: personalGithubLink,
            linkedin: linkedInLink,
            phone: "+63 928 6040 455",
          }}
        />
      </ScrollableContainer>
    </div>
  );
};

export default Contact;
