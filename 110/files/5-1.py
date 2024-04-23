#oct 18

#function to enter file
def openFile():
    goodFile = False
    while goodFile == False:
        fname = input("Please enter the name of the data file: ")
        try:
            dataFile = open(fname, 'r')
            goodFile = True
        except IOError:
            print("Invalid file name try again...")
    return dataFile

#function to read file and organize data into 4 lists
def getData():
    #declaring list
    yearList=[]
    gradList=[]
    menList=[]
    womenList=[]

    dataFile = openFile()
    line = dataFile.readline()
    line=dataFile.readline()
    line=line.strip()

    while line !='':
        year, grad, men, women, = line.split(',')
        yearList.append(int(year))
        gradList.append(int(grad))
        menList.append(int(men))
        womenList.append(int(women))
        line=dataFile.readline()
        line.strip()
    dataFile.close()
    return yearList, gradList, menList, womenList

#function to compute the perfecntage of men and women out of the grad list
def computePercent(gradList, menList, womenList):
    menPctList = []
    womenPctList = []

    #for loop to find percentage of men in graduating class
    for i in range(len(gradList)):
        menPct = round((menList[i]/gradList[i]),4)
        menPctList.append(menPct)

    #for loop to find percentage of women in graduating class
    for i in range(len(gradList)):
        womenPct = round((womenList[i]/gradList[i]),4)
        womenPctList.append(womenPct)
    
    return menPctList, womenPctList

#user inputs a year and this function checks to see if it is within the conditions of 1971 and 2011
def checkYear():
    OK = False
    while OK == False:
        try:
            year = int(input("Enter a year between 1971 and 2011: "))
            if year >= 1971 and year <= 2011:
                OK = True
            else:
                print("Invalid year try again...")
        except ValueError:
            print("Invalid year try again...")
    return year

#gets the difference between the amount of men and women in a given year
def getDifference(year, yearList, menList, womenList):
    difference = 0
    
    for i in range(len(yearList)):
        if year == yearList[i]:
            difference = menList[i] - womenList[i]

    return difference

#looks for the highest value to see the highest percentage of women in the list
def findHighWomenPercent(pctWomenList):
    findHigh = 0
    index = 0
    for i in range(len(pctWomenList)):
        if pctWomenList[i] > findHigh:
            findHigh = pctWomenList[i]
            index = i
    return index

#prints the results
def printResults(year, difference, yearList, index, pctWomenList):

    print("In ", year, "there were ", difference, " more men than women CS grads.")
    print("In ", yearList[index]," the percent of women students was highest at ", round(pctWomenList[index]*100,2), "%")
    
    return

#main function that calls each function
def main():
    yrList, grdList, mList, wList = getData()
    mPctList, wPctList = computePercent(grdList, mList, wList)
    
    year = checkYear()
    difference = getDifference(year, yrList, mList, wList)

    index = findHighWomenPercent(wPctList)

    printResults(year, difference, yrList, index, wPctList)

    return