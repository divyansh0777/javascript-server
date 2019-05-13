import * as mongoose from "mongoose";

export class VersionableSchema extends mongoose.Schema {
  constructor(baseSchema, Options: any) {
    const versionSchema = {
      ...baseSchema,
      createdAt: { type: Date, default: Date.now},
      modifiedAt: {type: Date, default: Date.now},
      };

    super(versionSchema, Options);
  }
}
