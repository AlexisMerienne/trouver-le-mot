<template>
  <div class="main">
      Je suis dans definition
      {{this.defintion}}
  </div>
</template>
<script>

import DefinitionsService from "../services/DefinitionsService";

export default {
  name: 'TrouverLeMot',
  props : {
      mot : String,
  },
  data() {
    return {
        defintion : ''
    };
  },
  methods : {
      getDefinition(mot){
          DefinitionsService.getDefinition(mot)
            .then(response => {
                this.defintion = response;
            })
            .catch(e => {
                console.log(e);
            });

      }
  },
  mounted(){
      this.getDefinition(this.mot);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 

</style>
