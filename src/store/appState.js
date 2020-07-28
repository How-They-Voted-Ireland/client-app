import { writable } from "svelte/store";

export const selectedConstituency = writable("");
export const currentSearch = writable("");

export const appDimensions = writable({
  headerHeight: 0,
  footerHeight: 0,
  filterHeight: 0,
});
