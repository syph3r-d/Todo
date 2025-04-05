import { Button } from "./forms";

export const TaskCard = ({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id: string;
}) => {
  return (
    <div className="rounded-xl bg-gray-300 p-4 drop-shadow-md" key={id}>
      <div className="text-lg font-bold">{title}</div>
      <div className="flex justify-between gap-2 items-center mt-2">
        <div className="font-bold text-sm">{description}</div>
        <Button varient="outlined">Done</Button>
      </div>
    </div>
  );
};
