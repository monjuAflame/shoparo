<template>
  <div class="product">
   <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-6">
              <div class="hero-content">
                <h1 class="hero-title">
                  Product
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam voluptates ut 
                </p>
              </div>
            </div>
            <div class="col-md-6">
                <div class="graphic">
                    <img src="/img/svg/products.svg" alt="">
                </div>
            </div>
          </div>
          <h3>Basic CRUD firebase</h3>
          <div class="product-test">
            <div class="form-group">
              <input type="text" placeholder="Name" v-model="product.name" class="form-control">
            </div>
            <div class="form-group">
              <input type="text" placeholder="Price" v-model="product.price" class="form-control">
            </div>
            <div class="form-group">
              <button class="btn btn-primary" @click="saveData()">Save</button>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table">
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Modyfy</th>
              </tr>
              <tr v-for="product in products">

                <td>{{ product.data().name }}</td>
                <td>{{ product.data().price }}</td>
                <td>
                  <button class="btn btn-primary" @click="editModal(product)">Edit</button>
                  <button class="btn btn-danger" @click="deleteData(product.id)">Delete</button>
                </td>

              </tr>
            </table>
          </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="editTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="editTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="product-test">
                  <div class="form-group">
                    <input type="text" placeholder="Name" v-model="product.name" class="form-control">
                  </div>
                  <div class="form-group">
                    <input type="text" placeholder="Price" v-model="product.price" class="form-control">
                  </div>
                  <div class="form-group">
                    <button class="btn btn-primary" @click="saveData()">Save</button>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" @click="updateData()" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>

import {fb,db} from "../firebase";

export default {
  name: "Product",
  props: {
    msg: String
  },
  data(){
    return {
      products:[],
      product: {

        name:null,
        price:null

      },
      activeItem:null
    }
  },
  methods:{
    watcher(){
      //realtime
      db.collection("products").onSnapshot((querySnapshot) => {
            this.products = [];
            querySnapshot.forEach((doc) => {
                this.products.push(doc);
            });
        });
    },
    updateData(){
        db.collection("products").doc(this.activeItem).update(this.product)
        .then(() => {
           $('#edit').modal('hide');
           this.watcher();
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    },
    editModal(product){
      $('#edit').modal('show');
      this.product = product.data();
      this.activeItem = product.id;
    },
    deleteData(doc){
      if (confirm('Are you sure ?')) {
        db.collection("products").doc(doc).delete().then(() => {
            console.log("Document successfully deleted!");
            this.readData();
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
      } else {

      }
    },
    readData(){
      db.collection("products").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            // this.products.push(doc.data());   
            this.products.push(doc); // for update & delete
        });
      });
    },
    saveData(){
      db.collection("products").add(this.product)
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.readData();
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
    },
    reset(){
      // Object.assign(this.$data, this.$options.data.apply(this));
    }
  },
  created(){
    this.readData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product{
    padding-top: 4rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }
  .graphic img {
    height: 100%;
    width: 100%;
}
</style>
