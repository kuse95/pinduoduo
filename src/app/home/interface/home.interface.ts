export interface TabItem {
  id: number;
  label: string;
  type: string;
}

export interface HomeTabsResponse {
  list: Array<TabItem>;
}
