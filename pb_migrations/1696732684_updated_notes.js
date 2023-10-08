/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l4djc6olnvaqt4f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0on3fqup",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l4djc6olnvaqt4f")

  // remove
  collection.schema.removeField("0on3fqup")

  return dao.saveCollection(collection)
})
