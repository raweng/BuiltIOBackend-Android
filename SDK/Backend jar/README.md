Built.io
=========

#####Built.io is a backend for your app.


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

#####Note:
- Built.io-2.0.0.jar contains Built.io SDK. 
- Built.io-2.0.0 UserInterface contains the Built.io user interface kit. It helps to bootstrap common user interfaces quickly.

Version
----

2.0.0


Installation
--------------

Installation can be done in two ways.

####1. If user want to use only Built.io SDK without UserInterface.

- Copy <code>Built.io-2.0.0-javadoc, Built.io-2.0.0.jar, Built.io-2.0.0.jar.properties</code> to your project's libs folder.
		  
   (OR)
						
- (If user want to use realtime jar then follow the following step)						
Copy <code>Built.io-2.0.0-javadoc, Built.io-realtime-2.0.0.jar, Built.io-realtime-2.0.0.jar.properties</code> to your project's libs folder.

#####Dependencies
* android-support-v4.jar
* google-play-services_lib (You can find this library project from:- <android-sdk>/extras/google/google_play_services/libproject/google-play-services_lib/)

######for more info please refer the following links:

* http://developer.android.com/tools/support-library/index.html
* http://developer.android.com/google/play-services/setup.html

####2. If user want to use Built.io SDK along with UserInterface.

- Copy <code>Built.io_userinterface_lib</code> (You can find this library project from:- SDK/Built.io-2.0.0 UserInterface/) to your project's libs folder. It includes <code>Built.io-2.0.0-javadoc, Built.io-2.0.0.jar, Built.io-2.0.0.jar.properties</code>.

   (OR)

- (If user want to use realtime jar then follow the following step)
Replace the included 'Built.io-2.0.0.jar','Built.io-2.0.0.jar.propertie' file with Built.io-realtime-2.0.0.jar, Built.io-realtime-2.0.0.jar.properties and add there reference to build path.

* Add the library reference to your project. (your project, properties-->Android-->Add-->Select Built.io_userinterface_lib )
* android-support-v4.jar already included in library.


License
----

MIT
  
    