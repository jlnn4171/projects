
// is it cold out

#include <iostream>

int main(){
    
    double c, f;
    std::cin >> c;
    
    f = (1.8 * c) + 32;
    
    if (f <= 32){
        std::cout << "It is cold out";
        return 0;
    }
    else if ((f > 32) && (f <= 65)){
        std::cout << "Wear a jacket";
        return 0;
    }
    else {
        std::cout << "It is nice out";
        return 0;
    }
    
}