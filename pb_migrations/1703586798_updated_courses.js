migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("989s3pon6bxueer")

  // remove
  collection.schema.removeField("gjfjpoqi")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("989s3pon6bxueer")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gjfjpoqi",
    "name": "dateCompletion",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
