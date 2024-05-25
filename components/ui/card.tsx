interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <>
      <div className="grow flex flex-col gap-5 border  border-opacity-10 p-4  rounded-md max-w-[17rem] min-h-[15rem]  w-full justify-center ">
        <div className="p-4  w-fit flex items-center justify-center rounded-md border-t  border-opacity-10 border-r ">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl">{title}</h2>
          <p className="text-[14px] opacity-60">{description}</p>
        </div>
      </div>
    </>
  );
};