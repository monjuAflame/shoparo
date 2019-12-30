<template>
  <div class="add-to-cart">
   
    
   <a href="#" class="btn btn-primary" @click="miniCart">Add To Cart</a>
    
  </div>
</template>

<script>
export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    pId: String,
    image: String
  },
  data(){
  	return{
  		iTem:{
  			productName: this.name,
            productImage: this.image,
            productPrice: this.price,
            productId: this.pId,
            productQuantity: 1,
  		}
  	}
  },
  methods:{
  	miniCart(){
  		$('#miniCart').modal('show');
  		this.$store.commit('addToCart', this.iTem);
  	}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
