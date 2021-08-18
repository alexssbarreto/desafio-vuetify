<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <User />
        <pre>{{ msg }}</pre>
        <pre>{{ defaultName }}</pre>
        <pre>{{ nameComputed }}</pre>
        <v-btn color="success" @click="clickMe()">Click me</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import User from '@/components/User.vue'

@Component({
  components: {
    User
  }
})
export default class HelloWorld extends Vue {
  // structure in props to components
  @Prop() readonly msg!: string
  @Prop({ required: false, type: String, default: 'Prop default' }) readonly defaultName!: string

  mounted () {
    console.log('mounted')
  }

  created () {
    console.log('created')
  }

  // declaration of data in vue
  private name = 'HelloWorld'

  // declaration of computed data: in getName()
  get nameComputed (): string {
    return this.name
  }

  // declaration of computed data: in setName()
  set nameComputed (newName: string) {
    this.name = newName
  }

  private ecosystem = [
    {
      text: 'vuetify-loader',
      href: 'https://github.com/vuetifyjs/vuetify-loader'
    },
    {
      text: 'github',
      href: 'https://github.com/vuetifyjs/vuetify'
    },
    {
      text: 'awesome-vuetify',
      href: 'https://github.com/vuetifyjs/awesome-vuetify'
    }
  ]

  private importantLinks = [
    {
      text: 'Documentation',
      href: 'https://vuetifyjs.com'
    },
    {
      text: 'Chat',
      href: 'https://community.vuetifyjs.com'
    }
  ]

  private whatsNext = [
    {
      text: 'Explore components',
      href: 'https://vuetifyjs.com/components/api-explorer'
    }
  ]

  // declaration of methods in vue
  public clickMe (): void {
    this.nameComputed = 'new name HelloWordk: computed'

    this.addToCount(1)
  }

  // private count = 0

  // @Sync('user/decr') count!: number

  @Emit()
  addToCount (n: number): number {
    return n
  }
}
</script>
