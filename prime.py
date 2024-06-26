def prime(n):
    if n == 2:
        return True
    if n < 2 or n % 2 == 0:
        return False
    for m in range(3, int(n**0.5)+1, 2):
        if n % m == 0:
            return False
    return True