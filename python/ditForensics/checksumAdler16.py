#nov 15
#hw

# Function to convert a binary number (input as a string)
# into a decimal number
def bin_to_decimal(binary):
    # Initialize accumulator
    decimal = 0
    # Loop for the length of the string
    for i in range(len(binary)):
        # Compute the power of 2 for the position in the binary number
        power = len(binary) - i - 1
        # Add the power of 2 to the decimal if there is a 1 in the position
        if binary[i] == '1':
            decimal = decimal + 2**power
    return decimal

# Function to look up the ASCII representation of a capital letter
# Note: This function only considers capital letters and a space character
def ascii_lookup(ch):
    if ch == 'A':
        return "01000001"
    elif ch == 'B':
        return "01000010"
    elif ch == 'C':
        return "01000011"
    elif ch == 'D':
        return "01000100"
    elif ch == 'E':
        return "01000101"
    elif ch == 'F':
        return "01000110"
    elif ch == 'G':
        return "01000111"
    elif ch == 'H':
        return "01001000"
    elif ch == 'I':
        return "01001001"
    elif ch == 'J':
        return "01001010"
    elif ch == 'K':
        return "01001011"
    elif ch == 'L':
        return "01001100"
    elif ch == 'M':
        return "01001101"
    elif ch == 'N':
        return "01001110"
    elif ch == 'O':
        return "01001111"
    elif ch == 'P':
        return "01010000"
    elif ch == 'Q':
        return "01010001"
    elif ch == 'R':
        return "01010010"
    elif ch == 'S':
        return "01010011"
    elif ch == 'T':
        return "01010100"
    elif ch == 'U':
        return "01010101"
    elif ch == 'V':
        return "01010110"
    elif ch == 'W':
        return "01010111"
    elif ch == 'X':
        return "01011000"
    elif ch == 'Y':
        return "01011001"
    elif ch == 'Z':
        return "01011010"
    elif ch == ' ':
        return "00100000"
    else:
        return ''

# Function to compute the 8-bit checksum of a string
def checksum8(inString):
    # Initialize accumulator
    chksm = 0
    # For each character in the string
    for ch in inString:
        # Look up the ASCII value
        ascii = ascii_lookup(ch)
        if ascii == '':
            return -1
        # Convert the binary to decimal
        dec = bin_to_decimal(ascii)
        # Add the decimal to the checksum accumulator
        chksm = chksm + dec
    # Make sure the checksum fits into 8 bits 
    chksm = chksm % 2**8
    return chksm

#function to compute A component of alder 16
def alder16A(word):
    A = 0
    for ch in word:
        hashCh = checksum8(ch)
        A = A + hashCh
    A = (A + 1)%251
    return A

#function to compute B component of alder 16
def alder16B(word):
    A = 0
    B = 0
    for ch in word:
        hashCh = checksum8(ch)
        A = A + hashCh
        B = B + (1 + A)
    B = B % 251
    return B

#function to compute alder 16
def checksumAdler16(word):
    a = alder16A(word)
    b = alder16B(word)
    alder16 = (b * 256) + a
    return alder16