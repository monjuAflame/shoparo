### shopping
E-Commerce Web App with Vuejs and Firebase


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


1. install app by vue-cli ( vue create app_name )
2. add .eslintignore
3. add bootstap (npm install bootstrap jquery popper.js --save) .npm install sass


4.
   meta: { requiresAuth: true }, = meta routes
   router.beforeEach((to, from, next) => {

    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = fb.auth().currentUser

  	  if (requiresAuth && !currentUser) {
  	      next('/')
  	  } else if (requiresAuth && currentUser) {
  	      next()
  	  } else {
  	      next()
  	  }
  	})

    const app ='';

    fb.auth().onAuthStateChanged(function(user) {
    if (!app) {
      
    }
    });

 5. sign in

  fb.auth().signInWithEmailAndPassword(this.email, this.password)
  .then(() => {
  $('#login').modal('hide')
    this.$router.replace('admin');  
  })
  .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
      } else {
          alert(errorMessage);
      }
      console.log(error);
  });







6.  Designing_Front-end_Page_of_E-Commerce_Website_in_Vuejs_Application_and_Firebase
7.  Design_Back-end_Admin_Page_for_E-Commernce_Vuejs_Project_and_Firebase
8.  Nested_Routes_in_Vuejs_and_Some_Cool_Design_Technique
9.  Prepare_Login_Modal_for_Vuejs_and_Firebase_Authentication
10. Firebase_vs_AWS_What_you_don't_know
11. Firebase_Integration_with_Vuejs
12. Create_User_with_Email_and_Password_Firebase_and_Vuejs_(Signup)
13. Logout_User_with_Firebase_and_Vuejs
14. Limited_Access_to_Admin_Area_only_for_Auth_Users_in_Vuejs_and_Firebase
15. Login_with_Email_and_Password_Firebase_and_Vuejs
16. A_Beginner_Guide_to_Firebase_Services_for_Front_end_developers
17. Understanding_NoSQL_vs_SQL_Database_Firestore_vs_MySQL
18. How_to_Add_Data_to_Firestore_(CRUD_in_Firebase_and_Vuejs)
19. How_to_Read_Data_From_Firestore_(CRUD_in_FIrebase_and_Vuejs)
20. Important_Uderstand_Firestore_Data_Structure
21. How_to_Delete_Data_in_Firestore_and_Vuejs
22. Update_Data_Firestore_and_Vuejs
23. Realtime_Update_in_Firstore_and_Vuejs
24. Understanding_E-Commerce_Platforms_for_Developers
25. How_to_Use_Vue-Firestore_(Design_the_Product_Page)
26. Read_Data_from_Firestore_with_Realtime_Database_using_Vue_firestore

