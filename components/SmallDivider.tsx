const SmallDivider = ({ color }: { color: string }) => {
  return <span className={`bg-${color} w-6 h-[1px] z-50`}></span>;
};
export default SmallDivider;
