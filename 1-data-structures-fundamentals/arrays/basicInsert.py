print("final to index shift approach")
def insert_item(array, index, val):
    array.append(0)

    for i in range(len(array) - 1, index, -1):
        array[i] = array[i-1]
    
    array[index] = val

    return array


array = [5, 6, 7, 3, 4]

print(array)
print(insert_item(array, 1, 9))
print(insert_item(array, 5, 9))


print("index to final shift approach")

def insert_item2(array, index, val):
    array.append(0)

    prev = val

    for i in range(index, len(array)):
        temp = array[i]
        array[i] = prev
        prev = temp
    
    return array

array = [5, 6, 7, 3, 4]

print(array)
print(insert_item2(array, 1, 9))
print(insert_item2(array, 5, 9))