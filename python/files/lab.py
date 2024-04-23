# World Series Results

# Given a file with the World Series Champions since 1904
# Allow user to ask various questions about the results
def openFile():
    goodFile = False
    while goodFile == False:
        fname = input("Enter name of data file: ")
        try:
            dataFile = open(fname, 'r')
            goodFile = True
        except IOError:
            print("Invalid file name, please try again...")
    return dataFile


def getChamps():
    # This function will get the data from the data file - be sure to look at the format of the data in the
    # file and read each line as we did with the phone search program in class.
    # The function should return the list of years, the list of winners and the list of losers
   # Make sure to return the correct information from this function
    yearList=[]
    winnerList=[]
    loserList=[]
    dataFile = openFile()
    line=dataFile.readline()
    line=line.strip()
    while line !='':
        year, winner, loser = line.split(',')
        yearList.append(int(year))
        winnerList.append(winner)
        loserList.append(loser)
        line=dataFile.readline()
        line.strip()
    dataFile.close()
    return yearList, winnerList, loserList

def findWinnerAndLoser(year,yearList,winnerList,loserList): 
    yearCheck = 0
    i=0
    while yearCheck==0 and i<(len(yearList)):
        if year == yearList[i]:
            yearCheck = 1
        else:
            i=i+1
    if yearCheck == 0:
        return "",""
    else:
        return winnerList[i], loserList[i]
    
def countWins(team, winnerList):
    numWins=0
    for i in range(len(winnerList)):
        if team==winnerList[i]:
            numWins=numWins+1
    return numWins

def getChoice():
    # This function displays the menu of choices for the user
    # It reads in the user's choice and returns it as an integer
    print("")
    print("Make a selection from the following choices:")
    print("1 - Find the World Series Winner and Loser for a particular year")
    print("2 - Count how many times a team has won the World Series")
    print("3 - Write to an output file all teams that have won the World Series")
    print("4 - Find the team that has won the most World Series Championships")
    print("5 - Find the team that has lost the most World Series Championships")
    print("6 - Quit")
    choice = int(input("Enter your choice --> "))
    print("")
    return choice


def main():    
    # Call the function to get the data from the data file and store the results in three lists
    yearList, winnerList, loserList= getChamps()
    choice = getChoice()
    while choice != 6:
        if choice == 1:
            year = int(input("Enter the year to search for: "))
            # Call the function to get the winner and the loser
            winner,loser = findWinnerAndLoser(year,yearList,winnerList,loserList)
            if winner == "" or loser=="":
                print("\nInvalid year")
            else:
                print("\nThe ", winner , "defeated the ", loser , "in",year)
            choice = getChoice()
        elif choice == 2:
            team = input("Enter the team name: ")
            # Call the function to get the number of wins for the team
            numWins = countWins(team, winnerList)
            print("The ", team, " won the World Series", numWins, "times")
            choice = getChoice()
        elif choice == 3:
            team = input("Enter the team name: ")
            # Call the function to create output file containing teams defeated by chosen team
            choice = getChoice()
        elif choice == 4:
            # Call the function to find the team that won the most championships
            print("XXX won the World Series the most at XXX times.")
            choice = getChoice()
        elif choice == 5:
            # Call the function to find the team that lost the most championships
            print("XXX lost the World Series the most at XXX times.")
            choice = getChoice()
        else:
            print("Error in your choice")
            choice = getChoice()
    print("Good-bye")