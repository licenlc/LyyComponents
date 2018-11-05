<template>
  <div class="upload-pages">
    <upload :action="action"/>
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
