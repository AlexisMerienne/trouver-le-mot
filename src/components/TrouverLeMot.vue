<template>
  <div class="main">
    <div class="description-container" shadow="">
      <h5>Cet outil permet de trouver le mot du jour du jeu motus accessible via le lien :  </h5>
      <a href="https://wordle.louan.me">https://wordle.louan.me</a>
      <h5>Cet outil est un outil de triche, il n'est pas à mettre aux mains de n'importe qui.</h5>
    </div>
    <div class="words-container" shadow="">
      <h5>Le mot du jour est : {{wordOfTheDay}}</h5>
      <div class="mot-spoil-container">
        <h5>Le mot de demain est : </h5>
        <div class="mot-spoil-gris-container">
          <h5 id="mot-spoil">{{wordOfTommorow}}</h5>
        </div>
      </div>
    </div>
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
      wordOfTommorow : '',
      today: moment(),
      tommorow : moment().add(1,'days')
    };
  },
  methods : {
    getWordOfTheDay() {
            const formatedDate = this.today.format('YYYY-M-D');
            const seed = seedrandom(formatedDate);
            const random = seed();
            console.log(random);
            console.log(Math.floor(random * (this.words.indexOf('PIZZA') + 1)));
            this.wordOfTheDay = this.words[Math.floor(random * (this.words.indexOf('PIZZA') + 1))];

            // Forcing temporaire pour éviter de changer le mot du jour de déploiement
            if (formatedDate === '2022-1-14')
                this.wordOfTheDay = 'SMURA'.split('').reverse().join('')
        },
      getWordOfTommorow() {
            const formatedDate = this.tommorow.format('YYYY-M-D');
            const seed = seedrandom(formatedDate);
            const random = seed();
            console.log(random);
            console.log(Math.floor(random * (this.words.indexOf('PIZZA') + 1)));
            this.wordOfTommorow = this.words[Math.floor(random * (this.words.indexOf('PIZZA') + 1))];

            // Forcing temporaire pour éviter de changer le mot du jour de déploiement
            if (formatedDate === '2022-1-14')
                this.wordOfTommorow = 'SMURA'.split('').reverse().join('')
        
      }
  },
  mounted(){
    this.getWordOfTheDay();
    this.getWordOfTommorow();
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
.main{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.words-container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  min-width: 250px;
  margin: 10px;
}
.description-container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  width: 30%;
  min-width: 250px;
  margin : 10px;
}
.mot-spoil-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.mot-spoil-gris-container{
  display: flex;
  flex-direction: center;
  align-items: center;
  background-color: #7c7c7c7c;
  border-radius: 2px;
  height: 20px;
  margin: 10px;
}
.mot-spoil-gris-container:hover{
  background-color: #ffffff;
}
#mot-spoil{
  color: #bfbfbf;
  
}
</style>
