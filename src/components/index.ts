import AccordionContainer from "./Accordion/AccordionContainer";
import GradientGenerator from "./GradientGenerator";
import JobBoard from "./JobBoard";
import { PortalSandbox } from "./Portal";
import RedSquare from "./RedSquare";
import ShoppingCart from "./ShoppingCart";
import { ShoppingList } from "./ShoppingList";
import Todo from "./Todo/Todo";
import UndoableCounter from "./UndoableCounter";

export type ComponentKey =
  | "gradient-generator"
  | "shopping-cart"
  | "shopping-list"
  | "todo-list"
  | "portal"
  | "red-square"
  | "job-board"
  | "accordion"
  | "undoable-counter";

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
  "red-square": {
    name: "Red Square",
    component: RedSquare,
  },
  "job-board": {
    name: "Job Board",
    component: JobBoard,
  },
  accordion: {
    name: "Accordion",
    component: AccordionContainer,
  },
  "undoable-counter": {
    name: "Undoable Counter",
    component: UndoableCounter,
  },
};
