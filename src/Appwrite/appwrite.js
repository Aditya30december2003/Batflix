import { Client, Account, ID , Databases } from "appwrite";

const client = new Client()
client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('65c8c8f7b0ab7ee3f85f');               // Your project ID

export const account = new Account(client);

export { ID } from 'appwrite';

export const database = new Databases(client , "65c8cb386eecbf1d842f")