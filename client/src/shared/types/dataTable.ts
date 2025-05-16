export interface DataTableHeader {
  title: string;
  key: string;
  align?: "start" | "center" | "end";
  width?: string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: any) => string | number | JSX.Element;
}

export interface DataTableOptions {
  page?: number;
  itemsPerPage?: number;
  sortBy?: { key: string; order: "asc" | "desc" }[];
  search?: string;
}

export interface DataTableActions<T = any> {
  edit?: (item: T) => void;
  delete?: (item: T) => void;
  view?: (item: T) => void;
  custom?: {
    icon: string;
    color: string;
    action: (item: T) => void;
    tooltip: string;
  }[];
}
