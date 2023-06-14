<template>
  <div>
    <h3>Home</h3>
    <h3>count: {{ getCount }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['getCount'])
  }
}
</script>

<style lang="stylus" scoped>

</style>
