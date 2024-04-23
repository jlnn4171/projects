//soduku a4

#include <iostream>
#include <cmath>

int main(){
    
    int board[9][9];
    
    //making the board = matrix
    for(int i = 0; i < 9; i++){
        for(int j = 0; j < 9; j++){
            std::cin >> board[i][j];
        }
    }
    
    bool solved = true;
    int sumCol, sumRow, sumBox;
    
    
    //check row
    for(int i = 0; i < 9; i++){
        sumRow = 0;
        for(int j = 0; j < 9; j++){
            sumRow += board[i][j];
        }
        if (sumRow != 45){
            solved = false;
        }
    }

    //check column
    for(int i = 0; i < 9; i++){
        sumCol = 0;
        for(int j = 0; j < 9; j++){
            sumCol += board[j][i];
        }
        if (sumCol != 45){
            solved = false;
        }
    }

    //check box
    for(int n = 0; n < 9; n +=3){
        for(int k = 0; k < 9; k += 3){
            sumBox = 0;
            for(int i = n; i < n + 3; i++){
                for(int j = k; j < k + 3; j++){
                    sumBox += board[i][j];
                }
            }
            if(sumBox != 45){
                solved = false;
            }
        }
    }
    

    //if(sumRow != 45 || sumCol != 45 || sumBox != 45){
        //solved = false;
    //}
    
    
    if(solved == false){
        std::cout << "Wrong solution!" << '\n';
    }
    else{
        std::cout << "Solution is good!" << '\n';
    }
    

    return 0;
}