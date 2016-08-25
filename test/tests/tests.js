describe('reverseString', function() {
  it('should be a function', function() {
    expect(reverseString).to.to.be.a('function');
  });
  it('should return a string', function() {
    var result = reverseString('existence');
    expect(result).to.be.a('string');
  });
  it('should reverse \'Greetings from Earth\'', function() {
    var result = reverseString('Greetings from Earth');
    expect(result).to.equal('htraE morf sgniteerG');
  });
});

describe('factorialize', function() {
  it('should be a function', function() {
    expect(factorialize).to.to.be.a('function');
  });
  it('should return a number', function() {
    var number = 5;
    var result = factorialize(number);
    expect(result).to.be.a('number');
  });
  it('find factorial of 0', function() {
    var number = 0;
    var result = factorialize(number);
    expect(result).to.eql(1);
  });
  it('find factorial of 1', function() {
    var number = 1;
    var result = factorialize(number);
    expect(result).to.eql(1);
  });
  it('find factorial of 5', function() {
    var number = 5;
    var result = factorialize(number);
    expect(result).to.eql(120);
  });
  it('find factorial of 10', function() {
    var number = 10;
    var result = factorialize(number);
    expect(result).to.eql(3628800);
  });
  it('find factorial of 20', function() {
    var number = 20;
    var result = factorialize(number);
    expect(result).to.eql(2432902008176640000);
  });
});