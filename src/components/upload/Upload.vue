<template>
  <div class="dv-upload">
    <div class="dv-upload-btn" @click="handlerClick">
        <slot name="upload">
          <i class="upload-btn iconfont icon-add"/>
        </slot>
        <input class="dv-upload-input" type="file" :accept="accept" :multiple="multiple" ref="input" @change="onChange">
    </div>
    <upload-list v-for="(item, index) in fileList" :file="item" :key="index">
    </upload-list>
  </div>
</template>

<script>
import UploadList from '@/components/upload/UploadList'
import {ajax} from '@/components/upload/ajax'
import mixin from './mixin'

export default {
  name: 'dv-upload',
  components: {
    UploadList
  },
  mixins: [mixin],
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
    maxSize: {
      type: Number,
      default: 1024 * 6
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
      if (!files) {
        return
      }
      this.addFiles(files)
      this.uploadFiles(files)
    },
    addFiles (files) {
      const length = files.length
      for (let i = 0; i < length; i++) {
        if (files[i]) {
          console.log('size:', files[i].size)
          files[i].url = URL.createObjectURL(files[i])
          this.fileList.push(files[i])
        }
      }
    },
    uploadFiles (files) {
      let filesList = Array.of(files)
      // console.log(filesList)
      if (!this.multiple) {
        filesList = Array.of(filesList[0])
      }
      if (filesList.length === 0) {
        return
      }
      console.log(filesList)
      filesList.forEach(file => {
        this.upload(file)
      })
    },
    upload (file) {
      console.log(file)
      console.log(file.size)
      console.log(this.maxSize * 1024)
      if (file.size > this.maxSize * 1024) {
        console.log('文件尺寸过大')
        return false
      }
      this.post(file)
    },
    post (file) {
      console.log('ajax')
      ajax({
        action: this.action,
        headers: this.headers,
        data: file,
        onProgress: this.handlerProgress,
        onSuccess: this.handlerSuccess,
        onError: this.handlerError
      })
    },
    handlerProgress (e) {
      console.log(e.percent)
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
    }
  }
}
</script>
