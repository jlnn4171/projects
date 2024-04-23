//temperature converter

#include <iostream> 
#include <iomanip> 

int main(){
    
    double degree, newDegree;
    std::cin >> degree;
    
    char letter;
    std::cin >> letter;
    
    if (letter == 'C'){
        newDegree = ((degree * 1.8) + 32);
    }
    else {
        newDegree = (((degree - 32) * 5)/9);
    }
    
    if (letter == 'C'){
        std::cout << std::fixed << std::setprecision(4) << degree << " degree(s) C is equal to " << newDegree << " degree(s) F" << '\n'; 
    }
    else {
        
        std::cout << std::fixed << std::setprecision(4) << degree << " degree(s) F is equal to " << newDegree << " degree(s) C" << '\n';
    }
    
    return 0;
    
}