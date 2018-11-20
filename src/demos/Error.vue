<template>
  <div>
      <div class="demo-title">
        Error
      </div>
      <ul>
        <li class="demo-list" @click="defaultToast">默认toast</li>
      </ul>
  </div>
</template>

<script>

export default {
  methods: {
    defaultToast () {
      let a = {a: [], b: null}
      this.$toast('默认toa水电费是范德萨的ddgdfgdfgdgd发生水电费水电费是st', 'dkdk')
      throw new Error()
      for (const key in a) {
        a[key].indexOf('a')
        console.log(a[key].indexOf('a'))
      }
    }
  }
}
</script>
