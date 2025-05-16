import type { Category } from "@/shared/interface/category";

// Simulate API calls with localStorage persistence
export const CategoryService = {
  getCategories(): Category[] {
    const stored = localStorage.getItem("categories");
    return stored ? JSON.parse(stored) : [];
  },

  saveCategories(categories: Category[]): void {
    localStorage.setItem("categories", JSON.stringify(categories));
  },

  async loadCategories(): Promise<Category[]> {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.getCategories());
      }, 500);
    });
  },

  async saveCategory(category: Category): Promise<Category> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const categories = this.getCategories();
        if (category.id) {
          // Update existing
          const index = categories.findIndex((c) => c.id === category.id);
          if (index !== -1) {
            categories[index] = category;
          }
        } else {
          // Create new
          category.id = Math.max(0, ...categories.map((c) => c.id)) + 1;
          categories.push(category);
        }
        this.saveCategories(categories);
        resolve(category);
      }, 500);
    });
  },

  async deleteCategory(id: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const categories = this.getCategories().filter((c) => c.id !== id);
        this.saveCategories(categories);
        resolve();
      }, 500);
    });
  },
};
