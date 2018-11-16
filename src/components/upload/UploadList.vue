<template>
  <div class="dv-file-list">
    <slot>
      <i class="upload-reomve" @click="removeFile"></i>
      <img :src="file.url" class="upload-file">
      <div class="dv-upload-state">
        <span class="upload-process">100%</span>
        <i class="upload-state-icon"></i>
      </div>
    </slot>
  </div>
</template>

<script>
import mixin from './mixin'

export default {
  name: 'upload-file-list',
  mixins: [mixin],
  props: {
    file: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeFile () {
      this.$emit('on-remove', this.file)
    }
  }
}
</script>
