# Backbone Easing

A View that has an interface for easing.js tweens. The loop is run by using requestAnimationFrame.

## Dependencies

* [Easing.js](https://github.com/danro/easing-js)
* [Tick](https://github.com/makesites/tick)


## Examples

...


## Install

Using bower
```
bower install backbone.easing
```


## Usage

This view is meant to be used as a basis for other applications. For example:

* [Backbone.UI: Anchor](https://github.com/backbone-ui/anchor)


## Options


* **targetEl**: (default: "body" ), the element that will be targeted for the transition
* **ease**: (default: "easeFrom" ), the ease function to be used. [List of supported easing functions at Easing.js](https://github.com/danro/easing-js)


## Methods

### Public methods

Override these methods for your cstom application

* transitionData: Initializing the dataset (on transition start)
* transitionPos: A set/get method that returns the current position of the animated element

### Protected methods

These methods are not meant to be edited in most cases:

* transitionStart: triggered when the animation is starting
* transition: triggered on every loop cycle
* transitionEnd: triggered once at the end of the animcation


## Showcase

A few of the sites using this open source:

...


## Credits

Initiated by Makis Tracend ( [@tracend](http://github.com/tracend) )

Distributed through [Makesites.org](http://makesites.org)


## License

Released under the [MIT license](http://makesites.org/licenses/MIT)
