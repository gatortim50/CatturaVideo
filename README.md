Angular Demo - MEAN stack
=========================

CatturaVideo test:

```
 * - Write a small app (JS & HTML) below which displays:
 *      - A list of cars
 *          - With the ability to add new cars using an <input> element
 *          - With the ability to remove a car when you click the 'X' to the right of the element
 *      - A filter <input> element which can filter the list
 *      - A show/hide button which will show/hide the entire list
 *
 *   Which uses:
 *      - A factory/provider/service to store the list of cars
 *      - A custom directive to render each element in the list
 
1. The app is scaffolded using yeoman with bower and grunt
2. Load data via $http service - local json files served via node server
3. LocalStorageService to store session data - persist search results between pages
4. Create a details page 
5. Routing - /details/:id
6. Shared service to communicate between sibling controllers
7. Break up our application using html partials with ng-include
```

 Steps to Run Project (assumes you have nodejs installed)

```
 git clone git@github.com:gatortim50/CatturaVideo.git
 cd CatturaVideo/server
 npm install
 node server.js

 open new window and ...

 cd CatturaVideo/client
 npm install
 bower install
 grunt serve
```


Server:
```
uses node or even better nodemon and express with cors
setup to run by default on: Back End Server running at localhost:3000
the server will serve up the product json

TODO: the server code read mongodb
```

Client:
Configuration in app.js

2 JSON data files - served via back-end node/express server
```

```

2 Services
```
  CarService.js - json data representing the products
  DataService.js - shared service used by sibling controllers SearchPanel and SearchResults
```

4 Controllers
```
  MainCtrl.js - parent controller
  SearchPanelCtrl.js  - use selects to filter the table data
  SearchResultsCtrl.js - display results using ng-table
  SearchDetailsCtrl.js - simple details page with back button 
```

5 Views
```
  Main.html - shell page containing the other views using ng-include
  navbarHeader.html - bootstrap banner using ng-show to display breadcrumbs 
  SearchPanel.html - 2 selects to filter the the data
  SearchResults.html - ng-table / ng-repeat and filters
  SearchDetails.html - simple detail page
```

6 Additonal vendor modules
```
bower install ng-table --save
bower install angular-ui-grid --save
bower install angular-local-storage --save
```