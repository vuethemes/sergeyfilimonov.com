<template>
  <footer class="section">
		<div class="container has-text-centered">
			<p style="margin-bottom: 0 !important;">
        <i class="fas fa-code-branch"></i>
        <a
        href="https://github.com/sergeyfilimonov/sergeyfilimonov.com"
        target="_blank">sergeyfilimonov.com</a>
      </p>
      <p style="opacity: 0.5;">Обновление <code>{{commit.hash}}</code> {{ago}} {{days}} назад</p>
		</div>
	</footer>
</template>

<script>
export default {
  data() {
    return {
  	  commit: {
        hash: '04b1fd2',
        date: '20190303'
      }
    }
  },
  computed: {
    ago() {
      var today = new Date()
      var dd = today.getDate()
      var mm = today.getMonth() + 1

      var yyyy = today.getFullYear()
      if (dd < 10) {
        dd = '0' + dd
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      var today = yyyy + mm + dd

      return today - this.commit.date
    },
    days() {
      return this.ago === 1 || this.ago === 21
      ? 'день'
      : this.ago === 2 || this.ago === 3
      ? 'дня'
      : 'дней'
    }
  }
}
</script>
