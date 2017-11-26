new Vue({
  el: '#app',
  data: {
    name: 'Sattar',
    elements: []
  },
  methods: {
    changeName: function() {
      this.name = 'Ali'
    },
    addElement: function() {
      this.elements.push(this.elements.length + 1)
    },
    getColor: function(number) {
      return number % 2 === 0 ? 'green' : 'red'
    }
  }

})
