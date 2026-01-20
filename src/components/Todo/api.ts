import { TodoistApi } from "@doist/todoist-api-typescript";

const apiToken = import.meta.env.VITE_TODOIST_API_TOKEN;

export const api = new TodoistApi(apiToken);
