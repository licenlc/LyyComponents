<template>
  <div class="upload-pages" style="padding: 20px;background-color:#f0f0f0;">
    <upload :action="action" :multiple="true"/>
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
      action: 'http://jsonplaceholder.typicode.com/photos/'
    }
  },
  methods: {
  }
}
</script>
