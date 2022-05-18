

# Welcome to NC-News!


This app has been created as part of the excellent Northcoders Junior web developer bootcamp - specifically the React section, incorporating Axios.

## A brief description of the app.

NC News is a hypothetical site containing a number of articles on three key subjects - Coding, Cooking and Football.

Users can filter any one of these subjects using the dropdown box.  They can also click on any individual article preview pane, which navigates to the complete article, including comments, vote counts and the option to post and delete comments of their own.

There are more features, such as the Home button in the Navbar and a scroll to the top button for user convenience.


### Link to deployed site.

Here's a link to the deployed version which is hosted by Netlify - <https://nc-news-bert-foulds.netlify.app/>


### Hosting locally

In order to host locally, node version 17.8.0 is required.  Choose the folder you wish to host from, then in your terminal, type the following: -

git clone https://github.com/BertF1966/nc-fe-final-project.git

You will need to cd into this folder, then cd into react-app-nc-news/.  Use the following script in your package.json file: -

"scripts": {
    "start": "react-scripts --openssl-legacy-provider start",
  }

  Then type the command 'npm start'.  A browser will now open with the app displayed.







