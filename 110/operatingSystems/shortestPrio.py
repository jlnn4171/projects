
# Given: A list of processes with execution times
# Find: A schedule of the processes using time slices

import queue
import random


# Function to get open data file
def openFile():
    goodFile = False
    while goodFile == False:
        fname = input("Enter the name of the file containing the processes: ")
        try:
            inFile = open(fname, 'r')
            goodFile = True
        except IOError:
            print("Invalid file name - try again ... ")
    return inFile

# Function to get the time slice value and the processes from the file into the queue
# Queue will contain a string with process ID and exec time separated by a comma

def getProcs(cpuQ):
    infile = openFile()
    procList = []
    execList = []

    for line in infile:
        line = line.strip()
        proc, eTime = line.split(',')
        procList.append(proc)
        execList.append(int(eTime))
        
    infile.close()
    return procList, execList

# Function to print the contents of the queue

def printQueue(tslice, cpuQ):
    print("The time slice is ",tslice, "- The contents of the queue are: ")
    for i in range(cpuQ.qsize()):
        proc = cpuQ.get()
        cpuQ.put(proc)
        print(proc)


# Function to execute the processes in the queue

def scheduleProcs(procList, execList):
    shortestIndex = findShortestProc(execList)
    shortest = execList[shortestIndex]
    
    tempExecList = [shortest]
    tempProcList = [procList[shortestIndex]]
    execList.pop(shortestIndex)
    procList.pop(shortestIndex)

    largest = 0
    for i in range(len(execList)):
        if execList[i] > largest:
            largest = execList[i]

    
    while len(execList) > 0:
        small = largest
        for i in range(len(execList)):
            if execList[i] < small:
                small = execList[i]
                smallIndex = i

        tempExecList.append(execList[smallIndex])
        tempProcList.append(procList[smallIndex])
        execList.pop(smallIndex)
        procList.pop(smallIndex)


    #print(tempExecList, tempProcList)

    execList = tempExecList
    procList = tempProcList

    
    '''
    Get exectime and PID
    '''

    for i in range(len(execList)):
        PID = procList[i]
        exectime = execList[i]

        print("Getting next process - Process", PID,"has", exectime,"instructions to execute")                                 
	# While proc still has time in slice and still has code to execute
        while exectime > 0: 
	    # Execute an instruction of process
            exectime -= 1              
            print("Executing instruction", exectime," of process", PID)

        print("*** Process", PID, "Complete ***")
    
   
    return


def findShortestProc(execList):
    lowScore = execList[0]
    shortestPos = 0
    
    for i in range(len(execList)):
        if execList[i] < lowScore:
            lowScore = execList[i]
            shortestPos = i
    
    return shortestPos

# Main function

def main():
    # Create the scheduling queue
    cpuQ = queue.Queue()
    #print(cpuQ.get())

    # Get the processes from the data file
    procList, execList = getProcs(cpuQ)

    # Print the queue
    #printQueue(proc, eTime)
    print(procList, execList)

    # Schedule the processes
    scheduleProcs(procList, execList)

    #shortestPos = findShortestProc(execList)
    #print("The shortest process is ", procList[shortestPos], " with execution time ", execList[shortestPos])
