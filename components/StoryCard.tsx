import Image from "next/image";

interface Props {
  title: string;
  name: string;
  date: string;
  id: number;
}
const StoryCard = ({ title, name, date, id }: Props) => {
  return (
    <article className="flex flex-col gap-3 text-left justify-center">
      <div className="relative w-full h-[80%] min-h-[14rem]">
        <Image
          src={`/story-image-${id}.jpg`}
          alt="image"
          fill
          className="object-cover"
        />
      </div>
      <h5 className="uppercase font-semibold">{title}</h5>
      <div className="flex text-gray-600 gap-2">
        <p className="font-light capitalize">{name}</p>·
        <p className="font-light">{date}</p>
      </div>
    </article>
  );
};
export default StoryCard;
