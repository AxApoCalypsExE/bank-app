import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6695ed780012f4ac0482');

export const account = new Account(client);
export { ID } from 'appwrite';
