<template>
  <div>
    <header class="row" v-if="login">
      <h1 class="login__text">Account Login</h1>
      <form>
          <div class="row">
            <div class="input__element__container">
              <input class="u-full-width" type="email" placeholder="Email" id="login_email">
              <input class="u-full-width" type="password" placeholder="Password" id="login_password">
            </div>
          </div>
          <button>Submit</button>
        </form>
      <hr class="auth_page_hr"/>
      <p>Don't have an account? <a href='' @click.prevent="toggle">Register</a></p>
    </header>

    <header class="row" v-if="register">
      <h1 class="login__text">Account Signup</h1>
      <form>
          <div class="row">
            <div class="input__element__container">
              <input class="u-full-width" type="email" placeholder="Email" id="register_email">
              <input class="u-full-width" type="password" placeholder="Password" id="register_password">
              <input class="u-full-width" type="password" placeholder="Password" id="register_password_confirmation">
            </div>
          </div>
          <button>Submit</button>
        </form>
      <hr class="auth_page_hr"/>
      <p>Already have an account? <a href="" @click.prevent="toggle">Login</a></p>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Authenticate',
  data() {
    return {
      login: this.$router.history.current.query.q == 'login',
      register: this.$router.history.current.query.q == 'register'
    }
  },
  methods: {
    toggle() {
      this.login ? this.login = false : this.login = true
      this.register ? this.register = false : this.register = true
    }
  },
  beforeMount() {
    console.log(this.$router.history.current.query)
  }
}
</script>
