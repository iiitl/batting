# Batting

BET management platform using Next.js and Tailwind CSS .
Integrated with Twilio’s SMS services.

## Deployment

To deploy this project run

To run the frontend 

```bash
  npm install 
  npm run dev
```
To run the backend 

```bash
  npm install 
  npm start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file of backend

```env
dburl="mongodb+srv://shivam:QvkgS1BU2tYCStMt@shivam.e6xu6uz.mongodb.net/betApp?retryWrites=true&w=majority"
TWILIO_ACCOUNT_SID="ACcffaf970dbdc77e7d2b49d9611f78d93"
TWILIO_AUTH_TOKEN="91f44647d92221acae6508cba924508a"
TWILIO_MESSAGING_SERVICE_ID="MGa06de2057ede4ce42dbb1ab037cc85c4"
TWILIO_ADMIN_NUMBER="+16562130651"
JWT_KEY="bets"
```
env for Frontend
```env
VITE_REACT_APP_BACKEND_URL="http://localhost:5200"

```

## Note

Login with phoneNo. +91 11111-11111
password= 123456
## Contributing

Contributions are always welcome! Happy coding!
