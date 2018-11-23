const getError = (action, options, xhr) => {
  let msg = `fail to post ${action} ${xhr.status}`
  let error = new Error(msg)
  error.status = xhr.status
  error.action = action
  error.method = 'post'
  error.url = action
  return error
}

const getBody = (xhr) => {
  const text = xhr.responseText || xhr.response
  if (!text) {
    return text
  }
  try {
    return JSON.stringify(text)
  } catch (e) {
    return text
  }
}

export const ajax = (options = {}) => {
  if (typeof XMLHttpRequest === 'undefined') {
    console.error('cant not get XMLHttpRequest Object')
    return
  }
  let xhr = new XMLHttpRequest()
  const action = options.action
  if (xhr.upload) {
    xhr.upload.onprogress = (e) => {
      if (e.total > 0) {
        e.percent = (e.loaded / e.total).toFixed(2) * 100
      }
      options.onProgress(e)
    }
  }

  const formData = new FormData()
  if (options.data) {
    Object.keys(options.data).map(key => {
      formData.append(key, options.data[key])
    })
  }
  formData.append(options.filename, options.file)

  xhr.onerror = (e) => {
    options.onError(e)
  }

  xhr.onload = () => {
    if (xhr.status < 200 || xhr.status > 300) {
      return options.onError(getError(action, options, xhr), getBody(xhr))
    }
    options.onSuccess(getBody(xhr))
  }
  xhr.open('post', action, true)

  if (options.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true
  }

  const headers = options.headers || {}
  for (let key in headers) {
    if (Headers.hasOwnProperty(key) && headers[key] !== null) {
      xhr.setRequestHeader(key, headers[key])
    }
  }
  xhr.send(formData)
}
