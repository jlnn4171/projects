//larger than 100, multiple of 8

#include <cmath>
#include <iostream>

int main(){
    int x, a;
    std::cin >> x;
    
    a = x % 8;
    
    if ((x > 100) && (a == 0)){
        std::cout << x << " satisfies the criteria" << std::endl;    
    }
    else {
        std::cout << x << " does not satisfy the criteria" << std::endl; 
    }
}