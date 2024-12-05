// src/appwrite.js
import { Client, Account, Databases } from "appwrite";

const client = new Client();
const account = new Account(client);
const databases = new Databases(client);

client
  .setEndpoint("http://localhost/v1") // Your Appwrite server URL
  .setProject("PROJECT_ID"); // Your project ID

export { account, databases };
