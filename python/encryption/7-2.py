#nov 8

#alphabet list
alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

def polyShifted(plaintext, keyword):
    ciphertext = ''

    for i in range(len(keyword)):
        keyNum = alphabet.index(keyword[i])+1
        newKeyLetter = alphabet[keyNum]
        keyword = keyword + newKeyLetter
    
    for i in range(len(plaintext)):
        letter = plaintext[i]
        num_in_alphabet = alphabet.index(letter)
 
        # Find the position in the codeword with the letter to shift
        shiftIndex = i % len(keyword)
                
        # Find the letter in the codeword to shift
        shiftLetter = keyword[shiftIndex]
                
        # Find the number associated with the letter to be used as the shift
        shift = alphabet.index(shiftLetter)
                
        cipher_num = (num_in_alphabet + shift) % len(alphabet)
        cipher_letter = alphabet[cipher_num]
        ciphertext = ciphertext + cipher_letter
    return ciphertext

def unPolyShifted(ciphertext, keyword):
    plaintext = ''

    for i in range(len(keyword)):
        keyNum = alphabet.index(keyword[i])
        newKeyLetter = alphabet[keyNum + 1]
        keyword = keyword + newKeyLetter
    
    for i in range(len(ciphertext)):
        letter = ciphertext[i]
        num_in_alphabet = alphabet.index(letter)
 
        # Find the position in the codeword with the letter to shift
        shiftIndex = i % len(keyword)
                
        # Find the number associated with the letter to be used as the shift
        shift = alphabet.index(keyword[shiftIndex])
                
        cipher_num = (num_in_alphabet - shift) % len(alphabet)
        cipher_letter = alphabet[cipher_num]
        plaintext = plaintext + cipher_letter
    return plaintext