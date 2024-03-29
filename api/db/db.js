import admin from "firebase-admin";
import 'dotenv/config'
const serviceAccount = {
    "type": process.env.TYPE,
    "project_id": process.env.PROJECT_ID,
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": process.env.PRIVATE_KEY,
    "client_email": process.env.CLIENT_EMAIL,
    "client_id": process.env.CLIENT_ID,
    "auth_uri": process.env.AUTH_URI,
    "token_uri": process.env.TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.AUTH_CERT,
    "client_x509_cert_url": process.env.CLIENT_CERT,
    "universe_domain": process.env.DOMAIN
}

console.log(process.env.PROJECT_ID, " cred")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sinuous-aviary-388305-default-rtdb.firebaseio.com"
});

export const db = admin.firestore();
