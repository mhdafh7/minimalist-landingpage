import Cta from "./Cta";

const FlatCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <article className="flex flex-col gap-8 text-black w-60 py-3">
      <div className="flex flex-col gap-2">
        <h5 className="uppercase text-lg font-semibold">{title}</h5>
        <p className="font-normal text-base tracking-wide leading-9">{description}</p>
      </div>
      <Cta>Learn More</Cta>
    </article>
  );
};
export default FlatCard;
