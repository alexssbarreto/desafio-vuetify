import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import axios from 'axios'

@Module({
  namespaced: true
})
export default class Chat extends VuexModule {
  messages = []

  users = []
  user = 0

  @Mutation
  setMessages (messages: []): void {
    this.messages = messages
  }

  @Mutation
  setMessage (message: any): void {
    this.messages.push(message)
  }

  @Mutation
  setUsers (users: []) {
    this.users = users
  }

  @Mutation
  setUser (user: number): void {
    this.user = user
  }

  @Action({ commit: 'setMessage' })
  message (message: any) {
    return message
  }

  @Action({ commit: 'setUsers' })
  async fetchUsers () {
    return await axios.get('http://localhost/api/users')
      .then(res => res.data)
  }

  @Action({ commit: 'setUser' })
  async activeUser (user: number) {
    return user
  }

  @Action({ commit: 'setMessages' })
  async fetchMessages () {
    return await axios.get('http://localhost/api/messages')
      .then(res => res.data)
  }

  @Action
  async sendMessage (payload: any): void {
    await axios.post('http://localhost/api/messages', payload)
      .then(res => res.data)
  }

  // const reponset = await axios.get()....
  // response.data
  // or
  // (await axios.get('kkk')).data
}
