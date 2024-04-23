'''
juliana nguyen
hw
'''

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
    cpuQHM = queue.Queue()
    cpuQL = queue.Queue()
    
    infile = openFile()
    # Get the first line in the file containing the time slice value
    line = infile.readline()                        
    # Strip the \n from the line and convert to an integer
    tslice = int(line.strip())                      
    # Loop through the file inserting processes into the queue
    for line in infile:                             
        proc = line.strip()
        PID, exectime, prio = proc.split(",")
        #adding processes to different cpuQs based on their priority 
        if prio == 'H':
            PID, exectime, prio = proc.split(",")
            cpuQHM.put(proc)
        elif prio =='M':
            PID, exectime, prio = proc.split(",")
            cpuQHM.put(proc)
        elif prio == 'L':
            PID, exectime, prio = proc.split(",")
            cpuQL.put(proc)
    infile.close()
    #returning 3 items: time slide and 2 different cpuQs
    return tslice, cpuQHM, cpuQL 

# Function to print the contents of the queue. the two functions print two different cpuQs
def printQueueHM(tslice, cpuQHM):
    print("High and Medium Priority Processes:")
    print("The time slice is ",tslice, "- The contents of the queue are: ")
    for i in range(cpuQHM.qsize()):
        proc = cpuQHM.get()
        cpuQHM.put(proc)
        print(proc)

def printQueueLow(tslice, cpuQL):
    print("")
    print("Low Priority Processes:")
    print("The time slice is ",tslice, "- The contents of the queue are: ")
    for i in range(cpuQL.qsize()):
        proc = cpuQL.get()
        cpuQL.put(proc)
        print(proc)


# Function to execute the processes in the queue

def scheduleProcs(tslice, cpuQ):
            
    while (cpuQ.empty() == 0):                  
	# Get next process from queue
        proc = cpuQ.get()                           
	# Separate the process ID and the execution time from the process info
        PID, exectime, prio = proc.split(",")             
	# Convert exectime to an integer
        exectime = int(exectime)                    
        print("Next Process", PID,"with", exectime,"instructions to execute - Priority:", prio)
	# Initialize the timer
        timer = 0                                   
	
        #changing the value of tslice so that with prio H, the tslice will double
        if prio == 'H':
            realSlice = 2*tslice
        else:
            realSlice = tslice
        # While proc still has time in slice and still has code to execute
        while (timer < realSlice) and (exectime > 0):  
            # Execute an instruction of process
            exectime = exectime - 1                         
            # Count one tick of the timer
            timer = timer + 1                       
            print("Instruction:", exectime," Process:", PID," Timer:", timer, "Prio:", prio)

	# If proc still has instructions to execute put it back in the queue
        if (exectime > 0):                          
	    # Create string with new exec time and process ID
            proc = PID + "," + str(exectime) + "," + prio       
	    # Put the process back in the queue
            cpuQ.put(proc)                          
            print("Process:", PID," back in queue ", exectime,"instructions remaining")
        else:
            print("*** Process", PID, "Complete ***")
    return


# Main function

def main():
    # Create the scheduling queue
    cpuQ = queue.Queue()

    # Get the processes from the data file
    tslice, cpuQHM, cpuQL = getProcs(cpuQ)

    # Print the queue
    printQueueHM(tslice, cpuQHM)
    printQueueLow(tslice, cpuQL)

    # Schedule the processes
    print("")
    print("Scheduling High and Medium priority processes:")
    scheduleProcs(tslice, cpuQHM)

    print("")
    print("Scheduling Low priority processes:")
    scheduleProcs(tslice, cpuQL)