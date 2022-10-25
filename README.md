##TYPESCRIPT

#command : "tsc --init"
    function : to initialize typeScript and webpack in the project


#tsconfig.json 
rootDir
outDir
removeComments
noEmitOnError
sourceMap => for debugging

debugging on vscode :
1. click on Run and Debug or (ctrl + shift D)
2. click 'create a launch.json file'
3. click nodejs
4. on launch.json add :
    "preLaunchTask": "tsc: build - tsconfig.json",
    on configurations
