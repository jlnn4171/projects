#include <cmath>
#include <string>
#include <iostream>
#include <iomanip>

int main(){
    int x; 
    
    std::cin >> x;
    
    if (x > 0){
        std::cout << x << " is positive";
    }
    
    else if (x < 0){
        std::cout << x << " is negative";
    }
    else if (x = 0){
        std::cout << x << " is neither positive nor negative";
    }
}