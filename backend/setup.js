db.createUser(
{
    user: "jesus",
    pwd: "jesus",
    roles: [
      { role: "readWrite", db: "upload-images" }
    ]
})
