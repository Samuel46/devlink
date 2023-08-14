"use client";

import * as React from "react";

import { cn } from "@lib/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={cn("inline-flex  items-center justify-center rounded-lg bg-none p-1 text-grey hover:text-purple", className)}
		{...props}
	/>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={cn(
			"inline-flex items-center justify-center whitespace-nowrap rounded-md px-[1.6875rem] py-[0.6875rem] text-heading-s font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  data-[state=active]:text-purple data-[state=active]:bg-purple-light",
			className
		)}
		{...props}
	/>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={cn(
			"mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
			className
		)}
		{...props}
	/>
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };

// Other tab

{
	/* <div>
<div className="sm:hidden">
    <label htmlFor="tabs" className="sr-only">
        Select a tab
    </label>

    <select
        id="tabs"
        name="tabs"
        value={tab}
        className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        defaultValue={tabs[0].name}
    >
        {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
        ))}
    </select>
</div>
<div className="hidden sm:block">
    <nav className="flex space-x-4" aria-label="Tabs">
        {tabs.map((item) => (
            <a
                key={item.name}
                href={"#!!"}
                onClick={() => setTab(item.name)}
                className={cn(
                    item.name === tab ? "bg-indigo-100 text-indigo-700" : "text-gray-500 hover:text-gray-700",
                    "rounded-md px-3 py-2 text-sm font-medium"
                )}
                aria-current={item.name == tab ? "page" : undefined}
            >
                {item.name}
            </a>
        ))}
    </nav>
</div>
</div> */
}
