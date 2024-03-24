require('dotenv').config();
class Config {
  static getEnvVariable(name) {
    const env = process.env[name];
    if (!env) {
      throw new Error(`Variable: <${name}>  is not specified  in the ENV file`);
    }
    return env;
  }
  constructor() {
    // this.DB_URI = Config.getEnvVariable('DB_URI');
    this.BOT_TOKEN = Config.getEnvVariable('BOT_TOKEN');
    this.CLIENT_SECRET = Config.getEnvVariable('CLIENT_SECRET');
    this.CLIENT_ID = Config.getEnvVariable('CLIENT_ID');
    this.GUILDS_ID = {
      STORYRP: '1197950576772788424',
    };
  }
}
module.exports = { config: new Config() };
