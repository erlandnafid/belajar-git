<template>
  <div>
    <v-row class="mt-5" no-gutters>
      <v-col cols="12" xs="12" sm="6" md="4" v-for="(car, index) in cars.message" :key="index">
        <v-card :loading="loading" class="mx-auto my-2" max-width="374">
          <v-img height="250" :src="car.images"></v-img>

          <v-card-title>{{car.model}}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>

            <div>
              <p class="mb-0 mt-3">Brand: {{car.brand}}</p>
              <p class="mb-0">Model: {{car.model}}</p>
              <p class="mb-0">Variant: {{car.variant}}</p>
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <div class="overline text-right mt-3 pr-4">Mulai dari</div>
          <v-card-title class="justify-end pt-0">Rp. {{car.price}}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  // inject: ['theme'],
  data: () => ({
    loading: false,
    selection: 1,
    cars: []
  }),

  // async asyncData({ $axios }) {
  //   const cars = await $axios.$get(
  //     'https://webbe.mobilkamu.com/filter?by=new-arrival&page=1'
  //   )
  //   return { cars }
  // },

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    fetchSomething() {
      this.loading = true
      const carsData = this.$axios.$get(
        'https://webbe.mobilkamu.com/filter?by=new-arrival&page=1'
      )

      carsData.then(res => {
        this.loading = false
        this.cars = res
      })

      carsData.catch(err => {
        this.loading = false
        console.error(err, 'this is error')
      })
    }
  },
  mounted() {
    // this.reserve()
    this.fetchSomething()
  }
}
</script>
