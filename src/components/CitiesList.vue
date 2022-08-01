<template>
  <div>
    <div v-for="city in cities" :key="city.name">
      <City :name="city.name" :weather="city.weather" :temperature="city.temperature" :updatedAt="city.updatedAt"/>
    </div>
  </div>
</template>

<script>
import City from "@/components/City";

export default {
  name : "Cities-list",
  components: {
    City
  },
  data() {
    return {
      cities: [
        {
          id: 1,
          name: 'Gotham City',
          weather: 'Tout est noir par ici',
          temperature: 20.55,
          updatedAt: new Date("2018-09-22T15:00:00")
        },
        {
          id: 2,
          name: "Chicagre",
          weather: "Il fait trop chaud pour travailler",
          temperature: 35,
          updatedAt: new Date()
        },
        {
          id: 3,
          name: "Tataouine",
          weather: "C'est le désert féro",
          temperature: 1000,
          updatedAt: new Date()
        }
      ]
    }
  }
}

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
