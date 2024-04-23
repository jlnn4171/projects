
//trigangle

#include <iostream>
#include <cmath>

int main(){
    
    int a, b, c;
    std::cin >> a >> b >> c;
    
    if ((a + b + c) != 180){
        std::cout << "This triangle is impossible" << '\n';
        return 0;
    }
    
    if (a == 90 || b == 90 || c == 90){
        std::cout << "Right" << '\n';
    }
    else if (a > 90 || b > 90 || c > 90){
        std::cout << "Obtuse" << '\n';
    }
    else {
        std::cout << "Acute" << '\n';
    }
    
    return 0;
    
}