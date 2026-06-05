import { HERO_SOCIALS } from "@/constants/socials";
import SocialCard from "./SocialCard";

const Socials = () => {
  return (
    <div className="flex wrap gap-6 phone:gap-3 sm:gap-7 justify-start items-center w-full mt-4">
      {HERO_SOCIALS.map((social) => (
        <SocialCard social={social} key={social.name} />
      ))}
    </div>
  );
};

export default Socials;
