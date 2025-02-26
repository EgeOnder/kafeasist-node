import type { LucideIcon } from "lucide-react";

import { Typography } from "@kafeasist/ui";

interface AuthHeadingProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
}

export default function AuthHeading({
  title,
  description,
  icon: Icon,
}: AuthHeadingProps) {
  return (
    <div className="flex max-w-[70%] flex-col items-center justify-center space-y-1.5 text-center">
      <div className="flex items-center space-x-2">
        {Icon && <Icon className="h-6 w-6" />}
        <Typography variant="heading">{title}</Typography>
      </div>
      {description && (
        <Typography variant="small" className="text-muted-foreground">
          {description}
        </Typography>
      )}
    </div>
  );
}
