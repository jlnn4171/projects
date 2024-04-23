//hissing mic
//if word contains s

#include <cmath>
#include <string>
#include <iostream>
#include <iomanip>

int main(){

    bool test;
    test = false;
    
    std::string word;
    std::cin >> word;

    for (int i = 0; i < word.length(); i++) {

        if ((word[i] == 's') && ((word[i + 1]) == 's')){
            test = true;
        }
    }
    
    if (test == true){
        std::cout << "hiss" << std::endl;
    }
    else {
        std::cout << "no hiss" << std::endl;
    }

}