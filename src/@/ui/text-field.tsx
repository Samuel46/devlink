import * as React from "react";

import { cn } from "@lib/utils";
import { Link1Icon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	Icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}

const TextField = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, id, label, Icon = Link1Icon, ...props }, ref) => {
		return (
			<div>
				<label htmlFor={id} className="text-body-s text-grey-dark">
					{label}
				</label>
				<div className="relative mt-1 rounded-md shadow-sm">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<Icon className="h-5 w-5 text-gray-500" />
					</div>
					<input
						type={type}
						id={id}
						className={cn(
							"block w-full rounded-md cursor-pointer  border-[1px] border-input py-[.75rem] pl-10 pr-20  hover:shadow-md hover:border-purple transition-colors text-body-m  placeholder:text-grey-dark placeholder:text-body-m focus:outline-none focus:border-purple disabled:cursor-not-allowed disabled:opacity-50 caret-purple",
							className
						)}
						ref={ref}
						{...props}
					/>
				</div>
			</div>
		);
	}
);

TextField.displayName = "TextField";

export { TextField };
