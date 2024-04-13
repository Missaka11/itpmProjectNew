const { MongoClient } = require('mongodb');

async function main() {
   
    const uri = "mongodb+srv:<username>:<password>@<your-cluster-url>/sample_mflix?retryWrites=true&w=majority";

  
    const client = new MongoClient(uri);

    const userName = "Ned Stark"
    const newEmail = "nedstark@gmail.com"

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        //user and comments collection
        users = client.db("sample_mflix").collection("users")
        comments = client.db("sample_mflix").collection("comments")

        //check if the user to be updated exists
        const filteredName = await users.find({name:userName})
        if ((await filteredName.count()) === 0) {
            console.log("No user found!");
          }
        
        //update email in the users collection
        userUpdate = await users.updateOne(
            { name: `${userName}`},
            { $set: { email: newEmail } },
          );
        console.log(`Updated ${userUpdate.modifiedCount} documents in users collections`);
        
        //update email in the comments collection
        commentUpdate = await comments.updateMany(
            { name: `${userName}`},
            { $set: { email: newEmail } },
        );

        console.log(`Updated ${commentUpdate.modifiedCount} documents in comments collections`);


        } catch (err) {
          console.error(`Something went wrong: ${err}`);
        }
        finally {
        await client.close();
        }
    }

main().catch(console.error);