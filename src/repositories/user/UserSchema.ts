import { VersionableSchema } from "./../versionable/VersionableSchema";

export class UserSchema extends VersionableSchema {

  constructor(Options: any) {
    const USchema = {
      age: Number,
      email: {type: String, unique: true, required: true},
      image: Object,
      name: String,
      password: {type: String, required: true},
      role: String
      };

    super(USchema, Options);
  }
}
