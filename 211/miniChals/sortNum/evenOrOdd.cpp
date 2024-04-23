
#include <cmath>
#include <string>
#include <iostream>
#include <iomanip>

int main(){
    
    int a, x;

    std::cin >> a;

    x = a % 2;

    if (x == 0) {
	    
	    std::cout << a << " is even";
	}
	else {
	    
	    std::cout << a << " is odd";
	}

}