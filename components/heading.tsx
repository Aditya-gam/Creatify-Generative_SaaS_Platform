import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon,
  iconColor = "white",
  bgColor = "black",
}: HeadingProps) => {
  return (
    <div>
      <h1>Heading</h1>
    </div>
  );
};
