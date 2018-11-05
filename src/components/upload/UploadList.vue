<template>
  <div class="dv-file-list">
    <slot>
      <div class="upload-file" :style="fileStyle">
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'upload-file-list',
  porps: {
    file: {
      type: Object,
      required: true
    }
  },
  computed: {
    fileStyle () {
      const url = this.file.url || this.file.base64
      if (!url) {
        return
      }
      return {
        'background-image': `url(${url})`
      }
    }
  },
  methods: {
    removeFile () {
      this.$emit('on-remove', this.file)
    }
  },
  watch: {
    file (value) {
      console.log(value)
    }
  }
}
</script>
