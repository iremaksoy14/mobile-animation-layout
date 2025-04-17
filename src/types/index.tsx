import type { JSX } from "react";
export interface TabItem {
  id: string;
  label: string;
  category: string;
  title: string;
  description: string;
  image: string;
  icon: (isActive: boolean) => JSX.Element;
}
