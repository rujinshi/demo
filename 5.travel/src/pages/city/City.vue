<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <!-- 向子组件传递值 -->
    <city-list
    :cities="cities"
    :hot="hotCities"
    :letter="letter"
    ></city-list>
    <!-- 监听Alphabet组件上传的信息 -->
    <city-alphabet
     :cities="cities"
     @change="handleLetterChange"
     ></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    // 需要向子组件传递的值
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}

</script>
<style lang="stylus" scoped>

</style>
