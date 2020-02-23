<template>
  <div class="home">
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: 'foo'
    }
  },
  mounted() {
    //'https://wu62p3f4x6.execute-api.us-west-2.amazonaws.com/stage/user?id=101'
    axios
      // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .get(
        // 'https://api.coindesk.com/v1/bpi/currentprice.json'
        'https://wu62p3f4x6.execute-api.us-west-2.amazonaws.com/stage/user?id=101',
        { crossdomain: true }
      )
      .then(response => (this.msg = 'welcome:' + response.data.Item.name))
  }
}
</script>
