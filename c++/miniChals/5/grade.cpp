// grades

#include <iostream> 
#include <iomanip> 

int main(){
    
    char letter;
    std::cin >> letter;
    
    //lowercase
    if (isupper(letter)){
        letter = letter + 32;
    }
    
    if (letter == 'a'){
        std::cout << "Excellent" << '\n';
    }
    else if (letter == 'b'){
        std::cout << "Good" << '\n';
    }
    else if (letter == 'c'){
        std::cout << "Average" << '\n';
    }
    else if (letter == 'd'){
        std::cout << "Poor" << '\n';
    }
    else if (letter == 'f'){
        std::cout << "Failing" << '\n';
    }
    
    return 0;
}