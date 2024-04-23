//all

#include <cmath>
#include <iostream>

int main(){
    int a, b, x;
    std::cin >> a;
    std::cin >> b;
    
    char c;
    std::cin >> c;
    
    if (c == '+'){
        x = a + b;
        std::cout << a << " + " << b << " = " << x;
    }
    if (c == '-'){
        x = a - b;
        std::cout << a << " - " << b << " = " << x;
    }
    if (c == '*'){
        x = a * b;
        std::cout << a << " * " << b << " = " << x;
    }
    if (c == '/'){
        x = a / b;
        std::cout << a << " / " << b << " = " << x;
    }
    
}