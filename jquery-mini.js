(function() {




var jQuery = function(selector) {
  return new jQuery.fn.init(selector);  
}

jQuery.fn = {

  init: function(selector) {

    if (!selector) {
      return this;
    }

    if (typeof selector === 'function') {
      selector();
    }

    else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this;
    }

    else {
      return jQuery(document).find(selector);
    }
  },

  find: function(selector) {
    var elements = document.querySelectorAll(selector);
    var jQuryObject = jQuery();

    for (var i = 0; i < elements.length; i++) {
      jQuryObject[i] = elements[i];
    }

    jQuryObject.length = elements.length;

    return jQuryObject;
  },

  text: function(str) {
    if (str) {
      this.each(function(elem) {
        elem.textContent = str;
      });
      return this;
    } else {
      var str = '';
      this.each(function(elem) {
        str += elem.textContent;
      });
      return str;
    }
  },

  addClass: function(className) {
    this.each(function(elem) {
      elem.classList.add(className);
    });
    return this;
  },

  each: function(fn) {
    for (var i = 0; i < this.length; i++) {
      fn(this[i]);
    }
    return this;
  },

  children: function() {
    var elements = this[0].childNodes;
    var jQuryObject = jQuery();

    for (var i = 0, j = 0; i < elements.length; i++) {
      if (elements[i].nodeType === 1) {
        jQuryObject[j++] = elements[i];  
      }
    }

    jQuryObject.length = j;

    return jQuryObject;
  },

  on: function(event, fn) {
    this.each(function(elem) {
      elem.addEventListener(event, fn);
    });
  }
}

jQuery.extend = jQuery.fn.extend = function(target, options) {
  var copy, src;

  // extend self
  if (options) {
    target = target || {};
  }

  // extend self
  else {
    options = target;
    target = this;
  }

  for ( name in options ) {
    src = target[name];
    copy = options[name];

    if (src === copy) {
      continue;
    }

    if (copy !== undefined) {
      target[name] = copy;  
    }
  }

  return target;
}

jQuery.extend({
  isFunction: function( obj ) {
    return jQuery.type( obj ) === "function";
  },
  isArray: Array.isArray,
  ajax: function() {

  }
});


jQuery.fn.init.prototype = jQuery.fn;

window.$ = jQuery;

jQuery.fn.changeText = function() {
  this.text('text changed')
}



})();