"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | undefined>(
  undefined,
);

/**
 * Read the Tabs context and return the current tabs state and updater.
 *
 * @returns The Tabs context value — an object with `activeTab: string` and `setActiveTab: (value: string) => void`.
 * @throws Error when there is no enclosing Tabs provider (i.e., the hook is used outside of Tabs).
 */
function useTabs() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within Tabs");
  }
  return context;
}

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Provides tab state to descendants and renders a wrapper for tab elements.
 *
 * @param defaultValue - The initial active tab value.
 * @param children - Child elements that can consume the tabs context.
 * @param className - Optional CSS class applied to the wrapper div.
 * @returns A React element that supplies the tabs context (`activeTab` and `setActiveTab`) to its descendants and wraps `children` in a div.
 */
export function Tabs({ defaultValue, children, className }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Renders a styled container that groups tab triggers.
 *
 * @returns A div element that wraps `children` with the tab-list layout and styling
 */
export function TabsList({ children, className }: TabsListProps) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Renders a tab trigger button that selects its tab when clicked.
 *
 * @param value - Identifier for this tab; clicking the trigger sets the active tab to this value
 * @param children - Contents rendered inside the trigger button
 * @param className - Optional additional class name(s) to apply to the button
 * @returns The trigger button element
 */
export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive
          ? "bg-background text-foreground shadow-sm"
          : "hover:bg-background/50",
        className,
      )}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Renders tab panel content when its `value` matches the current active tab.
 *
 * @param value - Identifier for this tab panel; shown only when it equals the active tab
 * @param children - Content to render inside the panel
 * @param className - Optional additional CSS classes applied to the panel container
 * @returns The panel's rendered element when `value` matches the active tab, `null` otherwise
 */
export function TabsContent({ value, children, className }: TabsContentProps) {
  const { activeTab } = useTabs();

  if (activeTab !== value) return null;

  return (
    <div
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      {children}
    </div>
  );
}