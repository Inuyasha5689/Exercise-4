new Vue({
  el: '#exercise',
  data: {
    class1: 'shrink',
    class3: 'salmon',
    class41: true,
    class42: '',
    counter: 0,
    color: 'orange',
    width: 100,
    isVisible: false,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'gray'
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
      var  progress = setInterval(function () {
          if(vm.counter < 9){
            vm.counter += 1;
            vm.width += 100;
            console.log(vm.width);
          } else {
            clearInterval(progress);
            console.log('exited interval');
          }
        
      }, 3000);
    }
  }
});
