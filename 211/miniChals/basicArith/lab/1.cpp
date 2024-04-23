
#include <cmath>
#include <string>
#include <iostream>
#include <iomanip>

int main(){
    int a, b, c, z, x1, x2;

    std::cin >> a;
    std::cin >> b;
    std::cin >> c;

    z = (sqrt((b*b) - 4*a*c));

    x1 = ((-b) + z)/(2*a);
    x2 = ((-b) - z)/(2*a);

    std::cout << std::fixed << std::setprecision(2) << x1 << ", " << x2;
}