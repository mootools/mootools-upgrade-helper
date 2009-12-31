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

You can change this by just changing the *MooTools.upgradeLogLevel* value, like so:

	MooTools.upgradeLogLevel = 'none';

If you include that instruction before you include your site code, all the warnings will be suppressed.

Breaking Changes in MooTools 1.1 > 1.2
--------------------------------------

Below are the breaking changes between 1.1 and 1.2 that the upgrade helper / compatibility script cannot work around. Most of these changes are not likely to affect you.

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

* Array:
  * The *copy* method is deprecated; use the native *splice* method.
  * *remove* from 1.1 is deprecated; use *erase*.
  * *merge* from 1.1 is deprecated; use *combine*.
* Function:
  * The *bindAsEventListener* method is deprecated; use *bindWithEvent*.
  * *Function.empty* is deprecated; use *$empty*.
* Hash:
  * The *keys* method is now *getKeys*.
  * The *values* method is now *getValues*.
  * The *hasKey* method is now *has*.
  * The *merge* method is now *extend*.
  * The *remove* method is now *erase*.
* *Object.toQueryString* is deprecated in favor of *Hash.toQueryString*.
* The *Abstract* class is deprecated in favor of *Hash*.
* Element:
  * *getFormElements* is deprecated, use *getElements('input, textarea, select')*.
  * *replaceWith* is deprecated, use *replaces*
  * *remove* is deprecated, use *dispose*
  * *getText* and *setText* are now *get('text')* and *set('text', {text})*
  * *setHTML* is deprecated, use *set('html', {html})*
  * *getTag* is now *get('tag')*
  * *getValue* and *setValue* are now *get('value')* and *set('value', {value})*; also, they no longer do anything but return the value property of an element; getting, for example, the selected radio button from a group of them is not something it does.
  * *toQueryString* is slightly different; inputs without names are excluded, inputs with type == submit, reset, and file are excluded, and inputs with undefined values are excluded.
  * *set* has changed; in 1.1 you could call *element.set({properties: {src: someURL}})* for example; you no longer need that nested *properties* object, just *element.set({src: someURL})*. Additionally, you could set "styles" but this is now "style" (and it must always be an object; 1.1 would accept a cssStyle string).
  * *setOpacity* is deprecated; use *setStyle*
  * the *Event.Keys* object on the *Event* namespaces in 1.1 is now *Event.keys*
  * *getSize* no longer returns values for size, scroll, and scrollSize, but instead just returns x/y values for the dimensions (width/height) of the element.
  * *getPosition* and *getCoordinates* no longer accept an array of overflown elements but rather, optionally, a single element to get relative coordinates.
* Class:
  * *Class.empty* in 1.1 is just *$empty* in 1.2.
  * *Class.extend* in 1.1 is accomplished by using the *Extends* mutator in 1.2.
  * *Class.implement* in 1.1 is accomplished by using the *Implements* mutator in 1.2.
* Fx:
  * the *custom* method in 1.1 is now *start*
  * *clearTimer* is now *cancel*
  * *stop* is now *cancel*
  * *Fx.Base* in 1.1 is now just *Fx*
  * *Fx.Style* from 1.1 is now *Fx.Tween* and has a slightly different syntax for its usage
  * *Fx.Styles* from 1.1 is now *Fx.Morph*
  * *Fx.Scroll* no longer has a *scrollTo* method in 1.2; us its *start* method instead
  * *Element.effect* is now *Element.tween*, but unlike the former, the latter returns the element, starting the effect, while in 1.1 *Element.effect* returned an *Fx* instance to you. This is not a simple search and replace.
  * Likewise, *Element.effects* is now *Element.morph* but it doesn't return an *Fx* instance but rather runs the effect.
  * You no longer specify the property to alter in the *Fx.Tween* (previously *Fx.Style*) constructor but rather pass it to the *start* and *set* methods along with the values.
* Request:
  * Both *XHR* and *Ajax* are deprecated; use the new *Request* family of classes. Their syntax is familiar, but not synonymous.
  * *Element.send* no longer takes an options object but rather a url as its only argument.
  * *Json.Remote* id deprecated; use *Request.JSON*.
* Cookie:
  * The *get*, *set*, and *remove* methods from 1.1 are now *read*, *write*, and *dispose*, respectively.
* JSON:
  * The *toString* and *evaluate* methods are deprecated in favor of *encode* and *decode*, respectively.
* Selectors:
  * The element methods *getElementsByClassName* and *getElementsBySelector* are both deprecated in favor of *getElements*.
  * *Elements.filterByTag*, *filterByClass*, *filterById*, and *filterByAttribute* are all deprecated in favor of *filter*.
  * *$E* is deprecated in favor of *document.getElement*. *$ES* is deprecated in favor of *element.getElements*.
* Tips:
  * Tips are altered such that the DOM structure of the tip elements themselves are different with different class names. This will require you to update your CSS a bit.
  * Tips no longer take an *offsets* option but rather an *offset* option (that does the same thing).
  * Tips no longer parse the *title* attributes of elements, splitting the value on "::" for title/caption but instead use either DOM storage to set them or use the *title* and *rel* tags respectively.
* Drag:
  * Drag.Move handles droppables differently, firing events on the class rather than the elements.
* Accordion:
  * *Accordion* is now *Fx.Accordion*
  * It no longer takes a *container* arguments, and it's *addSection* method no longer injects the added item into the DOM for you.
* SmoothScroll:
  * *SmoothScroll* is now *Fx.SmoothScroll*


