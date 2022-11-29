<template>
    <div class="city">
        <span>{{ this.city.city }}</span>
        <div class="weather">
            <span>{{ Math.round(this.city.currentWeather.current.temp_c)}} &deg;</span>
            <!-- <img :src="require(`../../public/conditions/${this.city.currentWeather.current.condition.icon}.svg `)" alt=""> -->
            <p>{{ this.city.currentWeather.current.condition.icon }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "WeatherCity",
    props: ['city'],
    created() {
        console.log(this.city);
    }
}
</script>

<style lang="scss" scoped>

</style>