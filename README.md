Fishing App Proposal
What is the Fishing app?
This is a full CRUD application that allows the user to select a geographic location based on their current location or destination, and it will provide a full list of the species present in that location along with additional facts that will help anglers target a certain species

Wireframe
*** See attached img directory ***

Initial thoughts on game structure
Ideally the game would have an opening landing page that would have a dropdown menu to select region.  The page would be redirected based on region.  The redirected page would bring up a complete list of the species available in that specific location.  There will also be a user save page that allows the user to store the species caught, max-weight, and number or other arbitrary information.

Phases of Completion
1) create the basic structure of the game with a hard coded user.  This MVP will display the full database, based on one or two locations (to prove functionality).  It will also have a button to redirect to the users page (which will display the information in the users database) and allow the user to edit, add, and remove information from their history.

2) add the ability to create multiple users, and increase the amount of geographic locations, add a third party API for weather or other relevant information to the application

3) finesse the CSS to make the app more visually appealing, add to the databases create an add picture/species feature to the main database.

*** Technologies include ***
-Express/node/ejs/pg-promise
-an additional API may be added with additional features

*** Additional features include ***
-creating a recommended locations table that list destinations that are recommended based on the fewest number of species in user db that correspond to that region
-including an itinerary API giving lists of all travel accommodations in that location and best specific resorts
-10 day weather, pulling data from an API that displays the weather in that location
-Make the species list season specific
*********************************

NOTE: additional features are out of scope for this project and the time allotted, however should be considered before deployment on portfolio


Links and Resources
MDN
classwork
John



user sessions ******
