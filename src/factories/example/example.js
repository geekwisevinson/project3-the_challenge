class FactoryExample {
  constructor() {
    this.value = 'hi';
  }
  echo(value) { // eslint-disable-line
    return value;
  }
  getvalue() {
    return this.value;
  }
}

export default FactoryExample;
