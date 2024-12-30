class Food {
    constructor(itemCode, itemName, category, price, discount) {
        this.itemCode = itemCode;
        this.itemName = itemName;
        this.category = category;
        this.price = price;
        this.discount = discount;
    }

    // Getter and Setter for itemCode
    getItemCode() {
        return this.itemCode;
    }

    setItemCode(itemCode) {
        this.itemCode = itemCode;
    }

    // Getter and Setter for itemName
    getItemName() {
        return this.itemName;
    }

    setItemName(itemName) {
        this.itemName = itemName;
    }

    // Getter and Setter for category
    getCategory() {
        return this.category;
    }

    setCategory(category) {
        this.category = category;
    }

    // Getter and Setter for price
    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }

    // Getter and Setter for discount
    getDiscount() {
        return this.discount;
    }

    setDiscount(discount) {
        this.discount = discount;
    }

    // Method to return a string representation of the object
    toString() {
        return `Food { itemCode: ${this.itemCode}, itemName: ${this.itemName}, category: ${this.category}, price: ${this.price}, discount: ${this.discount} }`;
    }
}

// Example usage:
export const foodItem = new Food('F001', 'Pizza', 'Main Course', 12.99, 0.1);
console.log(foodItem.toString());

foodItem.setPrice(14.99);
console.log(`Updated Price: ${foodItem.getPrice()}`);




