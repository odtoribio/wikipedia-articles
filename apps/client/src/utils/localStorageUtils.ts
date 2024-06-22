export const loadItemsFromLocalStorage = (key: string): any[] => {
  const savedItems = localStorage.getItem(key);
  return savedItems ? JSON.parse(savedItems) : [];
};

export const saveItemsToLocalStorage = (key: string, items: any[]) => {
  localStorage.setItem(key, JSON.stringify(items));
};

export const updateVisitedItem = (key: string, id: string) => {
  const visited = loadItemsFromLocalStorage(key);
  visited.push(id);
  saveItemsToLocalStorage(key, visited);
};

export const isVisitedItem = (key: string, id: string) => {
  const visited = loadItemsFromLocalStorage(key);
  return visited.includes(id)
};
