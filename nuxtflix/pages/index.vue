<template>
  <div>
    <div class="hero-section">
      <Header />
      <div class="hero-section__welcome z-10 border-b-8 border-gray-800">
        <div>
          <div class="container">
            <div class="forms">
              <div class="form login">
                <div class="title-container">
                  <span id="sig" class="title">Sign in</span>
                  <div class="imgbosch"></div>
                </div>
                <form @submit.prevent="enviarLogin">
                  <div class="input-field">
                    <input
                      type="text"
                      placeholder="Entre com seu e-mail"
                      v-model="email"
                      required
                    />
                    <i class="uil uil-envelope icon"></i>
                  </div>
                  <div class="input-field">
                    <input
                      type="password"
                      class="password"
                      placeholder="Entre com sua senha"
                      v-model="senha"
                      required
                    />
                    <i class="uil uil-lock icon"></i>
                    <i class="uil uil-eye-slash showHidePw"></i>
                  </div>

                  <div class="input-field button">
                    <input type="submit" value="Sign in" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        class="
          absolute
          top-0
          left-0
          right-0
          bottom-0
          h-full
          object-cover
          w-full
        "
        src="/images/hero-banner.jpg"
      />
      <div class="image_overlay"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapActions, mapGetters } from 'vuex'
import { mapState } from 'vuex'

export default defineComponent({
  data() {
    return {
      email: '',
      senha: '',
    }
  },
  name: 'IndexPage',
  setup() {},
  methods: {
    async enviarLogin() {
      const responseToken = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email: this.email,
          password: this.senha,
        }),
      })
      const token = await responseToken.json()
      console.log(token.jwt)
      try {
        const response = await fetch('http://127.0.0.1:8000/api/user/', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        })
        const content = await response.json()
        console.log(content)
        if (content.detail == 'Deslogado!') {
          console.log('deu errado')
        } else {
          this.$store.commit('STORE_SESSION', content)
          this.$store.commit('STORE_TOKEN', token.jwt)
          console.log('deu certo')
        }
      } catch (e) {}
      // this.syncDelay(5000)
      // this.$router.go("/");
      this.$router.push({ path: '/' })
    },
  },
  computed: {
    ...mapState({
      user_session: (state) => state.user_session,
      token: (state) => state.token,
    }),
  },
})
</script>
<style lang="scss" scoped>
.form .button {
  margin-top: 35px;
}
.container .forms{

    align-items: center;
    height: 440px;
    width: 100%;
    transition: height 0.2s ease;
}
.form .button input {
  border: none;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 6px;
  background-color: #ff0000;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form .title-container .imgbosch {
  content: '';
  height: 5.5px;
  width: 150px;
  border-radius: 2px;
}

.form .input-field {
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 30px;
}

.input-field input {
  position: absolute;
  background: rgba(26, 25, 25, 0.89);
  height: 100%;
  width: 100%;
  padding: 0 35px;
  border: none;
  outline: none;
  font-size: 16px;
  border-bottom: 2px solid rgb(0, 0, 0);
  border-top: 2px solid transparent;
  transition: all 0.2s ease;
}

.input-field input:is(:focus, :valid) {
  border-bottom-color: #ff0000;
}

.input-field i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 23px;
  transition: all 0.2s ease;
}

.input-field input:is(:focus, :valid) ~ i {
  color: #ff0000;
}

.input-field i.icon {
  left: 0;
}
.input-field i.showHidePw {
  right: 0;
  cursor: pointer;
  padding: 10px;
}
#sig {
  padding-right: 100px;
  font-size: 25px;
  font-weight: bold;
}
.form .text {
  color: rgb(0, 0, 0);
  font-size: 14px;
}

.form .input-field {
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 30px;
}
.hero-section {
  position: relative;
  .image_overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  &__welcome {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    text-align: center;
    position: relative;
    height: 500px;
    @media screen and (max-width: 768px) {
      height: 512px;
      background-position: center top;
    }
    @media screen and (min-width: 991px) {
      height: 700px;
      background-position: center top;
    }
    h1 {
      font-size: 3.125rem;
      font-weight: bold;
      line-height: 1.1;
      max-width: 640px;
      margin: 0 auto;
    }
    p {
      font-size: 23px;
      font-weight: lighter;
      max-width: 540px;
      margin: auto;
      padding: 15px 0;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }
    .master {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ebebeb;
    }
    .container {
      position: relative;
      max-width: 430px;
      width: 100%;
      background: rgb(0, 0, 0);
      opacity: 0.7;
      border-radius: 10px;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      margin: 0 20px;
    }

    .container .forms {
      display: flex;
      align-items: center;
      height: 440px;
      width: 200%;
      transition: height 0.2s ease;
    }

    .container .form {
      width: 50%;
      padding: 30px;
      background-color: rgb(0, 0, 0);
      transition: margin-left 0.18s ease;
    }
  }
}
</style>
