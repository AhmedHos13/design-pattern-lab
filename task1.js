class AuthModule {
  token() {
    return "shmfosdjjioqjoahdoo123odsdl@j";
  }
}
class Validate extends AuthModule {
  token() {
    return "sdkap211r2prddsa,zxckjwn@dk";
  }
  validate() {
    console.log("Logged in");
  }
}
class ValidateDb extends AuthModule {
  token() {
    return "Adfmldkap2asdgkmkw12jwn@dk";
  }
  validate() {
    console.log("run Successgully");
  }
}
const USER_VALID = new Validate();
USER_VALID.token();
const DB_VALID = new Validate();
DB_VALID.token();
