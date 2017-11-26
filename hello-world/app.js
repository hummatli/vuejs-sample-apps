Vue.component('app-username', {
  props: ['username'],
  data: function() {
    return {
      //username: 'Hummatli'
    }
  },
  template: '<p v-on:click="usernameClicked">{{ username }}</p>',
  methods: {
    usernameClicked: function() {
      this.$emit('usrclicked', this.username)
    }
  }
})

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
    },
    userWasClicked: function(name) {
      alert(name)
    }
  }
})

new Vue({
  el: "#app2",
  data: {
    message: "Hello there"
  }
})
