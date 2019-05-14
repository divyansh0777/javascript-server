export interface IConfig {
  readonly mongoUrl: string;
  readonly nodeEnv: string;
  readonly port: string;
  readonly saltPass: number;
  readonly tokenKey: string;

}
