Fishing App Proposal
What is the Fishing app?
This is a full CRUD application that allows the user to select a geographic location based on their current location or destination, and it will provide a full list of the species present in that location along with additional facts that will help anglers target a certain species.  This app allows a user to sign in and save information to their own page about their catches. This app also calls from an external API which gathers  weather data from the particular location that was selected.

Wireframe
*** See attached img directory ***

App functionality
1) The landing page allows anyone to search fish species by full library or sorted by location
2) fish can be added to the users personal page by creating a profile
3) Once profile is created, user can add, delete, or edit the fish that they wish to include in their list
4) Users can also add fish to the full library by location 
5) users can check weather by location

Initial thoughts on game structure
Ideally the game would have an opening landing page that would have a dropdown menu to select region.  The page would be redirected based on region.  The redirected page would bring up a complete list of the species available in that specific location.  There will also be a user save page that allows the user to store the species caught, max-weight, and number or other arbitrary information.

Phases of Completion
1) create the basic structure of the game with a hard coded user.  This MVP will display the full database, based on one or two locations (to prove functionality).  It will also have a button to redirect to the users page (which will display the information in the users database) and allow the user to edit, add, and remove information from their history.

2) add the ability to create multiple users, and increase the amount of geographic locations, add a third party API for weather or other relevant information to the application

3) finesse the CSS to make the app more visually appealing, add to the databases create an add picture/species feature to the main database.

*** Technologies include ***
-Express/node/ejs/pg-promise/axios
-an additional API may be added with additional features

*** Additional features include ***
-Weather API that allows the user to check the weather in a specific location
*********************************


YouTube walkthrough of the project: https://www.youtube.com/edit?o=U&video_id=WgtVA6jFNDY

Links and Resources
MDN
classwork
John



user sessions ******
