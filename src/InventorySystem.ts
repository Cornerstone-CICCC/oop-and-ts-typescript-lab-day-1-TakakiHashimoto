// 🍎 Create an Inventory System where items can be added, updated, and checked for stock.

// 1. Create a tuple type called ItemDetails which holds (string, number, boolean) representing itemName, quantity, and isAvailable.
type ItemDetails = [string, number, boolean];

// 2. Create a type alias called InventoryItem which contains: itemId (number), details (ItemDetails).
type InventoryItem = {
  itemId: number;
  details: ItemDetails;
};

let inventory: InventoryItem[] = [];

// 3. Create a function called addItem which adds an item to the inventory array. The function needs to return an InventoryItem object.
function addItem(
  itemId: number,
  itemName: string,
  quantity: number,
  isAvailable: boolean,
): InventoryItem {
  const item: InventoryItem = {
    itemId,
    details: [itemName, quantity, isAvailable],
  };

  inventory.push(item);

  return item;
}

// 4. Create a function called updateStock which updates the quantity of an item. The return needs to be a string.
function updateStock(itemId: number, quantity: number): string {
  const foundItem = inventory.find((inv) => inv.itemId === itemId);
  if (!foundItem) {
    return "Item not found";
  }

  foundItem.details[1] = quantity;
  return `Stock updated for ${foundItem.details[0]}, new quantity: ${foundItem.details[1]}`;
}

// 5. Create a function called checkStock which returns true if the item is available and false otherwise.
function checkStock(itemId: number): boolean | string {
  const foundItem = inventory.find((inv) => inv.itemId === itemId);
  if (!foundItem) {
    return "item not found";
  }
  return foundItem?.details[2];
}

// Test cases (Create more if needed)
console.log(addItem(1, "Laptop", 5, true)); // { itemId: 1, details: ["Laptop", 5, true] }
console.log(updateStock(1, 3)); // "Stock updated for Laptop, new quantity: 3"
console.log(checkStock(1)); // true
