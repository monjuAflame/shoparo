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



Vuejs Full-Stack Course (AWS / Firebase) Build E-Commerce Website
17 - Let's Build E Commerce Website with Vuejs and Firebase
18 - How to Add Bootstrap 4 to Vuejs CLI Projects
19 - Bootstrap 4 Navigation as Vuejs Component
20 - Designing Fron-end Page of E-Commerce Website in Vuejs Application and Firebase



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

27. Delete_Product_with_Vue-Firestore_Using_Sweet_Alert
28. Editing_Product_with_Single_Modal_Window_in_Vuejs_and_Firestore
29. How_to_Use_Quill_WYSIWYG_Edit_in_Vue_js_with_Image_Uploading
30. Seperate_Tags_by_Comma_Aumaticailly_Using_Events_in_Vuejs
31. How_to_Upload_Image_in_Firebase_Step_by_Step
32. Upload_Mulitple_Images_for_Product_in_Vue_and_Firebase
33. How_Delete_Image_From_DownloadURL_in_Firebase_and_vuejs
34. Finalize_Product_Page_with_Fixing_Important_Issues
35. User_Profile_page_in_Firebase_and_Firebase_Admin_API_Intro_with_Vuejs
36. Get_Current_User_Login_User__Information_in_Profile_Page_Firebase_and_Vuejs
37. Let's_Complete_User_Profile_Update_in_Firebase_and_Vuejs
38. Reset_Password_Using_Email_Firebase_and_Vuejs
39. Review_Products_Page_and_Fix_All_the_Issues_In_Firebase_and_Vuejs
40. Creating_Order_Page_in_2_Minutes_Vuejs_and_Firebase
41. 5_Best_Vuejs_Image_Slider_Product_Image_Slider
42. Change_Dollar_to_Cent_Using_Vue_Filters_in_Vue_Firebase_app
43. Creating_Add_To_Cart_Component_in_Vuejs_and_Firebase
44. Vuex_-Understand_and_Configure_the_Easy_Way
45. What's_Vuex_Mutation_Add_to_Cart_Example
46. Shopping_Cart_with_Vuex_and_Vuejs_Firebase
47. Add_Product_To_Cart_Without_Duplicating_the_Current_Product_in_Vuejs
48. Shopping_Checkout_Page_with_Vue_and_Firebase
49. Cart_Persistent_in_Vuex_Vuejs_and_Firebase
50. Remove_Item_From_Cart_in_Vuex_and_LocalStorage

51. How_Stripe_Payment_works_with_Firebase_and_Vuejs
52. Deploy_your_Existing_Vuejs_App_to_Firebase_and_Firebase_tools
53. How_to_Deploy_New_Vuejs_App_to_Firebase
54. Firebase_Cloud_Functions_and_Nodejs_Code_with_Vuejs
