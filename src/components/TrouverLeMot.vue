<template>
  <div class="hello">
    <h5>Le mot du jour est : {{wordOfTheDay}}</h5>
  </div>
</template>

<script>

import * as seedrandom from 'seedrandom';
import moment from 'moment-timezone';
import listemot from '../data/listemot.json';

export default {
  name: 'TrouverLeMot',
  data() {
    return {
      words : listemot.liste,
      wordOfTheDay : '',
      today: moment(),
    };
  },
  methods : {
    getWordOfTheDay() {
            const formatedDate = this.today.format('YYYY-M-D');
            const seed = seedrandom(formatedDate);
            const random = seed();
            this.wordOfTheDay = this.words[Math.floor(random * (this.words.indexOf('PIZZA') + 1))];

            // Forcing temporaire pour éviter de changer le mot du jour de déploiement
            if (formatedDate === '2022-1-14')
                this.wordOfTheDay = 'SMURA'.split('').reverse().join('')
        },
  },
  mounted(){
    this.getWordOfTheDay();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
