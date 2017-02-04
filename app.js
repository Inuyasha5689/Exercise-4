new Vue({
  el: '#exercise',
  data: {
    class1: 'shrink',
    class3: 'salmon',
    class41: true,
    class42: 'enlarge',
    counter: 0,
    color: 'orange',
    width: 100
  },
  computed: {
    myColor: function () {
      return {
        backgroundColor: this.color
      };
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function () {
        if(vm.class1 == 'highlight'){
          vm.class1 = 'shrink';
        } else {
          vm.class1 = 'highlight';
        }
      }, 3000);
      console.log('interval');
    },
    startProgress: function() {
      var vm = this;
      console.log('hello');

      if(vm.counter < 9)
      setInterval(function () {
        for(i =0; i<= 10; i++) {
          console.log(vm.color);
          if(vm.counter < 9){
            vm.counter += 1;
            vm.width += 100;
            console.log(vm.width);
          }
        }
      }, 3000);
    }
  }
});
