export type BusinessType = "retail" | "wholesale";
export type Status = "active" | "inactive";

export interface Category {
  id: number;
  name: string;
  slug: string;
  type: BusinessType;
  status: Status;
}

export interface CategoryFormData extends Omit<Category, "id"> {
  id?: number;
}

export interface TableHeader {
  title: string;
  key: string;
  align?: "start" | "center" | "end";
  width?: string;
  sortable?: boolean;
}

export interface SelectOption {
  value: string;
  title: string;
}
