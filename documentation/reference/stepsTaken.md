//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////   import json file data in mongodb collectin     /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

# 1. make sure mongoimport.exe exists in the bin folder 

   # C:\Program Files\MongoDB\Server\7.0\bin

mongoimport.exe should be present in bin folder where mongod and mongos exist,
Download *MongoDB Command Line Database Tools Download* to get mongoimport, then put it in bin folder of MongoDB

# 2. create connection URI here
   #  https://cloud.mongodb.com/v2/658b1bbc5738194909ebdd02#/overview

   mongodb+srv://mongoroot:<password>@cluster0.asglspa.mongodb.net/?retryWrites=true&w=majority
   mongodb+srv://mongoroot:mongoroot@cluster0.asglspa.mongodb.net/?retryWrites=true&w=majority

   # once connection URI is made, make this
      1. mongoimport --db dataviz --collection datas --file file/path/to/jsondata.json --jsonArray --uri "mongodb+srv://mongoroot:mongoroot@cluster0.asglspa.mongodb.net/?retryWrites=true&w=majority"

# 3. open cmd in the same dir where the json data(data.json) exists and paste above mongoimport stmt

      C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\DataVisualizationDashboard finale>mongoimport --db dataviz --collection datas --file jsondata.json --jsonArray --uri "mongodb+srv://mongoroot:mongoroot@cluster0.asglspa.mongodb.net/?retryWrites=true&w=majority"
      
      2023-12-29T15:46:15.183+0530    connected to: mongodb+srv://[**REDACTED**]@cluster0.asglspa.mongodb.net/?retryWrites=true&w=majority
      2023-12-29T15:46:18.195+0530    [########################] dataviz.datas        829KB/829KB (100.0%)
      2023-12-29T15:46:20.519+0530    [########################] dataviz.datas        829KB/829KB (100.0%)
      2023-12-29T15:46:20.521+0530    1000 document(s) imported successfully. 0 document(s) failed to import.

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  read mongo database    ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

# 1. C:\Program Files\MongoDB\Server\7.0\bin

   go here, run mongosh directly by double clicking it and then paste in fornt of it the connection uri
   mongodb+srv://mongoroot:mongoroot@cluster0.asglspa.mongodb.net/?retryWrites=true&w=majority

    AND WE"RE IN

   # Potential errors in above step:

      https://cloud.mongodb.com/v2/658b1bbc5738194909ebdd02#/security/network/accessList

      Add your current IP address

      Current IP Address (49.32.164.174/32) added!
      Visit Network Access to modify your settings.

      49.32.135.111/32 	My IP Address	
      49.32.142.138/32 		
      49.32.164.174/32
      49.32.147.171/32  (includes your current IP address)		
      49.32.135.72/32

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////







//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////    Overall project setup       //////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

Now that you have successfully imported your data into MongoDB, the next steps involve building a dashboard using a technology stack of your choice. Since you mentioned using the MERN stack, I'll outline the general steps you can follow:

1. **Set Up Express.js Server:**
   Ensure that your Express.js server is configured correctly. This includes setting up routes to handle requests related to your data.

2. **Build API Endpoints:**
   Implement API endpoints in your Express.js server to interact with MongoDB. These endpoints will handle CRUD operations (Create, Read, Update, Delete) for your data.

3. **Create React Frontend:**
   Develop a React.js frontend for your dashboard. Use tools like Create React App for a quick setup. Design components to display charts, graphs, and other visualizations.

4. **Fetch Data from MongoDB:**
   Use the API endpoints created in step 2 to fetch data from MongoDB. Update your React components to make API requests and display the retrieved data.

5. **Integrate D3.js for Visualization:**
   Since D3.js is recommended for creative visualizations, integrate it into your React components to create interactive charts and graphs. Explore D3.js documentation and examples to implement the visualizations you want.

6. **Implement Filtering:**
   Implement the filters mentioned in your project requirements. You can use state management libraries like Redux or context API for managing the state of filters.

7. **Styling and Layout:**
   Style your dashboard for a pleasant and user-friendly experience. You can use CSS frameworks like Bootstrap or custom styling with styled-components.

8. **Testing:**
   Test your application to ensure that data fetching, filtering, and visualizations work as expected. Consider using testing libraries like Jest for unit testing and Cypress for end-to-end testing.

9. **Deployment:**
   Prepare your application for deployment. Configure environment variables, set up a production-ready MongoDB instance, and deploy your backend and frontend to hosting platforms like Heroku or Vercel.

10. **Continuous Improvement:**
    Continue to improve and enhance your dashboard. Gather feedback, fix bugs, and add new features as needed. Consider incorporating user authentication if your project requires it.

Remember that these steps are general guidelines, and you might need to adapt them based on your specific project requirements and preferences. Additionally, you can explore additional libraries and tools that complement the MERN stack, such as Redux for state management, React Router for navigation, and other charting libraries if D3.js is too complex for your needs.


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////