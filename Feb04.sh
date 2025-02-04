#!/bin/bash
echo "Tasks Are running... "

#varibles declearation
DIR=~/project_files
USER=intern_user
GROUP=developers
FILE=~/project_files/welcome.txt
echo $(sudo rm -rf $DIR)
#Task 1 :
#Create a new directory named "project_files" in the /home/{user} directory
echo "performing task 1.."
#making the directory named project_files
echo "making the  directory..."
echo $(mkdir $DIR)
echo "Directory is created successfully."
echo "-----------------------------------------------"


#Task 2
#Create a group named "developer"
echo "Creating group..."
echo $(sudo groupadd $GROUP)
if [ $? -eq 0 ]; then
  echo "Group created: $GROUP"
else
  echo "Error creating group: $GROUP"
  exit 1
fi
echo "------------------------------------------------"
# Create a new user named "intern_user"
echo "Creating user..."
if ! getent passwd $USER > /dev/null; then
  echo $(sudo useradd $USER)
  if [ $? -eq 0 ]; then
    echo "User created: $USER"
  else
    echo "Error creating user: $USER"
    exit 1
  fi
else
  echo "User $USER already exists."
fi
echo "----------------------------------------------------"
#setting the password
echo "adding the password"
echo $( sudo passwd $USER)
echo "Password is added successfully."
echo "----------------------------------------------------"
#adding the user to the group
echo "adding the User to the  Group..."
echo $(sudo groupmod -a -U $USER $GROUP)
echo "$USER is added to the $GROUP successfully."
echo "-------------------------------------------------"

#Task 4
#Creating welcome.txt file in the project_flies
echo "making the file named welcome.txt inside the project_files.."
echo $(touch $FILE)
echo "$FILE is successfully created."
#saving the values in the welcome.txt
echo "adding the  date ..."
echo "Date and Time: $(stat -c %y $FILE)" >> $FILE
echo "adding the directory path..."
echo "Directory path:$(realpath welcome.txt)" >> $FILE
echo "adding the Owner and group information..."
echo "Owner and group information: $(ls -ld $FILE | awk {'print($3, $4)'})" >> $FILE
echo "Successfully added the required data in the $FILE."
#changing the file permission
echo $(chmod 750 $FILE)
echo "changing the $FILE permission"
#moving root to the developers group
echo $(sudo usermod -a -G $GROUP kali)


#Task 3
echo performing Task 3...
#before the permission change of the project_files
echo "reviewing the file  properties.."
echo $(ls -l $DIR)
#changing the Ownership of the File project_files
echo "making the ownership change of the file $DIR..."
echo $(sudo chown -R $USER:$GROUP $DIR)
echo "Ownership is changed to the $USER and $GROUP"
echo "---------------------------------------------------"
# After Ownership change displaying the file properties
echo "After change in Ownership $DIR ..."
echo $(ls -l $DIR)


# Task 5: Verification
# - Add commands at the end of your script to verify:
#   - Directory creation and permissions
#   - User creation and group membership
#   - File creation and contents

echo "Verifying the tasks..."

# Check if the directory exists
if [ -d $DIR ]; then
  echo "Directory 'project_files' exists."
else
  echo "Directory 'project_files' doesn't exist."
fi

# Check if user exists
if getent passwd $USER > /dev/null; then
  echo "${USER} exists."
else
  echo "${USER} does not exist."
fi

# Check if groups exists
if [ $(getent group $GROUP) ]; then
  echo "${GROUP} exists."
else
  echo "${GROUP} does not exist."
fi

# Check if file exists
if [ -f $FILE ]; then
  echo "${FILE} exists."
else
  echo "${FILE} does not exist."
fi

#changing the file permission to the 750
echo "changing the file permission 750..."
echo $(sudo chmod 750 $DIR)
echo "changed the $DIR permission successfully."
echo "----------------------------------------------------"


