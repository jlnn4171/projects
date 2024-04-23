//day of the week

#include <iostream>

int main(){
    
    int day, month, year, weekday, century, yearpart;
    std::cin >> day >> month >> year;

    if (month == 1){
        year = year - 1;
        month = 13;
    }
    else if (month == 2){
        year = year - 1;
        month = 14;
    }
    
    century = (year / 100);
    yearpart = (year % 100);
    
    int a, b, c;
    a = (((month + 1) * 26) / 10);
    b = (yearpart / 4);
    c = (century / 4);
    
    weekday = ((day + a + yearpart + b + c + 5 * century) % 7);
    
    if (weekday == 0){
        std::cout << "Saturday" << '\n';
    }
    else if (weekday == 1){
        std::cout << "Sunday" << '\n';
    }
    else if (weekday == 2){
        std::cout << "Monday" << '\n';
    }
    else if (weekday == 3){
        std::cout << "Tuesday" << '\n';
    }
    else if (weekday == 4){
        std::cout << "Wednesday" << '\n';
    }
    else if (weekday == 5){
        std::cout << "Thursday" << '\n';
    }
    else if (weekday == 6){
        std::cout << "Friday" << '\n';
    }
    
    return 0;
}