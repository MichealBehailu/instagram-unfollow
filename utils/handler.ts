import followers from "@/lib/data/followers.json";
import following from "@/lib/data/following.json";
import notfollower from "@/lib/data/notfollower.json";
import fs from "fs";
import path from "path";
 
export default function handler(){
  // Create a Set of follower usernames for O(1) lookup
  const followerUsernames = new Set(
    followers.map((f: any) => f.string_list_data[0]?.value)
  );
 
  const notfollowers: {title: string, link: string}[] = [];
 
  // Iterate through all people you're following
  for (const person of following.relationships_following) {
    const username = person.title;
 
    // If this person doesn't follow you back, add to list
    if (!followerUsernames.has(username)) {
      notfollowers.push({
        title: username,
        link: person.string_list_data[0]?.href || ''
      });
    }
  }
  
  //   Update the JSON file with the new data
  const updatedData = JSON.stringify([...notfollower, ...notfollowers], null, 2);
  fs.writeFileSync(path.join(process.cwd(), '/lib/data/notfollower.json'), updatedData, 'utf8');  
}