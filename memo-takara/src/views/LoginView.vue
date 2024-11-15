<template>
  <div className="login-container">
    <div className="login-header">Welcome back! Please enter your details.</div>

    <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a-form-item name="remember" no-style>
          <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>

        <a class="login-form-forgot login-link" href="">Forgot password?</a>
      </a-form-item>

      <a-form-item class="login-btn-switch">
        <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
          Log in
        </a-button>
        Or
        <a class="login-link" href="/">register now!</a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
const formState = reactive({
  username: '',
  password: '',
  remember: true,
})
const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
const disabled = computed(() => {
  return !(formState.username && formState.password)
})
</script>

<style scoped>
@media (min-width: 1024px) {
  .login-container {
    display: flex;
    flex-direction: column;
    height: 70vh;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
}

.login-container {
  background-color: var(--color-background-light);
  width: 100vw;
  padding: 20%;
}

.login-header {
  text-align: center;
  font-size: var(--font-size-text-header1);
  font-weight: var(--header-weight-size);
  margin-bottom: 15%;
}

.login-form-forgot {
  color: var(--color-text-hide);
  margin-left: 15%;
}

.login-btn-switch {
  text-align: center;
}

.login-link {
  text-decoration: underline;
}

.login-link:hover {
  background-color: var(--color-background-light);
}

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
