import type {
  Status,
  TableHeader,
  BusinessType,
} from "@/shared/interface/category";

export const formRules = {
  required: (value: string) => !!value || "Field is required",
  slugFormat: (value: string) =>
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) ||
    "Use lowercase letters, numbers and hyphens only",
};

export const getStatusColor = (status: Status) =>
  status === "active" ? "success" : "warning";

export const defaultTableHeaders: TableHeader[] = [
  { title: "#", key: "id", width: "80px" },
  { title: "NAME", key: "name" },
  { title: "SLUG", key: "slug" },
  { title: "TYPE", key: "type", align: "center" },
  { title: "STATUS", key: "status", align: "center" },
];

export const businessTypes: BusinessType[] = ["retail", "wholesale"];
export const statusOptions: Status[] = ["active", "inactive"];
