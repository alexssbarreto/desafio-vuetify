import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({
  namespaced: true
})
export default class User extends VuexModule {
  count = 100
  objectTest = [
    {
      name: 'Alex Barreto',
      age: 34
    },
    {
      name: 'Thâmara Thaline',
      age: 29
    }
  ]

  get counter () {
    return this.count
  }

  @Mutation
  increment (delta: number) {
    this.count += delta
  }

  @Mutation
  setCounter (delta: number) {
    this.count = delta
  }

  @Mutation
  decremente (delta: number) {
    this.count -= delta
  }

  @Action({ commit: 'setCounter' })
  updateCounter (delta: number) {
    return delta
  }

  // @Action
  // async updateStats() {
}
