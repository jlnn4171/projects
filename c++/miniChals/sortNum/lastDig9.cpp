#include <cmath>
#include <string>
#include <iostream>
#include <iomanip>


int main(){
    
    int a, x;

    std::cin >> a;

	x = a % 10;

    if (x == 9 or x == -9) {
	    
	    std::cout << a << " is good";
	}
	
	else {
	    
	    std::cout << a << " is no good";
	}

}