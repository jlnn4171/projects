//privileges

#include <cmath>
#include <iostream>

int main(){
    int age;
    std::cin >> age;
    
    if (age < 16){
        std::cout << "Too young";
    }
    else if ((age == 16) || (age < 18)){
        std::cout << "Can drive";
    }
    else if ((age == 18) || (age < 21)){
        std::cout << "Can join the military";
    }
    else if (age >= 21){
        std::cout << "Can have a beer";
    }
}