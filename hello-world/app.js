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
    }
  }

})
