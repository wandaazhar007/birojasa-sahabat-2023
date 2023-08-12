import Commitment from "../components/commitment/Commitment";
import Founder from "../components/founder/Founder";
import Mission from "../components/mission/Mission";
import Story from "../components/story/Story";
import Team from "../components/team/Team";

const AboutPage: React.FC = () => {
  return (
    <>
      <Mission />
      <Story />
      <Commitment />
      <Founder />
      <Team />
    </>

  );
}

export default AboutPage;