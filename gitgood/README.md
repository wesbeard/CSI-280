
# GitGood Team ReadMe  

- [GitGood Team ReadMe](#gitgood-team-readme)
- [Contributors](#contributors)
- [Information](#information)
- [Instructions](#instructions)
    - [Set up guide](#set-up-guide)
    - [Working in Vue](#working-in-vue)
    - [Helpful Resources](#helpful-resources)

# Contributors
Louis Vinton  
Aiden Tracy  
Wes Beard  
Collin Westgate  
Tom Szpila  
Josh Bogin

# Information  
This project uses the Vue.JS framework and the petfinder API    
Technical Features:  
* Create subpages with additional information  
* Create a menu system to navigate pages  
* Create in interactive site using JavaScript  
* Create a stylish web page using CSS  
Petfinder Features:  
* Display images and information from petfinder database  
* Create a table displaying pets for adoption.  
* Enable the user to search for a specific pet  
* Allow categorical searches for pets as well like:  
  * species
  * gender
  * age
  * location
  * status
  * pet id

# Instructions  
To set up and use the project locally, first make sure you have git installed on your system.  

From there, in the repository, click the green "Clone or download" button and copy the link it displays.  

Then, open your system's command prompt, navigate to the folder you want your local repository    
to be in, and enter "git clone (the link you copied)". This will make a local copy of the  
repository for you where the Vue project can be changed and interacted with.  

### Set up guide  
* Install [NPM](https://www.npmjs.com/get-npm) and make sure it is up to date    
* Open the project in your IDE of choice, I recommend Visual Studio Code   
* Run the following commands in the project directory (VS Code has a built in terminal)   
* Use the command `npm install vue` to install VueJS
* Use the command 'npm install --save @petfinder/petfinder-js' to install the petfinder API
* To run the project run the command `npm run serve` inside the project directory,  
    This should run the project on localhost:8080 which you can go to in your browser   
    NOTE: (If working on OSX the default port 8080 will not work,  
        you can instead [edit](https://github.com/vuejs/vue-cli/issues/36) the config files to change the port   
        or just open another terminal and run it again which will put it on 8081)   
* If you get the error `sh: vue-cli-service: command not found`, make sure that Vue installed correctly

### Working in Vue
The main files you should work in when working in a view project are the files   
in `src/components` which currently contains the home page and all other pages.

`public/index.html` contains all of the base html where `App` and the pages in `/components` are inserted

`src/App.vue` is the main file that is injected into `index`, it currently redirects to `Home` in components

`src/router` contains the router files which control the file paths and redirects.

`src/assets` can be used to store any assets needed for the main files.


### Helpful Resources  
* VueJS Local Setup & Routing [Guide](https://medium.com/@maeganwilson_/how-to-create-a-navigation-bar-in-vue-js-8a70e7f29f80)  
* VueJS Page Routing [Tutorial](https://www.thepolyglotdeveloper.com/2017/11/router-navigate-pages-vuejs-application/)  
* VS Code has a Vue synatax plugin that will make vue files much easier to read
