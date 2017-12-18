Built.io
=========

<h4>built.io is a backend for your app.</h4>


This means that you only concentrate on the client side of development. And our SDKs make it easy to develop on your client!

The way Built.io works is to connect your app with our servers, using a SDK or REST APIs. You can then use Built.io as your datastore, rely on it for your data validation and security needs, upload files, push notifications...in short, you can do everything that you used to rely on a backend for.

We feature a complete set of functionality, such as:

- Data storage
- Advanced queries on your data
- File Storage
- ACLs (Access Control Lists) for security of your data and files
- Analytics
- Webhooks, as an integration mechanism
- Push Notifications to iOS and Android devices  

<h4>Note:</h4>
- Built.io-3.1.2.aar contains built.io SDK. 

Version
----

3.1.2


Installation
--------------

Installation can be done in two ways.

#####If user want to use built.io SDK without realtime.

 1. Copy Built.io-xxx.aar to your project's libs folder.
		  
 2. Add dependency code in your build.gradle file. 
        repositories {
            flatDir {
    	        dirs 'libs'
            }
        }
        dependencies {compile 'com.raweng.built:Built.io-x.x.x:x.x.x@aar'}
  
####(OR)
    
#####If user want to use built.io SDK with realtime.

 1. Copy Built.io-realtime-xxx.aar to your project's libs folder.
		  
 2. Add dependency code in your build.gradle file. 
        repositories {
            flatDir {
    	        dirs 'libs'
            }
        }
        dependencies {compile 'com.raweng.built:Built.io-realtime-x.x.x:x.x.x@aar'}
 
####(OR)

#####If user want to use built.io SDK with android wear.

 1. Copy Built.io-wearable-xxx.aar to your project's libs folder.
		  
 2. Add dependency code in your build.gradle file. 
        repositories {
            flatDir {
    	        dirs 'libs'
            }
        }
        dependencies {compile 'com.raweng.built:Built.io-wearable-x.x.x:x.x.x@aar'} 


License
----

Built.io
  
    