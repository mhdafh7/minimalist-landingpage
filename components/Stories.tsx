import { StoryItems } from "@/constants/StoryItems";
import SmallDivider from "./SmallDivider";
import StoryCard from "./StoryCard";

const Stories = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col gap-12 py-24 responsive justify-center text-black text-left">
      <div className="flex flex-col gap-3 w-full justify-center">
        <h2 className="title-black">We Create stories.</h2>
        <p className="text-lg">
          A Killer narrative will turn your readers into raving fans.
        </p>
      </div>
      <SmallDivider color="black" />
      <div className="grid grid-cols-2 grid-rows-2 max-lg:grid-cols-1 w-full gap-5">
        {StoryItems.map(({ title, name, date, id }) => {
          return (
            <StoryCard title={title} name={name} key={id} id={id} date={date} />
          );
        })}
      </div>
    </section>
  );
};
export default Stories;
