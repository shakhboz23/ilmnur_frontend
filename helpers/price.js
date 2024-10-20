class PriceFormat {
    formatPrice(price) {
        if (typeof price !== "number" || isNaN(price)) {
            return "Invalid price";
        }

        const priceString = price.toString();
        const formattedPrice = priceString.slice(0, -2) + "." + priceString.slice(-2);
        return formattedPrice;
    }
}

export default new PriceFormat();
