var lastId = 0
function increaseId() {
  lastId = lastId+1
  console.log(lastId);
  return lastId
}

Vue.component('app-hobby', {
  props: ['hobby'],
  template: '<li @click="hobbyClicked">{{ hobby.name }}</li>',
  methods: {
  hobbyClicked: function() {
    this.$emit('hobbyclicked', this.hobby)
  }
}
})

new Vue({
  el: '#app',
  data: {
    hobbies: [
      {
        id: increaseId(),
        name: 'Learn'
      },
      {
        id: increaseId(),
        name: 'To Run'
      },
      {
        id: increaseId(),
        name: 'Play Guitar'
      },
    ],
    newHobbyName: '',
    hobbyDeleted: false
  },
  methods: {
    addHobby: function() {
      if(this.newHobbyName.trim() === '') {
        alert("Insert New Hobby")
        return
      }
      this.hobbies.push(
        {
          id: increaseId(),
          name: this.newHobbyName
        }
      )
    },
    removeHobby: function(hobby){
      for(var i = 0; i < this.hobbies.length; i++) {
        if(this.hobbies[i].id === hobby.id) {
          this.hobbies.splice(i, 1)
          this.hobbyDeleted = true
          break
        }
      }
    }
  }
})
