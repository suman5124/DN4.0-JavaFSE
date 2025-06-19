package week1;

import java.util.Arrays;
import java.util.Comparator;

public class EcommerceSearch {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(205, "Shoes", "Fashion"),
            new Product(150, "Smartphone", "Electronics"),
            new Product(110, "Book", "Education")
        };

        System.out.println("Linear Search:");
        Product result1 = linearSearch(products, 205);
        System.out.println(result1 != null ? result1 : "Product not found");

        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        System.out.println("Binary Search:");
        Product result2 = binarySearch(products, 205);
        System.out.println(result2 != null ? result2 : "Product not found");
    }

    public static Product linearSearch(Product[] products, int searchId) {
        for (Product product : products) {
            if (product.productId == searchId) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int searchId) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (products[mid].productId == searchId)
                return products[mid];
            else if (products[mid].productId < searchId)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return null;
    }
}
