<template>
  <div class="details">
    component user
    {{ userComputed }}
    {{ objectTest }}

        <v-btn small elevation="1" color="warning">Click Test</v-btn>

    <!-- <div class="username">User: {{ nameUpperCase }}</div> -->
    <!-- <input :value="name" @keydown="updateName($event.target.value)" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { namespace } from 'vuex-class'

import { Get } from 'vuex-pathify'

// const user = namespace('user')

@Component
export default class User extends Vue {
  @Get('user/counter') userComputed!: number
  @Get('user/objectTest@sort.name') objectTest!: number

  // @Sync('user/updateCounter') updateCounter: Function

  // format in call vuex
  // @Call('admin/updateStats') readonly updateStats!: Function;
  //     this.updateResult();

  // format in action
  // @Action
  // async updateStats() {
}
</script>
