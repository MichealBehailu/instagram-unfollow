'use server'

import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

export async function removeUser(username: string) { //to handle the read and write for the json file
  const filePath = path.join(process.cwd(), 'lib/data/notfollower.json');
  const data = fs.readFileSync(filePath, 'utf8');
  let notfollowers = JSON.parse(data);
  notfollowers = notfollowers.filter((user: any) => user.title !== username);
  fs.writeFileSync(filePath, JSON.stringify(notfollowers, null, 2));
}


