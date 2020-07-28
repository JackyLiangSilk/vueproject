<template>
  <v-app>
    <TopNav />
    <v-main class="main-content ">
      <router-view class="content-wrapper "></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    TopNav,
    Footer
  }
};
</script>

<style>

</style>
