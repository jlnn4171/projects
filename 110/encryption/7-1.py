#nov 8

#alphabet list
alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

#changing plaintext to cipher
def caesarPlus(plaintext, key):
    ciphertext = ''
    #counter to change the shift with each loop/letter of the plaintext
    i = 0
    for letter in plaintext:
        num = alphabet.index(letter)
        cipherNum = (num + (key+i)) % len(alphabet)
        cipherLetter = alphabet[cipherNum]
        ciphertext = ciphertext + cipherLetter
        i = i + 1
    return ciphertext

#changing ciphertext to plaintext
def unCaesarPlus(ciphertext, key):
    plaintext = ''
    i = 0
    for letter in ciphertext:
        num = alphabet.index(letter)
        plainNum = (num - (key+i)) % len(alphabet)
        plainLetter = alphabet[plainNum]
        plaintext = plaintext + plainLetter
        i = i + 1
    return plaintext