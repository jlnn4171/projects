//dot product
// takes input for two 2D vectors, calculates their lengths, normalizes them, computes their dot product, and determines whether the angle between them is perpendicular, acute, or obtuse
// prints the lengths of the vectors, the normalized dot product, and the angle classification

#include <cmath>
#include <string>
#include <iostream>
#include <iomanip>

int main(){

    double x1, y1, x2, y2;
    std::cin >> x1 >> y1 >> x2 >> y2;

    double vecLen1, vecLen2;
    vecLen1 = sqrt(pow(x1, 2) + pow(y1, 2));
    vecLen2 = sqrt(pow(x2, 2) + pow(y2, 2));

    double normVecX1, normVecX2, normVecY1, normVecY2;
    normVecX1 = (x1 / vecLen1);
    normVecX2 = (x2 / vecLen2);
    normVecY1 = (y1 / vecLen1);
    normVecY2 = (y2 / vecLen2);
    

    double normDotProd, dotProd;
    normDotProd = (normVecX1 * normVecX2) + (normVecY1 * normVecY2);
    dotProd = ((x1 * x2) + (y1 * y2));
    
    // std::cout << normDotProd << " " << dotProd << std::endl;

    std::string angle;
    if (normDotProd == 0){
        angle = "Perpendicular";
    }
    if (normDotProd > 0){
        angle = "Acute";
    }
    if (normDotProd < 0){
        angle = "Obtuse";
    }

    std::cout << "Length of v1: " << std::fixed << std::setprecision(4) << vecLen1 << "\n";
    std::cout << "Length of v2: " << std::fixed << std::setprecision(4) << vecLen2 << "\n";

    std::cout << "Their normalized dot product is " << std::fixed << std::setprecision(4) << normDotProd << " and they are " << angle << "\n";
}