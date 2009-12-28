Compatibility
=============

MooTools features a compatibility / upgrade helper script that helps you migrate from version to version. This script cannot fix everything, however, and therefore there are some breaking changes. Some of these are minor and will likely not affect you. Others are more troublesome if you are using the features that they affect.

Using the Upgrade Helper
------------------------

MooTools provides an upgrade helper that allows code written for 1.1 to run with MooTools 1.2. This is not really meant to be a compatibility script so much as a script designed to help you migrate your code. In almost all cases methods that have been deprecated or have had their API altered will provide feedback to the console when they are called. This feedback is designed to help you find the places in your code that need updating. Ideally, developers will put this script into their environment with MooTools 1.2, use their application and change all the calls that throw these warnings, then remove the upgrade helper from their environment.

To use the script, simply replace MooTools 1.1 with MooTools 1.2, then include the upgrade helper, then include your sites code. Browse your site with a browser that provides a console API (we recommend [Firebug](http://getfirebug.com)) and take note of the warnings thrown. Address these in your code base until you cannot find any more, then remove the upgrade helper.

### Upgrade Helper Logging Options

The upgrade helper has three logging options: "error", "warn", and "none".

The "warn" option is the default, which just logs messages to the console when deprecated methods are used. This uses the *console.warn* method.

The "error" option uses the *console.error* method which, in Firebug at least, provides a stack trace and the ability to set a break point. This can be helpful in finding the errant line in your code.

The "none" option hides all warnings. This essentially means you are using the upgrade helper as a compatibility script. It is not really recommended.

Breaking Changes in MooTools 1.1 > 1.2
--------------------------------------

Below are the breaking changes between 1.1 and 1.2 that the upgrade helper / compatibility script cannot work around. Most of these changes are not likely to affect you.

* *$type(NaN)* returns "number" in 1.1; returns *false* in 1.2.
* *$type(window)* returns "object" in 1.1; returns "window" in 1.2.
* *$type(document)* returns "object" in 1.1; returns "document" in 1.2.
* *$type(hash)* returns "object" in 1.1; returns "hash" in 1.2.
* *"ILikeCookies".hyphenate()* returns "i-like-cookies" in 1.1; returns "-i-like-cookies" in 1.2.
* Element positioning is handled differently and more accurately in 1.2 and will likely return slightly different results than in 1.1 in some cases. Typically these differences cancel each other out, as you are passing the positioning values into other MooTools methods to set the position in some fashion. Theoretically, the more accurate and reliable positioning code should improve your results, but if you have code in place to deal with 1.1's deficiencies then you may find yourself with mixed results.
* In many cases methods that returned *null* now return *false* or vice versa. For example, *Cookie.get* returns *null* in 1.2 and *false* in 1.1 while *Function.attempt* returns *false* in 1.2 but *null* in 1.1.
* Both Element.getCoordinates and Element.getPosition no longer take as their only argument an array of overflown (scrolled) elements for computing position but instead take a single element to get position values relative to. This change, in theory, won't affect your code, as the overflown elements your 1.11 code passes in are ignored, and the methods themselves find these overflown parents for you.
* Native objects (*String*, *Function*, etc) in 1.1 have an *extend* method that allows you to add properties to their prototypes. In 1.2, this method is called *implement* and *extend* does something different. In 1.2, *String.extend*, for example, adds properties to the *String* namespace, but not to all strings (i.e. it does not alter the *String* prototype). The compatibility layer only warns you that your call to extend.

Changes in MooTools 1.1 > 1.2
-----------------------------

Below are a list of all the changes in 1.1 that you should address in upgrading to 1.2. All of these items below are addressed in the upgrade helper / compatibility script. Unlike the breaking changes, these changes are not required for your site to work with 1.2 if you include the upgrade helper.

* *$A* no longer takes 3 arguments in 1.2; it only takes an iterable object.
* *window* no longer has browser information (for example. *window.ie* in 1.1 is determined in 1.2 by the conditional "Browser.Engine.name == 'trident'").
* *Class.empty* in 1.1 is just *$empty* in 1.2.
* *Class.extend* in 1.1 is accomplished by using the *Extends* mutator in 1.2.
* *Class.implement* in 1.1 is accomplished by using the *Implements* mutator in 1.2.
* Element:
** *getFormElements* is deprecated, use *getElements('input, textarea, select')*.
** 
