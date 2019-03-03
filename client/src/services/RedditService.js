import Api from '@/services/Api'

export default {
  getTopPosts (params) {
    return Api().get('/')
  }
}
