//license to launch
//reads a series of integers representing days, finds the index of the day with the minimum value among them, and then prints that index

#include <cmath>
#include <string>
#include <iostream>
#include <iomanip>

int main(){
    
    int days, day1, day, min, index;
    
    std::cin >> days;
    std::cin >> day1;
    
    min = day1;
    
    for( int i = 1; i < days; i++){
        std::cin >> day;
        if (min > day){
            min = day;
            index = i;
        }
    }
    
    std::cout << index;
    
}