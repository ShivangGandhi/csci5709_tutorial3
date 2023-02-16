# Tutorial 3

* *Date Created*: 16 Feb 2023
* *Last Modification Date*: 17 Feb 2023
* *Git URL (main branch)*: https://git.cs.dal.ca/shivangkum/csci5709
* *Git URL (tutorial 3 branch)*: https://git.cs.dal.ca/shivangkum/csci5709/-/tree/tutorial3


## Authors

* [Shivangkumar Gandhi](sh966188@dal.ca)


## Getting Started

### Prerequisites

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins


#### Dependencies Required:

```
npm install material-ui
npm install @material-ui/core
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install @mui/x-date-pickers
npm install react-hook-form
npm install react-router-dom
```


See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

A step by step series of examples that tell you how to get a development env running


```
npm install material-ui
npm install @material-ui/core
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install @mui/x-date-pickers
npm install react-hook-form
npm install react-router-dom
npm run build
npm start
```

After these commands the app is launched on the localhost.
Following can be seen in the terminal: 

> Compiled successfully!

> You can now view add_medical_records_task in the browser.

>  Local:            http://localhost:3000
>  On Your Network:  http://192.168.137.1:3000

>Note that the development build is not optimized.
>To create a production build, use npm run build.

>webpack compiled successfully

## Deployment

Add additional notes about how to deploy this on a live system

- Create a repository named 'csci5709' on github or gitlab
- Push the code into the repository
- Create a netlify account
- Deploy project with github/gitlab option
- Configure Deployment settings

URL: https://main--dreamy-marzipan-e24dd3.netlify.app/


## Built With

* [React JS](https://reactjs.org/docs/getting-started.html) - The web framework used


## Sources Used

### Registration.js

*Line 89*

```
value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
```

The code above was created by adapting the code in [html5-tutorial](https://html5-tutorial.net/form-validation/validating-email/) as shown below: 

```
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
```

- <!---How---> The code in [html5-tutorial](https://html5-tutorial.net/form-validation/validating-email/) was implemented by Shivang for validating the input email address to match the following REGEX
- <!---Why---> [html5-tutorial](https://html5-tutorial.net/form-validation/validating-email/)'s Code was used because REGEX are already defined to validate particular patterns.
- <!---How---> [html5-tutorial](https://html5-tutorial.net/form-validation/validating-email/)'s Code was modified by using it in the required conditions which were not mentioned on the source side.


I used Material UI library as I used React JS, adapting the code in [Material UI](https://mui.com/material-ui/) the official website for documentation as shown below: 

- <!---How---> The code in [Material UI](https://mui.com/material-ui/) was implemented by Shivanh by rendering inbuilt components like Grid, TextField, Buttons, etc. and their attributes and syntaxes.
- <!---Why---> [Material UI](https://mui.com/material-ui/)'s components was used because they are universal and used in mostly every React JS projects.
- <!---How---> [Material UI](https://mui.com/material-ui/)'s Code was modified by changing the properties and also the logic behind the rendering of components and validation techniques. They are just the UI components like Texfield, Button, Container, etc.

## Acknowledgments

* [Material UI](https://mui.com/material-ui/) for providing useful and handy render components for react js
* [React JS](https://reactjs.org/) Framework for documentation.
