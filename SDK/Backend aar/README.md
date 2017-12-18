built.io
=========

<h4>built.io is a backend for your app.</h4>


This means that you only concentrate on the client side of development. And our SDKs make it easy to develop on your client!

The way built.io works is to connect your app with our servers, using a SDK or REST APIs. You can then use built.io as your datastore, rely on it for your data validation and security needs, upload files, push notifications...in short, you can do everything that you used to rely on a backend for.

We feature a complete set of functionality, such as:

- Data storage
- Advanced queries on your data
- File Storage
- ACLs (Access Control Lists) for security of your data and files
- Analytics
- Webhooks, as an integration mechanism
- Push Notifications to iOS and Android devices  

<h4>Note:</h4>
- built.io-2.0.0.aar contains built.io SDK. 

Version
----

2.0.0


Installation
--------------

Installation can be done in two ways.

#####If user want to use built.io SDK without realtime.

 1. Copy built.io-xxxx.aar to your project's libs folder.
		  
 2. Add dependency code in your build.gradle file. 
        repositories {
            flatDir {
    	        dirs 'libs'
            }
        }
        dependencies {compile 'com.raweng.built:built.io-x.x.x:x.x.x@aar'}
  
####(OR)
    
#####If user want to use built.io SDK with realtime.

 1. Copy built.io-realtime-xxx.aar to your project's libs folder.
		  
 2. Add dependency code in your build.gradle file. 
        repositories {
            flatDir {
    	        dirs 'libs'
            }
        }
        dependencies {compile 'com.raweng.built:built.io-realtime-x.x.x:x.x.x@aar'}
 
    


####Dependencies
* android-support-v4.jar
* google-play-services_lib (You can find this library project from:- <android-sdk>/extras/google/google_play_services/libproject/google-play-services_lib/)

##### for more info please refer the following links:

* http://developer.android.com/tools/support-library/index.html
* http://developer.android.com/google/play-services/setup.html


License
----

MIT
  
    