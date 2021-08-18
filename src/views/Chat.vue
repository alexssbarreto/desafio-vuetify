<template>
   <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-text>
              <v-row dense v-for="(item, index) in allMessages" :key="index" class="ma-0">
                <v-col dense>
                  <v-card class="items" color="#ECEFF1">
                    <v-card-text>
                      <p class="font-weight-black">{{ item.user.name }}</p>
                      <p v-html="item.message"></p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-text>
              <template>
                <v-form v-model="valid" ref="form" lazy-validation @submit.prevent="send">
                  <v-text-field
                    placeholder="Message"
                    v-model="message"
                    required
                    autofocus
                    outlined
                    append-icon="mdi-send"
                    class="mx-auto"
                  ></v-text-field>
                </v-form>
              </template>
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
export default class Chat extends Vue {
  valid = false
  message = ''

  @Get('chat/messages') allMessages!: []
  @Get('chat/user') user
  @Call('chat/message') setMessage!: (message: string) => any
  @Call('chat/fetchMessages') fetchMessages!: () => any
  @Call('chat/sendMessage') sendMessage

  mounted () {
    // window.Echo.channel("messages").listen(".message.created", (e) => {
    //     this.messages.push(e.message);
    // });
    this.$echo.channel('channel-chat')
      .listen('.chat-receveid', (event) => {
        // const result = JSON.parse(event.message)
        this.setMessage(event.message)
      })
  }

  created () {
    this.fetchMessages()
  }

  send (): void {
    const payload = {
      user_id: this.user,
      message: this.message
    }

    this.sendMessage(payload).then(res => { this.message = '' })
  }
}
</script>

<style scoped>
.items {
  padding: 0;
  margin: 0;
}
</style>
