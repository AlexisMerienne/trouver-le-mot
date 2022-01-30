<template>
  <div class="main">
    <div class="'some-space" style="width:100%;height:60px"></div>
    <div class="description-container">
      <div class="text-description">
        <h5>Cet outil permet de trouver le mot du jour du jeu motus accessible via le lien :  </h5>
        <a href="https://wordle.louan.me">https://wordle.louan.me</a>
        <h5>Cet outil est un outil de triche, il n'est pas à mettre aux mains de n'importe qui.</h5>
      </div>
    </div>
    <div id='flip-card' class="flip-card">
      <div id='flip-card-container' class="flip-card-container">
        <div class="word-card-container" v-on:click="rotate()">
          <h5>Clique ici pour découvrir le mot du jour</h5>
        </div>
        <div id="words-container" class="words-container" v-on:click="rotateback()">
          <h5>Le mot du jour est : {{wordOfTheDay}}</h5>
          <div class='definition-button' v-on:click="goToDefinition()">
            <h5>Definition</h5>
          </div>
          <div class="mot-spoil-container">
            <h5>Le mot de demain est : </h5>
            <div class="mot-spoil-gris-container">
              <h5 id="mot-spoil">{{wordOfTommorow}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="'definition" v-if="showdefinition">
      <Definition v-bind:mot="wordOfTheDay"></Definition>
    </div>
  </div>
</template>
<script>

import * as seedrandom from 'seedrandom';
import moment from 'moment-timezone';
import listemot from '../data/listemot.json';

import Definition from './Definition.vue';

export default {
  name: 'TrouverLeMot',
  components : {
    Definition
  },
  data() {
    return {
      words : listemot.liste,
      wordOfTheDay : '',
      wordOfTommorow : '',
      today: moment(),
      tommorow : moment().add(1,'days'),
      showdefinition : false,
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
        
      },
      rotate() {
      
        //document.getElementById('flip-card').style.transform = "rotateY(180deg)";
        document.getElementById('flip-card-container').style.transform = "rotateY(180deg)";
        
      },
      rotateback(){
        document.getElementById('flip-card').style.transform = "rotateY(0deg)";
        document.getElementById('flip-card-container').style.transform = "rotateY(0deg)";
      },
      goToDefinition(){
        this.showdefinition = true;
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
  height: 100%;
  width: 100%;
}
.description-container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 7px;
  margin: 10px;
  width: 35%;
  min-width: 250px;
  margin : 10px;
}
.text-description{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  margin: 20px;

}
.flip-card{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 35%;
  min-width: 250px;
  height : 150px;
  margin: 10px;
  background-color: transparent;
  border-radius: 7px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}
.flip-card-container{
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover {
  cursor: pointer;
}

.word-card-container, .words-container {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}
.word-card-container{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}
.words-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  transform: rotateY(180deg);
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
.definition-button{
  display: flex;
  justify-content: center;
  align-items: center;
  border : solid;
  border-color: #7c7c7c7c;
  border-radius: 7px;
  width: 30%;
  height: 10%;
  background-color: white;
}
.definition-button:hover{
  background-color: lightgrey;
}

.mot-spoil-gris-container:hover{
  background-color: #ffffff;
}
#mot-spoil{
  color: #bfbfbf;
  
}
</style>
