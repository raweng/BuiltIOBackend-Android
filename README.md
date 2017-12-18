## BuiltIOBackend SDK for Android

The BuiltIO Backend helps you to create android apps quickly and effortlessly, taking care of all the backend requirements. 
For more information see the [website](https://docs.built.io/) and [getting started](https://docs.built.io/guide#gettingstarted).

#### Installation

1. Download the Android SDK .
2. The zip file contains the Built.io Backend SDK, User Interface Kit and Starter Kit. Extract the built.io zip file to begin.
3. Setup SDK as per environment requirement.
  
    #####A. Android Studio
    
    1. Copy Built.io-xxx.aar to your project's libs folder.Add dependency code in your build.gradle file.
   
        ```
        repositories {
        
            flatDir {
                dirs 'libs'
            }
        }
        
        dependencies {compile 'com.raweng.built:Built.io-x.x.x:x.x.x@aar'}```
    
    #####B. Eclipse
    
    1. Copy Built.io-xxx-javadoc, Built.io-xxx.jar, Built.io-xxx.jar.properties to your project's libs folder.
    
    2. Add jar references in the project's properties --> Java Build Path --> Libraries tab.

4. Add [Manifest Permissions](https://docs.built.io/quick-start#android) to the project.

#### Other Links
- [QuickStart](https://docs.built.io/quickstart)
- [Developer Guide](https://docs.built.io/guide)
- [API Docs](http://androidsdk.builtapp.io/) 

## License

```
Copyright (c) 2012-present, Built.io.
All rights reserved.
```