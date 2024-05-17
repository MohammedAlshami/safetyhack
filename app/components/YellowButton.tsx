interface ButtonProps {
  children: React.ReactNode;
  componentWidth: string; // Assuming componentWidth is a string representing Tailwind CSS classes
}
export const YellowButton: React.FC<ButtonProps> = ({
  children,
  componentWidth,
}) => {
  return (
    <div
      className={`bg-[#FBEB00] h-24 ${componentWidth} rounded-lg border border-[4px] border-black py-2 -skew-x-6 cursor-pointer transition-transform hover:-translate-y-1`}
    >
      <div
        className={`bg-[#F3BC00] w-full h-full flex items-center justify-center `}
      >
        <h1 className="text-white text-3xl font-bold text-stroke">
          {children}
        </h1>
      </div>
    </div>
  );
};
