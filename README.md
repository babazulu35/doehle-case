# Doehle

### Usage
<ol>
    <li>
    Clone Project
    </li>
    <li>
        ` npm install`
    </li>
    <li>
        Open terminal  
        <ol>
        <li>
            Start JSON Mock Server  `npm run mock:server`
        </li> 
        </ol>
    </li>
    <li>
        Open Second Terminal
        <ol>
            <li>
            Concat JSON Files `npm run concat:mock`
            </li>
        </ol>
    </li>
    <li>
        Open Third Terminal
        <ol>
        <li>
            Start Project  `npm run start:proxy`
        </li>
        </ol>
    <li>
</ol>

#### Steps
`npm install`
`npm run concat:mock`
`npm run mock:server`
`npm run start:proxy`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Development server

Run `npm run start:proxy` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Mock JSON server

Run `npm run mock:server` for a mock data server. Navigate to `http://localhost:4200/User`,`http://localhost:4200/Dashboard`,`http://localhost:4200/MainMenu` or `http://localhost:3000/User`,`http://localhost:3000/Dashboard`,`http://localhost:3000/MainMenu` for All Json Data . For JSON Server README please type only `http://localhost:3000/` after start the server

## Build 

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

