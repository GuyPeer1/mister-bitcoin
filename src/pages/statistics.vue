<template>
  <article className="wrapper full main-layout">
    <h2>Stats</h2>
    <div v-if="chartData">
      <LineChart v-if="loaded" :data="chartData" />
    </div>
  </article>
</template>

<script>
import lineChart from "../cmps/chart-js.vue";
import { bitService } from "@/services/bitService.js";

export default {
  data() {
    return {
      loaded: false,
      chartData: null,
    };
  },
  async created() {
    try {
      const btcData = await bitService.getMarketPriceHistory();
      this.chartData = btcData;
      this.loaded = true;
      console.log(this.btcData)

    } catch (err) {
      console.log("problem with bithistory import", err);
    }
  },
  components: {
     LineChart: lineChart,
  },
};
</script>
