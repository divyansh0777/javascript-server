import { VersionableSchema } from "./../versionable/VersionableSchema";

export class UserSchema extends VersionableSchema {

  constructor(options: any) {
    const USchema = {
      age: Number,
      email: {type: String, required: true},
      name: String,
      password: {type: String, required: true},
      role: String
      };

    super(USchema, options);
  }
}
