import GradientGenerator from "./GradientGenerator";
import { PortalSandbox } from "./Portal";
import ShoppingCart from "./ShoppingCart";
import { ShoppingList } from "./ShoppingList";
import Todo from "./Todo/Todo";

export type ComponentKey =
  | "gradient-generator"
  | "shopping-cart"
  | "shopping-list"
  | "todo-list"
  | "portal";

export type ComponentRecord = Record<
  ComponentKey,
  { name: string; component: React.ComponentType }
>;

export const components: ComponentRecord = {
  "gradient-generator": {
    name: "Gradient Generator",
    component: GradientGenerator,
  },
  "shopping-cart": {
    name: "Shopping Cart",
    component: ShoppingCart,
  },
  "shopping-list": {
    name: "Shopping List",
    component: ShoppingList,
  },
  "todo-list": {
    name: "Todo List",
    component: Todo,
  },
  portal: {
    name: "Portal",
    component: PortalSandbox,
  },
};
