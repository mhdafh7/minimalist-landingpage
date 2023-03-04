import { Infos } from "@/constants/Infos";
import FlatCard from "./FlatCard";
import SmallDivider from "./SmallDivider";

const Info = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col gap-12 py-24 justify-center text-black text-left responsive max-lg:gap-12">
      <div className="flex flex-col gap-3 w-full justify-center">
        <h2 className="title-black">We build experience.</h2>
        <p className="text-lg">A Minimalistic approach is the only way to design a website.</p>
      </div>
      <SmallDivider color="black"/>
      <div className="flex gap-16 flex-wrap w-full">
        {Infos.map(({ title, description }) => {
          return <FlatCard key={title} title={title} description={description} />;
        })}
      </div>
    </section>
  );
};
export default Info;
