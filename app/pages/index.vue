<template>
  <section>
    <h1 class="header">Japan Photo Map</h1>
    <JapanMap prefectureColor="#ffffff"  />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { State } from "vuex-class"
import { Person } from "~/types"
import JapanMap from '~/components/JapanMap.vue'

@Component({
  components: {
    JapanMap
  }
})
export default class extends Vue {
  @State people!: Person;

  async created() {
    const response = await this.$axios.$get("http://localhost:4000/api/");
    console.log(response);
  }
}
</script>

<style scoped>
.header {
  color: white;
}

</style>
