
//data converter

#include <iostream> 

int main(){
    
    int month, day, year;
    std::cin >> month >> day >> year;
    std::string name = " ";
    
    
    if ((month > 12) || (month < 1)){
        std::cout << "Imaginary month";
        return 0;
    }
    else{
        switch(month){
            case(1): {
                name = "January";
                break;
            }
            case(2): {
                name = "February";
                break;
            }
            case(3): {
                name = "March";
                break;
            }
            case(4): {
                name = "April";
                break;
            }
            case(5): {
                name = "May";
                break;
            }
            case(6): {
                name = "June";
                break;
            }
            case(7): {
                name = "July";
                break;
            }
            case(8): {
                name = "August";
                break;
            }
            case(9): {
                name = "September";
                break;
            }
            case(10): {
                name = "October";
                break;
            }
            case(11): {
                name = "November";
                break;
            }
            case(12): {
                name = "December";
                break;
            }
        }
    }
    
    
    std::cout <<name << " " << day << ", " << year << "\n";
    return 0;
    
}