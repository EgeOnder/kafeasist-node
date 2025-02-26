import { forwardRef } from "react";

import { cn } from ".";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<{ className?: string; size?: number }>;
  onIconClick?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon: Icon, type, onIconClick, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-radius border border-border px-3 py-2 text-sm font-light text-input-text ring-offset-muted-foreground placeholder:font-normal placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-muted-foreground focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
            Icon && "pr-10",
            className,
          )}
          ref={ref}
          {...props}
        />
        {Icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground">
            {onIconClick ? (
              <button
                type="button"
                className="flex cursor-pointer items-center justify-center transition-colors hover:text-foreground focus:outline-none"
                onClick={onIconClick}
                tabIndex={-1}
              >
                <Icon className="h-5 w-5" />
              </button>
            ) : (
              <Icon className="h-5 w-5" />
            )}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
