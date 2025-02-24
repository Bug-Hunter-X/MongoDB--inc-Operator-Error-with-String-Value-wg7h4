```javascript
// Correct usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id": ObjectId("someObjectId")}, {"$inc": {"counter": 1}});
```