<template>
  <div class="upload-pages" style="padding: 20px;background-color:#f0f0f0;">
    <upload :action="action" />
  </div>
</template>

<script>
import Upload from '@/components/upload/Upload'
export default {
  components: {
    Upload
  },
  data () {
    return {
      action: 'http://192.168.21.48:8083/upload/file'
    }
  },
  methods: {
  }
}
</script>
