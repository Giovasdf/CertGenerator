migrate((db) => {
  const collection = new Collection({
    "id": "amxqz3wvfja5f7o",
    "created": "2023-12-26 09:47:07.612Z",
    "updated": "2023-12-26 09:47:07.612Z",
    "name": "certifications",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hrovrdke",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "cgvryyc3",
        "name": "course",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "989s3pon6bxueer",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("amxqz3wvfja5f7o");

  return dao.deleteCollection(collection);
})
