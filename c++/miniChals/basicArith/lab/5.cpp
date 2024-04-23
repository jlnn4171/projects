#include <cmath>
#include <string>
#include <iostream>
#include <iomanip>

int main(){
    float a, b, c,x;

    std::cin >> a;
    std::cin >> b;
    std::cin >> c;

    x = (a + b + c)/3;

    std::cout << std::fixed << std::setprecision(2) << x;
}