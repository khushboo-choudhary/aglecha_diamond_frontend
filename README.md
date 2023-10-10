# Aglecha Diamonds Project Explanation

### Overview
Aglecha Diamonds is a solo project focused on creating a diamond e-commerce website. The project includes various features like product listings, cart management, and a payment gateway integration using Razorpay in test mode. Additionally, the project implements sorting, filtering, debounce search, and Google Authentication for a seamless user experience.

**You can go through the whole website deployed link is —**
[https://aglecha-diamond-frontend.vercel.app/](https://aglecha-diamond-frontend.vercel.app/)

### Technologies Used
The software and tools we've used to work on the project are:
1. **Frontend:-** ReactJS, JSX, Redux, MaterialUI
2. **Backend:-** NodeJs, ExpressJs, MongoDB, Mongoose
3. **Packages:-** Bcrypt, UUID, JWT, Razorpay
4. **Tools:-** Postman, VSCode, GitHub

## Test Mode Payments method details for Razor pay

#### 1. The test card for payments
-	 Mastercard
>		CardNumber: 5267 3181 8797 5449
>		CVV: Random CVV Expiry
>		Date: Any future date

-	 Visa
>		CardNumber: 4111 1111 1111 1111
>		CVV: Random CVV Expiry
>		Date: Any future date

#### 2. UPI Method
1.Test payment success flow using
> 	### `success@razorpay.`

2.Test payment failure flow using
> 	### `failure@razorpay.`

## Implemented Features

#### 1. Sorting

Implemented sorting functionality to allow users to sort product listings based on various criteria such as price, popularity, etc.

#### 2. Filtering

Added the ability for users to filter products based on specific attributes.

#### 3. Debounce Search

Implemented debounce search for efficient and real-time search functionality, reducing unnecessary API calls and providing a smoother user search experience.

#### 4. Google Authentication

Integrated Google Authentication to allow users to log in using their Google accounts, improving the authentication process and enhancing user security.

## Project Structure and Flow

#### 1. Initialization and Planning

- Setup the project environment and defined the tech stack.
- Created a roadmap and defined tasks for each aspect of the project.

#### 2. Backend and Frontend Development

- Developed both backend and frontend components individually.
- Focused on backend development first, setting up routes, APIs, and integrating payment gateways.

#### 3. Payment Gateway Integration

- Integrated Razorpay payment gateway in test mode.
- Resolved challenges related to payment gateway documentation and implementation.

#### 4. Integration of Additional Features

- Added sorting, filtering, debounce search, and Google Authentication to enhance user interaction and security.

#### 5. Testing and Deployment

- Tested the application thoroughly, including payment flows using provided test card details and UPI methods.
- Deployed the application and resolved platform-specific issues.

## Challenge Faced

**1. Google Authentication**

- Issue with scopes and redirect URL during Google Authentication implementation.

**2. Payment Integration**

- Difficulty in establishing the connection and version compatibility during payment gateway integration.

**3. Search Functionality**

- Faced issues with debouncing search implementation while incorporating filtering functionality.

**4. Redux Implementation**

- Challenges in utilizing Redux to store and manage project data.

**5. Deployment**

- Faced various issues during the deployment process.

## Screen Shots

- #### Home Page

![home_page](https://user-images.githubusercontent.com/30701525/273791067-0307627f-3b83-47af-92bd-98c743caa67a.png)
<br/><br/>

![home_page1](https://user-images.githubusercontent.com/30701525/273791243-31eb0c8e-503e-4c94-ae46-6ed3bd66742e.png)
<br/><br/>

- #### Trending Collection

![home_page2](https://user-images.githubusercontent.com/30701525/273791396-cec3c711-6c12-4b39-bdfc-522f3c0e96b8.png)
<br/><br/>

- #### Diamonds Promises

![home_page3](https://user-images.githubusercontent.com/30701525/273791899-a3e30eae-dba1-4e72-afba-2b6859be61f8.png)
<br/><br/>

- #### Footer Page
![footer_page](https://user-images.githubusercontent.com/30701525/273792303-e95bc30f-6c78-49f7-80af-7e26877cdb3d.png)
<br/><br/>

- #### Register Page

![register_page](https://user-images.githubusercontent.com/30701525/273792498-f4bc4b92-211e-477a-b645-950aa3fb6940.png)
<br/><br/>

- #### Login Page

![login_page](https://user-images.githubusercontent.com/30701525/273792874-f367c320-5320-4e1a-a111-33834e7b908d.png)
<br/><br/>

- #### Product Page

![product_page1](https://user-images.githubusercontent.com/30701525/273793055-c374ebe4-45a0-4cf9-b5d3-34861d9d72e3.png)
<br/><br/>

![product_page2](https://user-images.githubusercontent.com/30701525/273793200-9143b073-85a4-4d5b-a3ed-ab329e83dff1.png)
<br/><br/>

![product_page3](https://user-images.githubusercontent.com/30701525/273793337-a3069cc2-edc5-4d46-aea1-65095311433f.png)
<br/><br/>

- #### Product Description Page

![product_description_page](https://user-images.githubusercontent.com/30701525/273795980-c20b2ade-f6ee-4544-b0ed-47bd8bfa2580.png)
<br/><br/>

- #### Cart Page

![cart_page](https://user-images.githubusercontent.com/30701525/273793497-f80cef2e-0a4c-4ae6-ae5b-4bb9cb138791.png)
<br/><br/>

- #### Wishlist Page

![wishlist_page](https://user-images.githubusercontent.com/30701525/273793744-e69970ea-6bc7-4bdd-abdb-8a3173791490.png)
<br/><br/>

- #### Checkout Page

![checkout_page](https://user-images.githubusercontent.com/30701525/273796104-4cae1b7c-eeec-4c61-9969-79cdb1d1f181.png)
<br/><br/>

- #### Payment Page

![payment_page](https://user-images.githubusercontent.com/30701525/273796299-72bc1924-c8d2-4586-a441-826b30eb1853.png)
<br/><br/>

- #### RazorPay Test Mode

![razorpay_page1](https://user-images.githubusercontent.com/30701525/273796518-29894167-40ee-430d-876b-007eac83e9b1.png)
<br/><br/>

![razorpay_page2](https://user-images.githubusercontent.com/30701525/273796720-e93df702-da12-430e-84c7-f811400038f5.png)
<br/><br/>

![razorpay_page3](https://user-images.githubusercontent.com/30701525/273796906-dd6bcf0d-5786-46ad-87a7-431375e6fc03.png)
<br/><br/>

![razorpay_page4](https://user-images.githubusercontent.com/30701525/273797045-59f566ea-7d0c-4dd7-bd20-f33707357887.png)
<br/><br/>

![razorpay_page5](https://user-images.githubusercontent.com/30701525/273797357-82b68153-5a3a-417b-b08d-38720ce62394.png)
<br/><br/>

- #### Success Page

![success_page](https://user-images.githubusercontent.com/30701525/273797145-3cb47f5f-55bb-42e3-805e-7dda820930dd.png)
<br/><br/>

- #### ThankYou Page

![thankyou_page](https://user-images.githubusercontent.com/30701525/273797642-8e805c40-9209-410e-85c5-9603ff744fd1.png)
<br/><br/>

- #### Failure Page

![failure_page](https://user-images.githubusercontent.com/30701525/273797906-64b46a19-c40b-4da2-80e4-e741aa71701a.png)
<br/><br/>

#### Conclusion
The Aglecha Diamonds project is a solo endeavor that successfully replicates a diamond e-commerce website, providing essential features like product listings, cart management, and a functional payment gateway using Razorpay in test mode. Additionally, the project includes sorting, filtering, debounce search, and Google Authentication to enhance user experience, engagement, and authentication security.

This summary provides an overview of the project, technologies used, payment testing methods, key implemented features, project structure, and the overall development flow.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
