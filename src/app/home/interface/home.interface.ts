export interface TabItem {
  id: number;
  label: string;
}

export interface TabsResponse {
  data: {
    list: Array<TabItem>;
  };
}
