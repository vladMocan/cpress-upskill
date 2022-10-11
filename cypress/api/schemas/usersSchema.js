export function usersSchema(type) {
    let createUsersSchema = {
        "type": "object",
        "properties": {
          "email": {
            "type": "string"
          },
          "username": {
            "type": "string"
          },
          "address": {
            "type": "string"
          },
          "active": {
            "type": "boolean"
          },
          "id": {
            "type": "integer"
          }
        },
        "required": [
          "email",
          "username",
          "address",
          "active",
          "id"
        ]
    };

    let updateUserSchema = {
        "type": "object",
        "required": [
            "name",
            "job",
            "updatedAt"
        ],
        "properties": {
            "name": {
                "type": "string"
            },
            "job": {
                "type": "string"
            },
            "updatedAt": {
                "type": "string"
            }
        },
        "additionalProperties": true
    };
    switch (type) {
        case "create":
            return createUsersSchema;
        case "update":
            return updateUserSchema;
    }
}
