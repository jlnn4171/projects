//smallest number

#include <iostream>

int main(){
    
    int num1, num2, num3, smallestNum;
    std::cin >> num1 >> num2 >> num3;
    
    smallestNum = num1;
    
    if (num2 < num1){
        smallestNum = num2;
    }
    
    if ((num3 < num1) && (num3 < num2)){
        smallestNum = num3;
    }
    
    std::cout << "The smallest number entered was " << smallestNum << '\n';
    return 0;
    
}