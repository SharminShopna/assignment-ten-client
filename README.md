# EquipmentSports - Sports Equipment Online Store  

An e-commerce platform for sports accessories that allows users to browse, manage, and purchase sports equipment.  

##  Features  

1. **Responsive Design**:  
   Fully optimized for mobile, tablet, and desktop devices.  

2. **User Authentication**:  
   - Email & Password-based login and registration.  
   - OAuth integration (Google/GitHub).  
   - Persistent login on private routes after reload.  

3. **Equipment Management**:  
   - Users can add, view, update, and delete equipment.  
   - Features include customization options, stock status, and delivery time.  

4. **Sorting and Theming**:  
   - Sort products by price (ascending/descending).  
   - Toggle between Dark/Light themes on the homepage.  

5. **Error-Free Navigation**:  
   - Friendly 404 page for non-existing routes.  
   - Smooth navigation across the site with no reload errors.  

## Live Link :  

[Visit the Live Website]:  https://assignment-ten-e538a.firebaseapp.com/  

##  Technologies  :

- **Frontend**: React, Tailwind CSS, DaisyUI  
- **Backend**: Node.js, Express.js, MongoDB  
- **Hosting**: Firebase (client-side), Vercel (server-side)  
- **Authentication**: Firebase Authentication  

##  Environment Variables  

## To run this project, you will need to set up the following environment variables in a `.env` file:  

### ```env
REACT_APP_FIREBASE_API_KEY=<my_firebase_api_key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<my_firebase_auth_domain>
REACT_APP_FIREBASE_PROJECT_ID=<my_firebase_project_id>
REACT_APP_FIREBASE_STORAGE_BUCKET=<my_firebase_storage_bucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<my_firebase_messaging_sender_id>
REACT_APP_FIREBASE_APP_ID=<my_firebase_app_id>
MONGODB_URI=<my_mongodb_connection_string>

### Clone the repository:

bash
Copy code
git clone https://github.com/your-username/equisports.git
cd equisports
### Install dependencies:

bash
Copy code
npm install
Set up environment variables in a .env file.

Start the development server:

bash
Copy code
npm start
### Deployment
Client-Side: Deploy on Netlify/Firebase.
Server-Side: Deploy on Vercel.


Fork the project.
Create a new branch (git checkout -b feature/MyFeature).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature/MyFeature).