def delete_item(array, index):
    for i in range(index, len(array) - 1):
        array[i] = array[i + 1]
    
    array.pop()

    return array


array = [1, 2, 5, 6, 7, 3, 4]
print(array)

print(delete_item(array, 2))
