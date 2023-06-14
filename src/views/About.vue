<template>
  <div>
    <h3>About</h3>
    <h3 @click="add">count: {{ getCount }}</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'About',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['getCount'])
  },
  methods: {
    ...mapActions(['add'])
  }
}
</script>

<style lang="stylus" scoped>
h3
  color: blue
</style>
