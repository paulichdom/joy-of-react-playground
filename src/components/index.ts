import GradientGenerator from "./GradientGenerator";
import ShoppingCart from "./ShoppingCart";

export type ComponentKey = "gradient-generator" | "shopping-cart";
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
};
