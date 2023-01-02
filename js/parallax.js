/**
 * Parallax Object controls transformation animations based on the window scroll
 */

var ParallaxEffect = function (selector) {
    var element = document.querySelectorAll(selector);
    if (element) {
      this.elemSelector = element;
    }
    this.winScroll = window.pageYOffset || document.documentElement.scrollTop;
    this.init();
  };
  ParallaxEffect.prototype.init = function () {
    if (this.elemSelector) {
      for (var i = 0; i < this.elemSelector.length; i++) {
        var currentElement = this.elemSelector[i];
  
        var elemRateX = this.elemAttribute(currentElement, "data-rateX");
        var elemRateY = this.elemAttribute(currentElement, "data-rateY");
        var elemDirection = this.elemAttribute(currentElement, "data-direction");
  
        var rateX = this.winScroll * elemRateX;
        var rateY = this.winScroll * elemRateY;
  
        var isElementInView = this.checkViewport(currentElement);
        if (isElementInView) {
          this.applyParallax(currentElement, elemDirection, rateX, rateY);
        } else {
          this.applyParallax(currentElement, elemDirection, 0, 0);
        }
      }
    }
  };
  ParallaxEffect.prototype.elemAttribute = function (element, attribute) {
    if (element.getAttribute(attribute) !== null) {
      var elemAttribute = element.getAttribute(attribute);
      return elemAttribute;
    } else {
      return "0";
    }
  };
  ParallaxEffect.prototype.checkViewport = function (element) {
    var bounds = element.getBoundingClientRect();
    var elemTop = bounds.top;
    var elemBottom = bounds.bottom;
  
    var pageTop = elemTop + window.innerHeight * (50 / 100);
    if (pageTop >= 0 && elemBottom <= window.innerHeight) {
      return true;
    }
  };
  ParallaxEffect.prototype.applyParallax = function (
    nodeElement,
    direction,
    rateX,
    rateY
  ) {
    if (direction === "vertical") {
      nodeElement.style.setProperty(
        "-webkit-transform",
        "translate3d(" + rateX + "px," + rateY + "px,0)"
      );
      nodeElement.style.setProperty(
        "-ms-transform",
        "translate3d(" + rateX + "px," + rateY + "px,0)"
      );
      nodeElement.style.setProperty(
        "-moz-transform",
        "translate3d(" + rateX + "px," + rateY + "px,0)"
      );
      nodeElement.style.setProperty(
        "transform",
        "translate3d(" + rateX + "px," + rateY + "px,0)"
      );
      nodeElement.style.setProperty("-webkit-transition", "all 0.5s linear");
      nodeElement.style.setProperty("transition", "all 0.5s linear");
    }
  
    if (direction === "horizontal") {
      nodeElement.style.setProperty(
        "-webkit-transform",
        "translate3d(" + rateX + "px," + rateY + "px,0)"
      );
      nodeElement.style.setProperty(
        "-ms-transform",
        "translate3d(" + rateX + "px," + rateY + "px,0)"
      );
      nodeElement.style.setProperty(
        "-moz-transform",
        "translate3d(" + rateX + "px," + rateY + "px,0)"
      );
      nodeElement.style.setProperty(
        "transform",
        "translate3d(" + rateX + "px," + rateY + "px,0)"
      );
      nodeElement.style.setProperty("-webkit-transition", "all 0.5s linear");
      nodeElement.style.setProperty("transition", "all 0.5s linear");
    }
  };