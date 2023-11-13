# Find numbers between x1 and x2 that are products of primes between n1 and n2
# Useful for stats on game cards

import itertools

def is_prime(num):
    """Check if a number is prime."""
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

def find_primes_in_range(n1, n2):
    """Find all prime numbers in the range from n1 to n2."""
    return [num for num in range(n1, n2 + 1) if is_prime(num)]

def max_factors_for_prime(prime, x2):
    """Calculate the maximum number of times a prime can be a factor without exceeding x2."""
    count = 0
    product = 1
    while product * prime <= x2:
        product *= prime
        count += 1
    return count

def products_of_primes_in_range(x1, x2, n1, n2):
    """Find all numbers between x1 and x2 that are products of primes between n1 and n2."""
    primes = find_primes_in_range(n1, n2)
    valid_products = {}

    for prime in primes:
        max_factors = max_factors_for_prime(prime, x2)
        for r in range(1, max_factors + 1):
            for combination in itertools.combinations_with_replacement(primes, r):
                product = 1
                for num in combination:
                    product *= num
                    if product > x2:
                        break
                if x1 <= product <= x2:
                    valid_products[product] = combination

    return valid_products

# Example Usage
x1, x2 = 240, 2000  # Range of products
n1, n2 = 2, 12     # Range of prime numbers
products = products_of_primes_in_range(x1, x2, n1, n2)

# Sort the products (dictionary keys) and iterate over them in sorted order
sorted_products = sorted(products.keys())

for product in sorted_products:
    factors = products[product]
    print(f"Product: {product}, Factors: {factors}")
