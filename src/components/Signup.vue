<template>
  <div class="signup-form">
    <div class="signup-form_container">
      <form class="" method="post">
        <input class="is-size-5" type="email" name="" placeholder="Мой email">
        <input @click.stop.prevent="submit()" class="is-size-5" type="submit" name="" value="Попробуем">
      </form>
    </div>
    <div class="signup-form_privacy ">
      Регистрируясь, вы даёте согласие на обработку ваших персональных данных
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  methods: {
    submit(){
      this.$router.push("/?"+this.foobar);
    }
  }
}
</script>

<style lang="scss">
  form {
    display: flex;
  }
  .signup-form_container {
    display: inline-block;
    border-radius: 100px;
    overflow: hidden;
    box-shadow: 0 0 20px #eaeaea;
    transition: .2s !important;
    &:hover {
      box-shadow: 0 0 6px #eaeaea;
    }
  }
  .signup-form input[type="email"] {
    border: 0;
    padding: 1rem 2rem;
    width: 100%;
  }
  .signup-form input[type="submit"] {
    border-radius: 100px;
    border: 0;
    background: #78E5AE;
    font-weight: 500;
    color: #000;
    padding: 1rem 2rem;
    transition: .2s;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
  .signup-form_privacy {
    color: gray;
    font-size: 0.8rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 568px) {
    .signup-form input[type="email"] {
      font-size: 16px !important;
    }
    .signup-form input[type="submit"] {
      font-size: 16px !important;
    }
  }
</style>
