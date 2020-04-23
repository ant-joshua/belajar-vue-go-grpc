<template>
    <div>
        mantul
    </div>
</template>
<script>
import Category from '../../services/category.js'
let initCategory = new Category()
export default {
  data () {
    return {}
  },
  mounted () {
    this.getAll()
  },
  methods: {
    async getAll () {
      let data = await initCategory.getAll()
      console.log(data)
    //   const form = this.$refs.form
    //   form.validate().then(async success => {
    //     if (success) {
    //       try {
    //         await this.$service.account.create(this.user)
    //         this.$q.notify({
    //           color: 'green-8',
    //           message: 'Thanks for your register. You can do login now.'
    //         })
    //         this.$router.push({ name: 'login' })
    //       } catch (err) {
    //         this.$publish(events.DIALOG_ERROR, err)
    //       }
    //     }
    //   })
    }
  }
}
</script>
