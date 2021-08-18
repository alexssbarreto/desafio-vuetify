<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card shaped class="mx-auto" max-width="400">
          <v-card-text>z
            <v-subheader class="center-text">Fale com a turma</v-subheader>
            <v-list>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(item, i) in users"
                  :key="i"
                  @click="onItemClick(item.id)"
                >
                  <v-list-item-avatar>
                      <v-img
                        :src="`/img/${item.photo}`"
                        :alt="item.name"
                      />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.email"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Get, Call } from 'vuex-pathify'

@Component
export default class Card extends Vue {
  @Get('chat/users') users
  @Call('chat/fetchUsers') fetchUsers
  @Call('chat/activeUser') activeUser

  created () {
    this.fetchUsers()
  }

  public onItemClick (user: number): void {
    this.activeUser(user)
    this.$router.push({ name: 'chat' })
  }
}
</script>
