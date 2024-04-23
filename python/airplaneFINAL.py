#name: juliana nguyen
#assignment: programming project implementation
#program title: airline flight scheduling

"""
desciption:

I have chosen to do the airline flight scheduling as my project. I will write code to read a large data
file. This file contains information about airline flights from providence, ri to orlando, fl. the program
will offer a variety of possible questions the user may have about the flights in the data file. using the
info in the file, the code will be able to answer the user's questions.

using if/then statements, the code can run whichever function to analyze the info needed to answer the user's
question.

"""

"""
pseudocode:

menu appears
user chooses a number
user inputs the info needed to answer the question
code displays all possible answers

"""

#function opens the file that will be used to run the rest of the program
def openFile():

    goodFile = False
    while goodFile == False:
        fname = input("Please enter a file name: ")
        try:
            dataFile = open(fname, 'r')
            goodFile = True
        except IOError:
            print("Invalid file name try again ...")

    return dataFile


#function to remove dollar sign
def removeDollarSign(price):
    #reads the string and removes the character at position 0
    newPrice = price[1:len(price)] 
    return newPrice


#function reads the information in the file, seperates it, and organizes into lists
def getData():

    #setting lists
    airlineList = []
    flightNumList = []
    departureList = []
    arrivalList = []
    priceList = []

    dataFile = openFile()
    line = dataFile.readline()
    line = line.strip()

    while line !='':
        #splitting the line up into categories
        airline, flightNum, departure, arrival, price = line.split(',')
        #organizing each item into their specified lists
        airlineList.append(airline)
        flightNumList.append(flightNum)
        departureList.append(departure)
        arrivalList.append(arrival)

        priceWithNoDollarSign = removeDollarSign(price)
        priceList.append(int(priceWithNoDollarSign))

        line=dataFile.readline()
        line.strip()
    dataFile.close()

    #returning various lists
    return airlineList, flightNumList, departureList, arrivalList, priceList


#function 1: find specific flights
#function matches user input to element in list
def findFlight(airlineList, flightNumList):

    #user inputs an airline and the loop checks if it is in the list of not
    choosenAirline = input("Enter airline name: ")
    while choosenAirline not in airlineList:
        print("Invalid input -- try again")
        choosenAirline = input("Enter airline name: ")

    #user inputs a flight number and the exception handling checks if it a number
    validNum = False
    while validNum == False:
        try:
            chosenFlightNum = int(input("Enter flight number: "))
            validNum = True
        except ValueError:
            print("Invalid input -- try again")

    #converts flight number input into string
    chosenFlightNum = str(chosenFlightNum)

    #finding the index of input flight num by matching it in flight num list
    flightNumIndex = -1
    for i in range(len(flightNumList)):
        if chosenFlightNum == flightNumList[i]:   
            flightNumIndex = i
    
    #function returns index
    return flightNumIndex


#function to calculate time difference in minutes
def calcMinDifference(depart, arrive):

    #establishing an empty string
    departHourMin = ""

    #grouping the characters in the string together
    if depart[1] != ":":
        departHourMin = depart[0] + depart[1]
        departMin = depart[3] + depart[4]
    else:
        departHourMin = depart[0]
        departMin = depart[2] + depart[3]

    #turning those grouped strings into integers
    departHourMin = int(departHourMin)
    departMin = int(departMin)
    departTotalMin = (departHourMin * 60) + departMin

    #repeated code as above but in application to the arrival time
    arriveHourMin = ""
    
    if arrive[1] != ":":
        arriveHourMin = arrive[0] + arrive[1]
        arriveMin = arrive[3] + arrive[4]
    else:
        arriveHourMin = arrive[0]
        arriveMin = arrive[2] + arrive[3]
        
    arriveHourMin = int(arriveHourMin)
    arriveMin = int(arriveMin)
    arriveTotalMin = (arriveHourMin * 60) + arriveMin

    #calculating time difference in minutes
    totalMin = arriveTotalMin - departTotalMin
    
    return totalMin


#function 2: flights shorter than a specified duration
#function runs a loop, takes the index of the departure list and the arrival list, subtracts the two values
#to each other, if the subtracted value is less then or equal to the user input, it'll add the matching 
#index of the airline, flightNum, depart, arrive, and price list to a new list
def shorterTravelTime(departureList, arrivalList):
    
    #user inputs a maximum flight duration, exception handing checks if it is a number
    validNum = False
    while validNum == False:
        try:
            choosenMaxDur = int(input("Enter maximum duration (in minutes): "))
            validNum = True
        except ValueError:
            print("Entry must be a number")

    #setting empty list
    shorterDurIndexList = []

    for i in range(len(departureList)):
        #getting the current minute difference in the departure and arrival list
        currentMinDifference = calcMinDifference(departureList[i], arrivalList[i])
        #seeing if that current difference is less than the user input of the max minute duration
        if currentMinDifference < choosenMaxDur:
            #if it is, it is appended into the index list
            shorterDurIndexList.append(i)

    #returns list
    return shorterDurIndexList


#function 3: cheapeast flight by a given airline
#function reads the airline list and only continues running the code if item in the airline list matches the
#user input, if the code compares the price list one by one and only stores the index of one of lesser
#value, when it gets the cheapest price it will return the info of the flight by using said index to get the
#other info in the other lists
def cheapestFlight(airlineList, priceList):

    #user inputs an airline and the loop checks if it is in the list of not
    choosenAirline = input("Enter airline name: ")
    while choosenAirline not in airlineList:
        print("Invalid input -- try again")
        choosenAirline = input("Enter airline name: ")

    #initializing cheap index
    cheapIndex = 0
    #setting the cheapest value to the first item in the price list because it is the cheapest
    cheapestVal = priceList[0]

    #finding the cheapest price by storing it if it is from the same input airline
    for i in range(1,len(priceList)):
        if priceList[i] < cheapestVal and airlineList[i] == choosenAirline:
            cheapIndex = i
    
    #return info of the cheap flight
    return cheapIndex


#function to change time to a numercal value from 00:00
#same code as the function above in changing the time to a numerical value but without calculating the difference
#of 2 parameters
def calcMin(time):
    
    timeHourMin = ""
    
    if time[1] != ":":
        timeHourMin = time[0] + time[1]
        timeMin = time[3] + time[4]
    else:
        timeHourMin = time[0]
        timeMin = time[2] + time[3]

    timeHourMin = int(timeHourMin)
    timeMin = int(timeMin)
    totalMin = (timeHourMin * 60) + timeMin
    
    return totalMin


#function 4: flights departing after a specified time
#function will analyze if the input is in the correct format or it will return invalid, function will run
#through the departure list to find values greater than user input, it will store the index, find airline
#and flight number of corresponding time
def flightsAfterTime(departureList):
    
    #user input a time they want flights for
    flightIndexList = []
    choosenTime = input("Enter earliest departure time: ")
    
    #checking to see if the user input is a time
    validFlightTime = False
    while validFlightTime == False:
        try:
            testTime = int(choosenTime[0])
            testTime = int(choosenTime[1])
            testTime = int(choosenTime[3])
            testTime = int(choosenTime[4])
            validFlightTime = True
            if choosenTime[1] == ":":
                validFlightTime = False
        except ValueError:
            choosenTime = input("Invalid time - Try again ")

    #changing time input to a numerical value
    choosenMinTotal = calcMin(choosenTime)

    for i in range(len(departureList)):

        #turning each departure time into a numerical value
        testMin = calcMin(departureList[i])

        #if the testMin is greater than choosenMinTotal than that means that that time is a later departure
        if testMin > choosenMinTotal:
            #appending in list
            flightIndexList.append(i)
    
    #return list of new airlines, flight numbers, departure times, and prices
    return flightIndexList


#function 5: averge price of all flights
#function runs though airline list, find matches, uses index to find corresponding price, adds up all
#prices, divide by amount of values added together
def avgAirlineCost(priceList):
    
    allPriceSum = 0

    #adding all the prices together
    for i in range(len(priceList)):
        price = int(priceList[i])
        allPriceSum = allPriceSum + price

    #diving by length of list to find average
    avgCost = allPriceSum/len(priceList)
    #rounding it to 2 decimals
    avgCost = round(avgCost,2)
    
    #returns average cost
    return avgCost


#function to change the order of every list based on the min list (from hw)
def multSort(minList,airlineList, flightNumList, departureList, arrivalList, priceList):

    for i in range(len(departureList)):
        save = minList[i]
        save2 = airlineList[i]
        save3 = flightNumList[i]
        save4 = departureList[i]
        save5 = arrivalList[i]
        save6 = priceList[i]
        j = i

        #compares the elements, swaps all list in accordance to one of the lists
        while j > 0 and minList[j-1] > save:

            #comparison
            minList[j] = minList[j-1]
            airlineList[j] = airlineList[j-1]
            flightNumList[j] = flightNumList[j-1]
            departureList[j] = departureList[j-1]
            arrivalList[j] = arrivalList[j-1]
            priceList[j] = priceList[j-1]
            j = j - 1

        #swap
        minList[j] = save
        airlineList[j] = save2
        flightNumList[j] = save3
        departureList[j] = save4
        arrivalList[j] = save5
        priceList[j] = save6

    #returning new ordered list
    return airlineList, flightNumList, departureList, arrivalList, priceList


#function 6: sort all flights by departure time and write to a new file
#function produces a new file in the same format as the original however it will be organized by earliest
#to latest flight
def sortByDeparture(airlineList, flightNumList, departureList, arrivalList, priceList):

    #setting empty list
    minList = []

    #new list of departure time in minute values
    for i in range(len(departureList)):
        minConvert = calcMin(departureList[i])
        minList.append(minConvert)

    #new sorted lists made via the sort function
    airlineL, flightNumL, departL, arriveL, priceL = multSort(minList,airlineList, flightNumList, departureList, arrivalList, priceList)

    #writing the new file with the sorted lists
    outName = "time-sorted-flights.csv"
    outFile = open(outName,'w')
    for i in range(len(departL)):
        outFile.write(str(airlineL[i]) + ", " + str(flightNumL[i]) + ", " + str(departL[i]) + ", " + str(arriveL[i]) + ", $" + str(priceL[i]) + "\n")
    
    return


#function to end the program
def endProgram():

    #function ends the running code

    print("Thank you for flying with us")
    
    return


#function to display menu and test to see if the user input is valid
def getChoice():

    #menu display
    print("")
    print("Please choose one of the following options:")
    print("1 -- Find flight information by airline and flight number")
    print("2 -- Find flights shorter than a specified duration")
    print("3 -- Find the cheapest flight by a given airline")
    print("4 -- Find flight departing after a specified time")
    print("5 -- Find the average price of all flights")
    print("6 -- Write a file with flights sorted by departure time")
    print("7 -- Quit")

    goodChoice = False

    #exception handing the user input
    while goodChoice == False:
        try:
            #user input
            choice = int(input("Choice ==> "))
            goodChoice = True
            if choice < 1 or choice > 7:
                print("Entry must be between 1 and 7")
                goodChoice = False
        except ValueError:
            print("Entry must be a number")
    
    return choice


#print function
def printFun(indexList, airlineList, flightNumList, departureList, arrivalList, priceList):

    #printing different lines based on 1 or many indexes
    if len(indexList) == 1:
        print("The flight that meets your criteria is:")
        print("")
    else:
        print("The flights that meet your criteria are:")
        print("")

    #printing the results
    print("AIRLINE".ljust(8), "FLT#".ljust(6), "DEPART".rjust(7), "ARRIVE".rjust(7), "PRICE".rjust(3))
    for i in range(len(indexList)):
        print(airlineList[indexList[i]].ljust(8), flightNumList[indexList[i]].ljust(6), departureList[indexList[i]].rjust(7),arrivalList[indexList[i]].rjust(7),"$",str(priceList[indexList[i]]).rjust(3))
    print("")

    return 



#main function
#print statement displaying menu, user input a number between 1-7
#series of if statements that will call a different function depending on the input
#organizes the function returns into displayable text
#runs the loop again for the  user to input another menu option until 7 is chosen
def main():
    
    #function calls get data
    airlineL, flightNumL, departureL, arrivalL, priceL = getData()

    choice = getChoice()
    print('')

    #loop to call different functions based on the different menu choices
    while choice != 7:

        #function 1: find specific flights
        if choice == 1:
            flightIndex = findFlight(airlineL, flightNumL)

            #changing the single index to list
            transferToList = []
            transferToList.append(flightIndex)
            
            if flightIndex == -1:
                print("Flight not found")
            else:
                printFun(transferToList, airlineL, flightNumL, departureL, arrivalL, priceL)
                
            choice = getChoice()
            print('')

        #function 2: flights shorter than a specified duration
        elif choice == 2:
            
            indexList = shorterTravelTime(departureL, arrivalL)
            
            if indexList == []:
                print('')
                print("No flights meet your criteria")
            else:
                printFun(indexList, airlineL, flightNumL, departureL, arrivalL, priceL)
                
            choice = getChoice()
            print("")

        #function 3: cheapeast flight by a given airline
        elif choice == 3:
            cheapIndex = cheapestFlight(airlineL, priceL)

            #changing the single index to list
            transferToList = []
            transferToList.append(cheapIndex)

            printFun(transferToList, airlineL, flightNumL, departureL, arrivalL, priceL)

            choice = getChoice()
            print('')

        #function 4: flights departing after a specified time
        elif choice == 4:
            flightIndexList = flightsAfterTime(departureL)
            if flightIndexList == []:
                print('')
                print("No flights meet your criteria")
            else:
                printFun(flightIndexList, airlineL, flightNumL, departureL, arrivalL, priceL)

            choice = getChoice()
            print('')

        #function 5: averge price of all flights
        elif choice == 5:
            avgCost = avgAirlineCost(priceL)
            print("")
            print("The average price is $", str(avgCost))
            choice = getChoice()
            print('')

        #function 6: sort all flights by departure time and write to a new file
        elif choice == 6:
            print('')
            sortByDeparture(airlineL, flightNumL, departureL, arrivalL, priceL)
            print('Sorted data has been written to file: time-sorted-flights.csv')
            choice = getChoice()
            print('')

    endProgram()

    return
