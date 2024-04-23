#include <cmath>
#include <string>
#include <iostream>
#include <iomanip>

int main(){
    int n;
    float t, sT, fC;

    std::cin >> t;
    std::cin >> n;

    t = t/100;
    sT = n*t;

    fC = sT + n;

    std::cout << std::fixed << std::setprecision(2) << fC;
}