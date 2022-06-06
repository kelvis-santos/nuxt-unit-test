<template>
  <form id="app" @submit="checkForm" action="javascript:void(0);" method="post">
    <div class="login-container">
      <div class="login-form">
        <div v-if="error.length">
          <div
            class="login-form-error"
            role="alert"
            v-for="(errorMsg, index) in error"
            :key="index"
          >
            {{ errorMsg }}
          </div>
        </div>
        <input
          id="email"
          class="login-form-input"
          type="email"
          placeholder="E-mail..."
          v-model="email"
        />
        <input
          id="password"
          class="login-form-input"
          type="password"
          placeholder="Password..."
          v-model="password"
        />

        <button class="login-form-button" type="submit">Login</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      email: null,
      password: null,
      error: [],
    };
  },

  methods: {
    checkForm() {
      this.error = [];

      if (!this.email) {
        this.error.push("Email is required");
      }

      if (!this.password) {
        this.error.push("Password is required");
      }

      console.log("Login", this.email, this.password, this.error);
      if (this.error.length) {
        setTimeout(() => {
          this.error = [];
          console.log(`error reset: ${this.error}`);
        }, 4000);
        return;
      }

      this.$router.push("/main");
    },
  },
};
</script>
<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #232931;
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  padding: 20px;
  width: 85%;
  border: 1px solid #4ecca3;
  box-shadow: 3px 3px 3px #4ecca3;
  background-color: #393e46;
}
.login-form-input {
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #eeeeee;
  color: black;
  border: 1px solid #4ecca3;
}

.login-form-input:focus {
  outline: none;
}

.login-form-button {
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #4ecca3;
  color: black;
  border: 1px solid #4ecca3;
}

.login-form-error {
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #232931;
  border: 1px solid #fc5e3a;
  box-shadow: #fc5e3a 0px 0px 3px 2px;
  text-align: center;
  color: #fc5e3a;
}
</style>
