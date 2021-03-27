<template>
  <div id="app">
    <div class="container">
      <Header/>
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style scoped>
#app{
  display: flex;
  width: 100%;
  background-color: #1A252C;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding-bottom: 20px;
}

.container{
  width: 100%;
}

</style>
