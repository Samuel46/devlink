import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-[0.5rem] text-heading-s transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-heading-s font-medium text-white shadow hover:bg-purple-hover",
				destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline:
					"border border-purple bg-transparent text-purple font-semibold shadow-sm hover:bg-purple-light hover:text-purple",
				secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
				ghost: "text-body-m text-grey hover:bg-grey-light hover:text-grey-dark",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "px-4 py-3",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-10 rounded-md px-8",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
