def modInverse(a,m):
    decode = False
    x = 0
    while x<=m:
        find = (a*x)%m
        x = x + 1
        if find == 1:
            decode = True
            return x-1

        
    if decode == False:
        return -1

alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

def unAffine(a,b,m,ciphertext):

    plaintext = ''

    x = modInverse(a,m)
    if x == -1:
        ciphertext = ''
    else:
        for i in range(len(ciphertext)):
            num = alphabet.index(ciphertext[i])
            plainNum = (x*(num - b)) % m
            plainLetter = alphabet[plainNum]
            plaintext = plaintext + plainLetter
    return plaintext