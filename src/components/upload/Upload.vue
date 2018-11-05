<template>
  <div class="dv-upload">
    <div class="dv-upload-btn" @click="handlerClick">
        <slot name="upload">
          <i class="upload-btn iconfont icon-add"/>
        </slot>
        <input class="dv-upload-input" type="file" :multiple="multiple" ref="input" @change="onChange">
    </div>
    <upload-list v-for="(file, index) in fileList" :file="file" :key="index" @on-file-remove="handlerRemove"/>
  </div>
</template>

<script>
import UploadList from '@/components/upload/UploadList'
import {ajax} from '@/components/upload/ajax'

export default {
  name: 'dv-upload',
  components: {
    UploadList
  },
  props: {
    action: {
      type: String,
      required: true
    },
    headers: {
      type: Object,
      default: () => {
        return {}
      }
    },
    multiple: {
      type: Boolean,
      default: true
    },
    maxSize: {
      type: Number
    }
  },
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    handlerClick () {
      this.$refs.input.click()
    },
    onChange (e) {
      const files = e.target.files
      console.log(files, Object.prototype.toString.call(files))
      if (!files) {
        return
      }
      // this.addFiles(files)
      this.uploadFiles(files)
    },
    addFiles (files) {
      const length = files.length
      const newFiles = []
      for (let i = 0; i < length; i++) {
        if (files[i]) {
          console.log('addFiles', files[i])
          this.fileList.push(files[i])
        }
      }
    },
    handlerProgress () {
      this.$emit('on-progress')
    },
    handlerSuccess () {
      this.$emit('on-success')
      console.log('success')
    },
    handlerError () {
      console.log('on-error')
      this.$emit('on-error')
    },
    handlerRemove (file) {
      const fileList = this.fileList
      fileList.splice(fileList.indexOf(file), 1)
      this.$emit('on-remove', file, fileList)
    },
    uploadFiles (files) {
      console.log('upload')
      let filesList = Array.of(files)
      if (!this.multiple) {
        filesList = Array.of(filesList[0])
      }
      if (filesList.length === 0) {
        return
      }
      filesList.forEach(file => {
        this.upload(file)
      })
    },
    upload (file) {
      this.post(file)
      console.log('Object:', Object.prototype.toString.call(file))
    },
    post (file) {
      ajax({
        action: this.action,
        headers: this.headers,
        data: file,
        onProgress: () => {
        },
        onSuccess: () => {
          this.handlerSuccess()
        },
        onError: () => {
          this.handlerError()
        }
      })
      console.log('post')
    }
  }
}
</script>
