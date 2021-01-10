const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    // Iterates over a collection of elements, passing each element in turn to a callback function. Each invocation of callback is called with three arguments: (element, index, collection). If collection is a JavaScript object, callback's arguments will be (value, key, collection). Returns the original collection for chaining.


    each: function(collection, callback) {
      for (const key in collection) {
        callback(collection[key], key, collection)
      }
      
      return collection
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
